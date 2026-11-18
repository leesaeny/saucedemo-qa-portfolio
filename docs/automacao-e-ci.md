# Automação de testes e integração contínua | SauceDemo

Este documento reúne o escopo, a organização, os resultados e as limitações das automações de login, catálogo, carrinho e checkout, além da validação da integração contínua.

Os identificadores dos testes preservam as chaves dos casos manuais no Zephyr Scale.

## 1. Base de validação

Não foi disponibilizada uma especificação oficial de requisitos para este projeto.

Os requisitos de login foram inferidos de comportamentos observados. Os requisitos e critérios de catálogo, carrinho e checkout foram documentados a partir da análise e exploração da aplicação, com critérios de aceitação propostos para este portfólio. Não houve aprovação formal pelo responsável pelo produto.

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

## 4. Carrinho | QASD-16

### Escopo automatizado

| Caso do Zephyr Scale | Verificação |
|---|---|
| QASD-T12 | Inclusão de um produto, informações, quantidade e contador |
| QASD-T13 | Inclusão de dois produtos distintos e preservação das informações |
| QASD-T14 | Remoção de um produto mantendo o outro e suas informações |
| QASD-T15 | Remoção do último produto e retirada do contador |
| QASD-T16 | Retorno ao catálogo preservando a seleção |
| QASD-T17 | Atualização dos botões do catálogo após remover todos os produtos |

### Cobertura dos casos manuais do ciclo

| Indicador | Resultado |
|---|---:|
| Ciclo manual de referência | QASD-R3 |
| Casos manuais do ciclo | 6 |
| Casos selecionados para automação | 6 |
| Casos implementados em Cypress | 6 |
| Cobertura dos casos manuais pela automação | 6/6 (100%) |

A correspondência considera os critérios funcionais documentados. Não representa cobertura completa dos comportamentos do carrinho.

### Execuções por ambiente e modo

| Ambiente | Modo ou acionamento | Executados | Aprovados | Reprovados | Taxa de aprovação |
|---|---|---:|---:|---:|---:|
| Local, macOS 15.8.3 e Chrome 157 | Interativo | 6 | 6 | 0 | 100% |
| Local, macOS 15.8.3 e Chrome 157 | Headless, execução conjunta | 6 | 6 | 0 | 100% |
| GitHub Actions, Linux e Chrome headless | PR #8, execução conjunta | 6 | 6 | 0 | 100% |

As execuções registradas foram realizadas em 17/11/2026.

As linhas headless apresentam apenas os seis testes do carrinho, que fizeram parte das execuções conjuntas de 17 testes: seis de login, cinco de catálogo e seis de carrinho. Esses totais não devem ser somados como novos casos.

A execução no CI pode ser consultada nos [logs do PR #8](https://github.com/leesaeny/saucedemo-qa-portfolio/actions/runs/44176528738/job/134369240875).

### Organização dos testes e limitações

Os seletores e dados de seleção estão centralizados. Cada teste realiza login com standard_user e prepara seu próprio carrinho, sem depender do resultado de outro caso.

O projeto utiliza testIsolation: true. A preparação verifica o acesso ao catálogo e a ausência do contador antes das ações de cada teste. Não utiliza Reset App State para preparar os cenários.

A função getProductData() captura nome, descrição e preço do produto no catálogo antes da inclusão. A função checkCartProduct() compara essas informações com o item correspondente no carrinho e verifica quantidade 1 e disponibilidade do botão Remove.

Nos casos de integridade das informações, a execução manual utiliza os dados explícitos cadastrados no Zephyr. A automação utiliza os valores capturados no catálogo como referência de comparação com o carrinho.

**Seleção dos produtos:**

Neste ciclo, a automação utiliza Sauce Labs Backpack e Sauce Labs Bike Light para manter correspondência com os dados dos casos manuais QASD-T12 a QASD-T17 e facilitar a reprodução de falhas.

Essa seleção não representa uma restrição do requisito nem demonstra validação com todos os produtos ou combinações do catálogo. As funções recebem os produtos como parâmetros, permitindo ampliar a seleção em ciclos futuros.

**Limitações:**

- A comparação entre catálogo e carrinho verifica correspondência das informações, sem comprovar sua exatidão em relação a uma fonte externa.
- Uma informação incorreta nos dois locais pode permanecer consistente e não ser identificada por essa comparação.
- A quantidade avaliada é 1 por produto distinto, conforme o escopo deste ciclo.
- A seleção fixa não cobre todos os produtos, pares ou ordens possíveis de inclusão e remoção.
- Checkout, imagens dos produtos, persistência após logout ou recarregamento e comportamento de Reset App State ficam fora deste ciclo.
- As execuções registradas não demonstram compatibilidade com outros perfis, navegadores ou dispositivos.

### Código e evidências

- [Código dos testes de carrinho](../cypress/e2e/carrinho.cy.js).
- [Requisitos e matriz de rastreabilidade](requisitos-carrinho.md).
- [Resultados manuais do QASD-R3](../evidence/zephyr/carrinho/QASD-R3_resultados.md).
- [Execução interativa](../evidence/cypress/10-carrinho-execucao-interativa.png).
- [Execução headless conjunta](../evidence/cypress/11-login-catalogo-carrinho-execucao-headless.png).
- [Execução conjunta no GitHub Actions](../evidence/cypress/12-login-catalogo-carrinho-github-actions-sucesso.png).
- [Tarefa de automação QASD-16](https://leesaeny.atlassian.net/browse/QASD-16).
- [PR #8](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/8).

## 5. Checkout | QASD-18

### Escopo automatizado

- QASD-T18 a QASD-T20: bloqueio do avanço e mensagem correspondente quando um dos três campos obrigatórios está vazio.
- QASD-T21: consistência do item entre o carrinho e o resumo, e conferência dos valores exibidos.
- QASD-T22 e QASD-T23: cancelamento no formulário e no resumo, com retorno à tela esperada e preservação do item.
- QASD-T24: confirmação do pedido, retorno ao catálogo e carrinho vazio.

### Cobertura dos casos manuais do ciclo

| Indicador | Resultado |
|---|---:|
| Ciclo manual de referência | QASD-R4 |
| Casos manuais do ciclo | 7 |
| Casos selecionados para automação | 7 |
| Casos implementados em Cypress | 7 |
| Cobertura dos casos manuais pela automação | 7/7 (100%) |

### Execuções por ambiente e modo

| Ambiente | Modo | Executados | Aprovados | Reprovados | Taxa de aprovação |
|---|---|---:|---:|---:|---:|
| Local, macOS 15.8.3 e Chrome 157 | Interativo, suíte de checkout | 7 | 7 | 0 | 100% |
| Local, macOS 15.8.3 e Chrome 157 | Headless, suíte de checkout | 7 | 7 | 0 | 100% |

As execuções ocorreram em 18/11/2026. O QASD-T18 também foi executado isoladamente durante a implementação e passou. A suíte completa foi validada localmente e no GitHub Actions, conforme a seção de execuções conjuntas.

### Organização dos testes e limitações

Cada teste autentica `standard_user` e adiciona uma Sauce Labs Backpack ao carrinho. Uma tabela de dados gera um teste independente para cada campo obrigatório vazio, com sua chave do Zephyr e sua mensagem esperada.

No QASD-T21, o teste lê nome, descrição, quantidade e preço no carrinho e compara esses dados com o resumo. Ele confere se o subtotal corresponde ao preço do item e se o total corresponde à soma do subtotal com o imposto exibido, usando valores em centavos.

- A comparação verifica a consistência dos dados exibidos entre as telas. A conferência financeira usa o imposto apresentado no resumo. A alíquota e a regra de arredondamento ficam fora da verificação.
- A conclusão do pedido é verificada pela interface, incluindo a mensagem de confirmação e a lista vazia ao reabrir o carrinho.
- Checkout com carrinho vazio, campos preenchidos apenas com espaços e geração do PDF ficam fora do ciclo.

### Código e evidências

- [Tarefa de automação QASD-18](https://leesaeny.atlassian.net/browse/QASD-18).
- [Código dos testes de checkout](../cypress/e2e/checkout.cy.js).
- [Requisitos e matriz de rastreabilidade](requisitos-checkout.md).
- [Resultados manuais do QASD-R4](../evidence/zephyr/checkout/QASD-R4-resultados.md).
- [Execução interativa](../evidence/cypress/13-checkout-execucao-interativa.png).

## 6. Execuções conjuntas

### Login e catálogo | 16/11/2026

A execução conjunta contempla 11 testes distintos: seis de login e cinco de catálogo.

| Ambiente | Modo ou acionamento | Executados | Aprovados | Reprovados | Taxa de aprovação |
|---|---|---:|---:|---:|---:|
| Local, macOS 15.8.3 e Chrome 157 | Headless | 11 | 11 | 0 | 100% |
| GitHub Actions, Linux e Chrome headless | PR #2 | 11 | 11 | 0 | 100% |

A execução local foi realizada em 16/11/2026, com Cypress 16.2.1.

A execução no GitHub Actions foi validada no [PR #2](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/2).

A aprovação conjunta demonstra a execução das duas suítes nas condições registradas. Não acrescenta novos cenários à cobertura nem representa um fluxo completo de compra.

**Evidências:**

- [Execução conjunta local](../evidence/cypress/07-login-catalogo-execucao-headless.png).
- [Execução conjunta no GitHub Actions](../evidence/cypress/09-login-catalogo-github-actions-sucesso.png).

### Login, catálogo e carrinho | 17/11/2026

A execução conjunta contempla 17 testes distintos: seis de login, cinco de catálogo e seis de carrinho.

| Ambiente | Modo ou acionamento | Executados | Aprovados | Reprovados | Taxa de aprovação |
|---|---|---:|---:|---:|---:|
| Local, macOS 15.8.3 e Chrome 157 | Headless | 17 | 17 | 0 | 100% |
| GitHub Actions, Linux e Chrome headless | PR #8 | 17 | 17 | 0 | 100% |

As duas execuções foram realizadas em 17/11/2026. A execução no CI foi validada no [PR #8](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/8), conforme os [logs do GitHub Actions](https://github.com/leesaeny/saucedemo-qa-portfolio/actions/runs/44176528738/job/134369240875).

São os mesmos 17 testes nos dois ambientes. A execução conjunta verifica as três suítes nas condições registradas, sem representar um fluxo completo de compra ou cobertura completa das funcionalidades.

**Evidências:**

- [Execução conjunta local](../evidence/cypress/11-login-catalogo-carrinho-execucao-headless.png).
- [Execução conjunta no GitHub Actions](../evidence/cypress/12-login-catalogo-carrinho-github-actions-sucesso.png).

### Login, catálogo, carrinho e checkout | 18/11/2026

A execução conjunta reuniu 6 testes de login, 5 de catálogo, 6 de carrinho e 7 de checkout.

| Ambiente | Modo | Executados | Aprovados | Reprovados | Taxa de aprovação |
|---|---|---:|---:|---:|---:|
| Local, macOS 15.8.3 e Chrome 157 | Headless | 24 | 24 | 0 | 100% |
| GitHub Actions, Linux e Chrome | Headless | 24 | 24 | 0 | 100% |

A execução no GitHub Actions ocorreu no [PR #11](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/11), no commit `24e8c81`, com aprovação do job [`login`](https://github.com/leesaeny/saucedemo-qa-portfolio/actions/runs/44336046982/job/134912944376).

- [Execução headless local](../evidence/cypress/14-login-catalogo-carrinho-checkout-execucao-headless.png).
- [Execução no GitHub Actions](../evidence/cypress/15-login-catalogo-carrinho-checkout-github-actions-sucesso.png).

## 7. Integração contínua | QASD-11

O workflow executa os testes em Linux com Google Chrome headless.

Os acionamentos configurados são:

- Push na branch `main`.
- Pull request destinado à branch `main`.
- Acionamento manual pelo evento `workflow_dispatch`.

A validação inicial da integração contínua utilizou os seis testes de login. Posteriormente, foram incluídos os cinco testes de catálogo e os seis de carrinho, totalizando 17 testes aprovados na execução do PR #8.

O workflow se chama Testes E2E - SauceDemo. O identificador do job permanece login porque esse é o check obrigatório configurado na proteção da main. Apesar do nome, o job executa as três suítes. O artefato de screenshots de falhas se chama e2e-failure-screenshots.

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

## 8. Alcance dos resultados

Os resultados representam as condições das execuções registradas. A aplicação pública é mantida por terceiros e pode apresentar alterações posteriores.

A execução no Chrome em macOS e Linux não comprova compatibilidade com outros navegadores ou dispositivos.

A aprovação funcional não representa ausência de defeitos, validação visual completa ou avaliação especializada de segurança, desempenho e acessibilidade.

Os resultados não constituem aprovação pelo responsável pelo produto nem autorização para lançamento.

## 9. Documentos relacionados

- [Apresentação do projeto](../README.md).
- [Plano de testes](plano-de-testes.md).
- [Requisitos de login](requisitos-login.md).
- [Requisitos de catálogo](requisitos-catalogo.md).
- [Requisitos de carrinho](requisitos-carrinho.md).
- [Requisitos de checkout](requisitos-checkout.md)
- [Relatório do ciclo manual de login](relatorio-ciclo-login.md).
- [Investigação do QASD-8](defects/QASD-8.md).
- [Projeto no Jira](https://leesaeny.atlassian.net/browse/QASD-1).
