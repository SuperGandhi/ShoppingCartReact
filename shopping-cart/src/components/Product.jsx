import React, { Component } from "react";
import Button from './Button.jsx'
const styles = {
    product: {
        border: 'solid 1px #eee',
        backgroundColor: '#f5f7fa',
        boxShadow : '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius : '5px',
    },
    img: {
        width: '100%',
    }
}
class Product extends Component{
    render (){
        const {product, agregarAlCarro} = this.props;
        return(
            <div style={styles.product} >
                <img style={styles.img} alt={product.name} src={product.img}/>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Button onClick={()=> agregarAlCarro(product)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}


export default Product