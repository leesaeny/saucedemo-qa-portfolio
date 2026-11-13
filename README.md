# SauceDemo | QA Portfolio

**Testes funcionais, investigação de defeitos e automação E2E com Cypress**

Portfólio de Quality Assurance aplicado ao [SauceDemo](https://www.saucedemo.com/), uma aplicação de demonstração de comércio eletrônico.

O projeto acompanha o processo de testes de software (STLC) desde a análise de requisitos até a avaliação dos resultados, com foco em **rastreabilidade, cobertura baseada em riscos e evidências reproduzíveis**.

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
| Zephyr Scale | Gerenciamento de casos, ciclos e execuções de teste |
| Cypress 16.2.1 | Automação de testes funcionais E2E |
| JavaScript | Implementação de testes automatizados e assertions |
| Node.js e npm | Ambiente de execução e gerenciamento de dependências |
| Chrome DevTools | Investigação técnica de defeitos e validação experimental |
| Git e GitHub | Controle de versão e documentação |
| VS Code | Desenvolvimento e manutenção das automações |

**GitHub Actions:** integração contínua prevista para uma etapa posterior.

## 3. Cobertura e resultados

**Situação atual: primeiro ciclo de testes manuais de login concluído e suíte automatizada implementada.**

| Funcionalidade | Testes manuais | Testes automatizados | Defeitos | Situação |
|---|---:|---:|---:|---|
| Login | 6 | 6 | 1 | Automação em validação |
| Catálogo | — | — | — | Planejado |
| Carrinho | — | — | — | Planejado |
| Checkout | — | — | — | Planejado |

### Resultados dos testes manuais

Ciclo de execução: QASD-R1.

- 6 casos de teste executados.
- 4 requisitos funcionais avaliados.
- 100% de cobertura dos requisitos identificados.
- 100% de aprovação nos critérios funcionais avaliados.
- 1 defeito visual reproduzido e investigado tecnicamente.

[Consultar relatório de encerramento do ciclo de login](docs/relatorio-ciclo-login.md).

### Resultados dos testes automatizados

Tarefa: QASD-10.

| Indicador | Resultado |
|---|---:|
| Casos manuais candidatos à automação | 6 |
| Casos automatizados | 6 |
| Testes executados | 6 |
| Testes aprovados | 6 |
| Testes reprovados | 0 |
| Cobertura dos casos funcionais do ciclo | 100% |
| Taxa de aprovação | 100% |

A primeira execução automatizada foi realizada localmente no Google Chrome, em modo interativo.

A suíte contempla os seguintes cenários:

- Autenticação com credenciais válidas.
- Autenticação com senha incorreta.
- Autenticação com usuário vazio.
- Autenticação com senha vazia.
- Autenticação com ambos os campos vazios.
- Autenticação de usuário bloqueado.

Os testes utilizam seletores `data-test`, assertions para verificar os resultados esperados e configuração de isolamento entre cenários.

[Consultar código dos testes automatizados](cypress/e2e/login.cy.js).

### Destaque: investigação de defeito

Durante a validação da autenticação com senha incorreta, foi identificado um problema de legibilidade na mensagem de erro.

A investigação com Chrome DevTools identificou uma limitação de altura no componente CSS. Uma possível solução foi avaliada experimentalmente em três cenários, sem modificar o código-fonte da aplicação.

[Consultar investigação técnica e evidências do QASD-8](docs/defects/QASD-8.md).

O defeito permanece aberto. A aprovação dos testes funcionais, manuais e automatizados, não representa ausência de defeitos nem validação visual completa da aplicação.

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

### Execução interativa

```bash
npm run test:e2e:open
```

Selecione **E2E Testing**, escolha o Google Chrome e abra o arquivo `login.cy.js`.

### Execução headless

```bash
npm run test:e2e
```

O comando executa a suíte automatizada no Chrome sem utilizar a interface interativa do Cypress.

Execução headless validada no Chrome 157 com os seis testes aprovados. Os seis cenários também foram executados individualmente, todos com aprovação.

## 5. Documentação e rastreabilidade

| Documento | Conteúdo |
|---|---|
| [Análise funcional](docs/analise-funcional.md) | Reconhecimento dos principais fluxos da aplicação |
| [Plano de testes](docs/plano-de-testes.md) | Estratégia, escopo, riscos e prioridades |
| [Requisitos de login](docs/requisitos-login.md) | Requisitos, critérios de aceitação e matriz de rastreabilidade |
| [Relatório do ciclo de login](docs/relatorio-ciclo-login.md) | Resultados, cobertura, métricas e limitações |
| [QASD-8](docs/defects/QASD-8.md) | Relatório de defeito, investigação técnica e evidências |
| [Suíte automatizada de login](cypress/e2e/login.cy.js) | Implementação dos testes funcionais E2E |

**Projeto no Jira:** [QASD | Portfolio QA - SauceDemo](https://leesaeny.atlassian.net/browse/QASD-1).

O Jira e o Zephyr Scale são utilizados para o gerenciamento das atividades, dos casos e das execuções. Os principais entregáveis estão disponíveis neste repositório para consulta pública.

## 6. Evidências de gerenciamento e execução

Registros obtidos diretamente do Jira e do Zephyr Scale durante o desenvolvimento do projeto.

### Jira

| Evidência | Conteúdo |
|---|---|
| [Board do projeto](evidence/jira/01-board-qasd.png) | Organização e acompanhamento das atividades de QA |
| [História QASD-4](evidence/jira/02-historia-login.png) | História de usuário, critérios de aceitação e resultado da validação |

### Zephyr Scale

| Evidência | Conteúdo |
|---|---|
| [Casos de teste](evidence/zephyr/01-casos-de-teste-login.png) | Biblioteca de casos, prioridades, versões e status |
| [Detalhamento do QASD-T2](evidence/zephyr/02-qasd-t2-details.png) | Objetivo, pré-condições e prioridade |
| [Passos do QASD-T2](evidence/zephyr/03-qasd-t2-script.png) | Procedimentos, dados de teste e resultados esperados |
| [Rastreabilidade do QASD-T2](evidence/zephyr/04-qasd-t2-traceability.png) | Vínculos entre história, defeito e automação |
| [Ciclo QASD-R1](evidence/zephyr/05-ciclo-qasd-r1-details.png) | Planejamento, ambiente e encerramento do ciclo |
| [Resultados do ciclo QASD-R1](evidence/zephyr/06-ciclo-qasd-r1-resultados.md) | Resumo das seis execuções manuais para consulta no GitHub |
| [Exportação original em Excel](evidence/zephyr/06-ciclo-qasd-r1-resultados.xlsx) | Relatório detalhado exportado do Zephyr Scale |

### Cypress

| Evidência | Conteúdo |
|---|---|
| [Execução automatizada de login](evidence/cypress/01-login-execucao-interativa.png) | Execução interativa dos seis testes E2E no Google Chrome, com 100% de aprovação funcional |
| [Execução headless de login](evidence/cypress/02-login-execucao-headless.png) | Suíte executada no Chrome 157 em modo headless, com seis testes aprovados e nenhuma falha |

As evidências registram etapas do desenvolvimento em 12 e 13/11/2026 e complementam os documentos técnicos disponíveis no repositório.
