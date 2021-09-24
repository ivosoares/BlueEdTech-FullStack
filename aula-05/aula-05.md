
# aula 5 - Client Side Storage, Callbacks, Promisses, Fetch e Funções Assincronas

## Client-side storage

Os navegadores modernos oferecem suporte a várias maneiras de os sites armazenarem dados no computador do usuário - com a permissão do usuário - e depois recuperá-los quando necessário. Isso permite que você mantenha dados para armazenamento de longo prazo, salve sites ou documentos para uso offline, retenha configurações específicas do usuário para seu site e muito mais.

Para entender mais consulte a [documentação oficial.](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)

### LocalStorage

A propriedade `localStorage` permite acessar um objeto Storage local. A localStorage é similar ao `sessionStorage`. A única diferença é que enquanto os dados armazenados no localStorage não expiram, os dados no `sessionStorage` tem os seus dados limpos ao expirar a sessão da página — ou seja, quando a página (aba ou janela) é fechada.

```js
// Salva os dados na localStorage
localStorage.setItem('chave', 'valor');

// Obtém os dados da localStorage
var data = localStorage.getItem('chave');
```

### SessionStorage

A propriedade sessionStorage permite acessar um objeto tipo session [Storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage). A sessionStorage é similar ao localStorage, a única diferença é que enquanto os dados armazenados no localStorage não expiram, os dados no sessionstorage tem os seus dados limpos ao expirar a sessão da página. A sessão da página dura enquanto o browser está aberto e se mantém no recarregamento da página.

Sintaxe

```js
// Salva os dados na sessionStorage
sessionStorage.setItem('chave', 'valor');

// Obtém os dados da sessionStorage
var data = sessionStorage.getItem('chave');
```

## JSON

**JavaScript Object Notation**

`JSON` é um formato baseado em texto padrão para representar dados estruturados com base na sintaxe do objeto JavaScript. É comumente usado para transmitir dados em aplicativos da Web (por exemplo, enviar alguns dados do servidor para o cliente, para que possam ser exibidos em uma página da Web ou vice-versa). Saiba mais sobre o json na [documentação oficial](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON).

Estrutura do `JSON`.

Conforme descrito acima, um JSON é uma string cujo formato se parece muito com o formato literal do objeto JavaScript. Você pode incluir os mesmos tipos de dados básicos dentro do JSON, como em um objeto JavaScript padrão — strings, números, matrizes, booleanos e outros literais de objeto. Isso permite que você construa uma hierarquia de dados, assim:

```js
{
  "filmes": [
    "nome": "Vingadores",
    "genero": "Ação", 
  ]
}
```

Transformando objetos em JSON e vice-versa

`JSON.stringify` transforma um objeto JavaScript em texto JSON e armazena esse texto JSON em uma string, por exemplo:

```js
var my_object = { key_1: "some text", key_2: true, key_3: 5 };

var object_as_string = JSON.stringify(my_object);  
// "{"key_1":"some text","key_2":true,"key_3":5}"  

typeof(object_as_string);  
// "string"  
```

`JSON.parse` transforma uma string de texto JSON em um objeto JavaScript, por exemplo:

```js
var object_as_string_as_object = JSON.parse(object_as_string);  
// {key_1: "some text", key_2: true, key_3: 5} 

typeof(object_as_string_as_object);  
// "object" 
```

## Promisses