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
| Catálogo | Exibição, ordenação e preservação das informações dos produtos |
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

**GitHub Actions:** execução dos testes no Chrome headless em Linux, acionada por pushes na main, pull requests destinados à main ou acionamento manual.

## 3. Cobertura e resultados

**Portfólio em construção: primeiros ciclos manuais de login e catálogo concluídos. São 11 testes automatizados aprovados localmente e no GitHub Actions.**

| Funcionalidade | Testes manuais executados | Testes automatizados | Defeitos identificados | Situação |
|---|---:|---:|---:|---|
| Login | 6 | 6 | 1 | Ciclo manual concluído; automação validada localmente e no CI |
| Catálogo | 5 | 5 | 0 | Ciclo manual concluído; automação validada localmente e no CI |
| Carrinho | — | — | — | Planejado |
| Checkout | — | — | — | Planejado |

### Resultados dos testes manuais

#### Login | QASD-R1

Ciclo de execução: QASD-R1.

- 6 casos de teste executados.
- 4 requisitos funcionais avaliados.
- 100% de cobertura dos requisitos identificados.
- 100% de aprovação nos critérios funcionais avaliados.
- 1 defeito visual reproduzido e investigado tecnicamente.

[Consultar relatório de encerramento do ciclo de login](docs/relatorio-ciclo-login.md).

#### Catálogo | QASD-R2

- 5 casos de teste executados em 16/11/2026.
- 4 requisitos propostos avaliados.
- 5 casos aprovados, com taxa de aprovação de 100%.
- Exibição das informações, quatro opções de ordenação e preservação dos dados verificadas nos seis produtos.
- Nenhum defeito identificado nas verificações deste ciclo.

[Consultar resultados do ciclo de catálogo](evidence/zephyr/catalogo/QASD-R2_resultados.md).

### Resultados dos testes automatizados

#### Login | QASD-10
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

A suíte também foi validada no GitHub Actions, em Linux com Chrome headless, com seis testes aprovados. Uma falha intencional no QASD-T1 confirmou a sinalização de falha no workflow e o upload da screenshot. Após restaurar a verificação original, os seis testes passaram novamente. A validação da QASD-11 foi realizada no [PR #1](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/1), encerrado sem merge.

A suíte contempla os seguintes cenários:

- Autenticação com credenciais válidas.
- Autenticação com senha incorreta.
- Autenticação com usuário vazio.
- Autenticação com senha vazia.
- Autenticação com ambos os campos vazios.
- Autenticação de usuário bloqueado.

Os testes utilizam seletores `data-test`, assertions para verificar os resultados esperados e configuração de isolamento entre cenários.

[Consultar código dos testes automatizados](cypress/e2e/login.cy.js).

#### Catálogo | QASD-14

Os cinco casos aprovados no ciclo manual QASD-R2 foram automatizados com Cypress:

- QASD-T7: exibição das informações dos produtos.
- QASD-T8: ordenação por nome crescente.
- QASD-T9: ordenação por nome decrescente.
- QASD-T10: ordenação por preço crescente.
- QASD-T11: ordenação por preço decrescente.

Os quatro testes de ordenação também verificam a opção selecionada e a preservação dos produtos e de suas informações.

| Validação local | Executados | Aprovados | Reprovados |
|---|---:|---:|---:|
| Catálogo em modo interativo | 5 | 5 | 0 |
| Catálogo em modo headless | 5 | 5 | 0 |
| Login e catálogo em modo headless | 11 | 11 | 0 |

As execuções locais foram realizadas em 16/11/2026, no macOS 15.8.3 com Chrome 157 e Cypress 16.2.1. A execução conjunta de login e catálogo também foi aprovada no GitHub Actions, em Linux com Chrome headless, com 11 testes aprovados e nenhuma falha no [PR #2](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/2).

Cada teste do catálogo realiza login antes de iniciar suas verificações. A função `getProducts()` captura nome, descrição, preço e endereço da imagem para comparar as informações antes e depois da ordenação.

A automação não exige quantidade fixa de seis produtos nem desempate entre preços iguais. A verificação de imagem carregada e visível não representa uma avaliação visual completa.

[Consultar código dos testes automatizados do catálogo](cypress/e2e/catalogo.cy.js).

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

Selecione **E2E Testing**, escolha o Google Chrome e abra `login.cy.js` ou `catalogo.cy.js`, conforme o fluxo que deseja executar.

### Execução headless

Execute todos os testes no Chrome:

```bash
npm run test:e2e -- --browser chrome
```

A execução conjunta foi validada localmente no Chrome 157, com 11 testes aprovados: seis de login e cinco de catálogo.

Para executar apenas os testes do catálogo:

```bash
npm run test:e2e -- --spec cypress/e2e/catalogo.cy.js --browser chrome
```

Para executar apenas os testes de login:

```bash
npm run test:e2e -- --spec cypress/e2e/login.cy.js --browser chrome
```

## 5. Documentação e rastreabilidade

| Documento | Conteúdo |
|---|---|
| [Análise funcional](docs/analise-funcional.md) | Reconhecimento dos principais fluxos da aplicação |
| [Plano de testes](docs/plano-de-testes.md) | Estratégia, escopo, riscos e prioridades |
| [Requisitos de login](docs/requisitos-login.md) | Requisitos, critérios de aceitação e matriz de rastreabilidade |
| [Relatório do ciclo de login](docs/relatorio-ciclo-login.md) | Resultados, cobertura, métricas e limitações |
| [QASD-8](docs/defects/QASD-8.md) | Relatório de defeito, investigação técnica e evidências |
| [Suíte automatizada de login](cypress/e2e/login.cy.js) | Implementação dos testes funcionais E2E |
| [Requisitos de catálogo](docs/requisitos-catalogo.md) | Requisitos propostos, critérios de aceitação, limites e matriz de rastreabilidade |
| [Suíte automatizada de catálogo](cypress/e2e/catalogo.cy.js) | Cinco testes E2E de exibição, ordenação e preservação das informações dos produtos |

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
| [Casos de teste](evidence/zephyr/login/01-casos-de-teste-login.png) | Biblioteca de casos, prioridades, versões e status |
| [Detalhamento do QASD-T2](evidence/zephyr/login/02-qasd-t2-details.png) | Objetivo, pré-condições e prioridade |
| [Passos do QASD-T2](evidence/zephyr/login/03-qasd-t2-script.png) | Procedimentos, dados de teste e resultados esperados |
| [Rastreabilidade do QASD-T2](evidence/zephyr/login/04-qasd-t2-traceability.png) | Vínculos entre história, defeito e automação |
| [Ciclo QASD-R1](evidence/zephyr/login/05-ciclo-qasd-r1-details.png) | Planejamento, ambiente e encerramento do ciclo |
| [Resultados do ciclo QASD-R1](evidence/zephyr/login/06-ciclo-qasd-r1-resultados.md) | Resumo das seis execuções manuais para consulta no GitHub |
| [Exportação original em Excel](evidence/zephyr/login/06-ciclo-qasd-r1-resultados.xlsx) | Relatório detalhado exportado do Zephyr Scale |
| [Resultados do ciclo QASD-R2](evidence/zephyr/catalogo/QASD-R2_resultados.md) | Resumo das cinco execuções manuais do catálogo |
| [Execução do catálogo no Zephyr](evidence/zephyr/catalogo/QASD-R2_resultados-execucao.png) | Registro dos resultados dos cinco casos |
| [Exportação original do catálogo em Excel](evidence/zephyr/catalogo/QASD-R2_resultados.xlsx) | Relatório detalhado exportado do Zephyr Scale |

### Cypress

| Evidência | Conteúdo |
|---|---|
| [Execução automatizada de login](evidence/cypress/01-login-execucao-interativa.png) | Execução interativa dos seis testes E2E no Google Chrome, com 100% de aprovação funcional |
| [Execução headless de login](evidence/cypress/02-login-execucao-headless.png) | Suíte executada no Chrome 157 em modo headless, com seis testes aprovados e nenhuma falha |
| [Execução no GitHub Actions](evidence/cypress/03-login-github-actions-sucesso.png) | Push na main disparou a execução dos seis testes, todos aprovados |
| [Falha controlada no CI](evidence/cypress/04-login-github-actions-falha-controlada.png) | Pull request disparou a execução com uma falha intencional e upload da screenshot como artefato |
| [Aprovação após restauração](evidence/cypress/05-login-github-actions-pr-restaurado.png) | Após remover a alteração temporária, os seis testes passaram novamente no pull request |
| [Execução manual no GitHub Actions](evidence/cypress/06-login-github-actions-manual.png) | Acionamento manual na main pelo evento workflow_dispatch, com seis testes aprovados e nenhuma falha |
| [Execução headless de login e catálogo](evidence/cypress/07-login-catalogo-execucao-headless.png) | Execução conjunta no Chrome 157, com 11 testes aprovados e nenhuma falha |
| [Execução interativa do catálogo](evidence/cypress/08-catalogo-execucao-interativa.png) | Cinco testes do catálogo aprovados no Google Chrome |
| [Login e catálogo no GitHub Actions](evidence/cypress/09-login-catalogo-github-actions-sucesso.png) | Execução conjunta no PR #2, em Linux com Chrome headless, com 11 testes aprovados e nenhuma falha |

As evidências registram etapas do desenvolvimento e da execução dos testes e complementam os documentos técnicos disponíveis no repositório.
