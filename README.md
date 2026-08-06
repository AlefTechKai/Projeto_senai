# 🏎️ Catálogo de Carros (Spring Boot + Angular + PostgreSQL)

Aplicação Web Full Stack desenvolvida para o **Trabalho Prático do SENAI de Implantação de Sistemas**. A aplicação permite o gerenciamento completo (CRUD) de marcas e modelos de veículos, com persistência relacional e interface moderna com tema esportivo.

---

## 📌 O que a Aplicação Faz

- **Gerenciamento de Marcas**: Cadastro, listagem, edição e exclusão de marcas de carros.
- **Gerenciamento de Modelos**: Cadastro, listagem, edição e exclusão de modelos associados às marcas.
- **Exclusão Segura**: Alerta de confirmação exibindo os modelos vinculados à marca antes de confirmar a exclusão.
- **Página Sobre**: Apresentação detalhada das tecnologias, bibliotecas e frameworks utilizados no projeto.
- **Iniciador Simplificado**: Painel gráfico compacto no canto da tela para iniciar e encerrar backend e frontend com 1 clique.

---

## 🚀 Tecnologias Utilizadas

### **Backend**
- **Java 21** & **Spring Boot 3 / 4**
- **Spring Data JPA** & **Hibernate** (ORM)
- **PostgreSQL** (Banco de Dados Relacional)
- **Lombok** (Produtividade de código)
- **Maven** (Gerenciamento de dependências e build)

### **Frontend**
- **Angular 19** (Framework SPA Standalone)
- **TypeScript** & **RxJS** (Programação Reativa)
- **HttpClientModule** (Comunicação com API REST)
- **Angular Material** (Ícones e componentes UI)
- **SCSS** (Estilização customizada com tema dark esportivo e efeito neon)

---

## 🛠️ O que Foi Implementado

1. **Arquitetura Backend (REST API)**:
   - Entidades `Marca` e `Modelo` mapeadas com JPA (`@ManyToOne` e `@JoinColumn`).
   - Repositórios `MarcaRepository` e `ModeloRepository` com exclusão em cascata.
   - Controllers REST (`/api/marcas` e `/api/modelos`) com suporte a CORS (`@CrossOrigin("*")`).

2. **Interface Frontend (Angular 19)**:
   - Componentes Standalone (`Navbar`, `Marcas`, `Modelos`, `Sobre`).
   - Serviço reativo `CarroService` consumindo endpoints REST.
   - Formulários dinâmicos de cadastro e edição de registros.
   - Confirmação personalizada de deleção informando os modelos vinculados.
   - Design System esportivo dark com gradientes, efeitos neon e carros de fundo.

3. **Automação & Execução**:
   - `start.bat` & `start.ps1`: Painel GUI no canto superior da tela para controlar a execução dos servidores backend e frontend sem poluir a área de trabalho.

---

## 📂 Estrutura de Endpoints REST

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/api/marcas` | Listar todas as marcas |
| `POST` | `/api/marcas` | Cadastrar nova marca |
| `PUT` | `/api/marcas/{id}` | Atualizar marca existente |
| `DELETE` | `/api/marcas/{id}` | Deletar marca e seus modelos |
| `GET` | `/api/modelos` | Listar todos os modelos |
| `POST` | `/api/modelos` | Cadastrar novo modelo com marca |
| `PUT` | `/api/modelos/{id}` | Atualizar modelo existente |
| `DELETE` | `/api/modelos/{id}` | Deletar modelo |

---

## ⚡ Como Executar a Aplicação

### **Opção 1: Via Iniciador Rápido (Recomendado)**
Dê um duplo clique no arquivo `start.bat` na raiz do projeto. Um mini painel surgirá no canto superior esquerdo para controlar os servidores e abrir o navegador.

### **Opção 2: Execução Manual**

#### **1. Banco de Dados**
Certifique-se de que o PostgreSQL está rodando com a base `senai_db` criada:
- **Database**: `senai_db`
- **Usuário**: `admin`
- **Senha**: `549521`

#### **2. Backend (Spring Boot)**
```powershell
cd backend
.\mvnw.cmd spring-boot:run
```
*(Servidor em `http://localhost:8080`)*

#### **3. Frontend (Angular)**
```powershell
cd frontend
npm install
npm start
```
*(Aplicação em `http://localhost:4200`)*
