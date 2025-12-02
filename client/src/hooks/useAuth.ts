import { useEffect, useState } from 'react'
import { supabase, User, getCurrentUser } from '@/lib/supabase'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Verificar usuário logado
    const checkUser = async () => {
      try {
        const userData = await getCurrentUser()
        setUser(userData)
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
          const userData = await getCurrentUser()
          setUser(userData)
        } else {
          setUser(null)
        }
      }
    )

    return () => subscription?.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      setError(null)
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      })

      if (signUpError) throw signUpError

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
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao criar conta'
      setError(errorMessage)
      throw err
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      setError(null)
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) throw signInError

      const userData = await getCurrentUser()
      setUser(userData)

      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao fazer login'
      setError(errorMessage)
      throw err
    }
  }

  const signOut = async () => {
    try {
      setError(null)
      const { error: signOutError } = await supabase.auth.signOut()
      if (signOutError) throw signOutError
      setUser(null)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao fazer logout'
      setError(errorMessage)
      throw err
    }
  }

  const signInWithGoogle = async () => {
    try {
      setError(null)
      const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (oauthError) throw oauthError
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao fazer login com Google'
      setError(errorMessage)
      throw err
    }
  }

  const updateProfile = async (updates: Partial<User>) => {
    try {
      setError(null)
      const { data, error: updateError } = await supabase
        .from('users')
        .update(updates)
        .eq('id', user?.id)
        .select()

      if (updateError) throw updateError

      setUser(data[0] as User)
      return data[0]
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao atualizar perfil'
      setError(errorMessage)
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
    updateProfile,
    isAuthenticated: !!user,
  }
}
