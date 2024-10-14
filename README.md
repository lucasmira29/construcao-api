
# API de Produtos

Esta API permite a criação, leitura, atualização e exclusão de produtos, com persistência de dados em arquivo JSON.

## Funcionalidades

- **Consultar Produtos**: Retorna todos os produtos.
- **Consultar Produto por ID**: Retorna um produto específico pelo ID.
- **Adicionar Produto**: Adiciona um novo produto à lista.
- **Atualizar Produto**: Atualiza um produto existente.
- **Deletar Produto**: Remove um produto da lista.

## Endpoints

### GET /products
Retorna todos os produtos.

### GET /products/:id
Retorna um produto específico com base no `id`.

### POST /products
Adiciona um novo produto. 

- Exemplo de corpo da requisição:
  ```json
  {
    "name": "Produto A",
    "price": 10.99
  }
  ```

### PUT /products/:id
Atualiza um produto existente com base no `id`.

- Exemplo de corpo da requisição:
  ```json
  {
    "name": "Produto B",
    "price": 19.99
  }
  ```

### DELETE /products/:id
Remove um produto com base no `id`.

## Validações

- O campo **name** é obrigatório.
- O campo **price** deve ser um número maior que 0.99.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/lucasmira29/construcao-api.git
   ```
   
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node index.js
   ```

O servidor rodará em `http://localhost:1234`.
