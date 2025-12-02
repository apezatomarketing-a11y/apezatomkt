# Guia de Integração Supabase - Apezato Marketing

## 📋 Índice

1. [Setup Inicial](#setup-inicial)
2. [Configuração de Variáveis de Ambiente](#configuração-de-variáveis-de-ambiente)
3. [Instalação de Dependências](#instalação-de-dependências)
4. [Autenticação](#autenticação)
5. [Operações CRUD](#operações-crud)
6. [Exemplos Práticos](#exemplos-práticos)
7. [Segurança](#segurança)

---

## Setup Inicial

### 1. Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Clique em "New Project"
3. Preencha os detalhes:
   - **Project Name:** apezato-marketing
   - **Database Password:** (gere uma senha forte)
   - **Region:** (escolha a mais próxima)
4. Clique em "Create new project"

### 2. Executar o Schema SQL

1. No Supabase Dashboard, vá para **SQL Editor**
2. Clique em **New Query**
3. Copie todo o conteúdo de `supabase-schema.sql`
4. Cole no editor
5. Clique em **Run**

### 3. Obter Credenciais

No Supabase Dashboard:
1. Vá para **Settings** → **API**
2. Copie:
   - **Project URL**
   - **Anon Public Key**
   - **Service Role Key** (mantenha seguro!)

---

## Configuração de Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Supabase
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-aqui

# Stripe (opcional)
VITE_STRIPE_PUBLIC_KEY=pk_test_...

# Email (opcional)
VITE_SENDGRID_API_KEY=SG.xxx

# Analytics (opcional)
VITE_ANALYTICS_ENDPOINT=https://...
VITE_ANALYTICS_WEBSITE_ID=xxx
```

---

## Instalação de Dependências

```bash
# Instalar Supabase
pnpm add @supabase/supabase-js

# Instalar Stripe (para pagamentos)
pnpm add @stripe/react-stripe-js stripe

# Instalar React Query (para gerenciar estado)
pnpm add @tanstack/react-query

# Instalar React Hook Form (para formulários)
pnpm add react-hook-form zod @hookform/resolvers
```

---

## Autenticação

### 1. Criar Cliente Supabase

Crie `client/src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos do banco de dados
export type User = {
  id: string
  email: string
  full_name: string
  phone?: string
  company_name?: string
  website?: string
  profile_image_url?: string
  role: 'client' | 'admin' | 'partner'
  status: 'active' | 'inactive' | 'banned'
  created_at: string
  updated_at: string
}

export type Lead = {
  id: string
  name: string
  email: string
  phone?: string
  company_name?: string
  website?: string
  budget_range?: string
  message?: string
  source: 'contact-form' | 'chat' | 'landing-page'
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'rejected'
  assigned_to?: string
  created_at: string
  updated_at: string
  notes?: string
}

export type Product = {
  id: string
  name: string
  slug: string
  description?: string
  long_description?: string
  category: 'ebook' | 'consultoria' | 'template' | 'material-rico'
  price?: number
  price_currency: string
  image_url?: string
  is_free: boolean
  is_active: boolean
  download_url?: string
  stripe_product_id?: string
  created_at: string
  updated_at: string
}

export type Order = {
  id: string
  user_id: string
  total_amount: number
  currency: string
  status: 'pending' | 'paid' | 'failed' | 'refunded'
  payment_method?: 'stripe' | 'pix' | 'boleto'
  stripe_payment_intent_id?: string
  created_at: string
  updated_at: string
}

export type ChatMessage = {
  id: string
  user_id?: string
  message: string
  sender_type: 'user' | 'bot' | 'admin'
  conversation_id: string
  created_at: string
  is_read: boolean
}

export type Appointment = {
  id: string
  user_id: string
  lead_id?: string
  consultant_id?: string
  title: string
  description?: string
  scheduled_date: string
  duration_minutes: number
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show'
  meeting_link?: string
  notes?: string
  created_at: string
  updated_at: string
}
```

### 2. Hook de Autenticação

Crie `client/src/hooks/useAuth.ts`:

```typescript
import { useEffect, useState } from 'react'
import { supabase, User } from '@/lib/supabase'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Verificar usuário logado
    const checkUser = async () => {
      try {
        const { data: { user: authUser } } = await supabase.auth.getUser()
        
        if (authUser) {
          // Buscar dados do usuário no banco
          const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', authUser.id)
            .single()

          if (error) throw error
          setUser(data)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar usuário')
      } finally {
        setLoading(false)
      }
    }

    checkUser()

    // Listener para mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          const { data } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single()
          setUser(data)
        } else {
          setUser(null)
        }
      }
    )

    return () => subscription?.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) throw error

      // Criar registro na tabela users
      if (data.user) {
        await supabase.from('users').insert({
          id: data.user.id,
          email,
          full_name: fullName,
          role: 'client',
          status: 'active',
        })
      }

      return data
    } catch (err) {
      throw err
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      return data
    } catch (err) {
      throw err
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      setUser(null)
    } catch (err) {
      throw err
    }
  }

  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) throw error
      return data
    } catch (err) {
      throw err
    }
  }

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    signInWithGoogle,
    isAuthenticated: !!user,
  }
}
```

---

## Operações CRUD

### Exemplo: Criar um Lead

```typescript
import { supabase, Lead } from '@/lib/supabase'

async function createLead(leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select()

    if (error) throw error
    return data[0]
  } catch (err) {
    console.error('Erro ao criar lead:', err)
    throw err
  }
}
```

### Exemplo: Buscar Leads

```typescript
async function getLeads(status?: string) {
  try {
    let query = supabase.from('leads').select('*')

    if (status) {
      query = query.eq('status', status)
    }

    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) throw error
    return data
  } catch (err) {
    console.error('Erro ao buscar leads:', err)
    throw err
  }
}
```

### Exemplo: Atualizar Lead

```typescript
async function updateLead(leadId: string, updates: Partial<Lead>) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .update(updates)
      .eq('id', leadId)
      .select()

    if (error) throw error
    return data[0]
  } catch (err) {
    console.error('Erro ao atualizar lead:', err)
    throw err
  }
}
```

### Exemplo: Deletar Lead

```typescript
async function deleteLead(leadId: string) {
  try {
    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', leadId)

    if (error) throw error
  } catch (err) {
    console.error('Erro ao deletar lead:', err)
    throw err
  }
}
```

---

## Exemplos Práticos

### 1. Formulário de Contato Funcional

```typescript
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    message: '',
    budget_range: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            ...formData,
            source: 'contact-form',
            status: 'new',
          },
        ])

      if (error) throw error

      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        message: '',
        budget_range: '',
      })
    } catch (err) {
      toast.error('Erro ao enviar mensagem. Tente novamente.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border border-border"
      />
      <input
        type="email"
        name="email"
        placeholder="seu@email.com"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border border-border"
      />
      <input
        type="tel"
        name="phone"
        placeholder="(00) 00000-0000"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-border"
      />
      <input
        type="text"
        name="company_name"
        placeholder="Nome da empresa"
        value={formData.company_name}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-border"
      />
      <select
        name="budget_range"
        value={formData.budget_range}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-border"
      >
        <option value="">Selecione orçamento</option>
        <option value="ate-5k">Até R$ 5.000</option>
        <option value="5k-10k">R$ 5.000 a R$ 10.000</option>
        <option value="10k-30k">R$ 10.000 a R$ 30.000</option>
        <option value="acima-30k">Acima de R$ 30.000</option>
      </select>
      <textarea
        name="message"
        placeholder="Sua mensagem..."
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full px-4 py-3 rounded-lg border border-border"
      />
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Enviando...' : 'Enviar Solicitação'}
      </Button>
    </form>
  )
}
```

### 2. Chat em Tempo Real

```typescript
import { useEffect, useState } from 'react'
import { supabase, ChatMessage } from '@/lib/supabase'

export function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [conversationId] = useState(crypto.randomUUID())

  useEffect(() => {
    // Buscar mensagens existentes
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true })

      if (data) setMessages(data)
    }

    fetchMessages()

    // Listener para novas mensagens em tempo real
    const subscription = supabase
      .channel(`chat:${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          setMessages(prev => [...prev, payload.new as ChatMessage])
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [conversationId])

  const sendMessage = async (text: string) => {
    try {
      const { error } = await supabase
        .from('chat_messages')
        .insert([
          {
            message: text,
            conversation_id: conversationId,
            sender_type: 'user',
          },
        ])

      if (error) throw error
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err)
    }
  }

  return (
    <div className="space-y-4">
      <div className="h-96 overflow-y-auto space-y-4">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${msg.sender_type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                msg.sender_type === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground'
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Digite sua mensagem..."
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value) {
            sendMessage(e.currentTarget.value)
            e.currentTarget.value = ''
          }
        }}
        className="w-full px-4 py-2 rounded-lg border border-border"
      />
    </div>
  )
}
```

### 3. Agendamento de Consultoria

```typescript
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export function AppointmentBooking() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: 'Consultoria Express',
    scheduled_date: '',
    duration_minutes: 60,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        toast.error('Você precisa estar logado para agendar.')
        return
      }

      const { error } = await supabase
        .from('appointments')
        .insert([
          {
            ...formData,
            user_id: user.id,
            status: 'scheduled',
          },
        ])

      if (error) throw error

      toast.success('Consultoria agendada com sucesso!')
      setFormData({
        title: 'Consultoria Express',
        scheduled_date: '',
        duration_minutes: 60,
      })
    } catch (err) {
      toast.error('Erro ao agendar consultoria.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="datetime-local"
        value={formData.scheduled_date}
        onChange={(e) =>
          setFormData(prev => ({ ...prev, scheduled_date: e.target.value }))
        }
        required
        className="w-full px-4 py-3 rounded-lg border border-border"
      />
      <select
        value={formData.duration_minutes}
        onChange={(e) =>
          setFormData(prev => ({
            ...prev,
            duration_minutes: parseInt(e.target.value),
          }))
        }
        className="w-full px-4 py-3 rounded-lg border border-border"
      >
        <option value={30}>30 minutos</option>
        <option value={60}>1 hora</option>
        <option value={90}>1 hora 30 minutos</option>
        <option value={120}>2 horas</option>
      </select>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Agendando...' : 'Agendar Consultoria'}
      </Button>
    </form>
  )
}
```

---

## Segurança

### 1. Variáveis de Ambiente

Nunca exponha chaves secretas no frontend. Use `.env.local`:

```env
# ✅ Seguro - Chave anônima (somente leitura)
VITE_SUPABASE_ANON_KEY=eyJhbGc...

# ❌ NUNCA no frontend - Chave de serviço
# VITE_SUPABASE_SERVICE_KEY=...
```

### 2. RLS (Row Level Security)

Todas as operações sensíveis estão protegidas com RLS. Exemplo:

```sql
-- Usuários veem apenas seus próprios dados
CREATE POLICY "Users can view own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);
```

### 3. Validação no Backend

Para operações críticas, use Edge Functions do Supabase:

```typescript
// supabase/functions/create-order/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  const { user_id, items } = await req.json()

  // Validar usuário
  const { data: { user } } = await supabase.auth.admin.getUserById(user_id)
  if (!user) return new Response('Unauthorized', { status: 401 })

  // Criar pedido
  const { data, error } = await supabase
    .from('orders')
    .insert([{ user_id, total_amount: 0, status: 'pending' }])
    .select()

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  })
})
```

---

## 🚀 Próximos Passos

1. ✅ Executar o schema SQL
2. ✅ Configurar variáveis de ambiente
3. ✅ Instalar dependências
4. ✅ Implementar autenticação
5. ✅ Integrar formulários
6. ✅ Configurar chat em tempo real
7. ✅ Adicionar agendamentos
8. ✅ Implementar pagamentos (Stripe)
9. ✅ Configurar email (SendGrid)
10. ✅ Deploy em produção

---

**Documentação:** [Supabase Docs](https://supabase.com/docs)
**Suporte:** [Supabase Discord](https://discord.supabase.com)
