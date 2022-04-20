import React, {Component} from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
class App extends Component {
  state = {
    products: [
      {name: 'Tomate', price: 1500, img:'/products/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img:'/products/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img:'/products/lechuga.jpg'},
    ],
    carro:[],
    esCarroVisible: false,
  }
  
  agregarAlCarro = (producto) =>{
    const {carro} = this.state
    if(carro.find (x => x.name === producto.name)){
      const newCarro = carro.map(x=> x.name ===producto.name
      ? ({
        //operador ternario
        ...x,
        cantidad: x.cantidad + 1
      })
      : x)
      return this.setState({carro: newCarro})
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () =>{
    if(!this.state.carro.length){
      return 
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  render (){
    const {esCarroVisible} = this.state;
    console.log(this.state.carro)
    return (
      <div>
        <Navbar 
        carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro}
        />
        <Layout>
        <Title/>
        <Products
          agregarAlCarro= {this.agregarAlCarro}
          products= {this.state.products}
        />
        </Layout>
      </div>
    );
  }
}

export default App;
