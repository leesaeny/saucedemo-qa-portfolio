# Requisitos de carrinho | SauceDemo

**História de usuário:** [QASD-15](https://leesaeny.atlassian.net/browse/QASD-15)  
**Escopo:** Inclusão e remoção de produtos, integridade das informações, contador e retorno ao catálogo  
**Perfil de teste:** standard_user  
**Navegador deste ciclo:** Google Chrome

## 1. Objetivo

Definir os requisitos e critérios de aceitação propostos para gerenciar produtos no carrinho, estabelecendo uma base para elaborar os casos de teste e acompanhar sua cobertura.

## 2. Origem e classificação

Não foi disponibilizada uma especificação oficial dos requisitos do carrinho para este projeto.

Os requisitos foram propostos a partir da análise do fluxo e de comportamentos observados na exploração da interface pública do SauceDemo com standard_user. Os critérios de aceitação são propostas de validação deste portfólio, sem aprovação formal pelo responsável pelo produto.

A história QASD-15 mantém o registro dos requisitos e critérios no Jira. Este documento apresenta essa base para consulta no GitHub.

Na exploração inicial, foram utilizados Sauce Labs Backpack e Sauce Labs Bike Light para observar inclusão, apresentação das informações, contador, remoção e retorno ao catálogo.

Essas observações orientam o desenho dos testes, mas não substituem sua execução formal.

## 3. Requisitos e critérios de aceitação

### CART-RF-01 | Adicionar produtos

Ao adicionar um produto pelo catálogo, ele deve ser incluído no carrinho com quantidade 1.

Ao adicionar outro produto distinto, ambos devem permanecer no carrinho, cada um com quantidade 1.

No catálogo, o botão dos produtos adicionados deve apresentar Remove.

**Critérios de aceitação:**

**CA-01 | Inclusão de um produto**

Dado que o usuário está autenticado e o carrinho está vazio,  
quando adicionar um produto pelo catálogo e abrir o carrinho,  
então o produto deve aparecer com quantidade 1 e o contador deve apresentar 1.

**CA-02 | Inclusão de produtos distintos**

Dado que o carrinho contém um produto,  
quando adicionar outro produto distinto pelo catálogo,  
então ambos devem aparecer no carrinho com quantidade 1 e o contador deve apresentar 2.

O estado dos botões dos produtos selecionados também é verificado no CA-06, apresentado em CART-RF-05.

### CART-RF-02 | Apresentar informações dos produtos

O carrinho deve apresentar nome, descrição e preço correspondentes aos do catálogo para cada produto incluído.

**Critério de aceitação:**

**CA-03 | Integridade das informações**

Ao abrir o carrinho, nome, descrição e preço de cada produto devem corresponder aos apresentados no catálogo.

### CART-RF-03 | Atualizar o contador

O ícone do carrinho deve apresentar o número de produtos incluídos e atualizar esse número após inclusões e remoções.

Quando o carrinho estiver vazio, o contador não deve ser exibido.

**Critérios de aceitação relacionados:**

- CA-01 e CA-02, apresentados em CART-RF-01: contador após inclusão de um ou dois produtos distintos.
- CA-04 e CA-05, apresentados em CART-RF-04: contador após remoção de um produto ou do último item.
- CA-06, apresentado em CART-RF-05: preservação do contador ao retornar ao catálogo.

### CART-RF-04 | Remover produtos

A remoção pelo carrinho deve retirar apenas o produto selecionado, preservando os demais itens e suas informações.

Deve ser possível remover o último produto, deixando a lista vazia.

Ao retornar ao catálogo, os produtos removidos devem apresentar Add to cart.

**Critérios de aceitação:**

**CA-04 | Remoção de um produto**

Dado que o carrinho contém dois produtos distintos,  
quando remover um deles pela tela do carrinho,  
então apenas o produto selecionado deve desaparecer, o outro deve manter suas informações e quantidade 1, e o contador deve apresentar 1.

**CA-05 | Remoção do último produto**

Dado que o carrinho contém apenas um produto,  
quando removê-lo pela tela do carrinho,  
então a lista deve ficar vazia e o contador não deve ser exibido.

A atualização dos botões dos produtos removidos também é verificada no CA-06, apresentado em CART-RF-05.

### CART-RF-05 | Retornar ao catálogo

O botão Continue Shopping deve direcionar para /inventory.html, preservando a seleção atual e o estado do contador.

**Critério de aceitação:**

**CA-06 | Retorno ao catálogo**

Ao clicar em Continue Shopping, o usuário deve retornar para /inventory.html, mantendo a seleção e o contador.

Produtos presentes no carrinho devem apresentar Remove.

Produtos removidos devem apresentar Add to cart.

## 4. Referências e limites deste ciclo

- Os produtos utilizados foram Sauce Labs Backpack e Sauce Labs Bike Light, cada um com quantidade 1.
- A correspondência das informações entre catálogo e carrinho não comprova sua exatidão em relação a uma fonte externa.
- O ciclo contempla inclusão pelo catálogo e remoção pela tela do carrinho.
- Checkout, imagens dos produtos e persistência após logout ou recarregamento ficam fora do escopo.
- Outros perfis, navegadores e dispositivos não estão contemplados nos resultados deste ciclo.
- A persistência do carrinho após logout e o comportamento de Reset App State permanecem como observações pendentes de investigação na QASD-15. Não foram classificados como defeitos.

## 5. Rastreabilidade

| Requisito | Casos de teste no Zephyr Scale | Testes automatizados em Cypress | História |
|---|---|---|---|
| CART-RF-01 | QASD-T12, QASD-T13, QASD-T16 | Pendente | QASD-15 |
| CART-RF-02 | QASD-T12, QASD-T13 | Pendente | QASD-15 |
| CART-RF-03 | QASD-T12, QASD-T13, QASD-T14, QASD-T15, QASD-T16, QASD-T17 | Pendente | QASD-15 |
| CART-RF-04 | QASD-T14, QASD-T15, QASD-T17 | Pendente | QASD-15 |
| CART-RF-05 | QASD-T16, QASD-T17 | Pendente | QASD-15 |

Os seis casos foram aprovados no ciclo manual QASD-R3, conforme o [registro de resultados](../evidence/zephyr/carrinho/QASD-R3_resultados.md).

A automação dos casos está pendente.

A matriz indica a cobertura dos requisitos pelos casos deste ciclo. Os resultados se aplicam aos critérios e ao ambiente das execuções registradas e não representam cobertura completa ou ausência de defeitos em todo o carrinho.
