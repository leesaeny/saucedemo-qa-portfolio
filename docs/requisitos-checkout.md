# Requisitos de checkout | SauceDemo

**História de usuário:** [QASD-17](https://leesaeny.atlassian.net/browse/QASD-17)<br>
**Escopo:** Campos obrigatórios, resumo do pedido, cancelamento e conclusão da compra<br>
**Perfil de teste:** standard_user<br>
**Navegador deste ciclo:** Google Chrome

## 1. Objetivo

Definir os requisitos e critérios de aceitação propostos para o primeiro ciclo de checkout e registrar sua cobertura pelos casos de teste manuais.

## 2. Origem e classificação

Os requisitos foram propostos a partir da exploração da interface pública do SauceDemo com `standard_user`. São critérios de validação do portfólio, sem especificação oficial disponibilizada para o projeto ou aprovação formal pelo responsável pelo produto.

A história QASD-17 mantém o registro dos critérios no Jira. Este documento apresenta os requisitos e sua relação com os casos executados no Zephyr Scale.

## 3. Requisitos e critérios de aceitação

### CHECKOUT-RF-01 | Validar campos obrigatórios

O formulário deve exigir o preenchimento de **First Name**, **Last Name** e **ZIP/Postal Code** para avançar ao resumo.

**CA-01 | Bloqueio por campo obrigatório vazio**

Dado que o formulário de checkout está aberto,<br>
quando o usuário clicar em **Continue** com um dos campos vazio e os outros dois preenchidos,<br>
então deve permanecer em **Checkout: Your Information** (`/checkout-step-one.html`) e ver a mensagem correspondente:

| Campo vazio | Mensagem esperada |
|---|---|
| First Name | `Error: First Name is required` |
| Last Name | `Error: Last Name is required` |
| ZIP/Postal Code | `Error: Postal Code is required` |

### CHECKOUT-RF-02 | Apresentar o resumo do pedido

O checkout deve apresentar os dados do item selecionado e os valores do pedido antes da confirmação.

**CA-02 | Avanço e consistência do resumo**

Dado que há um produto no carrinho e os três campos estão preenchidos com os dados de teste,<br>
quando o usuário clicar em **Continue**,<br>
então deve abrir **Checkout: Overview** (`/checkout-step-two.html`) com o mesmo nome, descrição, quantidade e preço do item no carrinho. **Item total** deve corresponder ao preço do único item, e **Total** deve corresponder à soma de **Item total** com **Tax**.

### CHECKOUT-RF-03 | Cancelar no formulário

O cancelamento no formulário deve retornar ao carrinho e preservar o item selecionado.

**CA-03 | Retorno ao carrinho**

Dado que o formulário de checkout está aberto com um produto no carrinho,<br>
quando o usuário clicar em **Cancel**,<br>
então deve retornar a **Your Cart** (`/cart.html`) com o mesmo item e a mesma quantidade.

### CHECKOUT-RF-04 | Cancelar no resumo

O cancelamento no resumo do pedido deve retornar ao catálogo e preservar o item selecionado.

**CA-04 | Retorno ao catálogo com a seleção preservada**

Dado que o resumo apresenta um produto no pedido,<br>
quando o usuário clicar em **Cancel**,<br>
então deve retornar a **Products** (`/inventory.html`) com o contador em 1 e o botão **Remove** disponível para o produto. Ao abrir o carrinho, o mesmo item deve aparecer com quantidade 1.

### CHECKOUT-RF-05 | Concluir o pedido

A conclusão deve exibir a confirmação do pedido e esvaziar o carrinho.

**CA-05 | Confirmação e retorno ao catálogo**

Dado que o resumo do pedido está aberto,<br>
quando o usuário clicar em **Finish**,<br>
então deve abrir **Checkout: Complete!** (`/checkout-complete.html`), exibir `Thank you for your order!` e mostrar o ícone do carrinho sem contador.

Ao clicar em **Back Home**, o usuário deve retornar a **Products** (`/inventory.html`). O produto usado no teste deve mostrar **Add to cart**, e a lista deve estar vazia ao abrir o carrinho.

## 4. Referências e limites deste ciclo

- O ciclo usou `standard_user`, uma Sauce Labs Backpack com quantidade 1 e os dados sintéticos `QA`, `Tester` e `12345`.
- A comparação entre carrinho e resumo verifica a consistência dos dados exibidos. A conferência financeira verifica a soma exibida. A alíquota e a regra de arredondamento ficaram fora da verificação.
- A conclusão do pedido foi verificada pela interface.
- A geração do PDF ficou fora do ciclo.
- Na exploração, a interface exibiu a confirmação com o carrinho vazio e os três campos preenchidos com um espaço cada. Essas condições serão verificadas individualmente em uma ampliação.
- Nos testes exploratórios de campos vazios, os três campos exibiram um X, e a mensagem identificou o campo vazio. O destaque visual ficou registrado como observação.

## 5. Rastreabilidade

| Requisito | Casos de teste no Zephyr Scale | Testes automatizados em Cypress | História |
|---|---|---|---|
| CHECKOUT-RF-01 | QASD-T18, QASD-T19, QASD-T20 | QASD-T18, QASD-T19, QASD-T20 | QASD-17 |
| CHECKOUT-RF-02 | QASD-T21 | QASD-T21 | QASD-17 |
| CHECKOUT-RF-03 | QASD-T22 | QASD-T22 | QASD-17 |
| CHECKOUT-RF-04 | QASD-T23 | QASD-T23 | QASD-17 |
| CHECKOUT-RF-05 | QASD-T24 | QASD-T24 | QASD-17 |

Os sete casos foram aprovados no ciclo manual QASD-R4, conforme o [registro de resultados](../evidence/zephyr/checkout/QASD-R4-resultados.md).

A automação é acompanhada na tarefa [QASD-18](https://leesaeny.atlassian.net/browse/QASD-18). Os sete testes em [checkout.cy.js](../cypress/e2e/checkout.cy.js) preservam as chaves dos casos manuais. A [documentação de automação e CI](automacao-e-ci.md) reúne os resultados e as evidências das execuções no Chrome local e no GitHub Actions.

A cobertura se limita aos critérios, aos dados e aos ambientes registrados para o primeiro ciclo de checkout.
