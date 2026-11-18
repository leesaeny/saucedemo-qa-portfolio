
# Plano de testes | SauceDemo

**Projeto:** SauceDemo QA Portfolio  
**Jira:** [QASD-3](https://leesaeny.atlassian.net/browse/QASD-3)  
**Aplicação:** https://www.saucedemo.com/  
**Tipo:** Testes funcionais de aplicação web  

**Situação:**

| Funcionalidade | Execução manual | Automação |
|---|---|---|
| Login | QASD-R1: 6/6 aprovados | 6 testes aprovados localmente e no GitHub Actions |
| Catálogo | QASD-R2: 5/5 aprovados | 5 testes aprovados localmente e no GitHub Actions |
| Carrinho | QASD-R3: 6/6 aprovados | 6 testes aprovados localmente e no GitHub Actions |
| Checkout | QASD-R4: 7/7 aprovados | 7 testes aprovados localmente e no GitHub Actions |

O defeito visual QASD-8 permanece aberto. Os resultados se limitam ao escopo e às condições de cada execução.

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

Os seis casos funcionais do primeiro ciclo de login estão automatizados com Cypress e foram validados localmente e no GitHub Actions, em Linux com Chrome headless. Os gatilhos de push, pull request e acionamento manual foram validados. Esses resultados se limitam ao escopo e às condições avaliadas; o defeito visual QASD-8 permanece aberto. Novos cenários serão incorporados à automação após avaliação dos resultados manuais e de sua adequação à regressão.

O ciclo manual de catálogo QASD-R2 foi executado em 16/11/2026, no macOS 15.8.3 com Google Chrome 157 e perfil standard_user. Os cinco casos QASD-T7 a QASD-T11 foram aprovados, sem identificação de defeitos nas verificações realizadas. A cobertura se limita à exibição e ordenação dos seis produtos e à preservação de suas informações, conforme os requisitos CAT-RF-01 a CAT-RF-04.

[Consultar resultados do ciclo de catálogo](../evidence/zephyr/catalogo/QASD-R2_resultados.md).

A automação do catálogo é acompanhada na tarefa [QASD-14](https://leesaeny.atlassian.net/browse/QASD-14). Os casos QASD-T7 a QASD-T11 foram selecionados por apresentarem verificações objetivas, repetíveis e adequadas à regressão, cobrindo os requisitos CAT-RF-01 a CAT-RF-04.

Os cinco testes estão implementados em [catalogo.cy.js](../cypress/e2e/catalogo.cy.js), com login antes de cada teste e comparação das informações dos produtos antes e depois das alterações de ordenação. A automação não exige quantidade fixa de seis produtos nem critério de desempate para preços iguais. A verificação de imagem carregada e visível não substitui uma avaliação visual completa.

Em 16/11/2026, os cinco testes do catálogo foram aprovados no Chrome 157, em modo interativo e headless, no macOS 15.8.3. A execução conjunta com os seis testes de login totalizou 11 testes aprovados, sem falhas, em modo headless local. A execução conjunta também foi aprovada no GitHub Actions, em Linux com Chrome headless, com 11 testes aprovados e nenhuma falha no [PR #2](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/2). Consultar a [evidência da execução no CI](../evidence/cypress/09-login-catalogo-github-actions-sucesso.png).

Evidências: [execução headless de login e catálogo](../evidence/cypress/07-login-catalogo-execucao-headless.png) e [execução interativa do catálogo](../evidence/cypress/08-catalogo-execucao-interativa.png).

O ciclo manual de carrinho QASD-R3 foi executado em 17/11/2026, no macOS 15.8.3 com Google Chrome 157 e perfil standard_user. Os seis casos QASD-T12 a QASD-T17 foram aprovados. As verificações contemplaram inclusão de produtos distintos, integridade das informações, quantidade, atualização do contador, remoção e retorno ao catálogo, conforme os requisitos CART-RF-01 a CART-RF-05.

Os requisitos e critérios são propostas deste portfólio, elaboradas a partir da análise e exploração da aplicação, sem especificação oficial disponibilizada ou aprovação formal pelo responsável pelo produto.

A automação do carrinho é acompanhada na tarefa [QASD-16](https://leesaeny.atlassian.net/browse/QASD-16). Os seis casos QASD-T12 a QASD-T17 estão implementados em [carrinho.cy.js](../cypress/e2e/carrinho.cy.js) e foram aprovados em modo interativo no Chrome. A execução headless conjunta de login, catálogo e carrinho também foi aprovada localmente e no GitHub Actions pelo [PR #8](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/8), com 17 testes aprovados e nenhuma falha em cada execução.

A seleção fixa de Backpack e Bike Light mantém correspondência com o ciclo manual e facilita reproduzir falhas. A automação captura as informações no catálogo para comparação com o carrinho. A organização, as evidências e as limitações estão detalhadas na [documentação de automação e CI](automacao-e-ci.md).

Checkout, imagens dos produtos e persistência após logout ou recarregamento ficaram fora deste ciclo. As observações sobre persistência após logout e Reset App State permanecem pendentes de investigação na QASD-15 e não foram classificadas como defeitos.

Consultar os [requisitos de carrinho](requisitos-carrinho.md) e os [resultados do ciclo QASD-R3](../evidence/zephyr/carrinho/QASD-R3_resultados.md).

O primeiro ciclo manual de checkout, QASD-R4, foi executado em 18/11/2026 no macOS 15.8.3, com Google Chrome 157 e o perfil `standard_user`. Os sete casos do ciclo foram aprovados. A cobertura incluiu campos obrigatórios vazios, consistência do item e dos valores exibidos no resumo, cancelamento no formulário e no resumo, e confirmação do pedido com esvaziamento do carrinho.

O cálculo do imposto, a geração do PDF, o checkout com carrinho vazio e a validação de campos preenchidos apenas com espaços ficaram fora deste ciclo.

Consultar os [requisitos de checkout](requisitos-checkout.md) e os [resultados do ciclo QASD-R4](../evidence/zephyr/checkout/QASD-R4-resultados.md).

A automação do checkout é acompanhada na tarefa [QASD-18](https://leesaeny.atlassian.net/browse/QASD-18). Os sete casos do ciclo manual QASD-R4 têm testes correspondentes em [checkout.cy.js](../cypress/e2e/checkout.cy.js). Todos passaram no Chrome em modo interativo e headless local.

A execução conjunta de login, catálogo, carrinho e checkout teve 24 de 24 testes aprovados em modo headless local e no GitHub Actions, no [PR #11](https://github.com/leesaeny/saucedemo-qa-portfolio/pull/11). Os ambientes, as evidências e os limites da cobertura estão na [documentação de automação e CI](automacao-e-ci.md).

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
