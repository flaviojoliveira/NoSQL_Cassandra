
# Etapas para execução do projeto



## Documentação do Container

```yml
version: '2'

networks:
  app-tier:
    driver: bridge

services:
  cassandra:
    image: 'bitnami/cassandra:latest'
    networks:
      - app-tier
```

Executando o container

```bash
  docker-compose -d up
```

Parando o container

```bash
  docker-compose -d down
```

## Documentação da API

#### Adicionar nova atividade

```http
  POST /api/task
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O Nome da empresa |
| `description`      | `string` | **Opcional**. Breve descrição da empresa|

#### Listar todas as tasks

```http
  GET /api/task
```

#### Editar task

```http
  PUT /api/task/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do serviço |
| `description`      | `string` | **Opcional**. Breve descrição do serviço |


#### Excluir task

```http
  DELETE /api/task/${id}
```
