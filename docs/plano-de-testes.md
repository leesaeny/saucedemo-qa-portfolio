
# Plano de testes | SauceDemo

**Projeto:** SauceDemo QA Portfolio  
**Jira:** [QASD-3](https://leesaeny.atlassian.net/browse/QASD-3)  
**Aplicação:** https://www.saucedemo.com/  
**Tipo:** Testes funcionais de aplicação web  
**Situação:** Planejamento definido, execução formal pendente

## 1. Objetivo

Definir a abordagem, a cobertura, os riscos e as condições de execução dos testes do SauceDemo, com base no [reconhecimento funcional](analise-funcional.md).

O planejamento busca verificar os principais fluxos de uma jornada de compra e identificar possíveis falhas que comprometam sua continuidade ou a integridade das informações.

## 2. Escopo

| Funcionalidade | Cobertura planejada |
|---|---|
| Login | Autenticação válida, entradas inválidas, campos obrigatórios e acesso às páginas |
| Catálogo | Exibição, ordenação, seleção e consistência das informações dos produtos |
| Carrinho | Inclusão, remoção, quantidade, contador e integridade dos itens |
| Checkout | Validação de campos, resumo financeiro, navegação e conclusão do pedido |

**Tipos de teste:** funcionais manuais, exploratórios direcionados e regressão automatizada para casos selecionados.

**Fora do escopo atual:** testes diretos de API e banco de dados, desempenho, segurança e compatibilidade ampla, devido à ausência de acesso ou critérios suficientes.

## 3. Abordagem

1. Analisar os comportamentos observados e identificar requisitos e critérios de aceitação propostos.
2. Elaborar casos de teste rastreáveis no Zephyr, com pré-condições, passos e resultados esperados.
3. Executar os casos manualmente, registrando resultados e evidências.
4. Investigar comportamentos inesperados e documentar defeitos quando houver fundamento suficiente.
5. Selecionar casos repetíveis, com resultados esperados claros e estado controlado, para automação com Cypress.
6. Consolidar os resultados e as limitações do ciclo.

A automação será realizada inicialmente em ambiente local. A integração com GitHub Actions está prevista para uma etapa posterior.

## 4. Ambiente e dados

**Aplicação:** Interface pública do SauceDemo  
**Sistema operacional:** macOS  
**Navegador principal:** Google Chrome  
**Perfil principal:** `standard_user`

**Dados de referência:**

| Dado | Valor |
|---|---|
| Produto | Sauce Labs Backpack |
| Preço observado | US$ 29,99 |
| First Name | QA |
| Last Name | Tester |
| Zip/Postal Code | 12345 |
| Imposto observado | US$ 2,40 |
| Total observado | US$ 32,39 |

As versões do navegador e sistema operacional deverão ser registradas antes das execuções formais.

Cada teste deverá começar com o estado inicial conhecido e documentado, incluindo o conteúdo do carrinho.

Serão utilizados apenas dados sintéticos.

Os valores registrados são referências de observação, não requisitos oficiais do produto.

## 5. Riscos e prioridades

| Prioridade | Risco | Justificativa |
|---|---|---|
| Alta | Falha de autenticação ou interrupção da sessão | Pode impedir o acesso aos demais fluxos |
| Alta | Inconsistência no carrinho | Pode comprometer produto, quantidade e preço |
| Alta | Falha no checkout | Pode impedir a compra ou apresentar valores incorretos |
| Média | Inconsistência no catálogo | Pode comprometer a identificação e seleção de produtos |

A priorização considera impacto potencial e dependências funcionais, sem atribuir probabilidades não verificadas.

**Ordem de cobertura planejada:** Login → Catálogo → Carrinho → Checkout.

## 6. Critérios do ciclo

### Entrada

- Aplicação acessível.
- Ambiente identificado, incluindo versões.
- Conta de teste funcional.
- Estado inicial conhecido e controlado.
- Casos documentados com resultados esperados e rastreabilidade.

### Saída

- Casos planejados classificados como aprovado, reprovado, bloqueado ou não executado.
- Falhas documentadas com passos e evidências suficientes.
- Cobertura e resultados consolidados a partir das execuções.
- Pendências, limitações e riscos remanescentes registrados.

O encerramento do ciclo não representa autorização de lançamento do produto.

### Interrupção

Suspender os testes afetados quando a aplicação estiver indisponível, o estado inicial não puder ser controlado ou não houver critérios suficientes para avaliar o resultado.

## 7. Responsabilidades

O portfólio é individual. O responsável pelo projeto realiza análise, planejamento, desenho, execução, investigação e documentação dos testes.

Não há participação documentada da equipe de desenvolvimento do SauceDemo.

## 8. Entregáveis previstos

- Requisitos e critérios de aceitação propostos.
- Casos de teste e matriz de cobertura.
- Execuções e evidências.
- Registros de investigação e defeitos.
- Testes automatizados selecionados.
- Relatório final com métricas verificáveis.

O andamento e os resultados serão registrados no Jira, Zephyr e GitHub conforme cada atividade for realizada.
