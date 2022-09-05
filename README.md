# Aprendendo a utilizar Redux no React

# Redux
## Conceitos básicos

### Arquitetura flux

- Componente ⇒ Action ⇒ Middleware ⇒ Reducer ⇒ Connection ⇒ Componente.

### Store
- Estado global do redux.
- A store pode ser dividida em módulos, onde cada módulo representa uma funcionalidade desaclopada uma da outra, como o estado do usuário logado e um carrinho de compras.

### Reducers
- Os reducers são os locais onde vão ficar centralizados o valor dos estados e suas actions.
- Quando for utilizar mais de um reducer na aplicação, é necessário a criação de um rootReducer para "combinar" os reducers e passar para o createStore.