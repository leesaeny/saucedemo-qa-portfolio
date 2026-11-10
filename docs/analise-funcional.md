
# Análise funcional | SauceDemo

**Jira:** [QASD-2](https://leesaeny.atlassian.net/browse/QASD-2)  
**Data da análise:** 09/11/2026  
**Ambiente:** Apple iMac, macOS, Google Chrome  
**Perfil:** `standard_user`

## 1. Objetivo

Reconhecer os fluxos de login, catálogo, carrinho e checkout do SauceDemo, identificando comportamentos observáveis, dependências funcionais e pontos relevantes para o planejamento dos testes.

## 2. Escopo

**Incluído:** autenticação válida, visualização do catálogo, inclusão de um produto no carrinho, conferência das informações e conclusão da compra.

**Não incluído:** cenários negativos, outros perfis de usuário, múltiplos produtos, remoção, ordenação, responsividade e investigação de causa raiz.

## 3. Resultados observados

| Fluxo | Resultado |
|---|---|
| Login | Autenticação concluída e acesso ao catálogo. |
| Catálogo | Seis produtos exibidos com imagem, nome, descrição e preço. |
| Carrinho | Sauce Labs Backpack incluída, com contador e quantidade iguais a 1. Nome, descrição e preço de US$ 29,99 correspondentes ao produto selecionado. |
| Checkout | Preenchimento dos dados, revisão do pedido e confirmação da compra. Subtotal de US$ 29,99, imposto de US$ 2,40 e total de US$ 32,39. |

## 4. Ocorrências e decisões

**Redirecionamento inesperado:** durante a navegação, a aplicação apresentou a tela de login em etapas não previstas. A ocorrência foi observada em mais de um fluxo e registrada com evidências na QASD-2. Sua causa e classificação permanecem em investigação.

**Conteúdo do catálogo:** referências à programação encontradas em nomes e descrições foram consideradas coerentes com a temática da aplicação. Sem evidências de impacto funcional ou divergência de requisitos conhecidos, não foi identificada necessidade de investigação adicional.

## 5. Conclusão

Os quatro fluxos foram percorridos, estabelecendo uma base inicial para análise de requisitos e planejamento dos testes.

Os resultados representam observações de uma exploração inicial, não uma validação completa das funcionalidades. As ocorrências que exigem investigação permanecem registradas no Jira.
