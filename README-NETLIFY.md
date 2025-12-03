# Configuração do Netlify

## Variáveis de Ambiente

Para que o chatbot funcione corretamente, você precisa configurar a seguinte variável de ambiente no painel do Netlify:

### Como configurar:

1. Acesse o painel do Netlify: https://app.netlify.com
2. Selecione o site **apezato**
3. Vá em **Site settings** > **Environment variables**
4. Clique em **Add a variable**
5. Adicione a seguinte variável:

**Nome da variável:**
```
OPENAI_API_KEY
```

**Valor da variável:**
```
A API key da OpenAI fornecida pelo administrador
```

6. Clique em **Save**
7. Faça um novo deploy do site para aplicar as alterações

## Importante

⚠️ **NUNCA** commite a API key diretamente no código ou no repositório Git. Sempre use variáveis de ambiente.

⚠️ A API key deve ser configurada diretamente no painel do Netlify, nunca no código fonte.

## Verificação

Após configurar a variável de ambiente e fazer o deploy:

1. Acesse https://apezato.netlify.app
2. Abra o chatbot no canto inferior direito
3. Envie uma mensagem de teste
4. O chatbot deve responder normalmente

Se ainda houver erros, verifique os logs do Netlify em **Deploys** > **Function logs**.

## Diagnóstico do Problema

O erro atual no log do Netlify indica:

```
Erro da API: {
  error: {
    message: 'Incorrect API key provided: undefined...',
    type: 'invalid_request_error',
    code: 'invalid_api_key'
  }
}
```

Isso acontece porque a variável de ambiente `OPENAI_API_KEY` não está configurada no Netlify. Após configurá-la seguindo os passos acima, o chatbot funcionará corretamente.
