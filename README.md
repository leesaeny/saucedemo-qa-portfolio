# SauceDemo | QA Portfolio

**Testes manuais, investigação de defeitos e automação E2E com Cypress**

Projeto de Quality Assurance aplicado ao [SauceDemo](https://www.saucedemo.com/), uma aplicação de demonstração de comércio eletrônico. O objetivo é avaliar os fluxos de compra e documentar o processo de testes, da análise de requisitos à execução, investigação de defeitos e automação para apoio à regressão.

Desenvolvido por **Lee Saeny** como aplicação prática dos conhecimentos adquiridos no *Microsoft Junior QA Software Tester Professional Certificate*.

**Projeto em construção:** primeiros ciclos de login, catálogo e carrinho validados, com 17 casos manuais aprovados e 17 testes automatizados aprovados localmente e no GitHub Actions. Checkout permanece planejado; novas ampliações de cobertura serão tratadas em ciclos posteriores.

## 1. Processo e entregas

O projeto acompanha as etapas do processo de testes de software (STLC), com entregas disponíveis para consulta pública.

| Etapa | Trabalho realizado | Documentação |
|---|---|---|
| Análise | Reconhecimento dos fluxos e documentação de requisitos inferidos e critérios propostos | [Análise funcional](docs/analise-funcional.md), [requisitos de login](docs/requisitos-login.md), [requisitos de catálogo](docs/requisitos-catalogo.md) e [requisitos de carrinho](docs/requisitos-carrinho.md) |
| Planejamento | Definição de escopo, riscos, prioridades e critérios de conclusão | [Plano de testes](docs/plano-de-testes.md) |
| Elaboração dos testes | Casos no Zephyr Scale vinculados aos requisitos e às histórias | Matrizes de rastreabilidade nos documentos de requisitos |
| Execução manual | Ciclos de login, catálogo e carrinho, com resultados e exportações do Zephyr | [Login](evidence/zephyr/login/06-ciclo-qasd-r1-resultados.md), [catálogo](evidence/zephyr/catalogo/QASD-R2_resultados.md) e [carrinho](evidence/zephyr/carrinho/QASD-R3_resultados.md) |
| Investigação de defeitos | Reprodução, análise com DevTools e avaliação experimental de uma possível solução | [Investigação do QASD-8](docs/defects/QASD-8.md) |
| Automação e CI | Testes E2E com Cypress e execução no GitHub Actions | [Documentação de automação e CI](docs/automacao-e-ci.md) |
| Avaliação dos resultados | Cobertura, aprovação, limitações e conclusão do ciclo | [Relatório de login](docs/relatorio-ciclo-login.md) e registros de execução |

**Projeto no Jira:** [QASD | Portfolio QA - SauceDemo](https://leesaeny.atlassian.net/browse/QASD-1).

O Jira e o Zephyr Scale organizam as atividades, os casos e as execuções. Os documentos e as evidências deste repositório permitem consultar o trabalho sem depender do acesso a essas ferramentas.

## 2. Tecnologias e ferramentas

| Ferramenta | Aplicação no projeto |
|---|---|
| Jira | Planejamento, acompanhamento e registro de defeitos |
| Zephyr Scale | Gerenciamento de casos, ciclos e execuções |
| Cypress 16.2.1 | Automação de testes funcionais E2E |
| JavaScript | Implementação dos testes e das verificações |
| Node.js e npm | Ambiente de execução e gerenciamento de dependências |
| GitHub Actions | Execução automatizada dos testes no CI |
| Chrome DevTools | Investigação de defeitos e validação experimental |
| Git e GitHub | Controle de versão, pull requests e documentação |
| VS Code | Desenvolvimento e manutenção das automações |

## 3. Escopo e resultados

| Funcionalidade | Escopo | Casos manuais executados | Casos automatizados | Defeitos identificados | Situação |
|---|---|---:|---:|---:|---|
| Login | Autenticação, campos obrigatórios e usuário bloqueado | 6 | 6 | 1 | Primeiro ciclo concluído; defeito visual aberto |
| Catálogo | Exibição, ordenação e preservação das informações dos produtos | 5 | 5 | 0 | Primeiro ciclo concluído |
| Carrinho | Inclusão, remoção, quantidade, contador, integridade dos itens e retorno ao catálogo | 6 | 6 | 0 | Primeiro ciclo manual e automação concluídos |
| Checkout | Validação dos dados, resumo financeiro e conclusão do pedido | — | — | — | Planejado |

### Resultados manuais

| Indicador | Login | Catálogo | Carrinho |
|---|---|---|---|
| Ciclo | QASD-R1 | QASD-R2 | QASD-R3 |
| Data da execução | 12/11/2026 | 16/11/2026 | 17/11/2026 |
| Requisitos avaliados | 4 | 4 | 5 |
| Casos executados | 6 | 5 | 6 |
| Aprovados | 6 | 5 | 6 |
| Reprovados | 0 | 0 | 0 |
| Aprovação funcional | 100% | 100% | 100% |

A taxa de aprovação considera os casos executados em cada ciclo. No login, o resultado funcional aprovado não representa resolução do defeito visual QASD-8.

No catálogo, foram verificadas a exibição das informações, as quatro opções de ordenação e a preservação dos dados nos seis produtos observados. Nenhum defeito foi identificado nas verificações desse ciclo.

No carrinho, os seis casos avaliaram inclusão de produtos distintos, informações e quantidade dos itens, contador, remoção e retorno ao catálogo. As observações sobre persistência após logout e Reset App State permanecem pendentes de investigação e não foram classificadas como defeitos.

- [Relatório de encerramento do ciclo de login](docs/relatorio-ciclo-login.md).
- [Resultados do ciclo de catálogo](evidence/zephyr/catalogo/QASD-R2_resultados.md).
- [Resultados do ciclo de carrinho](evidence/zephyr/carrinho/QASD-R3_resultados.md).

### Base de validação e limites

Não foi disponibilizada uma especificação oficial de requisitos para este projeto. Os requisitos foram inferidos de comportamentos observados, e os critérios de aceitação foram documentados sem aprovação formal pelo responsável pelo produto.

Os resultados demonstram atendimento à referência adotada neste portfólio, nos dados e ambientes registrados. Não confirmam integralmente as regras de negócio pretendidas pelos responsáveis pela aplicação.

Os casos manuais contemplam os requisitos documentados para cada ciclo: quatro de login, quatro de catálogo e cinco de carrinho. Os 17 casos desses ciclos possuem automação correspondente: seis de login, cinco de catálogo e seis de carrinho. Essa cobertura se limita à base documentada e não representa cobertura completa das funcionalidades ou do código-fonte.

As verificações do catálogo avaliam consistência antes e depois da ordenação, sem confirmar a exatidão dos dados em uma fonte externa. As execuções registradas utilizam Chrome e não demonstram compatibilidade com outros navegadores ou dispositivos.

As limitações específicas estão nos [requisitos de login](docs/requisitos-login.md), nos [requisitos de catálogo](docs/requisitos-catalogo.md), nos [requisitos de carrinho](docs/requisitos-carrinho.md) e na [documentação de automação](docs/automacao-e-ci.md).

## 4. Destaque: investigação do defeito QASD-8

Durante a validação de login com senha incorreta, a mensagem de erro ficou parcialmente cortada, prejudicando sua leitura.

A ocorrência foi reproduzida e investigada com Chrome DevTools. A análise identificou uma limitação de altura no componente CSS, e uma possível solução foi avaliada experimentalmente em três cenários.

A alteração foi realizada apenas no ambiente de inspeção, sem modificar o código-fonte da aplicação. **O defeito permanece aberto.**

Esse caso evidencia a diferença entre aprovação funcional e qualidade visual: o acesso foi recusado corretamente, mas a apresentação da mensagem continuou com problema. As assertions funcionais da automação não verificam sua legibilidade completa.

[Consultar relatório técnico e evidências do QASD-8](docs/defects/QASD-8.md).

## 5. Automação e integração contínua

Os testes preservam as chaves dos casos manuais no Zephyr Scale, permitindo relacionar requisitos, casos, execuções e código.

| Funcionalidade | Tarefa | Casos automatizados | Implementação |
|---|---|---|---|
| Login | QASD-10 | QASD-T1 a QASD-T6 | [login.cy.js](cypress/e2e/login.cy.js) |
| Catálogo | QASD-14 | QASD-T7 a QASD-T11 | [catalogo.cy.js](cypress/e2e/catalogo.cy.js) |
| Carrinho | QASD-16 | QASD-T12 a QASD-T17 | [carrinho.cy.js](cypress/e2e/carrinho.cy.js) |

No login, os seletores e os dados estão centralizados, com uma função para preencher as credenciais e enviar o formulário.

No catálogo, cada teste realiza login antes das verificações. A função `getProducts()` reúne nome, descrição, preço e endereço da imagem para comparar os produtos antes e depois da ordenação.

No carrinho, cada teste prepara sua própria seleção. A função `getProductData()` captura nome, descrição e preço no catálogo, e `checkCartProduct()` compara essas informações com o carrinho e verifica quantidade 1 e disponibilidade do botão Remove. A seleção fixa de Backpack e Bike Light mantém correspondência com o ciclo manual e facilita reproduzir falhas.

As três suítes foram aprovadas localmente em modo interativo e headless. O detalhamento por funcionalidade, ambiente, modo e limitações está na [documentação de automação e CI](docs/automacao-e-ci.md).

### Execução conjunta dos 17 testes

| Ambiente | Modo | Executados | Aprovados | Reprovados |
|---|---|---:|---:|---:|
| Local, macOS 15.8.3 e Chrome 157 | Headless | 17 | 17 | 0 |
| GitHub Actions, Linux e Chrome | Headless, PR #8 | 17 | 17 | 0 |

As duas execuções foram realizadas em 17/11/2026. A execução no CI foi validada no [PR #8](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/8), conforme os [logs do GitHub Actions](https://github.com/leesaeny/saucedemo-qa-portfolio/actions/runs/44176528738/job/134369240875).

São os mesmos 17 testes nas duas execuções: seis de login, cinco de catálogo e seis de carrinho. A execução conjunta não representa um fluxo completo de compra nem cobertura completa das funcionalidades.

- [Evidência da execução conjunta local](evidence/cypress/11-login-catalogo-carrinho-execucao-headless.png).
- [Evidência da execução conjunta no GitHub Actions](evidence/cypress/12-login-catalogo-carrinho-github-actions-sucesso.png).

O histórico da execução anterior de 11 testes permanece disponível na [documentação de automação e CI](docs/automacao-e-ci.md).

### Validação do CI | QASD-11

O GitHub Actions executa os testes em Linux com Chrome headless, acionado por push na `main`, pull request destinado à `main` ou acionamento manual por `workflow_dispatch`.

No [PR #1](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/1), uma falha intencional no teste QASD-T1 confirmou a sinalização de falha no workflow e o upload da screenshot como artefato. Após restaurar a verificação original, os seis testes de login passaram novamente. O PR foi encerrado sem merge.

Essa falha foi introduzida no teste para validar o CI e não representa um defeito do SauceDemo.

- [Falha controlada no CI](evidence/cypress/04-login-github-actions-falha-controlada.png).
- [Aprovação após restauração](evidence/cypress/05-login-github-actions-pr-restaurado.png).
- [Acionamento manual aprovado](evidence/cypress/06-login-github-actions-manual.png).

## 6. Como executar

### Pré-requisitos

- Node.js e npm.
- Google Chrome.
- Git.

### Preparação

1. Clone o repositório:

```bash
git clone https://github.com/leesaeny/saucedemo-qa-portfolio.git
```

2. Acesse o diretório:

```bash
cd saucedemo-qa-portfolio
```

3. Instale as dependências:

```bash
npm ci
```

### Execução interativa

```bash
npm run test:e2e:open
```

Selecione **E2E Testing**, escolha o Google Chrome e abra `login.cy.js`, `catalogo.cy.js` ou `carrinho.cy.js`.

### Execução headless

Execute todos os testes no Chrome:

```bash
npm run test:e2e -- --browser chrome
```

Para executar apenas login:

```bash
npm run test:e2e -- --spec cypress/e2e/login.cy.js --browser chrome
```

Para executar apenas catálogo:

```bash
npm run test:e2e -- --spec cypress/e2e/catalogo.cy.js --browser chrome
```

Para executar apenas carrinho:

```bash
npm run test:e2e -- --spec cypress/e2e/carrinho.cy.js --browser chrome
```

## 7. Documentação e rastreabilidade

| Documento | Conteúdo |
|---|---|
| [Análise funcional](docs/analise-funcional.md) | Reconhecimento dos principais fluxos |
| [Plano de testes](docs/plano-de-testes.md) | Estratégia, escopo, riscos e prioridades |
| [Requisitos de login](docs/requisitos-login.md) | Origem dos requisitos, critérios e matriz de rastreabilidade |
| [Relatório do ciclo de login](docs/relatorio-ciclo-login.md) | Resultados, cobertura, métricas, limitações e conclusão |
| [Requisitos de catálogo](docs/requisitos-catalogo.md) | Critérios propostos, limites e matriz de rastreabilidade |
| [Resultados do ciclo de catálogo](evidence/zephyr/catalogo/QASD-R2_resultados.md) | Execuções manuais e resultados do QASD-R2 |
| [Requisitos de carrinho](docs/requisitos-carrinho.md) | Requisitos e critérios propostos, limites e matriz de rastreabilidade |
| [Resultados do ciclo de carrinho](evidence/zephyr/carrinho/QASD-R3_resultados.md) | Execuções manuais e resultados do QASD-R3 |
| [Automação e integração contínua](docs/automacao-e-ci.md) | Escopo por caso, cobertura, execuções, organização, limitações e validação do CI |
| [Investigação do QASD-8](docs/defects/QASD-8.md) | Reprodução, análise técnica e evidências do defeito |
| [Suíte de login](cypress/e2e/login.cy.js) | Implementação dos seis testes de autenticação |
| [Suíte de catálogo](cypress/e2e/catalogo.cy.js) | Implementação dos cinco testes de exibição, ordenação e preservação dos dados |
| [Suíte de carrinho](cypress/e2e/carrinho.cy.js) | Implementação dos seis testes de inclusão, remoção, contador e retorno ao catálogo |

## 8. Próximos passos

- Investigar a persistência do carrinho após logout e o comportamento de Reset App State.
- Ampliar progressivamente a cobertura e a regressão.
- Planejar o ciclo de checkout.
- Manter o QASD-8 aberto; se uma correção for disponibilizada, realizar reteste visual.

## 9. Índice de evidências

As evidências registram diferentes etapas do desenvolvimento. Cada resultado deve ser interpretado conforme o escopo e as condições da respectiva execução.

<details>
<summary><strong>Consultar todas as evidências de Jira, Zephyr Scale e Cypress</strong></summary>

### Jira

| Evidência | Conteúdo |
|---|---|
| [Board do projeto](evidence/jira/01-board-qasd.png) | Organização e acompanhamento das atividades de QA |
| [História QASD-4](evidence/jira/02-historia-login.png) | História de login, critérios e resultado da validação |
| [Board após conclusão de login e catálogo](evidence/jira/03-board-login-catalogo-concluidos.png) | Tarefas concluídas, épico em andamento e QASD-8 no Backlog |
| [História QASD-12](evidence/jira/04-historia-catalogo.png) | História de catálogo, escopo, critérios propostos e limitações |
| [Conclusão da QASD-14](evidence/jira/05-automacao-catalogo-concluida.png) | Resultados da automação e vínculo com o PR #2 |

### Zephyr Scale

| Evidência | Conteúdo |
|---|---|
| [Casos de teste de login](evidence/zephyr/login/01-casos-de-teste-login.png) | Biblioteca de casos, prioridades, versões e status |
| [Detalhamento do QASD-T2](evidence/zephyr/login/02-qasd-t2-details.png) | Objetivo, pré-condições e prioridade |
| [Passos do QASD-T2](evidence/zephyr/login/03-qasd-t2-script.png) | Procedimentos, dados e resultados esperados |
| [Rastreabilidade do QASD-T2](evidence/zephyr/login/04-qasd-t2-traceability.png) | Vínculos entre história, defeito e automação |
| [Ciclo QASD-R1](evidence/zephyr/login/05-ciclo-qasd-r1-details.png) | Planejamento, ambiente e encerramento |
| [Resultados do QASD-R1](evidence/zephyr/login/06-ciclo-qasd-r1-resultados.md) | Resumo das seis execuções manuais |
| [Exportação de login em Excel](evidence/zephyr/login/06-ciclo-qasd-r1-resultados.xlsx) | Relatório detalhado exportado do Zephyr Scale |
| [Resultados do QASD-R2](evidence/zephyr/catalogo/QASD-R2_resultados.md) | Resumo das cinco execuções manuais de catálogo |
| [Execução de catálogo no Zephyr](evidence/zephyr/catalogo/QASD-R2_resultados-execucao.png) | Registro dos resultados dos cinco casos |
| [Exportação de catálogo em Excel](evidence/zephyr/catalogo/QASD-R2_resultados.xlsx) | Relatório detalhado exportado do Zephyr Scale |
| [Resultados do QASD-R3](evidence/zephyr/carrinho/QASD-R3_resultados.md) | Resumo das seis execuções manuais de carrinho |
| [Execução de carrinho no Zephyr](evidence/zephyr/carrinho/QASD-R3_resultados-execucao.png) | Registro dos resultados dos seis casos |
| [Exportação de carrinho em Excel](evidence/zephyr/carrinho/QASD-R3_resultados.xlsx) | Relatório detalhado exportado do Zephyr Scale |

### Cypress e GitHub Actions

| Evidência | Conteúdo |
|---|---|
| [Login em modo interativo](evidence/cypress/01-login-execucao-interativa.png) | Seis testes aprovados no Google Chrome |
| [Login em modo headless](evidence/cypress/02-login-execucao-headless.png) | Seis testes aprovados no Chrome 157 |
| [Login no GitHub Actions](evidence/cypress/03-login-github-actions-sucesso.png) | Execução por push na main, com seis testes aprovados |
| [Falha controlada no CI](evidence/cypress/04-login-github-actions-falha-controlada.png) | Falha intencional e upload da screenshot como artefato |
| [Aprovação após restauração](evidence/cypress/05-login-github-actions-pr-restaurado.png) | Seis testes aprovados após restaurar a verificação |
| [Acionamento manual no CI](evidence/cypress/06-login-github-actions-manual.png) | Seis testes aprovados por workflow_dispatch |
| [Login e catálogo em modo headless](evidence/cypress/07-login-catalogo-execucao-headless.png) | Execução conjunta local, com 11 testes aprovados |
| [Catálogo em modo interativo](evidence/cypress/08-catalogo-execucao-interativa.png) | Cinco testes aprovados no Google Chrome |
| [Login e catálogo no GitHub Actions](evidence/cypress/09-login-catalogo-github-actions-sucesso.png) | Execução conjunta no PR #2, com 11 testes aprovados |
| [Carrinho em modo interativo](evidence/cypress/10-carrinho-execucao-interativa.png) | Seis testes aprovados no Google Chrome |
| [Login, catálogo e carrinho em modo headless](evidence/cypress/11-login-catalogo-carrinho-execucao-headless.png) | Execução conjunta local, com 17 testes aprovados |
| [Login, catálogo e carrinho no GitHub Actions](evidence/cypress/12-login-catalogo-carrinho-github-actions-sucesso.png) | Execução conjunta no PR #8, com 17 testes aprovados |

</details>
