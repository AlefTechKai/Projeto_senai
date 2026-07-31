# Catálogo de Carros (Spring Boot + Angular + PostgreSQL)

Projeto para gerenciamento e visualização de marcas e modelos de carros.

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

## Roteiro para Próxima Sessão (Backend + Integração)
1. **Configuração PostgreSQL**: Configurar `application.properties` no Spring Boot.
2. **Entidades & JPA**: Criar classes `@Entity` (`Carro`, `Marca`, `Modelo`).
3. **Repository & Controller**: Criar `CarroRepository` e `@RestController` com endpoints REST.
4. **Habilitar CORS**: Configurar `@CrossOrigin` no backend para liberar acessos do frontend (localhost:4200).
5. **Integração Angular**: Injetar `HttpClient` no `carro.service.ts` e listar marcas/modelos nas telas.






