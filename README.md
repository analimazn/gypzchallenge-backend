## Back-end - Challenge GYPZ

```
Nodejs
node : v10.15.3
npm  : 6.4.1
```

API para gerenciar solicitações de cartões de crédito.

1. [Instalação](#installation)
2. [Estrutura do Projeto](#concept-of-structure)
    1. [Sobre Controller](#controller-folder)
    2. [Sobre Models](#models-folder)
    3. [Sobre Services](#services-folder)
    4. [Sobre Utils](#utils-folder)
    5. [Sobre Validations](#validation-folder)
3. [Dependências do projeto](#dependencies)
4. [Dependências de desenvolvimento](#dev-dependencies)


## Instalação

Para instalar as dependências utilize as linhas de comando do [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) ou se preferir [`yarn`](https://yarnpkg.com/en/).

```sh
npm install
```

Crie o arquivo `.env` de acordo com o arquivo `.env.example`.

Para esse projeto foi utilizado o banco de dados não relacional [mongoDB](https://www.mongodb.com/), caso ainda não o tenho instalado, siga o passo-a-passo [aqui](https://docs.mongodb.com/manual/installation/)


## Estrutura do projeto

```
src
    ├── controller
    │   └── order.js
    ├── index.js
    ├── models
    │   └── Order.js
    ├── routes.js
    ├── services
    │   └── order.js
    ├── utils
    │   └── order.js
    └── validation
        └── order.js
```


### Diretório **models**

O diretório de `models` é responsável por modelar e realizar a conexão com o banco de dados.
Aqui criamos o `schema` através da biblioteca [Mongoose](https://mongoosejs.com/) para realizar a conexão e as transações de dados com o mongoDB, e é nesse `schema` que se define e valida quais os campos que devem ser salvos, além de, definir o nome da `collection` onde os nossos dados ficarão armazenados.

O modelo a ser armazenado deve seguir a seguinte estrutura:

```
  user: {
    firstName : <type: String>
    lastName  : <type: String>
    document  : <type: Number>
    bornDate  : <type: Date>
  },
  contact: {
    cellphoneNumber : <type: Number>
  },
  address: {
    country       : <type: String>
    df            : <type: String>
    country       : <type: String>
    postCode      : <type: Number>
    neighborhood  : <type: String>
    street        : <type: String>
    houseNumber   : <type: Number>
    moreInfo      : <type: String>
  },
  creditCardInfo: {
    amount      : <type: Number>
    approved    : <type: Boolean>
    creditLimit : <type: Number>
  },
  createdAt : <type: Date>
```


### Diretório **controller**

O diretório de `controllers` é responsável por controlar a comunicação entre as requisições feitas do cliente para com a aplicação.
Todas as requisições recebidas aqui são enviadas para os seus respectivos serviços localizados no diretório de `services`.


### Diretório **services**

O diretório de `services` é responsável por manipular e persistir os dados de acordo com a regra de negócio pré-estabelecida.
É aqui onde são feitas as seguintes operações:

- Validação de dados utilizando o `schema` criado no diretório de `validations`;
- Transformação dos dados de acordo com a regra de negócio pré-estabelecida utilizando funções disponíveis no diretório de `utils`;
- Persistência e manipulação dos dados utilizando o `schema` criado no diretório de `models`.


### Diretório **validation**

O diretório de `validations` contém o `schema` criado a partir da biblioteca [Joi](https://hapi.dev/family/joi/?v=15.1.1) para validar os dados da requisição antes de iniciar as operações para persistência no banco de dados.


### Diretório **utils**

O diretório de `utils` é responsável por realizar operações pontuais, como por exemplo:

- Formatação dos dados recebidos para persistir no banco de dados;
- Geração do score de aprovação após a solicitação do cartão de crédito ser feita;
- Verificação do limite de crédito que o cartão terá caso seja aprovado;
- Cálculo do limite de crédito.


### Arquivo **routes**

O arquivo de `routes.js` contém todas as rotas disponíveis na aplicação:

- Os métodos disponíveis são ( **GET| POST| DELETE** )


**GET** /order -> Retorna todas as solicitações salvas dentro de `data`, no seguinte formato via `json`:

```
{
  "message": "All found successfully",
  "data": [
    {
      "user": {
        "firstName" : <type: String>,
        "lastName"  : <type: String>,
        "document"  : <type: Number>,
        "bornDate"  : <type: Date>
      },
      "contact": {
        "cellphoneNumber" : <type: Number>
      },
      "address": {
        "country"       : <type: String>,
        "df"            : <type: String>,
        "county"        : <type: String>,
        "postCode"      : <type: Number>,
        "neighborhood"  : <type: String>,
        "street"        : <type: String>,
        "houseNumber"   : <type: Number>,
        "moreInfo"      : <type: String>
      },
      "creditCardInfo": {
        "amount"      : <type: Number>,
        "approved"    : <type: Boolean>,
        "creditLimit" : <type: Number>
      },
      "_id"        : <type: ObjectID>,
      "createdAt"  : <type: Date>,
    }
  ],
  "status"  : <type: Number>
}
```


**POST** /order -> Adiciona uma nova solicitação via `application/x-www-form-urlencoded`.
Os parâmetros devem estar no seguinte formato:

```
  {
    firstName       : <type: String>
    lastName        : <type: String>
    document        : <type: Number>
    bornDate        : <type: Date>
    cellphoneNumber : <type: Number>
    country         : <type: String>
    df              : <type: String>
    country         : <type: String>
    postCode        : <type: Number>
    neighborhood    : <type: String>
    street          : <type: String>
    houseNumber     : <type: Number>
    moreInfo        : <type: String>
    amount          : <type: Number>
  }
```


**DELETE** /order -> Deleta uma solicitação de acordo com o `_id : <type : ObjectID()`. O parâmetro deve estar no seguinte formato via `json`:

```
   {
    "user": {
      "firstName" : <type: String>,
      "lastName"  : <type: String>,
      "document"  : <type: Number>,
      "bornDate"  : <type: Date>
    },
    "contact": {
      "cellphoneNumber" : <type: Number>
    },
    "address": {
      "country"       : <type: String>,
      "df"            : <type: String>,
      "county"        : <type: String>,
      "postCode"      : <type: Number>,
      "neighborhood"  : <type: String>,
      "street"        : <type: String>,
      "houseNumber"   : <type: Number>,
      "moreInfo"      : <type: String>
    },
    "creditCardInfo": {
      "amount"      : <type: Number>,
      "approved"    : <type: Boolean>,
      "creditLimit" : <type: Number>
    },
    "_id"        : <type: ObjectID>,
    "createdAt"  : <type: Date>,
  }
```

Após a instalação estar completa e o arquivo `.env` estar devidamente preenchido, para rodar o projeto localmente digite o comando:

```sh
npm start
```

O projeto rodará localmente no endereço `http://localhost:3000/`, mas você pode conferí-lo online no endereço [https://gypzchallenge-backend.herokuapp.com/](https://gypzchallenge-backend.herokuapp.com/), onde está armazenado em um servidor no [Heroku](https://www.heroku.com)

## Dependências

- [@hapi/joi](https://ghub.io/@hapi/joi): Objeto com função de `schema` utilizado para validar Objetos Javascript.
- [@hapi/boom](https://ghub.io/hapijs/boom): Amigável objeto para erros HTTP.
- [dotenv](https://ghub.io/dotenv): Dotenv é um módulo sem dependências que carrega variáveis de ambiente a partir de um arquivo `.env` dentro de `process.env`.
- [express](https://ghub.io/express): Web server framework.
- [cors](https://ghub.io/expressjs/cors): CORS é um pacote `node.js` que pode ser utilizado para habilitar conexões para o servidor `express`.
- [moment](https://ghub.io/moment): Validator e manipulador de datas.
- [mongoose](https://ghub.io/mongoose): MongoDB objeto criado para realizar operações em ambientes assíncronos.


## Dependências de desenvolvimento

- [nodemon](https://ghub.io/nodemon): Carrega automaticamente o servidor a cada atualização feita no projeto.
- [morgan](https://ghub.io/morgan): Demonstra todas as requisições feitas para o servidor.

