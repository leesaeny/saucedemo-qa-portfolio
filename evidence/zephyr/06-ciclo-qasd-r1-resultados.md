# QASD-R1 | Resultados da validação funcional de login

## Dados do ciclo

| Campo | Registro |
| --- | --- |
| Projeto | QASD |
| Ciclo | QASD-R1 |
| Nome | LOGIN \| Ciclo 01 - Validação funcional |
| Status | Done |
| Data de execução | 12/11/2026 |
| Tipo de execução | Manual |
| Responsável | Lee Saeny |
| Ambiente | macOS Sequoia 15.8.3 |
| Navegador | Google Chrome 157.0.8103.78 |
| História relacionada | [QASD-4](https://leesaeny.atlassian.net/browse/QASD-4) |
| Preparação do ambiente | [QASD-6](https://leesaeny.atlassian.net/browse/QASD-6) |

## Objetivo

Validar os requisitos funcionais de autenticação do SauceDemo associados à história QASD-4, contemplando credenciais válidas e inválidas, campos obrigatórios e usuário bloqueado.

## Resultados

| Execução | Caso de teste | Cenário | Resultado |
| --- | --- | --- | --- |
| QASD-E1 | QASD-T1 | Autenticar com credenciais válidas | Pass |
| QASD-E2 | QASD-T2 | Impedir autenticação com senha incorreta | Pass |
| QASD-E3 | QASD-T3 | Impedir autenticação com usuário vazio | Pass |
| QASD-E4 | QASD-T4 | Impedir autenticação com senha vazia | Pass |
| QASD-E5 | QASD-T5 | Impedir autenticação com usuário e senha vazios | Pass |
| QASD-E6 | QASD-T6 | Impedir autenticação de usuário bloqueado | Pass |

**Total:** 6 casos executados, 6 aprovados e 0 reprovados.

**Taxa de aprovação funcional:** 100% dos casos executados neste ciclo.

## Defeito vinculado

A execução QASD-E2 e o caso QASD-T2 possuem vínculo com o defeito visual [QASD-8](https://leesaeny.atlassian.net/browse/QASD-8).

A aprovação funcional registra o resultado das verificações de autenticação. Ela não representa a resolução do defeito visual.

## Referências

- [Exportação original do Zephyr Scale em Excel](06-ciclo-qasd-r1-resultados.xlsx)
- [Código dos testes automatizados correspondentes](https://github.com/leesaeny/saucedemo-qa-portfolio/blob/main/cypress/e2e/login.cy.js)

Esta página apresenta uma síntese da exportação do Zephyr Scale. A planilha original contém os campos detalhados dos casos e das execuções. Os resultados acima são da execução manual do ciclo QASD-R1.