import React, { Component } from "react";

const styles = {
    button:{
        backgroundColor: '#deebdd',
        color: '#09203f',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '15px',
    }
}
class Button extends Component {
    render(){
        return(
            <button style={styles.button} 
            {...this.props}/>
        )
    }
}

export default Button;