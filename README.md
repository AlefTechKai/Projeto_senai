# Catálogo de Carros (Spring Boot + Angular + PostgreSQL)

Projeto para gerenciamento e visualização de marcas e modelos de carros.

> **Nota**: Para consultar os requisitos técnicos e critérios de avaliação completos, veja o arquivo [projeto.md](projeto.md).

## Tecnologias Utilizadas
- Spring Boot
- Angular
- PostgreSQL
- Angular Material

## Estrutura de Páginas
- Página 1: Marcas de carros
- Página 2: Modelos por marcas
- Página 3: Sobre o projeto (Tecnologias, libs e frameworks)

## Passo a Passo de Execução

### Passo 2: Componentes e Serviços Criados
- Componente `marcas` em `frontend/src/app/pages/marcas`.
- Componente `modelos` em `frontend/src/app/pages/modelos`.
- Componente `sobre` em `frontend/src/app/pages/sobre`.
- Componente `navbar` em `frontend/src/app/components/navbar`.
- Serviço `carro` em `frontend/src/app/services/carro.service.ts`.

### Passo 3: Navbar e Roteamento Concluídos
- Componente `navbar` integrado no `app.component.html`.
- Rotas das 3 páginas vinculadas à barra de navegação.

### Passo 4: Serviço Carro e Mock CRUD Implementados
- Criadas interfaces `Marca` e `Modelo` em `frontend/src/app/services/carro.ts`.
- Criado `CarroService` com dados mockados e métodos CRUD (`GET`, `POST`, `PUT`, `DELETE`).

### Passo 5: Telas de Marcas e Modelos Concluídas
- Formulários e tabelas criados em `marcas` (`marcas.ts` e `marcas.html`).
- Formulários e tabelas criados em `modelos` (`modelos.ts` e `modelos.html`).

### Passo 6: Entidades JPA Concluídas
- Criada entidade `Marca` em `backend/src/main/java/br/com/alef/senai/domain/Marca.java`.
- Criada entidade `Modelo` em `backend/src/main/java/br/com/alef/senai/domain/Modelo.java` com relacionamento `@ManyToOne`.

### Passo 7: Repositories JPA Concluídos
- Criada interface `MarcaRepository` em `backend/src/main/java/br/com/alef/senai/repository/MarcaRepository.java`.
- Criada interface `ModeloRepository` em `backend/src/main/java/br/com/alef/senai/repository/ModeloRepository.java`.

### Passo 8: Controllers REST Concluídos
- Criada classe `MarcaController` em `backend/src/main/java/br/com/alef/senai/controller/MarcaController.java`.
- Criada classe `ModeloController` em `backend/src/main/java/br/com/alef/senai/controller/ModeloController.java`.

### Passo 9: Serviço HTTP Concluído
- Atualizado `CarroService` em `frontend/src/app/services/carro.ts` para integrar com a API REST usando `HttpClient` e `Observable`.

### Passo 10: Componentes Angular Integrados
- Atualizado `marcas.ts` para consumir `CarroService` via `subscribe`.
- Atualizado `modelos.ts` para consumir `CarroService` via `subscribe`.

### Passo 11: Templates HTML Corrigidos
- Ajustadas diretivas `*ngFor` e variáveis nos botões de ação em `marcas.html`.
- Ajustadas diretivas `*ngFor`, referências de marcas e método `cancelarEdicao()` em `modelos.html`.

### Passo 12: Configuração e Execução Final Concluídas
- Configurado `provideHttpClient()` no `app.config.ts`.
- Aplicação Full Stack pronta para execução integrada (Spring Boot + Angular + PostgreSQL).

## Como Executar a Aplicação

### Backend (Spring Boot)
1. Navegar até a pasta `backend`.
2. Executar o comando: `./mvnw spring-boot:run` (ou via IDE).
3. O servidor subirá na porta `8080` (`http://localhost:8080/api/marcas` e `http://localhost:8080/api/modelos`).

### Frontend (Angular)
1. Navegar até a pasta `frontend`: `cd frontend`.
2. Instalar dependências se necessário: `npm install`.
3. Executar o servidor de desenvolvimento: `npm start` ou `ng serve`.
4. Abrir o navegador em `http://localhost:4200`.













