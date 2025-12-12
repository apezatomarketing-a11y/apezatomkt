import { GoogleGenAI } from '@google/genai'
// Configurações do assistente
import fs from 'fs'
import path from 'path'

// Conteúdo do chatbot_context.txt embutido (Solução final para problemas de path no Netlify Functions)
const context = `A Apezato Marketing é uma agência de marketing digital especializada em nichos de alto valor (B2B e Saúde).
Nossa missão é criar sites que transformam pacientes e clientes B2B em resultados reais, através de estratégia, design e performance digital focados em crescimento sustentável e autoridade de marca.

Metodologia: Metodologia 4D (Diagnóstico, Design, Desenvolvimento, Decolar)
1. Diagnóstico: Análise de presença atual, público-alvo (B2B, Saúde, Estética) e concorrência. Definição de metas e plano de ação.
2. Design Estratégico: Criação da arquitetura da informação e design visual focado em UX (Experiência do Usuário) e CRO (Otimização da Taxa de Conversão).
3. Desenvolvimento e Conteúdo: Construção do site com tecnologia de ponta (React/Vite), conteúdo otimizado para SEO e configuração de ferramentas de performance.
4. Decolar e Otimizar: Lançamento do projeto, gestão de tráfego pago e análise contínua de dados para garantir o ROI.

Serviços Oferecidos:
- Criação de Sites e Landing Pages de Alta Conversão: Sites focados em performance, segurança e conversão. Design exclusivo, 100% responsivo, otimizado para SEO, integração com CRM/Analytics, alta velocidade. O prazo de criação varia de 6 a 10 semanas.
- Gestão de Tráfego Pago (Performance): Campanhas inteligentes (Google Ads, Meta Ads, LinkedIn Ads) baseadas em dados para gerar oportunidades de negócio qualificadas. Foco em ROI, relatórios transparentes (CPL e ROI), e testes A/B.
- Marketing de Conteúdo e SEO: Produção de conteúdo estratégico (blog posts, e-books, vídeos) para posicionar a marca como autoridade, gerar tráfego orgânico qualificado e nutrir leads. Inclui planejamento de conteúdo, produção otimizada para SEO, estratégia de link building e criação de lead magnets.

Diferencial: Especialização em B2B e Saúde, e a metodologia 4D com foco em ROI.
Acompanhamento de Resultados: Dashboards transparentes e reuniões semanais/quinzenais para analisar KPIs (Taxa de Conversão, ROI, Tráfego) e otimizar campanhas.

Informações Adicionais do Site:
Estratégia Digital que Transforma Sua Marca em Autoridade e Vendas.
Estratégia, design e performance digital focados em crescimento sustentável e autoridade de marca.

Agendar Consultoria Gratuita
Ver Cases de Sucesso
Profissional de Marketing analisando gráficos de crescimento
Nossa Metodologia 4D
Um processo transparente e focado em resultados mensuráveis, garantindo que cada etapa do seu projeto digital seja executada com precisão estratégica.

1. Diagnóstico
Analisamos sua presença atual, público-alvo (B2B, Saúde, Estética) e concorrência. Definimos metas claras e um plano de ação estratégico.

2. Design Estratégico
Criamos a arquitetura da informação e o design visual do seu site, focando em UX (Experiência do Usuário) e CRO (Otimização da Taxa de Conversão).

3. Desenvolvimento e Conteúdo
Construímos seu site com tecnologia de ponta (React/Vite), implementamos o conteúdo otimizado para SEO e configuramos as ferramentas de performance.

4. Decolar e Otimizar
Lançamos o projeto e iniciamos a gestão de tráfego pago e a análise contínua de dados para garantir o ROI e o crescimento sustentável.

Metodologia 4D: Diagnóstico, Design, Desenvolvimento, Decolar
Soluções Completas para o Seu Crescimento
Nossos serviços são modulares e integrados, projetados para cobrir todas as frentes da sua estratégia digital.

Criação de Sites de Alta Conversão
Criação de Sites de Alta Conversão
Desenvolvemos sites institucionais e landing pages focados em performance, com design exclusivo e tecnologia otimizada para buscadores.

Saiba mais
Gestão de Tráfego Pago (Performance)
Gestão de Tráfego Pago (Performance)
Campanhas inteligentes no Google Ads e Meta Ads, segmentadas para atrair leads qualificados e maximizar o retorno sobre o investimento (ROI).

Saiba mais
Marketing de Conteúdo e SEO
Marketing de Conteúdo e SEO
Produção de conteúdo estratégico que posiciona sua marca como autoridade, gerando tráfego orgânico e nutrindo leads ao longo do funil de vendas.

Saiba mais
Nossos Clientes Falam por Nós
Veja o que dizem empresários e profissionais liberais de diversas áreas sobre a Metodologia 4D.
Perguntas Frequentes
Q:
Qual o diferencial da Apezato Marketing?
A:
Nossa especialização em nichos de alto valor (B2B e Saúde) e a metodologia 4D, que garante um processo transparente e focado em ROI.

Q:
Qual o prazo para a criação de um site?
A:
O prazo varia de 10 a 15 dias úteis, dependendo da complexidade e do escopo do projeto, garantindo a qualidade e otimização em todas as etapas.

Q:
Vocês fazem apenas sites ou também gerenciam tráfego?
A:
Oferecemos soluções completas, desde a criação do site até a gestão de tráfego pago (Google Ads, Meta Ads) e a estratégia de conteúdo (SEO).

Q:
Como é feito o acompanhamento dos resultados?
A:
Utilizamos dashboards transparentes e reuniões semanais/quinzenais para analisar KPIs (Taxa de Conversão, ROI, Tráfego) e otimizar as campanhas.

Pronto para Transformar Sua Presença Digital?
Agende uma consultoria gratuita e descubra como a Metodologia 4D pode impulsionar seu negócio.

Agendar Agora
Sobre a Apezato Marketing
Conheça nossa história, nossa missão e como transformamos pequenos negócios em grandes sucessos através do marketing digital estratégico.

Nossa História (CEO: Danielle Apezato)
A Apezato Marketing nasceu da paixão por ajudar empreendedoras a realizarem seus sonhos no mundo digital. Fundada em 2023, nossa agência começou como um projeto pessoal para apoiar pequenos negócios que precisavam de uma presença digital forte e estratégica.

Desde o início, nosso foco sempre foi entregar resultados reais e mensuráveis. Começamos atendendo empreendedoras locais em Jacareí e região, e rapidamente expandimos nosso alcance para todo o Brasil, sempre mantendo o atendimento personalizado que nos diferencia no mercado.

Hoje, somos reconhecidos como uma das principais agências especializadas em marketing digital para empreendedoras online, com mais de 50 clientes atendidos e resultados que falam por si só.

Marcos Importantes
2023 - Fundação da Apezato Marketing
2023 - Primeiros 5 clientes atendidos
2024 - Expansão para todo o Brasil
2024 - Primeiros 10 clientes atendidos
2025 - Mais de 20 clientes atendidos
2025 - Lançamento de novos serviços
Nossa Missão, Visão e Valores
Guiamos nosso trabalho por princípios que garantem excelência e resultados para nossos clientes.

Missão
Impulsionar o crescimento de empreendedoras online, transformando suas ideias em negócios de sucesso através de estratégias de marketing digital inovadoras e personalizadas.

Visão
Ser a agência de marketing digital referência para empreendedoras no Brasil, reconhecida pela excelência, inovação e pelo impacto positivo nos resultados de nossos clientes.

Valores
Transparência, Inovação, Compromisso com Resultados, Atendimento Personalizado e Ética em todas as relações.

Nossos Pilares de Atuação
Construímos estratégias sólidas baseadas em fundamentos que garantem o sucesso do seu negócio.

Criatividade
Soluções inovadoras e designs que capturam a atenção e expressam a essência da sua marca.

Resultados
Foco em métricas e estratégias que geram crescimento real e retorno sobre o investimento.

Parceria
Construímos relacionamentos duradouros, trabalhando lado a lado com você para alcançar seus objetivos.

Excelência
Buscamos a perfeição em cada detalhe, entregando serviços de alta qualidade que superam as expectativas.

Danielle Apezato - CEO da Apezato Marketing
Danielle Apezato
CEO

Conheça nossa Fundadora
Danielle Apezato é a mente criativa e estratégica por trás da Apezato Marketing. Com uma paixão inabalável por empreendedorismo e marketing digital, Danielle fundou a agência com o objetivo de capacitar mulheres a transformarem seus negócios online.

Sua expertise abrange desde a criação de identidades visuais impactantes até a gestão de tráfego pago e estratégias de conteúdo que geram resultados reais. Com anos de experiência no mercado, Danielle lidera a equipe da Apezato Marketing com uma visão clara: oferecer soluções personalizadas que impulsionam o sucesso de cada cliente. Site Oficial: https://apezatomarketing.netlify.app/

Acredita que o marketing digital é uma ferramenta poderosa para democratizar o acesso ao sucesso no empreendedorismo, e dedica-se a construir parcerias duradouras baseadas em confiança e resultados.

Pronta para Impulsionar sua Marca?
Agende sua consultoria gratuita e descubra como podemos transformar seu negócio.

Agendar Consultoria
Por que Escolher a Apezato Marketing?
Nosso compromisso é com o seu sucesso. Conheça os diferenciais que nos tornam a escolha ideal para sua marca.

Experiência Comprovada
Anos de atuação no mercado digital

Com anos de experiência, já ajudamos diversas empresas a alcançarem seus objetivos de marketing digital.

Saiba Mais
Abordagem Personalizada
Soluções sob medida para seu negócio

Cada projeto é único. Desenvolvemos estratégias personalizadas que se encaixam perfeitamente nas suas necessidades e metas.

Saiba Mais
Foco em Resultados
Métricas claras e crescimento mensurável

Nosso objetivo é o seu crescimento. Monitoramos métricas e otimizamos campanhas para garantir resultados reais e mensuráveis.

Saiba Mais
Suporte Dedicado
Atendimento próximo e eficiente

Conte com uma equipe de suporte sempre pronta para tirar suas dúvidas e oferecer o apoio necessário.

Saiba Mais
Nossa equipe possui vasta experiência em diversas áreas do marketing digital, incluindo SEO, mídias sociais, tráfego pago e criação de conteúdo. Trabalhamos com clientes de diferentes portes e segmentos, sempre buscando as melhores estratégias para cada um. Nossos cases de sucesso comprovam a eficácia de nossas metodologias e o compromisso com resultados reais.
Acreditamos que não existe uma fórmula mágica para o sucesso. Por isso, cada cliente recebe uma atenção individualizada e um plano de marketing digital feito sob medida. Realizamos um diagnóstico aprofundado do seu negócio, mercado e público-alvo para criar soluções que realmente gerem impacto e retorno sobre o investimento.
Trabalhamos com metas claras e indicadores de performance (KPIs) bem definidos. Nossas ações são constantemente monitoradas e otimizadas para garantir o melhor retorno possível. Apresentamos relatórios transparentes e detalhados, para que você acompanhe de perto o crescimento do seu negócio e o impacto das nossas estratégias.
Nosso suporte vai além do básico. Estamos sempre disponíveis para atender suas demandas, tirar dúvidas e oferecer orientações. Seja por WhatsApp, e-mail ou reuniões online, nossa equipe está comprometida em garantir que você tenha todo o apoio necessário para implementar as estratégias e alcançar seus objetivos. Sua satisfação é nossa prioridade.
Nossos Serviços Especializados
Cada serviço é cuidadosamente desenvolvido para atender às necessidades específicas do seu negócio
Consultoria de Marketing Digital
Diagnóstico + plano personalizado

Análise completa do seu negócio digital com diagnóstico detalhado e plano estratégico personalizado para acelerar seu crescimento.

7-10 dias úteis
A partir de R$ 497
Ver Menos
O que inclui:
Análise completa da presença digital atual
Diagnóstico de pontos fortes e oportunidades de melhoria
Definição de personas e público-alvo
Estratégia de posicionamento de marca
Plano de ação com metas e prazos definidos
Recomendações de ferramentas e plataformas
Acompanhamento mensal dos resultados
Benefícios:
Visão clara do potencial do seu negócio
Estratégia personalizada para seus objetivos
Redução de custos com ações desnecessárias
Aceleração do crescimento digital
Suporte especializado contínuo
Gerenciamento de Redes Sociais
Criação de conteúdo, calendário e atendimento estratégico

Gestão completa das suas redes sociais com criação de conteúdo estratégico, calendário editorial e atendimento ao cliente.

Serviço contínuo mensal
A partir de R$ 897/mês
Ver Menos
O que inclui:
Criação de conteúdo personalizado (posts, stories, reels)
Calendário editorial estratégico mensal
Copywriting persuasivo e engajador
Hashtags estratégicas para alcance orgânico
Atendimento e resposta aos comentários
Monitoramento de métricas e engajamento
Relatórios mensais de performance
Sugestões de melhorias contínuas
Benefícios:
Presença digital consistente e profissional
Aumento do engajamento e seguidores
Economia de tempo para focar no negócio
Conteúdo estratégico que converte
Relacionamento próximo com o público
Calendário de Conteúdo
Planejamento completo com ideias de posts, reels e stories

Calendário editorial estratégico com 30 dias de conteúdo planejado, incluindo posts, stories e reels para suas redes sociais.

10 dias úteis
A partir de R$ 497
Ver Menos
O que inclui:
30 ideias de posts para feed do Instagram
15 ideias de stories interativos
10 roteiros para reels virais
Calls-to-action estratégicos
Cronograma de publicação otimizado
Templates editáveis no Canva
Benefícios:
Organização total do seu conteúdo
Nunca mais ficar sem ideias para postar
Conteúdo estratégico que engaja
Economia de tempo no planejamento
Crescimento orgânico consistente
Análise de Perfil e Comportamento do Público
Diagnóstico com sugestões práticas de melhoria

Análise profunda do seu perfil e audiência com insights valiosos e sugestões práticas para otimizar sua presença digital.

5-7 dias úteis
A partir de R$ 297
Ver Menos
O que inclui:
Auditoria completa do perfil no Instagram
Análise da bio, destaques e feed
Estudo do comportamento da audiência
Identificação de horários de maior engajamento
Análise da concorrência direta
Sugestões de melhoria no conteúdo
Recomendações de hashtags estratégicas
Plano de ação para crescimento
Benefícios:
Conhecimento profundo da sua audiência
Otimização do perfil para conversão
Estratégias baseadas em dados reais
Vantagem competitiva no mercado
Crescimento direcionado e eficiente

Mentorias Estratégicas
Individuais ou em grupo, voltadas para crescimento digital

Sessões de mentoria personalizadas para acelerar seu aprendizado e crescimento no marketing digital.

Agendamento imediato
R$ 397 (individual) / R$ 297 (grupo)
Ver Menos
O que inclui:
Sessões de 1h30 individuais ou em grupo
Diagnóstico personalizado do seu negócio
Estratégias específicas para seu nicho
Plano de ação passo a passo
Suporte para implementação
Material de apoio exclusivo
Gravação da sessão para revisão
Follow-up de 30 dias
Benefícios:
Aprendizado acelerado e direcionado
Estratégias personalizadas para seu negócio
Suporte especializado contínuo
Economia de tempo e recursos
Resultados mais rápidos e eficientes
Gestão de Tráfego Pago
Campanhas no Google Ads e Meta, com relatórios

Criação e gestão de campanhas de tráfego pago para maximizar seu ROI e acelerar o crescimento do seu negócio.

Setup em 3-5 dias
Taxa de gestão: 20% do investimento + R$ 497/mês
Ver Menos
O que inclui:
Criação de campanhas no Google Ads
Campanhas no Facebook e Instagram Ads
Segmentação avançada de público
Criação de anúncios persuasivos
Otimização contínua das campanhas
Relatórios semanais de performance
Análise de ROI e conversões
Diferencial: Especialização em B2B e Saúde, e a metodologia 4D com foco em ROI.
Acompanhamento de Resultados: Dashboards transparentes e reuniões semanais/quinzenais para analisar KPIs (Taxa de Conversão, ROI, Tráfego) e otimizar campanhas.

Informações Adicionais do Site:
Estratégia Digital que Transforma Sua Marca em Autoridade e Vendas.
Estratégia, design e performance digital focados em crescimento sustentável e autoridade de marca.

Agendar Consultoria Gratuita
Ver Cases de Sucesso
Profissional de Marketing analisando gráficos de crescimento
Nossa Metodologia 4D
Um processo transparente e focado em resultados mensuráveis, garantindo que cada etapa do seu projeto digital seja executada com precisão estratégica.

1. Diagnóstico
Analisamos sua presença atual, público-alvo (B2B, Saúde, Estética) e concorrência. Definimos metas claras e um plano de ação estratégico.

2. Design Estratégico
Criamos a arquitetura da informação e o design visual do seu site, focando em UX (Experiência do Usuário) e CRO (Otimização da Taxa de Conversão).

3. Desenvolvimento e Conteúdo
Construímos seu site com tecnologia de ponta (React/Vite), conteúdo otimizado para SEO e configuração de ferramentas de performance.

4. Decolar e Otimizar
Lançamos o projeto e iniciamos a gestão de tráfego pago e a análise contínua de dados para garantir o ROI e o crescimento sustentável.

Metodologia 4D: Diagnóstico, Design, Desenvolvimento, Decolar
Soluções Completas para o Seu Crescimento
Nossos serviços são modulares e integrados, projetados para cobrir todas as frentes da sua estratégia digital.

Criação de Sites de Alta Conversão
Criação de Sites de Alta Conversão
Desenvolvemos sites institucionais e landing pages focados em performance, com design exclusivo e tecnologia otimizada para buscadores.

Saiba mais
Gestão de Tráfego Pago (Performance)
Gestão de Tráfego Pago (Performance)
Campanhas inteligentes no Google Ads e Meta Ads, segmentadas para atrair leads qualificados e maximizar o retorno sobre o investimento (ROI).

Saiba mais
Marketing de Conteúdo e SEO
Marketing de Conteúdo e SEO
Produção de conteúdo estratégico que posiciona sua marca como autoridade, gerando tráfego orgânico e nutrindo leads ao longo do funil de vendas.

Saiba mais
Nossos Clientes Falam por Nós
Veja o que dizem empresários e profissionais liberais de diversas áreas sobre a Metodologia 4D.
Perguntas Frequentes
Q:
Qual o diferencial da Apezato Marketing?
A:
Nossa especialização em nichos de alto valor (B2B e Saúde) e a metodologia 4D, que garante um processo transparente e focado em ROI.

Q:
Qual o prazo para a criação de um site?
A:
O prazo varia de 10 a 15 dias úteis, dependendo da complexidade e do escopo do projeto, garantindo a qualidade e otimização em todas as etapas.

Q:
Vocês fazem apenas sites ou também gerenciam tráfego?
A:
Oferecemos soluções completas, desde a criação do site até a gestão de tráfego pago (Google Ads, Meta Ads) e a estratégia de conteúdo (SEO).

Q:
Como é feito o acompanhamento dos resultados?
A:
Utilizamos dashboards transparentes e reuniões semanais/quinzenais para analisar KPIs (Taxa de Conversão, ROI, Tráfego) e otimizar as campanhas.

Pronto para Transformar Sua Presença Digital?
Agende uma consultoria gratuita e descubra como a Metodologia 4D pode impulsionar seu negócio.

Agendar Agora
Sobre a Apezato Marketing
Conheça nossa história, nossa missão e como transformamos pequenos negócios em grandes sucessos através do marketing digital estratégico.

Nossa História (CEO: Danielle Apezato)
A Apezato Marketing nasceu da paixão por ajudar empreendedoras a realizarem seus sonhos no mundo digital. Fundada em 2023, nossa agência começou como um projeto pessoal para apoiar pequenos negócios que precisavam de uma presença digital forte e estratégica.

Desde o início, nosso foco sempre foi entregar resultados reais e mensuráveis. Começamos atendendo empreendedoras locais em Jacareí e região, e rapidamente expandimos nosso alcance para todo o Brasil, sempre mantendo o atendimento personalizado que nos diferencia no mercado.

Hoje, somos reconhecidos como uma das principais agências especializadas em marketing digital para empreendedoras online, com mais de 50 clientes atendidos e resultados que falam por si só.

Marcos Importantes
2023 - Fundação da Apezato Marketing
2023 - Primeiros 5 clientes atendidos
2024 - Expansão para todo o Brasil
2024 - Primeiros 10 clientes atendidos
2025 - Mais de 20 clientes atendidos
2025 - Lançamento de novos serviços
Nossa Missão, Visão e Valores
Guiamos nosso trabalho por princípios que garantem excelência e resultados para nossos clientes.

Missão
Impulsionar o crescimento de empreendedoras online, transformando suas ideias em negócios de sucesso através de estratégias de marketing digital inovadoras e personalizadas.

Visão
Ser a agência de marketing digital referência para empreendedoras no Brasil, reconhecida pela excelência, inovação e pelo impacto positivo nos resultados de nossos clientes.

Valores
Transparência, Inovação, Compromisso com Resultados, Atendimento Personalizado e Ética em todas as relações.

Nossos Pilares de Atuação
Construímos estratégias sólidas baseadas em fundamentos que garantem o sucesso do seu negócio.

Criatividade
Soluções inovadoras e designs que capturam a atenção e expressam a essência da sua marca.

Resultados
Foco em métricas e estratégias que geram crescimento real e retorno sobre o investimento.

Parceria
Construímos relacionamentos duradouros, trabalhando lado a lado com você para alcançar seus objetivos.

Excelência
Buscamos a perfeição em cada detalhe, entregando serviços de alta qualidade que superam as expectativas.

Danielle Apezato - CEO da Apezato Marketing
Danielle Apezato
CEO

Conheça nossa Fundadora
Danielle Apezato é a mente criativa e estratégica por trás da Apezato Marketing. Com uma paixão inabalável por empreendedorismo e marketing digital, Danielle fundou a agência com o objetivo de capacitar mulheres a transformarem seus negócios online.

Sua expertise abrange desde a criação de identidades visuais impactantes até a gestão de tráfego pago e estratégias de conteúdo que geram resultados reais. Com anos de experiência no mercado, Danielle lidera a equipe da Apezato Marketing com uma visão clara: oferecer soluções personalizadas que impulsionam o sucesso de cada cliente. Site Oficial: https://apezatomarketing.netlify.app/

Acredita que o marketing digital é uma ferramenta poderosa para democratizar o acesso ao sucesso no empreendedorismo, e dedica-se a construir parcerias duradouras baseadas em confiança e resultados.

Pronta para Impulsionar sua Marca?
Agende sua consultoria gratuita e descubra como podemos transformar seu negócio.

Agendar Consultoria
Por que Escolher a Apezato Marketing?
Nosso compromisso é com o seu sucesso. Conheça os diferenciais que nos tornam a escolha ideal para sua marca.

Experiência Comprovada
Anos de atuação no mercado digital

Com anos de experiência, já ajudamos diversas empresas a alcançarem seus objetivos de marketing digital.

Saiba Mais
Abordagem Personalizada
Soluções sob medida para seu negócio

Cada projeto é único. Desenvolvemos estratégias personalizadas que se encaixam perfeitamente nas suas necessidades e metas.

Saiba Mais
Foco em Resultados
Métricas claras e crescimento mensurável

Nosso objetivo é o seu crescimento. Monitoramos métricas e otimizamos campanhas para garantir resultados reais e mensuráveis.

Saiba Mais
Suporte Dedicado
Atendimento próximo e eficiente

Conte com uma equipe de suporte sempre pronta para tirar suas dúvidas e oferecer o apoio necessário.

Saiba Mais
Nossa equipe possui vasta experiência em diversas áreas do marketing digital, incluindo SEO, mídias sociais, tráfego pago e criação de conteúdo. Trabalhamos com clientes de diferentes portes e segmentos, sempre buscando as melhores estratégias para cada um. Nossos cases de sucesso comprovam a eficácia de nossas metodologias e o compromisso com resultados reais.
Acreditamos que não existe uma fórmula mágica para o sucesso. Por isso, cada cliente recebe uma atenção individualizada e um plano de marketing digital feito sob medida. Realizamos um diagnóstico aprofundado do seu negócio, mercado e público-alvo para criar soluções que realmente gerem impacto e retorno sobre o investimento.
Trabalhamos com metas claras e indicadores de performance (KPIs) bem definidos. Nossas ações são constantemente monitoradas e otimizadas para garantir o melhor retorno possível. Apresentamos relatórios transparentes e detalhados, para que você acompanhe de perto o crescimento do seu negócio e o impacto das nossas estratégias.
Nosso suporte vai além do básico. Estamos sempre disponíveis para atender suas demandas, tirar dúvidas e oferecer orientações. Seja por WhatsApp, e-mail ou reuniões online, nossa equipe está comprometida em garantir que você tenha todo o apoio necessário para implementar as estratégias e alcançar seus objetivos. Sua satisfação é nossa prioridade.
Nossos Serviços Especializados
Cada serviço é cuidadosamente desenvolvido para atender às necessidades específicas do seu negócio
Consultoria de Marketing Digital
Diagnóstico + plano personalizado

Análise completa do seu negócio digital com diagnóstico detalhado e plano estratégico personalizado para acelerar seu crescimento.

7-10 dias úteis
A partir de R$ 497
Ver Menos
O que inclui:
Análise completa da presença digital atual
Diagnóstico de pontos fortes e oportunidades de melhoria
Definição de personas e público-alvo
Estratégia de posicionamento de marca
Plano de ação com metas e prazos definidos
Recomendações de ferramentas e plataformas
Acompanhamento mensal dos resultados
Benefícios:
Visão clara do potencial do seu negócio
Estratégia personalizada para seus objetivos
Redução de custos com ações desnecessárias
Aceleração do crescimento digital
Suporte especializado contínuo
Gerenciamento de Redes Sociais
Criação de conteúdo, calendário e atendimento estratégico

Gestão completa das suas redes sociais com criação de conteúdo estratégico, calendário editorial e atendimento ao cliente.

Serviço contínuo mensal
A partir de R$ 897/mês
Ver Menos
O que inclui:
Criação de conteúdo personalizado (posts, stories, reels)
Calendário editorial estratégico mensal
Copywriting persuasivo e engajador
Hashtags estratégicas para alcance orgânico
Atendimento e resposta aos comentários
Monitoramento de métricas e engajamento
Relatórios mensais de performance
Sugestões de melhorias contínuas
Benefícios:
Presença digital consistente e profissional
Aumento do engajamento e seguidores
Economia de tempo para focar no negócio
Conteúdo estratégico que converte
Relacionamento próximo com o público
Calendário de Conteúdo
Planejamento completo com ideias de posts, reels e stories

Calendário editorial estratégico com 30 dias de conteúdo planejado, incluindo posts, stories e reels para suas redes sociais.

10 dias úteis
A partir de R$ 497
Ver Menos
O que inclui:
30 ideias de posts para feed do Instagram
15 ideias de stories interativos
10 roteiros para reels virais
Calls-to-action estratégicos
Cronograma de publicação otimizado
Templates editáveis no Canva
Benefícios:
Organização total do seu conteúdo
Nunca mais ficar sem ideias para postar
Conteúdo estratégico que engaja
Economia de tempo no planejamento
Crescimento orgânico consistente
Análise de Perfil e Comportamento do Público
Diagnóstico com sugestões práticas de melhoria

Análise profunda do seu perfil e audiência com insights valiosos e sugestões práticas para otimizar sua presença digital.

5-7 dias úteis
A partir de R$ 297
Ver Menos
O que inclui:
Auditoria completa do perfil no Instagram
Análise da bio, destaques e feed
Estudo do comportamento da audiência
Identificação de horários de maior engajamento
Análise da concorrência direta
Sugestões de melhoria no conteúdo
Recomendações de hashtags estratégicas
Plano de ação para crescimento
Benefícios:
Conhecimento profundo da sua audiência
Otimização do perfil para conversão
Estratégias baseadas em dados reais
Vantagem competitiva no mercado
Crescimento direcionado e eficiente

Mentorias Estratégicas
Individuais ou em grupo, voltadas para crescimento digital

Sessões de mentoria personalizadas para acelerar seu aprendizado e crescimento no marketing digital.

Agendamento imediato
R$ 397 (individual) / R$ 297 (grupo)
Ver Menos
O que inclui:
Sessões de 1h30 individuais ou em grupo
Diagnóstico personalizado do seu negócio
Estratégias específicas para seu nicho
Plano de ação passo a passo
Suporte para implementação
Material de apoio exclusivo
Gravação da sessão para revisão
Follow-up de 30 dias
Benefícios:
Aprendizado acelerado e direcionado
Estratégias personalizadas para seu negócio
Suporte especializado contínuo
Economia de tempo e recursos
Resultados mais rápidos e eficientes
Gestão de Tráfego Pago
Campanhas no Google Ads e Meta, com relatórios

Criação e gestão de campanhas de tráfego pago para maximizar seu ROI e acelerar o crescimento do seu negócio.

Setup em 3-5 dias
Taxa de gestão: 20% do investimento + R$ 497/mês
Ver Menos
O que inclui:
Criação de campanhas no Google Ads
Campanhas no Facebook e Instagram Ads
Segmentação avançada de público
Criação de anúncios persuasivos
Otimização contínua das campanhas
Relatórios semanais de performance
Análise de ROI e conversões
Suporte e ajustes constantes
Benefícios:
Resultados rápidos e mensuráveis
Aumento qualificado de leads
Otimização do investimento em anúncios
Crescimento acelerado das vendas
Dados precisos para tomada de decisão
Edição de Vídeos Profissional
Reels, vídeos para YouTube e anúncios

Edição profissional de vídeos para suas redes sociais, YouTube e campanhas publicitárias com qualidade cinematográfica.

3-5 dias úteis por vídeo
A partir de R$ 97 por vídeo
Ver Menos
O que inclui:
Edição de reels para Instagram e TikTok
Vídeos longos para YouTube
Anúncios em vídeo para campanhas
Correção de cor e áudio
Inserção de legendas e textos
Efeitos visuais e transições
Trilha sonora e sound design
Entrega em múltiplos formatos
Benefícios:
Vídeos com qualidade profissional
Maior engajamento e alcance
Economia de tempo na produção
Conteúdo que se destaca na multidão
Aumento da credibilidade da marca
Identidade Visual e Branding
Criação completa da identidade da marca, logotipo, manual etc.

Desenvolvimento completo da identidade visual da sua marca, incluindo logotipo, paleta de cores, tipografia e manual de uso.

7-10 dias úteis
A partir de R$ 697
Ver Menos
O que inclui:
Criação de logotipo exclusivo
Paleta de cores estratégica
Seleção de tipografia
Manual de identidade visual
Aplicações em diferentes materiais
Versões para redes sociais
Cartão de visitas digital
Templates para posts e stories
Arquivos em alta resolução
Benefícios:
Marca profissional e memorável
Diferenciação no mercado
Consistência visual em todos os materiais
Aumento da credibilidade
Facilidade para criar novos materiais
Nossos Produtos
Produtos digitais prontos para usar que vão acelerar o crescimento do seu negócio. Desenvolvidos por especialistas e testados por centenas de empreendedoras.

Falar com Especialista
Por que Escolher Nossos Produtos?
Entrega Imediata
Produtos digitais com acesso instantâneo após confirmação do pagamento

Garantia de 7 Dias
Satisfação garantida ou seu dinheiro de volta conforme contrato

Suporte Incluso
Suporte especializado para tirar dúvidas e ajudar na implementação

Bônus Exclusivos
Materiais extras e atualizações de acordo com o produto/serviço contratado

Produtos em Destaque
Cada produto foi cuidadosamente desenvolvido para resolver problemas específicos do seu negócio
Pack de Posts
Posts prontos e personalizáveis para engajar seguidores

Conjunto completo de posts profissionais prontos para usar, totalmente editáveis e estrategicamente desenvolvidos para aumentar o engajamento.

A partir de R$ 297
Imediata após pagamento
Comprar AgoraVer Menos
O que está incluído:
30 posts editáveis no Canva
Designs modernos e profissionais
Textos persuasivos incluídos
Paleta de cores personalizável
Formatos para Instagram e Facebook
Guia de uso e dicas de publicação
Sugestões de hashtags
Atualizações gratuitas por 3 meses
Benefícios:
Economia de tempo na criação
Visual profissional garantido
Aumento do engajamento
Consistência visual da marca
Facilidade de personalização
Entrega:
Imediata após pagamento

Formato:
Templates Canva + PDF com instruções
Identidade Visual Completa
Paleta, logo, fontes, guia de uso

Identidade visual completa para sua marca, incluindo logotipo, paleta de cores, tipografia e manual de aplicação.

A partir de R$ 297
7-10 dias úteis
Comprar AgoraVer Menos
O que está incluído:
Logotipo principal + variações
Paleta de cores estratégica
Seleção de tipografia
Manual de identidade visual
Aplicações em diferentes materiais
Versões para redes sociais
Cartão de visitas digital
Arquivos em alta resolução (PNG, JPG, PDF, AI)
Benefícios:
Marca profissional e memorável
Diferenciação no mercado
Consistência em todos os materiais
Aumento da credibilidade
Facilidade para criar novos materiais
Entrega:
7-10 dias úteis

Formato:
Arquivos digitais + Manual PDF
Criação de Logotipo
De 2 a 3 propostas + ajustes ilimitados + arquivo final

Criação de logotipo exclusivo para sua marca com múltiplas propostas, ajustes ilimitados e entrega de arquivos finais.

A partir de R$ 397
5-7 dias úteis
Comprar AgoraVer Menos
O que está incluído:
2-3 propostas iniciais diferentes
Ajustes ilimitados na proposta escolhida
Versões colorida, monocromática e negativa
Aplicação em diferentes fundos
Arquivos vetoriais e bitmap
Guia básico de uso
Versões horizontais e verticais
Suporte pós-entrega por 30 dias
Benefícios:
Logo exclusivo e original
Múltiplas opções para escolher
Ajustes até ficar perfeito
Arquivos profissionais
Suporte especializado
Entrega:
5-7 dias úteis

Formato:
Arquivos AI, PNG, JPG, PDF
Mentoria Express (1h30)
Diagnóstico + passo a passo para crescimento digital

Sessão intensiva de mentoria com diagnóstico completo do seu negócio e plano de ação para crescimento digital.

A partir de R$ 497
Agendamento em até 48h
Comprar AgoraVer Menos
O que está incluído:
Sessão de 1h30 via Google Meet
Diagnóstico completo do negócio
Análise da presença digital atual
Plano de ação personalizado
Estratégias específicas para seu nicho
Material de apoio exclusivo
Gravação da sessão
Follow-up por WhatsApp (30 dias)
Benefícios:
Clareza sobre próximos passos
Estratégias personalizadas
Economia de tempo e recursos
Suporte especializado
Resultados mais rápidos
Entrega:
Agendamento em até 48h

Formato:
Sessão online + materiais digitais
Análise de Perfil Completa
Diagnóstico profundo com relatório detalhado

Análise completa do seu perfil nas redes sociais com relatório detalhado e sugestões de melhoria.

A partir de R$ 397
3-5 dias úteis
Comprar AgoraVer Menos
O que está incluído:
Auditoria completa do Instagram
Análise da bio, destaques e feed
Estudo da audiência e engajamento
Análise da concorrência
Relatório com gráficos e métricas
Sugestões práticas de melhoria
Plano de ação para crescimento
Suporte para implementação (7 dias)
Benefícios:
Visão clara dos pontos de melhoria
Estratégias baseadas em dados
Conhecimento da concorrência
Plano de ação direcionado
Crescimento mais eficiente
Entrega:
3-5 dias úteis

Formato:
Relatório PDF + Planilha Excel

Landing Page Profissional
Página de captura otimizada para conversão

Landing page profissional desenvolvida para capturar leads e converter visitantes em clientes.

A partir de R$ 897
7-10 dias úteis
Comprar AgoraVer Menos
O que está incluído:
Design responsivo e moderno
Otimizada para conversão
Formulário de captura integrado
Integração com ferramentas de email
Hospedagem por 1 ano inclusa
Certificado SSL gratuito
Otimização para SEO básico
Suporte técnico por 3 meses
Benefícios:
Aumento na captura de leads
Profissionalização da marca
Maior credibilidade
Facilidade de compartilhamento
Métricas de conversão
Entrega:
7-10 dias úteis

Formato:
Site online + treinamento

Site Institucional (até 5 páginas)
Site completo para sua empresa

Site institucional completo com até 5 páginas, design responsivo e otimizado para conversão.

A partir de R$ 1.297
10-15 dias úteis
Comprar AgoraVer Menos
O que está incluído:
Até 5 páginas personalizadas
Design responsivo e moderno
Otimização para SEO
Formulário de contato
Integração com redes sociais
Painel administrativo
Suporte técnico por 6 meses
Benefícios:
Presença digital profissional
Credibilidade da marca
Facilidade de encontrar online
Geração de leads qualificados
Diferenciação da concorrência
Entrega:
10-15 dias úteis

Formato:
Site online + treinamento
Precisa de Algo Personalizado?
Não encontrou exatamente o que precisa? Criamos soluções personalizadas para seu negócio. Entre em contato e vamos desenvolver o produto ideal para suas necessidades.

Orçamento Personalizado
Conte-nos sobre seu projeto e receba uma proposta sob medida em até 24 horas

Solicitar Orçamento
Por que Escolher Nossos Produtos?
Suporte Completo
Ajuda para implementar tudo corretamente

Você não fica sozinha! Oferecemos suporte completo para implementar e otimizar todos os produtos adquiridos.

Ver Menos
Junto com cada produto, você recebe guias detalhados de implementação, vídeos explicativos e acesso direto ao nosso suporte via WhatsApp. Nossa equipe está disponível para esclarecer dúvidas, sugerir adaptações e ajudar você a extrair o máximo potencial de cada produto. Também oferecemos sessões de consultoria para personalização avançada.
Atualizações Gratuitas
Melhorias contínuas sem custo adicional

Seus produtos evoluem junto com as tendências do mercado através de atualizações gratuitas regulares.

Ver Menos
O mundo digital muda rapidamente, e nossos produtos acompanham essas mudanças. Você recebe atualizações gratuitas que incluem novos designs, textos otimizados, novas estratégias e adaptações para tendências emergentes. Isso garante que seus materiais sempre estejam alinhados com as melhores práticas do mercado.
Personalização Fácil
Adapte tudo à identidade da sua marca

Todos os produtos são totalmente personalizáveis, permitindo que você adapte cores, textos e elementos à sua marca.

Ver Menos
Nossos produtos são desenvolvidos em plataformas como Canva e Figma, facilitando a personalização. Você pode alterar cores, fontes, imagens e textos com poucos cliques. Fornecemos guias de personalização que ensinam como adaptar cada elemento mantendo a eficácia estratégica. Assim, você mantém sua identidade visual sem perder a performance dos materiais.

Compre com Total Segurança
Garantia de 7 Dias Úteis
Se não ficar completamente satisfeita com qualquer produto, devolvemos 100% do seu investimento conforme acordado em contrato. Sua satisfação é nossa prioridade.

Produtos Testados

Validados por centenas de clientes

Suporte Incluso

Ajuda para implementar tudo

Atualizações Gratuitas

Melhorias sem custo adicional
Entre em Contato: apezatomarketing@gmail.com
Estamos aqui para ajudar você a transformar seu negócio. Entre em contato conosco e vamos conversar sobre como podemos impulsionar sua marca juntas.

WhatsApp Direto
Preencher Formulário
Informações de Contato: apezatomarketing@gmail.com
Escolha a forma de contato que preferir. Estamos sempre disponíveis para ajudar você

WhatsApp
(12) 99189-5547 (WhatsApp)

Atendimento rápido e direto

Entrar em Contato: apezatomarketing@gmail.com
Telefone Fixo
(12) 2023-8569 (Telefone Fixo)

Horário comercial

Entrar em Contato: apezatomarketing@gmail.com
E-mail
apezatomarketing@gmail.com

Resposta em até 24 horas

Localização
Jacareí, SP (Atendimento em todo o Brasil)

Atendimento presencial e online

Horário de Atendimento
Segunda a Sexta: 9h às 18h

Atendimento via WhatsApp disponível 24h para urgências

Envie sua Mensagem
Preencha o formulário abaixo e entraremos em contato em até 24 horas. Quanto mais detalhes você fornecer, melhor poderemos ajudar você.

Nome Completo *
Seu nome completo
E-mail *
seu@email.com
WhatsApp *
(11) 99999-9999
Assunto *

Selecione um assunto
Mensagem *
Conte-nos sobre seu projeto, objetivos e como podemos ajudar você...
Enviar Mensagem
Ao enviar este formulário, você será redirecionado para nosso WhatsApp para continuar a conversa.

Siga-nos nas Redes Sociais
Instagram
@danielleapezato

Acompanhe nossos bastidores e dicas diárias

Seguir
TikTok
@apezatomarketing

Conteúdo rápido e estratégias práticas

Seguir
Agende sua Consultoria Gratuita
Prefere conversar diretamente? Agende uma consultoria gratuita de 30 minutos para discutir seus objetivos e como podemos ajudar.

Agendar Agora
Nossa Localização
Estamos localizados em Jacareí, SP (Atendimento em todo o Brasil), mas atendemos clientes de todo o Brasil através de nossos serviços digitais.

Cidade: Jacareí, São Paulo

Atendimento: Presencial e Online

Cobertura: Todo o Brasil

Vamos Conversar sobre seu Projeto?
Estamos ansiosas para conhecer sua história e ajudar você a alcançar seus objetivos
Central de Suporte
Estamos aqui para ajudar você! Encontre respostas para suas dúvidas, acesse informações sobre garantias e entre em contato.

Suporte via WhatsApp
Ver FAQ
Perguntas Frequentes (FAQ)
Encontre respostas para as dúvidas mais comuns sobre nossos serviços e produtos


Vocês entregam identidade visual impressa?

Quais os prazos de entrega dos serviços?

Como recebo os arquivos dos produtos?

Quais formas de pagamento são aceitas?

Oferecem suporte após a entrega?
Garantia e Reembolso
Sua satisfação é nossa prioridade. Conheça nossa política de garantia

Garantia de 7 Dias Úteis
Oferecemos garantia de satisfação de 7 dias úteis para todos os nossos produtos e serviços. Se não ficar completamente satisfeita com o resultado, devolvemos 100% do seu investimento conforme acordado em contrato.

Reembolso integral em até 7 dias úteis
Processo simples e transparente
Sem burocracia desnecessária
Política de Pagamentos
Trabalhamos com total transparência em nossos pagamentos e reembolsos. Conheça nossa política detalhada.

PIX, Cartão e PagSeguro aceitos
Parcelamento em até 12x no cartão
Reembolso no mesmo método de pagamento
Prazos de Entrega
Consulte os prazos médios para cada serviço

Identidade Visual Completa
7-10 dias úteis

Criação de Logotipo
5-7 dias úteis

Calendário de Conteúdo
10 dias úteis

Pack de Posts
5 dias úteis

Landing Page
7-10 dias úteis

Site Institucional
10-15 dias úteis

Análise de Perfil
3-5 dias úteis

Mentoria Express
Agendamento em 48h

Ainda tem Dúvidas?
Nossa equipe está sempre pronta para ajudar você. Entre em contato conosco!

Falar no WhatsApp
Contato: apezatomarketing@gmail.com
(12) 2023-8569 (Telefone Fixo)
(12) 99189-5547 (WhatsApp)
Jacareí, SP (Atendimento em todo o Brasil)
9h às 18h, seg-sex. E-mail: apezatomarketing@gmail.com
Navegação
Início
Sobre
Serviços
Cases de Sucesso
Produtos
Contato: apezatomarketing@gmail.com
Suporte

Política de Privacidade

Política de Privacidade da Apezato Marketing
Última atualização: 29 de Outubro de 2025

A Apezato Marketing ("nós", "nosso" ou "a Empresa") está comprometida em proteger a privacidade dos seus usuários. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nosso site e serviços.

1. Coleta de Informações (O que coletamos?)
Coletamos informações que você nos fornece diretamente, tais como:

Dados de Identificação e Contato: apezatomarketing@gmail.com: Nome, e-mail, telefone, nome da empresa, cargo, e quaisquer outras informações fornecidas em formulários de contato ou diagnóstico.
Dados de Uso: Informações sobre como você utiliza nosso site, incluindo páginas visitadas, tempo de permanência, links clicados e dados de navegação.
2. Uso das Informações (Como usamos?)
Utilizamos as informações coletadas para:

Fornecer e Manter: Fornecer, operar e manter nossos serviços.
Melhorar: Melhorar, personalizar e expandir nosso site e serviços.
Analisar: Entender e analisar como você utiliza nosso site.
Comunicação: Comunicar-nos com você para atendimento ao cliente, fornecer atualizações e para fins de marketing e promoção.
3. Compartilhamento de Informações (Com quem compartilhamos?)
Não vendemos, trocamos ou transferimos suas informações de identificação pessoal para terceiros. O compartilhamento ocorre apenas com:

Provedores de Serviço: Terceiros que nos auxiliam na operação do site (ex: ferramentas de análise de dados, plataformas de e-mail marketing).
Obrigações Legais: Quando exigido por lei ou em resposta a processos legais válidos.
4. Cookies e Tecnologias de Rastreamento
Utilizamos cookies e tecnologias de rastreamento semelhantes para rastrear a atividade em nosso serviço. Você pode instruir seu navegador a recusar todos os cookies.

5. Segurança dos Dados
Empregamos medidas de segurança razoáveis para proteger as informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.

6. Seus Direitos de Privacidade (LGPD)
De acordo com a Lei Geral de Proteção de Dados (LGPD) brasileira, você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais.

7. Alterações a Esta Política de Privacidade
Podemos atualizar nossa Política de Privacidade periodicamente. Aconselhamos que você revise esta página periodicamente para quaisquer alterações.

Contato: apezatomarketing@gmail.com: Para dúvidas sobre esta Política de Privacidade, entre em contato através do nosso WhatsApp ou e-mail.

Termos de Uso

Termos de Uso da Apezato Marketing
Última atualização: 29 de Outubro de 2025

Ao acessar ou usar nosso site, você concorda em cumprir estes Termos de Uso.

1. Uso do Site (O que é permitido?)
O conteúdo do nosso site é fornecido apenas para fins informativos e de marketing. Você concorda em não usar o site para qualquer finalidade ilegal ou proibida.

2. Propriedade Intelectual (Nossos Direitos)
Todo o conteúdo presente no site (textos, gráficos, logotipos, imagens) é propriedade da Apezato Marketing e é protegido por leis de direitos autorais. Você não pode reproduzir, distribuir ou modificar qualquer material sem permissão.

3. Limitação de Responsabilidade (Nossa Garantia)
A Apezato Marketing não se responsabiliza por quaisquer danos resultantes do seu acesso ou uso do site. Não garantimos a exatidão, integridade ou utilidade de todas as informações.

4. Links para Terceiros
Nosso site pode conter links para sites de terceiros. Não endossamos nem nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites.

5. Alterações nos Termos
Reservamo-nos o direito de revisar e atualizar estes Termos de Uso a qualquer momento.

6. Lei Aplicável
Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa do Brasil.

Contato: apezatomarketing@gmail.com: Para dúvidas sobre estes Termos de Uso, entre em contato através do nosso WhatsApp ou e-mail.

Política de Cookies

Política de Cookies da Apezato Marketing
Última atualização: 29 de Outubro de 2025

Este site utiliza cookies para melhorar a sua experiência de navegação.

1. O que são Cookies?
Cookies são pequenos arquivos de texto armazenados no seu dispositivo. Eles são amplamente utilizados para fazer com que os sites funcionem de forma mais eficiente.

2. Como Usamos Cookies (Tipos)
Utilizamos cookies para diversas finalidades:

Cookies Essenciais: Necessários para que o site funcione corretamente (ex: navegação).
Cookies de Performance/Análise: Coletam informações para melhorar o desempenho e a experiência do usuário.
Cookies de Funcionalidade: Permitem que o site se lembre das suas escolhas (como idioma).
Cookies de Publicidade/Rastreamento: Usados para exibir anúncios relevantes para o usuário.
3. Gerenciamento de Cookies (Seu Controle)
Você tem o direito de escolher se aceita ou não os cookies. Você pode configurar seu navegador para recusar todos os cookies.

Aceitação: Ao clicar em "Aceitar" no banner de cookies, você concorda com o uso.
Recusa: Se você recusar, algumas funcionalidades podem ser afetadas.
4. Alterações na Política de Cookies
Podemos atualizar esta Política de Cookies periodicamente.

Contato: Para dúvidas sobre esta Política de Cookies, entre em contato através do nosso WhatsApp ou e-mail. E-mail: apezatomarketing@gmail.com
Todos os direitos reservados - Apezato Marketing © 2025

TIKTOK: https://www.tiktok.com/@apezatomarketing
INSTAGRAM: https://www.instagram.com/danielleapezatomarketingdigita/
WHATSAPP: https://wa.me/5512991895547
`

const SYSTEM_PROMPT = `Você é a Assistente IA da Apezato Marketing, uma especialista em marketing digital, criação de sites e gestão de tráfego. Sua função é responder de forma clara, profissional e específica às dúvidas dos usuários, utilizando o contexto da empresa fornecido abaixo como sua principal fonte de informação. Responda em português brasileiro.

INSTRUÇÕES IMPORTANTES:
1. NUNCA use formatação Markdown como ** (negrito), ### (títulos) ou listas com * ou -. Use apenas texto simples e bem estruturado.
2. Se precisar destacar uma palavra importante, use apenas a palavra em MAIÚSCULAS.
3. Estruture as respostas em parágrafos claros e bem organizados.
4. Evite respostas genéricas. Seja específico e detalhado sobre os serviços da Apezato.
5. Se a resposta for muito longa, organize em parágrafos numerados (1, 2, 3, etc.) em vez de usar símbolos.
6. Em TODAS as respostas, finalize com as informações de contato:
"Apezato Marketing - Fundadora: Danielle Apezato | Telefone: (12) 2023-8569 | WhatsApp: (12) 99189-5547 | E-mail: contato@apezatomarketing.com.br"
7. Se o cliente mostrar interesse em contratar, colete seu nome, email e telefone para contato posterior.

CONTEXTO DA EMPRESA:
${context}

`

export async function handler(event, context) {
  // Apenas aceitar requisições POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método não permitido' })
    }
  }

  try {
    const { message, conversationHistory } = JSON.parse(event.body)

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Mensagem vazia' })
      }
    }

    const apiKey = process.env.GEMINI_API_KEY
    
    if (!apiKey) {
      console.error('ERRO: GEMINI_API_KEY não está configurada nas variáveis de ambiente do Netlify.')
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Erro de configuração: Chave da API Gemini ausente.' })
      }
    }
    
    // Inicializar Gemini com a chave de ambiente
    const ai = new GoogleGenAI({ apiKey })

    // Preparar histórico de conversas para o Gemini
    const messages = [
      {
        role: 'system',
        content: String(SYSTEM_PROMPT)
      },
      ...conversationHistory.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        content: String(msg.text)
      })),
      {
        role: 'user',
        content: String(message)
      }
    ]

    // Chamar Gemini API
    console.log('INFO: Chamando Gemini com modelo:', 'gemini-2.5-flash')
    const contents = messages.map(msg => ({
      role: msg.role === 'system' ? 'user' : msg.role, // Gemini não usa 'system' no array de contents
      parts: [{ text: String(msg.content) }]
    }))

    // O primeiro item do array de contents é o SYSTEM_PROMPT, que contém o contexto.
    // O Gemini usa o systemInstruction para o prompt principal.
    const systemInstruction = String(SYSTEM_PROMPT)
    const userContents = contents.slice(1)

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userContents,
      config: {
        systemInstruction: systemInstruction,
        maxOutputTokens: 2048,
        temperature: 0.7
      }
    })

    const reply = response.text

    // Retorna a resposta
    return {
      statusCode: 200,
      body: JSON.stringify({ reply })
    }
  } catch (error) {
    // Adicionar mais detalhes do erro ao log
    console.error('ERRO ao processar mensagem no Netlify Function:', error.message)
    
    // Se for um erro de API (ex: chave inválida, limite excedido), a mensagem de erro será mais específica
    let statusCode = 500
    let errorMessage = 'Erro ao processar mensagem.'
    if (error.status) {
        errorMessage = `Erro da API Gemini (Status ${error.status}): ${error.message}`
        statusCode = error.status
    } else if (error.message.includes('API key ou cota')) {
        errorMessage = 'Erro de autenticação: Verifique se a GEMINI_API_KEY está correta e se a cota não foi excedida.'
    }

    let userError = 'Desculpe, houve um erro ao processar sua mensagem. Por favor, tente novamente ou entre em contato conosco via WhatsApp.'

    if (statusCode === 429) {
        userError = 'Desculpe, o assistente de IA está temporariamente sobrecarregado. Por favor, tente novamente em alguns minutos.'
    } else if (statusCode === 400 || statusCode === 401) {
        userError = 'Erro de configuração: O assistente de IA não está configurado corretamente. Por favor, entre em contato com o suporte.'
    }
    
    return {
      statusCode: statusCode,
      body: JSON.stringify({ 
        error: userError, 
        details: errorMessage 
      })
    }
    
    // O bloco de retorno foi movido para o final do catch para usar o statusCode dinâmico.
    // O código original será removido pelo bloco de substituição anterior.
    // Este bloco é apenas um placeholder para garantir que o find/replace funcione corretamente.
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Desculpe, houve um erro ao processar sua mensagem. Por favor, entre em contato via WhatsApp.', 
        details: errorMessage 
      })
    }
  }
}
