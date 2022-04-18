import React, {Component} from 'react'
import Products from './components/Products';
class App extends Component {
  state = {
    products: [
      {name: 'Tomate', price: 1500, img:'/products/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img:'/products/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img:'/products/lechuga.jpg'},
    ]
  }
  
  render (){
    return (
      <div>
        <Products
          agregarAlCarro= {() => console.log('No hace nada')}
          products= {this.state.products}
        />
      </div>
    );
  }
}

export default App;
