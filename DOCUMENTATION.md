# Etapas para execução do projeto



## Documentação da API

#### Adicionar novas empresas

```http
  POST /api/enterprise
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O Nome da empresa |
| `description`      | `string` | **Opcional**. Breve descrição da empresa|

#### Listar todas empresas cadastradas

```http
  GET /api/enterprise
```

#### Retorna uma empresa

```http
  GET /api/enterprise/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Lançar hora

```http
  POST /api/appointment
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do serviço |
| `description`      | `string` | **Opcional**. Breve descrição do serviço |
| `idEnterprise`      | `string` | **Obrigatório**. ID da empresa a ser lançada a hora|
| `hours`      | `Date` | **Obrigatório**. Quantidade de horas|
| `date`      | `Date` | **Obrigatório**. Dia a ser lançado as horas|

#### Editar lançamento de hora

```http
  PUT /api/appointment
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do serviço |
| `description`      | `string` | **Opcional**. Breve descrição do serviço |
| `idEnterprise`      | `string` | **Obrigatório**. ID da empresa a ser lançada a hora|
| `hours`      | `Date` | **Obrigatório**. Quantidade de horas|
| `date`      | `Date` | **Obrigatório**. Dia a ser lançado as horas|


#### Listar horas cadastradas

```http
  GET /api/appointment
```

#### Retorna horas de uma empresa

```http
  GET /api/enterprise/appointment/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da empresa |


#### Retorna horas por período de uma determinada empresa

```http
  GET /api/enterprise/appointment?idEnterprise=${id}&dateTo=${dateTo}&dateFrom=${dateFrom}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da empresa |
| `dateTo`      | `Date` | **Obrigatório**. Data inicial de busca |
| `dateFrom`      | `Date` | **Obrigatório**. Data final de busca |
