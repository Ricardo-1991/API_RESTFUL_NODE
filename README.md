# API REST para Cadastro de Estudantes Esta é uma API REST desenvolvida com Node.js e TypeScript para o cadastro de estudantes. O projeto utiliza as seguintes dependências: ## Dependências ```json "dependencies": { "express": "", "uuid": "", "zod": "" }, "devDependencies": { "@types/express": "", "@types/node": "", "tsup": "", "tsx": "", "typescript": "" } ``` ## Instalação Para instalar as dependências do projeto, execute o seguinte comando: ```bash npm install ``` ## Compilação Após a instalação das dependências, você pode compilar a aplicação com o seguinte comando: ```bash npm run build ``` ## Modo de Desenvolvimento Para rodar a aplicação em modo de desenvolvimento com o recurso de Watch, utilize: ```bash npm run start:dev ``` ## Iniciar o Servidor Para iniciar o servidor, utilize o comando: ```bash npm run start ``` ## Validação de Dados A validação dos dados de entrada está sendo feita utilizando a biblioteca Zod. ## Endpoints A API possui os seguintes endpoints para o cadastro de estudantes: - `POST /estudantes`: Cria um novo estudante. - `GET /estudantes`: Lista todos os estudantes cadastrados. - `GET /estudantes/:id`: Obtém os detalhes de um estudante específico. - `PUT /estudantes/:id`: Atualiza os dados de um estudante específico. - `DELETE /estudantes/:id`: Remove um estudante do cadastro. ## Contribuições Contribuições são bem-vindas! Sinta-se à vontade para abrir um Pull Request ou relatar problemas. ## Licença Este projeto está licenciado sob a [MIT License](LICENSE).
