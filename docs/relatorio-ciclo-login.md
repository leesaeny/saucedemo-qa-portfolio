# Relatório de encerramento de testes | Login

## 1. Resumo executivo

O ciclo de testes funcionais de autenticação do SauceDemo foi executado integralmente, contemplando seis casos de teste associados a quatro requisitos funcionais.

Todos os casos atenderam aos critérios funcionais avaliados. Durante a execução, foi identificado um defeito visual na apresentação da mensagem de erro de credenciais inválidas, posteriormente reproduzido e investigado utilizando o Chrome DevTools.

## 2. Identificação do ciclo

| Informação | Identificação |
|---|---|
| Aplicação | SauceDemo |
| Funcionalidade | Autenticação |
| História de usuário | QASD-4 |
| Ciclo de testes | QASD-R1 |
| Data de execução | 12/11/2026 |
| Tipo de teste | Funcional manual |
| Gerenciamento | Jira e Zephyr Scale |
| Sistema operacional | macOS Sequoia 15.8.3 |
| Navegador | Google Chrome 157.0.8103.78 |

## 3. Resultados da execução

| Caso | Cenário | Resultado |
|---|---|---|
| QASD-T1 | Autenticação com credenciais válidas | Pass |
| QASD-T2 | Autenticação com senha incorreta | Pass* |
| QASD-T3 | Autenticação com usuário vazio | Pass |
| QASD-T4 | Autenticação com senha vazia | Pass |
| QASD-T5 | Autenticação com ambos os campos vazios | Pass |
| QASD-T6 | Autenticação de usuário bloqueado | Pass |

\* Critério funcional atendido, com defeito visual registrado no QASD-8.

## 4. Métricas

| Indicador | Resultado |
|---|---:|
| Casos planejados | 6 |
| Casos executados | 6 |
| Casos aprovados | 6 |
| Casos reprovados | 0 |
| Casos bloqueados | 0 |
| Casos não executados | 0 |
| Taxa de execução | 100% |
| Taxa de aprovação funcional | 100% |
| Requisitos funcionais avaliados | 4 de 4 |
| Cobertura dos requisitos identificados | 100% |
| Defeitos identificados | 1 |
| Defeitos corrigidos | 0 |

### Cálculo dos indicadores

- Taxa de execução: (6 / 6) × 100 = 100%.
- Taxa de aprovação: (6 / 6) × 100 = 100%.
- Cobertura dos requisitos: (4 / 4) × 100 = 100%.

A cobertura apresentada refere-se exclusivamente aos requisitos funcionais identificados para este ciclo, não à totalidade dos possíveis comportamentos da aplicação.

## 5. Cobertura funcional

| Requisito | Casos associados | Resultado |
|---|---|---|
| LOGIN-RF-01 | QASD-T1 | Atendido |
| LOGIN-RF-02 | QASD-T2 | Atendido com ressalva visual |
| LOGIN-RF-03 | QASD-T3, QASD-T4, QASD-T5 | Atendido |
| LOGIN-RF-04 | QASD-T6 | Atendido |

Referência: [Requisitos de Login](requisitos-login.md).

## 6. Defeito identificado

| Informação | Identificação |
|---|---|
| Identificador | QASD-8 |
| Descrição | Mensagem de erro parcialmente cortada |
| Caso relacionado | QASD-T2 |
| Severidade | Baixa |
| Prioridade | Média |
| Situação | Aberto |

A investigação identificou uma limitação de altura no componente responsável pela apresentação da mensagem de erro.

Uma possível correção foi avaliada experimentalmente pelo DevTools, com resultados favoráveis nos três comprimentos de mensagem testados.

A alteração não foi implementada no código-fonte da aplicação.

## 7. Limitações e riscos remanescentes

- Execução formal realizada em um único ambiente desktop.
- Compatibilidade entre navegadores e dispositivos não avaliada neste ciclo.
- Requisitos derivados de comportamentos observáveis, sem especificação oficial disponibilizada.
- Defeito visual permanece aberto.
- A solução proposta requer implementação e validação adicional.
- Cenários de segurança, gerenciamento de sessão e acesso direto a páginas protegidas não foram validados formalmente neste ciclo.

## 8. Candidatos à automação

Os seis casos de teste são candidatos à automação E2E com Cypress, por apresentarem dados de entrada conhecidos, procedimentos reproduzíveis e resultados esperados verificáveis.

A automação deverá preservar a rastreabilidade com os respectivos casos e requisitos.

A validação visual do defeito QASD-8 deverá ser considerada separadamente dos testes funcionais automatizados.

## 9. Conclusão

O ciclo QASD-R1 atingiu os critérios de conclusão estabelecidos no plano de testes.

Os requisitos funcionais avaliados foram atendidos nas condições de execução documentadas.

Recomenda-se o encerramento do ciclo funcional, mantendo o defeito QASD-8 aberto para eventual correção e reteste.

O encerramento não representa certificação de ausência de defeitos nem autorização para lançamento do produto.

## 10. Referências

- [Plano de testes](plano-de-testes.md)
- [Requisitos de Login](requisitos-login.md)
- [História QASD-4](https://leesaeny.atlassian.net/browse/QASD-4)
- [Execução QASD-7](https://leesaeny.atlassian.net/browse/QASD-7)
- [Defeito QASD-8](https://leesaeny.atlassian.net/browse/QASD-8)
- [Encerramento QASD-9](https://leesaeny.atlassian.net/browse/QASD-9)