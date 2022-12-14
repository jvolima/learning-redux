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
- Todas as regras de negócio do estado devem ficar no reducer.

### Actions
- As actions são lançadas quando queremos alterar o estado do reducer, uma action tem o type que é qual ação ela deve tomar, e um payload, geralmente contendo um objeto ou outro dado.
- As actions nunca devem ter regras de negócio, as regras são sempre responsabilidades do reducer.

### Redux Saga
- Middleware entre a action e o reducer.
- Usamos quando queremos fazer uma chamada a API por exemplo.

# Outros aprendizados
- Utilizar generators em funções para usar assincronismo sem o async e await, exemplo:
```
function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  });
}
```
- O 'yield' faz o papel do 'await' nessas funções com generators.