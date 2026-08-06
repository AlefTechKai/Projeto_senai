Contexto do Desafio:
O tema deste projeto é livre. Você deve identificar um problema real ou fictício que necessite de uma solução digital para otimizar processos ou acompanhamento de dados. Como desenvolvedor(a) júnior, você deverá projetar e implementar o Minimum Viable Product (MVP) deste sistema, integrando um backend em Spring Boot a uma interface web moderna. O domínio de "Gestão Acadêmica" pode ser utilizado como base ou exemplo, mas sinta-se à vontade para explorar outros cenários.
Objetivo da Atividade
Desenvolver e entregar uma aplicação web Full Stack funcional, versionada no GitHub, que permita o cadastro e a listagem de entidades com relacionamentos relacionais de banco de dados.
Requisitos Técnicos Obrigatórios1. Banco de Dados e Backend (Spring Boot)
Linguagem & Framework: Java 19+ com Spring Boot (Spring Data JPA, Web, Lombok).
Banco de Dados: PostgreSQL ou MySQL (utilizando conexão via JDBC/Hibernate).
Modelagem (Relacionamentos): O banco de dados deve conter ao menos duas tabelas relacionadas, aplicando obrigatoriamente:
Um relacionamento do tipo @ManyToOne (ex: Várias Turmas pertencem a um Curso).
(Opcional/Desafio) Um relacionamento @ManyToMany (ex: Várias Turmas possuem vários Professores).
API REST: A aplicação deve expor endpoints RESTful para as operações básicas (Listar e Cadastrar).2. Frontend (Interface do Usuário)
Você tem liberdade para escolher uma das seguintes stacks para o front:
Opção A (Moderna): Angular (versão recente) utilizando Angular Material ou Bootstrap para estilização.
Opção B (Fundamentos): HTML5, CSS3 e JavaScript puro (Vanilla), estilizado com Bootstrap (via CDN) para garantir um design responsivo.
Requisito de Integração: O frontend deve consumir a API REST do backend utilizando requisições assíncronas (via HttpClient ou fetch) para exibir os dados reais vindos do banco de dados na tela.
3. Versionamento (GitHub)
O código-fonte completo deve estar hospedado em um repositório público ou privado no GitHub.
O repositório deve conter um arquivo README.md explicativo contendo:
Nome do projeto e tecnologias utilizadas.
Passo a passo de como rodar o backend (configuração do application.properties).
Passo a passo de como rodar o frontend.
Sugestão de Domínio (Exemplo: Gestão Acadêmica)
Para manter o projeto simples e focado no aprendizado, utilize o seguinte escopo de 3 Entidades:Curso: id, nome, cargaHorariaProfessor: id, nome, especialidadeTurma: id, nome, curso_id (Relacionamento com Curso)
Critérios de Avaliação (O que será observado)Estrutura e Funcionamento (Peso 4.0): O sistema roda de ponta a ponta? O backend conecta ao banco e cria as tabelas automaticamente via Hibernate? Os dados cadastrados no front aparecem no banco de dados?Modelagem e Relacionamentos (Peso 2.5): As anotações do JPA (@ManyToOne, @JoinColumn, etc.) foram aplicadas corretamente nas classes Java?Integração Front e Back (Peso 2.0): O frontend consome corretamente a API REST e exibe as informações estruturadas na tela (tabelas, listas ou cards)?Boas Práticas e GitHub (Peso 1.5): Código limpo, uso de Lombok para evitar repetição, commits organizados no GitHub e presença do README.md.
