# API REST para Cadastro de Estudantes

Esta é uma API REST desenvolvida com Node.js e TypeScript para o cadastro de estudantes. O projeto utiliza as seguintes dependências:

## Dependências

- **express**
- **uuid**
- **zod**

### Dev Dependencies

- **@types/express**
- **@types/node**
- **tsup**
- **tsx**
- **typescript**

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

Após a instalação das dependências, você pode compilar a aplicação com o seguinte comando:

```bash
npm run build
```

Após a instalação das dependências, você pode compilar a aplicação com o seguinte comando:

```bash
npm run build
```
## Modo de Desenvolvimento
Para rodar a aplicação em modo de desenvolvimento com o recurso de Watch, utilize:

```bash
npm run start:dev
```

## Iniciar o servidor
Para iniciar o servidor utilize:

```bash
npm run start
```
## Endpoints

A API possui os seguintes endpoints para o cadastro de estudantes:

- **POST /estudantes**: Cria um novo estudante.
- **GET /estudantes**: Lista todos os estudantes cadastrados.
- **GET /estudantes/:id**: Obtém os detalhes de um estudante específico.
- **PUT /estudantes/:id**: Atualiza os dados de um estudante específico.
- **DELETE /estudantes/:id**: Remove um estudante do cadastro.

