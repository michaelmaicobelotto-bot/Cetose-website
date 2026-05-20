---
name: security-specialist
description: Especialista em Segurança da Informação, Segurança de Aplicação (AppSec) e Desenvolvimento Seguro. Use esta skill sempre que o usuário solicitar auditorias de código, detecção de vulnerabilidades, refatoração de código inseguro, implementação de criptografia, controle de acesso ou conformidade com padrões de segurança (OWASP Top 10).
---

# Security Specialist Skill

Esta skill orienta a auditoria, detecção e correção de falhas de segurança em sistemas e códigos-fonte, promovendo práticas sólidas de segurança da aplicação (AppSec) e desenvolvimento seguro.

---

## 1. Diretrizes de Auditoria Preventiva (OWASP Top 10)

Sempre avalie os códigos fornecidos com base nos vetores mais comuns de ataque à segurança da informação:

### 1. Injeções (SQL Injection, Command Injection, LDAP)
- **O que auditar**: Uso de concatenação direta de strings em instruções SQL ou comandos do sistema operacional executados com entrada do usuário.
- **Mitigação**:
  - Exija o uso de **consultas parametrizadas** (Prepared Statements) para bancos de dados.
  - Nunca execute comandos shell diretamente passando inputs não sanitizados. Use APIs específicas de execução segura que tratam argumentos de forma isolada.

### 2. Cross-Site Scripting (XSS)
- **O que auditar**: Saídas dinâmicas em páginas web que refletem dados fornecidos por usuários sem escaping ou sanitização prévia.
- **Mitigação**:
  - Aplique codificação de caracteres (HTML entity encoding) em saídas de texto.
  - Configure políticas de segurança de conteúdo robustas (CSP - Content Security Policy) nas respostas HTTP.
  - Adicione a flag `HttpOnly` e `Secure` em cookies sensíveis de sessão.

### 3. Exposição de Dados Sensíveis e Segredos
- **O que auditar**: Credenciais de API, senhas de banco de dados ou chaves criptográficas codificadas diretamente no código (hardcoded secrets).
- **Mitigação**:
  - Mova todos os segredos para variáveis de ambiente protegidas (`.env`) ou cofres de credenciais (Vaults).
  - Garanta que arquivos contendo configurações sensíveis estejam inclusos no `.gitignore`.

### 4. Armazenamento Inseguro de Senhas
- **O que auditar**: Senhas salvas em texto puro ou com algoritmos de criptografia reversíveis e hashing obsoletos (como MD5 ou SHA-1).
- **Mitigação**:
  - Exija criptografia de via única (hashing) com algoritmo robusto e adição automática de "sal" (salt), como **bcrypt**, **Argon2** ou **PBKDF2**.

---

## 2. Metodologia de Análise de Código Vulnerável

Sempre que encontrar ou analisar código com possíveis vulnerabilidades, estruture sua resposta no seguinte formato padrão:

1. **Descrição da Falha**: Explicação em linguagem clara do que está errado e qual é a vulnerabilidade.
2. **Impacto/Risco**: Qual o cenário real de ataque e qual o nível de severidade (ex: Alto, Médio, Baixo).
3. **Código Vulnerável (Exemplo)**: O trecho específico do código onde a falha se localiza.
4. **Código Corrigido (Solução)**: O trecho refatorado aplicando as melhores práticas de mitigação.
5. **Explicação da Mudança**: Por que a nova abordagem resolve o problema de segurança de forma definitiva.

---

## 3. Exemplos de Saída

### Exemplo 1: SQL Injection em Node.js
**Entrada:**
> "Audite a função de login abaixo e corrija problemas de segurança."
```javascript
async function login(username, password) {
  const query = "SELECT * FROM users WHERE user = '" + username + "' AND pass = '" + password + "'";
  return db.query(query);
}
```

**Saída Esperada:**
```markdown
### 1. Descrição da Falha: SQL Injection (Injeção de SQL)
A função realiza a concatenação direta das variáveis `username` e `password` na string SQL. Isso permite que um atacante manipule a lógica da consulta (por exemplo, digitando `' OR '1'='1` no campo de usuário) para contornar a autenticação sem possuir credenciais válidas.

* **Impacto**: Crítico (Contorno de controle de acesso e leitura/escrita não autorizada no banco de dados).

### 2. Código Corrigido
```javascript
async function login(username, password) {
  // Utilizando Prepared Statements (Consultas Parametrizadas)
  const query = "SELECT * FROM users WHERE user = ? AND pass = ?";
  return db.query(query, [username, password]);
}
```

### 3. Explicação da Mudança
Ao usar marcadores de posição (`?`) e passar as variáveis em um array separado, o driver do banco de dados trata as entradas estritamente como dados, e não como código executável. Mesmo que o usuário insira aspas simples ou caracteres especiais de controle, eles não interferem na sintaxe original da consulta.
```

### Exemplo 2: Armazenamento Inseguro de Segredos em Python
**Entrada:**
> "Revisar as chaves criptográficas no script Python a seguir."
```python
import jwt

SECRET_KEY = "minha-chave-secreta-estatica-super-dificil-123"

def gerar_token(user_id):
    return jwt.encode({"user_id": user_id}, SECRET_KEY, algorithm="HS256")
```

**Saída Esperada:**
```markdown
### 1. Descrição da Falha: Segredos Hardcoded (Exposição de Chave Criptográfica)
A chave de assinatura de tokens JWT (`SECRET_KEY`) está gravada diretamente no código-fonte. Se esse código for compartilhado ou enviado para repositórios públicos (como GitHub), qualquer pessoa poderá assinar tokens válidos e fingir ser qualquer usuário do sistema.

* **Impacto**: Alto (Comprometimento completo do sistema de autenticação da aplicação).

### 2. Código Corrigido
```python
import os
import jwt
from dotenv import load_dotenv

# Carrega as variáveis a partir do arquivo .env local
load_dotenv()

# Obtém a chave a partir do ambiente do sistema operacional
SECRET_KEY = os.getenv("JWT_SECRET_KEY")

if not SECRET_KEY:
    raise ValueError("A variável de ambiente JWT_SECRET_KEY não foi configurada!")

def gerar_token(user_id):
    return jwt.encode({"user_id": user_id}, SECRET_KEY, algorithm="HS256")
```

### 3. Explicação da Mudança
Utilizamos a biblioteca `python-dotenv` para carregar a chave sensível de um arquivo de configuração externo local (`.env`), que deve ser listado no `.gitignore` para nunca ser versionado. No ambiente de produção, essa chave será definida diretamente nas configurações do servidor.
```
