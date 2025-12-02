# 🚀 Guia de Setup do Supabase - Apezato Marketing

## ✅ Credenciais Já Configuradas

As credenciais do Supabase já foram adicionadas ao projeto:
- **VITE_SUPABASE_URL**: https://mmsvitsvienetiqbjqct.supabase.co
- **VITE_SUPABASE_ANON_KEY**: Configurada automaticamente

---

## 📋 Próximos Passos

### 1. Executar o Schema SQL

1. Acesse o **Supabase Dashboard**: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá para **SQL Editor** (no menu esquerdo)
4. Clique em **New Query**
5. Copie todo o conteúdo do arquivo `supabase-schema.sql`
6. Cole no editor SQL
7. Clique em **Run**

**Resultado esperado:** Todas as 20 tabelas serão criadas com sucesso.

---

### 2. Configurar Autenticação

#### Email/Password
1. No Supabase Dashboard, vá para **Authentication** → **Providers**
2. Certifique-se de que **Email** está habilitado
3. Configure as opções de email (opcional)

#### Google OAuth (Recomendado)
1. Vá para **Authentication** → **Providers** → **Google**
2. Clique em **Enable**
3. Obtenha credenciais em: https://console.cloud.google.com
4. Configure o **Client ID** e **Client Secret**
5. Adicione URLs autorizadas:
   - Desenvolvimento: `http://localhost:3000`
   - Produção: `https://seu-dominio.com`

---

### 3. Configurar Row Level Security (RLS)

As políticas RLS já estão no schema SQL, mas você pode verificar:

1. Vá para **Authentication** → **Policies**
2. Verifique se as políticas foram criadas para:
   - `users` - Usuários veem apenas seus dados
   - `leads` - Apenas staff pode ver
   - `orders` - Usuários veem apenas seus pedidos
   - `support_tickets` - Usuários veem apenas seus tickets

---

### 4. Testar Conexão

No seu terminal, execute:

```bash
cd /home/ubuntu/apezato-marketing
pnpm test client/src/lib/supabase.test.ts
```

Resultado esperado: ✅ Todos os testes passam

---

### 5. Iniciar o Servidor de Desenvolvimento

```bash
cd /home/ubuntu/apezato-marketing
pnpm dev
```

O site estará disponível em: http://localhost:3000

---

## 🔧 Funcionalidades Habilitadas

Após executar o schema SQL, as seguintes funcionalidades estarão 100% funcionais:

### ✅ Autenticação
- Registro de usuários
- Login/Logout
- Google OAuth (quando configurado)
- Perfil de usuário

### ✅ Gestão de Leads
- Formulário de contato funcional
- Armazenamento de leads no banco
- Status de leads (new, contacted, qualified, converted, rejected)
- Atribuição a consultores

### ✅ Chat em Tempo Real
- Mensagens de usuários e admins
- Conversas agrupadas
- Status de leitura
- Histórico de mensagens

### ✅ Agendamentos
- Agendar consultorias
- Integração com calendário
- Links de reunião (Zoom, Google Meet)
- Notificações

### ✅ Produtos e E-commerce
- Catálogo de produtos
- Carrinho de compras
- Pedidos
- Histórico de compras

### ✅ Blog
- Posts com categorias
- Tags
- Comentários
- Contador de visualizações

### ✅ Suporte
- Tickets de suporte
- Respostas e histórico
- Priorização
- Atribuição a equipe

### ✅ Newsletter
- Inscrição de emails
- Gerenciamento de inscritos
- Campanhas de email

---

## 📊 Estrutura do Banco de Dados

20 tabelas criadas automaticamente:

1. **users** - Usuários do sistema
2. **leads** - Contatos/Leads
3. **chat_messages** - Mensagens do chat
4. **chat_conversations** - Conversas
5. **appointments** - Agendamentos
6. **products** - Produtos/Serviços
7. **orders** - Pedidos
8. **order_items** - Itens do pedido
9. **case_studies** - Casos de sucesso
10. **blog_posts** - Posts do blog
11. **blog_comments** - Comentários
12. **support_tickets** - Tickets
13. **ticket_replies** - Respostas
14. **newsletter_subscribers** - Inscritos
15. **email_campaigns** - Campanhas
16. **analytics_events** - Eventos
17. **site_settings** - Configurações
18. **reviews** - Avaliações
19. **coupons** - Cupons
20. **audit_logs** - Logs de auditoria

---

## 🔐 Segurança

### Variáveis de Ambiente
- ✅ Chave anônima (frontend) - Segura
- ✅ Chave de serviço (backend) - Nunca exponha no frontend

### Row Level Security (RLS)
- ✅ Habilitado em todas as tabelas críticas
- ✅ Políticas de acesso configuradas
- ✅ Dados protegidos por usuário

### Autenticação
- ✅ JWT automático do Supabase
- ✅ Sessão persistente
- ✅ Logout seguro

---

## 🚀 Deploy em Produção

### Netlify
1. Conecte seu repositório GitHub ao Netlify
2. Configure variáveis de ambiente:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Build command: `pnpm build`
4. Publish directory: `dist`

### Vercel
1. Importe o projeto no Vercel
2. Configure variáveis de ambiente
3. Deploy automático

### Seu Servidor
```bash
# Build
pnpm build

# Start
pnpm start
```

---

## 📞 Suporte

### Documentação
- [Supabase Docs](https://supabase.com/docs)
- [Guia de Integração](./SUPABASE-INTEGRATION-GUIDE.md)
- [Documentação do Schema](./SCHEMA-DOCUMENTATION.md)

### Comunidade
- [Supabase Discord](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)

---

## ✨ Próximas Melhorias (Opcional)

- [ ] Integrar Stripe para pagamentos
- [ ] Configurar SendGrid para emails
- [ ] Adicionar Google Analytics
- [ ] Implementar cache com Redis
- [ ] Adicionar CI/CD com GitHub Actions
- [ ] Configurar backups automáticos
- [ ] Implementar CDN para imagens

---

**Status:** ✅ Pronto para produção
**Última atualização:** 2024
**Versão:** 1.0
