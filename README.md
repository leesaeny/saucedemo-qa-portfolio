# SauceDemo | QA Portfolio

**Testes funcionais, investigação de defeitos e automação E2E com Cypress**

Portfólio de Quality Assurance aplicado ao [SauceDemo](https://www.saucedemo.com/), uma aplicação de demonstração de comércio eletrônico.

O projeto acompanha o processo de testes de software desde a análise de requisitos até a avaliação dos resultados, com foco em **rastreabilidade, cobertura baseada em riscos e evidências reproduzíveis**.

Desenvolvido como aplicação prática dos conhecimentos adquiridos no *Microsoft Junior QA Software Tester Professional Certificate*.

## 1. Visão geral

O projeto contempla quatro fluxos funcionais:

| Funcionalidade | O que será avaliado |
|---|---|
| Login | Autenticação, validação de entradas e controle de acesso |
| Catálogo | Exibição, seleção e consistência dos produtos |
| Carrinho | Inclusão, remoção, quantidade e integridade dos itens |
| Checkout | Validação de dados, resumo financeiro e conclusão do pedido |

A abordagem combina testes manuais, investigação exploratória e automação progressiva de cenários adequados à regressão.

Os critérios de validação são fundamentados em comportamentos observáveis e hipóteses documentadas, sem serem apresentados como requisitos oficiais do SauceDemo.

## 2. Tecnologias e ferramentas

| Ferramenta | Aplicação no projeto |
|---|---|
| Jira | Planejamento, acompanhamento e registro de defeitos |
| Zephyr | Gerenciamento de casos e execuções de teste |
| Cypress | Automação E2E, com ambiente inicial configurado |
| JavaScript e Node.js | Desenvolvimento e execução das automações |
| Git e GitHub | Versionamento e documentação |
| VS Code | Ambiente de desenvolvimento |

**GitHub Actions:** integração contínua prevista para uma etapa posterior.

## 3. Cobertura e resultados

**Situação atual: projeto em desenvolvimento.**

| Atividade | Situação |
|---|---|
| Reconhecimento dos quatro fluxos | Concluído |
| Planejamento e estratégia de testes | Documentados no Jira |
| Configuração inicial do Cypress | Concluída |
| Casos formais no Zephyr | Pendente |
| Execuções formais | Pendente |
| Testes automatizados | Pendente |
| Relatório final de testes | Pendente |

Durante o reconhecimento funcional, foi observado um redirecionamento inesperado para a tela de login em diferentes etapas da navegação. A ocorrência foi registrada com evidências e permanece pendente de investigação formal.

Os indicadores de cobertura, aprovação e defeitos serão publicados conforme houver execuções verificáveis.

## 4. Como executar

### Pré-requisitos

- Node.js e npm
- Google Chrome
- Git

### Preparação

Clone o repositório:

```bash
git clone https://github.com/leesaeny/saucedemo-qa-portfolio.git
```

Acesse o diretório:

```bash
cd saucedemo-qa-portfolio
```

Instale as dependências:

```bash
npm ci
```

Abra o Cypress:

```bash
npx cypress open
```

Selecione **E2E Testing** e o navegador desejado.

**Nota:** o ambiente de automação está configurado, mas ainda não existem testes automatizados publicados. As instruções de execução da suíte serão acrescentadas conforme os casos forem implementados.

## 5. Documentação e rastreabilidade

A documentação técnica será disponibilizada progressivamente, incluindo:

- Análise de requisitos e critérios de aceitação.
- Plano e estratégia de testes.
- Casos de teste e cobertura.
- Registros de execução e evidências.
- Investigações e relatórios de defeitos.
- Relatório final do ciclo.

**Projeto no Jira:** [QASD | SauceDemo QA Portfolio](https://leesaeny.atlassian.net/browse/QASD-1)

Os documentos publicados neste repositório serão vinculados aos respectivos registros do Jira, permitindo acompanhar o planejamento, a execução e os resultados do trabalho.