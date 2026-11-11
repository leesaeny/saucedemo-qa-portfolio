
# Requisitos de Login | SauceDemo

## 1. Objetivo

Documentar os requisitos funcionais identificados durante a exploração do fluxo de autenticação do SauceDemo, estabelecendo uma referência para a elaboração dos casos de teste.

**História relacionada:** [QASD-4](https://leesaeny.atlassian.net/browse/QASD-4)

## 2. Origem e classificação dos requisitos

O SauceDemo é uma aplicação pública de demonstração. Não foi disponibilizada uma especificação formal dos requisitos do produto para este projeto.

Os requisitos são classificados conforme sua origem:

- **Requisito inferido:** identificado a partir de comportamentos observados na aplicação.
- **Requisito proposto:** recomendação fundamentada em critérios de qualidade de software.
- **Requisito oficial:** requisito documentado ou confirmado pelo responsável pelo produto.

Os requisitos apresentados neste documento não representam exigências oficialmente aprovadas pelos responsáveis pela aplicação.

As observações exploratórias não substituem a execução formal dos casos de teste.

## 3. Requisitos funcionais identificados

### LOGIN-RF-01: Autenticação com credenciais válidas

**Descrição:** O sistema permite autenticar usuários com credenciais válidas e acessar o catálogo de produtos.

- Classificação: requisito inferido de comportamento observado.
- Dados utilizados: `standard_user` / `secret_sauce`.
- Resultado observado: autenticação realizada e acesso ao catálogo em `/inventory.html`.
- História relacionada: QASD-4.

### LOGIN-RF-02: Autenticação com credenciais inválidas

**Descrição:** O sistema impede a autenticação quando são informadas credenciais inválidas.

- Classificação: requisito inferido de comportamento observado.
- Dados utilizados: `standard_user` / senha incorreta.
- Resultado observado: acesso recusado, permanecendo na página de login.
- Mensagem apresentada: `Epic sadface: Username and password do not match any user in this service`.
- História relacionada: QASD-4.

### LOGIN-RF-03: Validação dos campos obrigatórios

**Descrição:** O sistema impede a autenticação quando o usuário ou a senha não são informados.

- Classificação: requisito inferido de comportamento observado.
- História relacionada: QASD-4.

| Usuário | Senha | Resultado observado |
|---|---|---|
| Vazio | Preenchida | `Username is required` |
| Preenchido | Vazia | `Password is required` |
| Vazio | Vazia | `Username is required` |

As mensagens são precedidas por `Epic sadface:`.

**Observação:** quando ambos os campos estão vazios, a validação do usuário tem precedência.

### LOGIN-RF-04: Autenticação de usuário bloqueado

**Descrição:** O sistema impede a autenticação de uma conta bloqueada.

- Classificação: requisito inferido de comportamento observado.
- Dados utilizados: `locked_out_user` / `secret_sauce`.
- Resultado observado: autenticação recusada.
- Mensagem apresentada: `Epic sadface: Sorry, this user has been locked out.`
- História relacionada: QASD-4.

## 4. Observações de qualidade

### LOGIN-OBS-01: Apresentação da mensagem de erro

Durante a exploração com senha incorreta, foi observada uma mensagem de erro parcialmente cortada na interface.

- Classificação: observação exploratória.
- Evidência: [Mensagem de erro com senha incorreta](../evidence/login/login-invalid-password.png).
- Impacto potencial: prejuízo à legibilidade da mensagem.
- Próxima ação: investigar a reprodutibilidade e o impacto durante a execução formal dos testes.

A observação não foi classificada como defeito confirmado nesta etapa.

## 5. Rastreabilidade

| Requisito | História | Caso de teste | Situação |
|---|---|---|
| LOGIN-RF-01 | QASD-4 | QASD-T1 | Caso aprovado |
| LOGIN-RF-02 | QASD-4 | QASD-T2 | Caso aprovado |
| LOGIN-RF-03 | QASD-4 | QASD-T3, QASD-T4, QASD-T5 | Casos aprovados |
| LOGIN-RF-04 | QASD-4 | QASD-T6 | Caso aprovado |

Os seis casos de teste foram cadastrados e revisados no Zephyr Scale, com status Approved e rastreabilidade estabelecida com a história QASD-4.

A aprovação dos casos indica que os procedimentos estão prontos para execução, não que os testes tenham sido executados com sucesso. Os resultados serão registrados posteriormente, durante o ciclo de execução.

## 6. Limitações

- Não houve validação formal dos requisitos pelo responsável pelo produto.
- As verificações foram realizadas como análise exploratória.
- Não foram executados casos de teste formais nesta etapa.
- Os resultados não representam cobertura completa da funcionalidade.
- As recomendações de qualidade serão avaliadas separadamente dos comportamentos funcionais identificados.
