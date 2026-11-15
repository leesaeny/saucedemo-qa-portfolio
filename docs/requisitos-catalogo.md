# Requisitos de catálogo | SauceDemo

**História de usuário:** [QASD-12](https://leesaeny.atlassian.net/browse/QASD-12)  
**Escopo:** Exibição e ordenação dos produtos  
**Perfil de teste:** standard_user  
**Navegador deste ciclo:** Google Chrome

## 1. Objetivo

Definir os requisitos e critérios de aceitação propostos para a exibição e a ordenação dos produtos, estabelecendo uma base para elaborar os casos de teste e acompanhar sua cobertura.

## 2. Origem e classificação

Os requisitos foram inferidos a partir da exploração da interface pública do SauceDemo. Os critérios de aceitação são propostas de validação deste portfólio, não requisitos oficiais do produto.

Na exploração inicial, foram observados seis produtos, cada um com nome, descrição, preço e imagem. O catálogo apresentou quatro opções de ordenação: nome crescente, nome decrescente, preço crescente e preço decrescente.

Essas observações orientam o desenho dos testes, mas não substituem sua execução formal.

## 3. Requisitos e critérios de aceitação

### CAT-RF-01 | Exibir informações dos produtos

Cada produto do catálogo deve apresentar nome, descrição, preço e imagem.

**Critérios de aceitação:**

- Nome e descrição devem estar visíveis e não vazios.
- O preço deve estar visível e apresentar um valor numérico com identificação da moeda.
- A imagem deve estar carregada e visível.

### CAT-RF-02 | Ordenar produtos por nome

O catálogo deve permitir ordenar os produtos pelo nome.

**Critérios de aceitação:**

- A opção A a Z deve apresentar os nomes em ordem alfabética crescente.
- A opção Z a A deve apresentar os nomes em ordem alfabética decrescente.
- A opção exibida no seletor deve corresponder à ordenação selecionada.

### CAT-RF-03 | Ordenar produtos por preço

O catálogo deve permitir ordenar os produtos pelo valor numérico do preço.

**Critérios de aceitação:**

- A opção de preço crescente deve apresentar cada valor menor ou igual ao seguinte.
- A opção de preço decrescente deve apresentar cada valor maior ou igual ao seguinte.
- A opção exibida no seletor deve corresponder à ordenação selecionada.
- Produtos com preços iguais podem aparecer em qualquer ordem entre si, pois não foi definido um critério de desempate neste ciclo.

### CAT-RF-04 | Preservar os produtos e suas informações ao ordenar

A alteração da ordenação deve modificar apenas a posição dos produtos na listagem.

**Critérios de aceitação:**

- Todos os produtos presentes antes da ordenação devem permanecer após a alteração, sem inclusão, perda ou duplicação de itens.
- Nome, descrição, preço e imagem devem permanecer associados ao mesmo produto, sem alteração em relação ao estado anterior à ordenação.

## 4. Referências e limites deste ciclo

- A quantidade de seis produtos é uma referência observada no ambiente explorado, não um requisito oficial de quantidade fixa.
- A preservação das informações será avaliada comparando o estado anterior e posterior à ordenação. Isso não comprova a exatidão dos dados em relação a uma fonte externa.
- A verificação de imagem carregada e visível não representa uma avaliação visual completa.
- Nos produtos Sauce Labs Bolt T-Shirt e Test.allTheThings() T-Shirt (Red), ambos com preço de US$ 15,99, foi observada a ordem alfabética crescente nas duas sequências exploradas de ordenação por preço. Essa observação não estabelece uma regra de desempate.
- Inclusão e remoção de itens no carrinho, página de detalhes do produto, outros perfis de usuário e compatibilidade com outros navegadores ficam fora deste ciclo.
