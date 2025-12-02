# Documentação do Schema SQL - Apezato Marketing

## Visão Geral

Este documento descreve todas as tabelas, relacionamentos e funcionalidades do banco de dados Supabase para o site Apezato Marketing.

---

## 📋 Tabelas do Sistema

### 1. **users** - Usuários do Sistema
Armazena informações de usuários autenticados (clientes, admin, parceiros).

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária (referencia auth.users) |
| email | VARCHAR(255) | Email único |
| full_name | VARCHAR(255) | Nome completo |
| phone | VARCHAR(20) | Telefone de contato |
| company_name | VARCHAR(255) | Nome da empresa |
| website | VARCHAR(255) | Website da empresa |
| profile_image_url | TEXT | URL da foto de perfil |
| role | VARCHAR(50) | Papel: 'client', 'admin', 'partner' |
| status | VARCHAR(50) | Status: 'active', 'inactive', 'banned' |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

---

### 2. **leads** - Leads/Contatos
Armazena contatos gerados através de formulários e campanhas.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| name | VARCHAR(255) | Nome do lead |
| email | VARCHAR(255) | Email do lead |
| phone | VARCHAR(20) | Telefone |
| company_name | VARCHAR(255) | Empresa |
| website | VARCHAR(255) | Website |
| budget_range | VARCHAR(50) | Faixa de orçamento |
| message | TEXT | Mensagem do lead |
| source | VARCHAR(100) | Origem: 'contact-form', 'chat', 'landing-page' |
| status | VARCHAR(50) | Status: 'new', 'contacted', 'qualified', 'converted', 'rejected' |
| assigned_to | UUID | ID do usuário responsável |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |
| notes | TEXT | Notas internas |

---

### 3. **chat_messages** - Mensagens do Chat
Armazena mensagens de conversas com clientes.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| user_id | UUID | ID do usuário |
| message | TEXT | Conteúdo da mensagem |
| sender_type | VARCHAR(50) | Tipo: 'user', 'bot', 'admin' |
| conversation_id | UUID | ID da conversa |
| created_at | TIMESTAMP | Data de criação |
| is_read | BOOLEAN | Se foi lida |

---

### 4. **chat_conversations** - Conversas do Chat
Agrupa mensagens em conversas.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| user_id | UUID | ID do usuário |
| lead_id | UUID | ID do lead associado |
| assigned_to | UUID | ID do admin responsável |
| status | VARCHAR(50) | Status: 'open', 'closed', 'waiting' |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |
| last_message_at | TIMESTAMP | Última mensagem |

---

### 5. **appointments** - Agendamentos/Consultorias
Armazena agendamentos de consultorias e reuniões.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| user_id | UUID | ID do cliente |
| lead_id | UUID | ID do lead |
| consultant_id | UUID | ID do consultor |
| title | VARCHAR(255) | Título da reunião |
| description | TEXT | Descrição |
| scheduled_date | TIMESTAMP | Data/hora agendada |
| duration_minutes | INTEGER | Duração em minutos |
| status | VARCHAR(50) | Status: 'scheduled', 'completed', 'cancelled', 'no-show' |
| meeting_link | VARCHAR(255) | Link do Zoom/Google Meet |
| notes | TEXT | Notas |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

---

### 6. **products** - Produtos/Serviços
Armazena produtos digitais e serviços oferecidos.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| name | VARCHAR(255) | Nome do produto |
| slug | VARCHAR(255) | URL slug único |
| description | TEXT | Descrição curta |
| long_description | TEXT | Descrição longa |
| category | VARCHAR(100) | Categoria: 'ebook', 'consultoria', 'template', 'material-rico' |
| price | DECIMAL(10, 2) | Preço |
| price_currency | VARCHAR(3) | Moeda (BRL, USD) |
| image_url | TEXT | URL da imagem |
| is_free | BOOLEAN | Se é gratuito |
| is_active | BOOLEAN | Se está ativo |
| download_url | TEXT | Link de download |
| stripe_product_id | VARCHAR(255) | ID do produto no Stripe |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

---

### 7. **orders** - Pedidos/Compras
Armazena pedidos de produtos.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| user_id | UUID | ID do cliente |
| total_amount | DECIMAL(10, 2) | Valor total |
| currency | VARCHAR(3) | Moeda |
| status | VARCHAR(50) | Status: 'pending', 'paid', 'failed', 'refunded' |
| payment_method | VARCHAR(50) | Método: 'stripe', 'pix', 'boleto' |
| stripe_payment_intent_id | VARCHAR(255) | ID do pagamento Stripe |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

---

### 8. **order_items** - Itens do Pedido
Armazena produtos em cada pedido.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| order_id | UUID | ID do pedido |
| product_id | UUID | ID do produto |
| quantity | INTEGER | Quantidade |
| unit_price | DECIMAL(10, 2) | Preço unitário |
| total_price | DECIMAL(10, 2) | Preço total |
| created_at | TIMESTAMP | Data de criação |

---

### 9. **case_studies** - Casos de Sucesso
Armazena portfolio e casos de sucesso.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| title | VARCHAR(255) | Título do case |
| slug | VARCHAR(255) | URL slug |
| client_name | VARCHAR(255) | Nome do cliente |
| client_industry | VARCHAR(100) | Indústria |
| description | TEXT | Descrição |
| challenge | TEXT | Desafio |
| solution | TEXT | Solução |
| results | TEXT | Resultados |
| image_url | TEXT | URL da imagem |
| testimonial | TEXT | Depoimento |
| testimonial_author | VARCHAR(255) | Autor do depoimento |
| testimonial_role | VARCHAR(255) | Cargo do autor |
| metrics | JSONB | Métricas (JSON) |
| is_featured | BOOLEAN | Se é destaque |
| is_published | BOOLEAN | Se está publicado |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

---

### 10. **blog_posts** - Artigos do Blog
Armazena posts de blog e conteúdo.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| title | VARCHAR(255) | Título |
| slug | VARCHAR(255) | URL slug |
| author_id | UUID | ID do autor |
| content | TEXT | Conteúdo (Markdown) |
| excerpt | VARCHAR(500) | Resumo |
| featured_image_url | TEXT | URL da imagem |
| category | VARCHAR(100) | Categoria |
| tags | TEXT[] | Array de tags |
| status | VARCHAR(50) | Status: 'draft', 'published', 'archived' |
| views_count | INTEGER | Número de visualizações |
| is_featured | BOOLEAN | Se é destaque |
| published_at | TIMESTAMP | Data de publicação |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

---

### 11. **blog_comments** - Comentários do Blog
Armazena comentários em posts.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| post_id | UUID | ID do post |
| user_id | UUID | ID do usuário |
| author_name | VARCHAR(255) | Nome do autor |
| author_email | VARCHAR(255) | Email do autor |
| content | TEXT | Conteúdo |
| status | VARCHAR(50) | Status: 'pending', 'approved', 'rejected' |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

---

### 12. **support_tickets** - Tickets de Suporte
Armazena tickets de suporte técnico.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| user_id | UUID | ID do cliente |
| title | VARCHAR(255) | Título |
| description | TEXT | Descrição |
| category | VARCHAR(100) | Categoria: 'technical', 'billing', 'general' |
| priority | VARCHAR(50) | Prioridade: 'low', 'medium', 'high', 'urgent' |
| status | VARCHAR(50) | Status: 'open', 'in-progress', 'waiting-customer', 'resolved', 'closed' |
| assigned_to | UUID | ID do responsável |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |
| resolved_at | TIMESTAMP | Data de resolução |

---

### 13. **ticket_replies** - Respostas de Tickets
Armazena respostas em tickets.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| ticket_id | UUID | ID do ticket |
| user_id | UUID | ID do usuário |
| message | TEXT | Mensagem |
| is_internal | BOOLEAN | Se é interna (staff only) |
| created_at | TIMESTAMP | Data de criação |

---

### 14. **newsletter_subscribers** - Inscritos na Newsletter
Armazena emails de inscritos.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| email | VARCHAR(255) | Email único |
| name | VARCHAR(255) | Nome |
| status | VARCHAR(50) | Status: 'subscribed', 'unsubscribed' |
| source | VARCHAR(100) | Origem |
| subscribed_at | TIMESTAMP | Data de inscrição |
| unsubscribed_at | TIMESTAMP | Data de cancelamento |

---

### 15. **email_campaigns** - Campanhas de Email
Armazena campanhas de email marketing.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| name | VARCHAR(255) | Nome da campanha |
| subject | VARCHAR(255) | Assunto |
| content | TEXT | Conteúdo |
| status | VARCHAR(50) | Status: 'draft', 'scheduled', 'sent' |
| scheduled_at | TIMESTAMP | Data de agendamento |
| sent_at | TIMESTAMP | Data de envio |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

---

### 16. **analytics_events** - Eventos de Analytics
Armazena eventos de rastreamento.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| user_id | UUID | ID do usuário |
| event_type | VARCHAR(100) | Tipo: 'page_view', 'button_click', 'form_submit' |
| event_name | VARCHAR(255) | Nome do evento |
| page_url | VARCHAR(500) | URL da página |
| referrer | VARCHAR(500) | Referência |
| user_agent | TEXT | User Agent |
| ip_address | VARCHAR(45) | IP |
| metadata | JSONB | Dados adicionais |
| created_at | TIMESTAMP | Data de criação |

---

### 17. **site_settings** - Configurações do Site
Armazena configurações globais.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| key | VARCHAR(255) | Chave única |
| value | TEXT | Valor |
| description | TEXT | Descrição |
| type | VARCHAR(50) | Tipo: 'string', 'number', 'boolean', 'json' |
| updated_at | TIMESTAMP | Data de atualização |

---

### 18. **reviews** - Avaliações/Reviews
Armazena avaliações de produtos.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| user_id | UUID | ID do usuário |
| product_id | UUID | ID do produto |
| rating | INTEGER | Nota (1-5) |
| title | VARCHAR(255) | Título |
| content | TEXT | Conteúdo |
| is_verified | BOOLEAN | Se é verificada |
| status | VARCHAR(50) | Status: 'pending', 'approved', 'rejected' |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

---

### 19. **coupons** - Cupons/Descontos
Armazena cupons promocionais.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| code | VARCHAR(50) | Código único |
| description | VARCHAR(255) | Descrição |
| discount_type | VARCHAR(50) | Tipo: 'percentage', 'fixed' |
| discount_value | DECIMAL(10, 2) | Valor do desconto |
| max_uses | INTEGER | Máximo de usos |
| current_uses | INTEGER | Usos atuais |
| valid_from | TIMESTAMP | Válido de |
| valid_until | TIMESTAMP | Válido até |
| is_active | BOOLEAN | Se está ativo |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

---

### 20. **audit_logs** - Auditoria/Logs
Armazena logs de todas as ações.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID | Chave primária |
| user_id | UUID | ID do usuário |
| action | VARCHAR(255) | Ação realizada |
| table_name | VARCHAR(100) | Tabela afetada |
| record_id | UUID | ID do registro |
| old_values | JSONB | Valores antigos |
| new_values | JSONB | Valores novos |
| ip_address | VARCHAR(45) | IP |
| user_agent | TEXT | User Agent |
| created_at | TIMESTAMP | Data de criação |

---

## 🔒 Segurança (RLS - Row Level Security)

Todas as tabelas críticas possuem políticas RLS:

- **users**: Usuários veem apenas seus próprios dados
- **leads**: Apenas staff (admin/partner) pode ver
- **orders**: Usuários veem apenas seus próprios pedidos
- **support_tickets**: Usuários veem apenas seus próprios tickets

---

## 📊 Índices para Performance

Índices foram criados em campos frequentemente consultados:
- Emails (busca rápida)
- Status (filtros)
- Datas (ordenação)
- IDs estrangeiros (joins)

---

## 🔄 Relacionamentos Principais

```
users
├── leads (assigned_to)
├── chat_conversations (user_id, assigned_to)
├── appointments (user_id, consultant_id)
├── orders (user_id)
├── blog_posts (author_id)
├── support_tickets (user_id, assigned_to)
├── reviews (user_id)
└── audit_logs (user_id)

products
├── orders (via order_items)
├── reviews (product_id)
└── case_studies (relacionado)

blog_posts
├── blog_comments (post_id)
└── analytics_events (page_url)
```

---

## 🚀 Como Usar

### 1. Executar o Schema no Supabase

1. Acesse o Supabase Dashboard
2. Vá para SQL Editor
3. Copie e cole todo o conteúdo de `supabase-schema.sql`
4. Clique em "Run"

### 2. Configurar Autenticação

No Supabase, configure:
- Email/Password authentication
- Google OAuth (opcional)
- GitHub OAuth (opcional)

### 3. Integrar com o Frontend

Use a biblioteca `@supabase/supabase-js`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
)

// Exemplo: Buscar leads
const { data, error } = await supabase
  .from('leads')
  .select('*')
  .eq('status', 'new')
```

---

## 📝 Notas Importantes

- Todas as datas usam `TIMESTAMP WITH TIME ZONE` (UTC)
- `updated_at` é atualizado automaticamente via trigger
- RLS está habilitado para segurança
- Backup regular é recomendado
- Considere adicionar mais índices conforme o volume de dados crescer

---

## 🔧 Manutenção

### Monitorar Performance
```sql
-- Ver tamanho das tabelas
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

### Limpar Dados Antigos
```sql
-- Exemplo: Deletar logs com mais de 90 dias
DELETE FROM public.audit_logs
WHERE created_at < NOW() - INTERVAL '90 days';
```

---

**Última atualização:** 2024
**Versão:** 1.0
