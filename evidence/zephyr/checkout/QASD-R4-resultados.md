# Resultados do ciclo QASD-R4 | Checkout

Resumo da exportação do Zephyr Scale para consulta direta no GitHub.

## Contexto da execução

| Campo | Registro |
|---|---|
| Ciclo | QASD-R4 |
| Escopo | Campos obrigatórios vazios, consistência do item e dos valores no resumo, cancelamento nas duas etapas e confirmação do pedido com esvaziamento do carrinho |
| História | [QASD-17](https://leesaeny.atlassian.net/browse/QASD-17) |
| Responsável | Lee Saeny |
| Data planejada | 18/11/2026 |
| Data da execução | 18/11/2026 |
| Ambiente | macOS 15.8.3 e Google Chrome 157 |
| Perfil utilizado | standard_user |
| Tipo de execução | Manual |
| Status do ciclo | Done |

## Resultados por caso

| Caso | Execução | Verificação | Resultado |
|---|---|---|---|
| QASD-T18 | QASD-E24 | Bloqueio do avanço com First Name vazio | Pass |
| QASD-T19 | QASD-E23 | Bloqueio do avanço com Last Name vazio | Pass |
| QASD-T20 | QASD-E22 | Bloqueio do avanço com ZIP/Postal Code vazio | Pass |
| QASD-T21 | QASD-E18 | Consistência do item e dos valores exibidos no resumo | Pass |
| QASD-T22 | QASD-E21 | Cancelamento no formulário com retorno ao carrinho e preservação do item | Pass |
| QASD-T23 | QASD-E20 | Cancelamento no resumo com retorno ao catálogo e preservação do item | Pass |
| QASD-T24 | QASD-E19 | Confirmação do pedido, retorno ao catálogo e carrinho vazio | Pass |

## Resumo

- Casos planejados: 7.
- Casos executados: 7.
- Aprovados: 7.
- Reprovados: 0.
- Bloqueados: 0.
- Não executados: 0.
- Taxa de aprovação: 100% dos casos executados.

Os resultados se aplicam aos casos, ao ambiente e aos critérios propostos para este ciclo. A conferência financeira verificou a consistência dos valores exibidos. O cálculo do imposto, a geração do PDF, o checkout com carrinho vazio e a validação de campos preenchidos apenas com espaços ficaram fora do escopo.

## Registros relacionados

- [Requisitos e matriz de rastreabilidade](../../../docs/requisitos-checkout.md).
- [Captura dos resultados no Zephyr Scale](QASD-R4-resultados-execucao.png).
- [Exportação original do Zephyr Scale em Excel](QASD-R4-resultados.xlsx).

Os resultados observados por passo e as evidências de execução devem ser consultados nas execuções do Zephyr Scale.
