import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ============================================================================
// TIPOS DO BANCO DE DADOS
// ============================================================================

export type User = {
  id: string
  email: string
  full_name?: string
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
  budget_range?: 'ate-5k' | '5k-10k' | '10k-30k' | 'acima-30k'
  message?: string
  source: 'contact-form' | 'chat' | 'landing-page'
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'rejected'
  assigned_to?: string
  created_at: string
  updated_at: string
  notes?: string
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

export type ChatConversation = {
  id: string
  user_id?: string
  lead_id?: string
  assigned_to?: string
  status: 'open' | 'closed' | 'waiting'
  created_at: string
  updated_at: string
  last_message_at?: string
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

export type OrderItem = {
  id: string
  order_id: string
  product_id: string
  quantity: number
  unit_price: number
  total_price: number
  created_at: string
}

export type SupportTicket = {
  id: string
  user_id: string
  title: string
  description: string
  category: 'technical' | 'billing' | 'general'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  status: 'open' | 'in-progress' | 'waiting-customer' | 'resolved' | 'closed'
  assigned_to?: string
  created_at: string
  updated_at: string
  resolved_at?: string
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  author_id?: string
  content: string
  excerpt?: string
  featured_image_url?: string
  category?: string
  tags?: string[]
  status: 'draft' | 'published' | 'archived'
  views_count: number
  is_featured: boolean
  published_at?: string
  created_at: string
  updated_at: string
}

export type CaseStudy = {
  id: string
  title: string
  slug: string
  client_name: string
  client_industry?: string
  description?: string
  challenge?: string
  solution?: string
  results?: string
  image_url?: string
  testimonial?: string
  testimonial_author?: string
  testimonial_role?: string
  metrics?: Record<string, string | number>
  is_featured: boolean
  is_published: boolean
  created_at: string
  updated_at: string
}

export type NewsletterSubscriber = {
  id: string
  email: string
  name?: string
  status: 'subscribed' | 'unsubscribed'
  source?: string
  subscribed_at: string
  unsubscribed_at?: string
}

export type Review = {
  id: string
  user_id: string
  product_id: string
  rating: number
  title?: string
  content?: string
  is_verified: boolean
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  updated_at: string
}

// ============================================================================
// FUNÇÕES DE AUTENTICAÇÃO
// ============================================================================

export async function signUp(email: string, password: string, fullName: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) throw error

    // Criar registro na tabela users
    if (data.user) {
      const { error: insertError } = await supabase.from('users').insert({
        id: data.user.id,
        email,
        full_name: fullName,
        role: 'client',
        status: 'active',
      })

      if (insertError) throw insertError
    }

    return data
  } catch (error) {
    console.error('Erro ao criar conta:', error)
    throw error
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Erro ao fazer login:', error)
    throw error
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
    throw error
  }
}

export async function getCurrentUser() {
  try {
    const { data: { user: authUser } } = await supabase.auth.getUser()

    if (!authUser) return null

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', authUser.id)
      .single()

    if (error) throw error
    return user as User
  } catch (error) {
    console.error('Erro ao buscar usuário:', error)
    return null
  }
}

// ============================================================================
// FUNÇÕES DE LEADS
// ============================================================================

export async function createLead(leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select()

    if (error) throw error
    return data[0] as Lead
  } catch (error) {
    console.error('Erro ao criar lead:', error)
    throw error
  }
}

export async function getLeads(filters?: { status?: string; assigned_to?: string }) {
  try {
    let query = supabase.from('leads').select('*')

    if (filters?.status) {
      query = query.eq('status', filters.status)
    }

    if (filters?.assigned_to) {
      query = query.eq('assigned_to', filters.assigned_to)
    }

    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) throw error
    return data as Lead[]
  } catch (error) {
    console.error('Erro ao buscar leads:', error)
    throw error
  }
}

export async function updateLead(leadId: string, updates: Partial<Lead>) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .update(updates)
      .eq('id', leadId)
      .select()

    if (error) throw error
    return data[0] as Lead
  } catch (error) {
    console.error('Erro ao atualizar lead:', error)
    throw error
  }
}

// ============================================================================
// FUNÇÕES DE CHAT
// ============================================================================

export async function createChatMessage(message: Omit<ChatMessage, 'id' | 'created_at'>) {
  try {
    const { data, error } = await supabase
      .from('chat_messages')
      .insert([message])
      .select()

    if (error) throw error
    return data[0] as ChatMessage
  } catch (error) {
    console.error('Erro ao criar mensagem:', error)
    throw error
  }
}

export async function getChatMessages(conversationId: string) {
  try {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true })

    if (error) throw error
    return data as ChatMessage[]
  } catch (error) {
    console.error('Erro ao buscar mensagens:', error)
    throw error
  }
}

export async function createOrGetConversation(userId?: string, leadId?: string) {
  try {
    const { data, error } = await supabase
      .from('chat_conversations')
      .insert([
        {
          user_id: userId,
          lead_id: leadId,
          status: 'open',
        },
      ])
      .select()

    if (error) throw error
    return data[0] as ChatConversation
  } catch (error) {
    console.error('Erro ao criar conversa:', error)
    throw error
  }
}

// ============================================================================
// FUNÇÕES DE AGENDAMENTOS
// ============================================================================

export async function createAppointment(appointmentData: Omit<Appointment, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .insert([appointmentData])
      .select()

    if (error) throw error
    return data[0] as Appointment
  } catch (error) {
    console.error('Erro ao criar agendamento:', error)
    throw error
  }
}

export async function getAppointments(userId: string) {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('user_id', userId)
      .order('scheduled_date', { ascending: true })

    if (error) throw error
    return data as Appointment[]
  } catch (error) {
    console.error('Erro ao buscar agendamentos:', error)
    throw error
  }
}

// ============================================================================
// FUNÇÕES DE PRODUTOS
// ============================================================================

export async function getProducts(filters?: { category?: string; is_active?: boolean }) {
  try {
    let query = supabase.from('products').select('*')

    if (filters?.category) {
      query = query.eq('category', filters.category)
    }

    if (filters?.is_active !== undefined) {
      query = query.eq('is_active', filters.is_active)
    }

    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) throw error
    return data as Product[]
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    throw error
  }
}

export async function getProduct(slug: string) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw error
    return data as Product
  } catch (error) {
    console.error('Erro ao buscar produto:', error)
    throw error
  }
}

// ============================================================================
// FUNÇÕES DE PEDIDOS
// ============================================================================

export async function createOrder(userId: string, items: OrderItem[]) {
  try {
    const totalAmount = items.reduce((sum, item) => sum + item.total_price, 0)

    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([
        {
          user_id: userId,
          total_amount: totalAmount,
          currency: 'BRL',
          status: 'pending',
        },
      ])
      .select()

    if (orderError) throw orderError

    // Inserir itens do pedido
    const orderId = order[0].id
    const orderItems = items.map(item => ({
      ...item,
      order_id: orderId,
    }))

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems)

    if (itemsError) throw itemsError

    return order[0] as Order
  } catch (error) {
    console.error('Erro ao criar pedido:', error)
    throw error
  }
}

export async function getOrders(userId: string) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as Order[]
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error)
    throw error
  }
}

// ============================================================================
// FUNÇÕES DE BLOG
// ============================================================================

export async function getBlogPosts(filters?: { status?: string; category?: string }) {
  try {
    let query = supabase.from('blog_posts').select('*')

    if (filters?.status) {
      query = query.eq('status', filters.status)
    }

    if (filters?.category) {
      query = query.eq('category', filters.category)
    }

    const { data, error } = await query.order('published_at', { ascending: false })

    if (error) throw error
    return data as BlogPost[]
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    throw error
  }
}

export async function getBlogPost(slug: string) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw error

    // Incrementar views
    await supabase
      .from('blog_posts')
      .update({ views_count: (data.views_count || 0) + 1 })
      .eq('id', data.id)

    return data as BlogPost
  } catch (error) {
    console.error('Erro ao buscar post:', error)
    throw error
  }
}

// ============================================================================
// FUNÇÕES DE CASES DE SUCESSO
// ============================================================================

export async function getCaseStudies() {
  try {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as CaseStudy[]
  } catch (error) {
    console.error('Erro ao buscar cases:', error)
    throw error
  }
}

// ============================================================================
// FUNÇÕES DE NEWSLETTER
// ============================================================================

export async function subscribeNewsletter(email: string, name?: string) {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email,
          name,
          status: 'subscribed',
          source: 'website',
        },
      ])
      .select()

    if (error) throw error
    return data[0] as NewsletterSubscriber
  } catch (error) {
    console.error('Erro ao inscrever na newsletter:', error)
    throw error
  }
}

// ============================================================================
// FUNÇÕES DE SUPORTE
// ============================================================================

export async function createSupportTicket(ticketData: Omit<SupportTicket, 'id' | 'created_at' | 'updated_at' | 'resolved_at'>) {
  try {
    const { data, error } = await supabase
      .from('support_tickets')
      .insert([ticketData])
      .select()

    if (error) throw error
    return data[0] as SupportTicket
  } catch (error) {
    console.error('Erro ao criar ticket:', error)
    throw error
  }
}

export async function getSupportTickets(userId: string) {
  try {
    const { data, error } = await supabase
      .from('support_tickets')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as SupportTicket[]
  } catch (error) {
    console.error('Erro ao buscar tickets:', error)
    throw error
  }
}
