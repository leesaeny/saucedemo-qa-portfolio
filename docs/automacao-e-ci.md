# Automação de testes e integração contínua | SauceDemo

Este documento reúne o escopo, a organização, os resultados e as limitações das automações de login e catálogo, além da validação da integração contínua.

Os identificadores dos testes preservam as chaves dos casos manuais no Zephyr Scale.

## 1. Base de validação

Não foi disponibilizada uma especificação oficial de requisitos para este projeto.

Os requisitos de login foram inferidos de comportamentos observados. Os requisitos e critérios de catálogo foram documentados a partir da exploração da aplicação, com critérios de aceitação propostos para este portfólio. Não houve aprovação formal pelo responsável pelo produto.

A aprovação dos testes demonstra atendimento aos critérios documentados nas condições das execuções. Não confirma que esses critérios representem integralmente as regras de negócio pretendidas pelos responsáveis pela aplicação.

### Interpretação dos indicadores

- **Cobertura dos casos manuais pela automação:** casos do ciclo implementados em Cypress divididos pelo total de casos manuais do ciclo.
- **Taxa de aprovação:** testes aprovados divididos pelos testes executados na respectiva execução.
- **Cobertura de 100% dos casos do ciclo:** todos os casos funcionais selecionados naquele ciclo possuem automação correspondente. Não significa cobertura completa da funcionalidade ou do código-fonte.

As execuções repetem os mesmos testes em diferentes condições. Seus totais não devem ser somados como se representassem novos casos.

## 2. Login | QASD-10

### Escopo automatizado

| Caso do Zephyr Scale | Verificação |
|---|---|
| QASD-T1 | Autenticação com credenciais válidas |
| QASD-T2 | Autenticação com senha incorreta |
| QASD-T3 | Autenticação com usuário vazio |
| QASD-T4 | Autenticação com senha vazia |
| QASD-T5 | Autenticação com ambos os campos vazios |
| QASD-T6 | Autenticação de usuário bloqueado |

### Cobertura dos casos manuais do ciclo

| Indicador | Resultado |
|---|---:|
| Ciclo manual de referência | QASD-R1 |
| Casos manuais do ciclo | 6 |
| Casos selecionados para automação | 6 |
| Casos implementados em Cypress | 6 |
| Cobertura dos casos manuais pela automação | 6/6 (100%) |

A correspondência considera os critérios funcionais documentados. A automação não substitui todas as observações possíveis durante uma execução manual.

### Execuções por ambiente e modo

| Ambiente | Modo ou acionamento | Executados | Aprovados | Reprovados | Taxa de aprovação |
|---|---|---:|---:|---:|---:|
| Local, Google Chrome | Interativo | 6 | 6 | 0 | 100% |
| Local, Chrome 157 | Headless | 6 | 6 | 0 | 100% |
| GitHub Actions, Linux e Chrome headless | Push na main | 6 | 6 | 0 | 100% |
| GitHub Actions, Linux e Chrome headless | PR #1 após restauração | 6 | 6 | 0 | 100% |
| GitHub Actions, Linux e Chrome headless | Acionamento manual | 6 | 6 | 0 | 100% |

A primeira execução automatizada foi realizada localmente no Google Chrome, em modo interativo.

A execução com falha intencional está registrada separadamente na seção de integração contínua.

### Organização dos testes e limitações

Os testes utilizam seletores `data-test`, seletores e dados centralizados e uma função `login()` para preencher as credenciais e enviar o formulário.

Cada teste inicia com acesso à página de login, com isolamento entre cenários. As verificações avaliam navegação, presença de elementos e mensagens esperadas.

**Limitações:**

- As mensagens esperadas e a precedência da validação de usuário quando ambos os campos estão vazios seguem comportamentos observados, sem confirmação oficial do produto.
- A presença do texto e a visibilidade do elemento de erro não garantem a legibilidade completa da mensagem.
- O defeito visual QASD-8 não é validado por essas assertions funcionais e permanece aberto.
- Os dados utilizados se limitam às contas e entradas selecionadas para os seis casos.
- Segurança, gerenciamento de sessão e acesso direto a páginas protegidas não foram validados formalmente neste ciclo.
- As execuções registradas não demonstram compatibilidade com outros navegadores ou dispositivos.

### Código e evidências

- [Código dos testes de login](../cypress/e2e/login.cy.js).
- [Requisitos e matriz de rastreabilidade](requisitos-login.md).
- [Relatório do ciclo manual de login](relatorio-ciclo-login.md).
- [Resultados manuais do QASD-R1](../evidence/zephyr/login/06-ciclo-qasd-r1-resultados.md).
- [Execução interativa](../evidence/cypress/01-login-execucao-interativa.png).
- [Execução headless](../evidence/cypress/02-login-execucao-headless.png).
- [Execução por push no GitHub Actions](../evidence/cypress/03-login-github-actions-sucesso.png).
- [Aprovação após restauração no PR #1](../evidence/cypress/05-login-github-actions-pr-restaurado.png).
- [Acionamento manual no GitHub Actions](../evidence/cypress/06-login-github-actions-manual.png).
- [Investigação do defeito QASD-8](defects/QASD-8.md).

## 3. Catálogo | QASD-14

### Escopo automatizado

| Caso do Zephyr Scale | Verificação |
|---|---|
| QASD-T7 | Exibição das informações dos produtos |
| QASD-T8 | Ordenação por nome crescente e preservação das informações |
| QASD-T9 | Ordenação por nome decrescente e preservação das informações |
| QASD-T10 | Ordenação por preço crescente e preservação das informações |
| QASD-T11 | Ordenação por preço decrescente e preservação das informações |

Os quatro testes de ordenação também verificam a opção selecionada no seletor.

### Cobertura dos casos manuais do ciclo

| Indicador | Resultado |
|---|---:|
| Ciclo manual de referência | QASD-R2 |
| Casos manuais do ciclo | 5 |
| Casos selecionados para automação | 5 |
| Casos implementados em Cypress | 5 |
| Cobertura dos casos manuais pela automação | 5/5 (100%) |

A correspondência considera os critérios funcionais documentados. Não representa cobertura completa de todos os comportamentos do catálogo.

### Execuções por ambiente e modo

| Ambiente | Modo | Executados | Aprovados | Reprovados | Taxa de aprovação |
|---|---|---:|---:|---:|---:|
| Local, macOS 15.8.3 e Chrome 157 | Interativo | 5 | 5 | 0 | 100% |
| Local, macOS 15.8.3 e Chrome 157 | Headless | 5 | 5 | 0 | 100% |

As execuções locais foram realizadas em 16/11/2026, com Cypress 16.2.1.

A validação no GitHub Actions ocorreu na execução conjunta de login e catálogo, apresentada na próxima seção. A evidência headless disponível neste documento também registra a execução conjunta.

### Organização dos testes e limitações

Cada teste realiza login com `standard_user` antes de iniciar as verificações do catálogo.

A função `getProducts()` captura nome, descrição, preço e endereço da imagem para comparar as informações antes e depois da ordenação.

Os testes de ordenação partem de uma ordenação oposta àquela que será verificada, permitindo avaliar a alteração da sequência dos produtos.

**Limitações:**

- A preservação dos dados é verificada comparando os estados anterior e posterior à ordenação. Isso não comprova sua exatidão em relação a uma fonte externa.
- Dados incorretos já presentes no estado inicial podem permanecer consistentes após a ordenação e não ser identificados por essa comparação.
- A quantidade de seis produtos foi observada na exploração e no ciclo manual. A automação exige a presença de produtos, sem fixar a quantidade em seis.
- Não é exigida uma ordem específica entre produtos com preços iguais, pois não foi estabelecida uma regra oficial de desempate.
- A ordenação por nome utiliza `localeCompare()` como referência técnica, sem uma especificação oficial de ordenação linguística disponibilizada.
- A formatação monetária verificada segue o padrão observado, com `$` e duas casas decimais.
- O carregamento e a visibilidade da imagem não comprovam que ela corresponda visualmente ao produto.
- A comparação do endereço da imagem não constitui comparação visual de seu conteúdo.
- Inclusão e remoção no carrinho, detalhes do produto, outros perfis e compatibilidade com outros navegadores ficam fora deste ciclo.

### Código e evidências

- [Código dos testes de catálogo](../cypress/e2e/catalogo.cy.js).
- [Requisitos e matriz de rastreabilidade](requisitos-catalogo.md).
- [Resultados manuais do QASD-R2](../evidence/zephyr/catalogo/QASD-R2_resultados.md).
- [Execução interativa](../evidence/cypress/08-catalogo-execucao-interativa.png).
- [Execução headless conjunta](../evidence/cypress/07-login-catalogo-execucao-headless.png).
- [Execução conjunta no GitHub Actions](../evidence/cypress/09-login-catalogo-github-actions-sucesso.png).

## 4. Execução conjunta | Login e catálogo

A execução conjunta contempla 11 testes distintos: seis de login e cinco de catálogo.

| Ambiente | Modo ou acionamento | Executados | Aprovados | Reprovados | Taxa de aprovação |
|---|---|---:|---:|---:|---:|
| Local, macOS 15.8.3 e Chrome 157 | Headless | 11 | 11 | 0 | 100% |
| GitHub Actions, Linux e Chrome headless | PR #2 | 11 | 11 | 0 | 100% |

A execução local foi realizada em 16/11/2026, com Cypress 16.2.1.

A execução no GitHub Actions foi validada no [PR #2](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/2).

A aprovação conjunta demonstra a execução das duas suítes nas condições registradas. Não acrescenta novos cenários à cobertura nem representa um fluxo completo de compra.

### Evidências

- [Execução conjunta local](../evidence/cypress/07-login-catalogo-execucao-headless.png).
- [Execução conjunta no GitHub Actions](../evidence/cypress/09-login-catalogo-github-actions-sucesso.png).

## 5. Integração contínua | QASD-11

O workflow executa os testes em Linux com Google Chrome headless.

Os acionamentos configurados são:

- Push na branch `main`.
- Pull request destinado à branch `main`.
- Acionamento manual pelo evento `workflow_dispatch`.

A validação inicial da integração contínua utilizou os seis testes de login. Posteriormente, a execução conjunta incluiu os cinco testes de catálogo.

### Falha controlada no PR #1

Uma alteração intencional na verificação do QASD-T1 foi utilizada para avaliar o comportamento do CI.

Foram confirmados:

- Sinalização de falha no workflow.
- Upload da screenshot como artefato.
- Aprovação dos seis testes após restaurar a verificação original.

A validação foi realizada no [PR #1](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/1), encerrado sem merge.

A falha foi introduzida no teste para validar o processo de integração contínua. Não representa um defeito identificado no SauceDemo e está separada das execuções aprovadas da suíte restaurada.

### Evidências

- [Execução aprovada por push na main](../evidence/cypress/03-login-github-actions-sucesso.png).
- [Falha controlada no CI](../evidence/cypress/04-login-github-actions-falha-controlada.png).
- [Aprovação após restauração](../evidence/cypress/05-login-github-actions-pr-restaurado.png).
- [Acionamento manual no GitHub Actions](../evidence/cypress/06-login-github-actions-manual.png).

## 6. Alcance dos resultados

Os resultados representam as condições das execuções registradas. A aplicação pública é mantida por terceiros e pode apresentar alterações posteriores.

A execução no Chrome em macOS e Linux não comprova compatibilidade com outros navegadores ou dispositivos.

A aprovação funcional não representa ausência de defeitos, validação visual completa ou avaliação especializada de segurança, desempenho e acessibilidade.

Os resultados não constituem aprovação pelo responsável pelo produto nem autorização para lançamento.

## 7. Documentos relacionados

- [Apresentação do projeto](../README.md).
- [Plano de testes](plano-de-testes.md).
- [Requisitos de login](requisitos-login.md).
- [Requisitos de catálogo](requisitos-catalogo.md).
- [Relatório do ciclo manual de login](relatorio-ciclo-login.md).
- [Investigação do QASD-8](defects/QASD-8.md).
- [Projeto no Jira](https://leesaeny.atlassian.net/browse/QASD-1).