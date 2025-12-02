import { describe, it, expect } from 'vitest'
import { supabase } from './supabase'

describe('Supabase Connection', () => {
  it('should connect to Supabase successfully', async () => {
    try {
      // Testar conexão básica
      const { data, error } = await supabase
        .from('users')
        .select('count')
        .limit(1)

      expect(error).toBeNull()
      expect(data).toBeDefined()
    } catch (err) {
      throw new Error(`Falha ao conectar ao Supabase: ${err}`)
    }
  })

  it('should have valid Supabase URL', () => {
    const url = import.meta.env.VITE_SUPABASE_URL
    expect(url).toBeDefined()
    expect(url).toMatch(/supabase\.co/)
  })

  it('should have valid Supabase Anon Key', () => {
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY
    expect(key).toBeDefined()
    expect(key.length).toBeGreaterThan(0)
  })

  it('should be able to check auth status', async () => {
    try {
      const { data, error } = await supabase.auth.getSession()
      expect(error).toBeNull()
      expect(data).toBeDefined()
    } catch (err) {
      throw new Error(`Falha ao verificar sessão: ${err}`)
    }
  })
})
