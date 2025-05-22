import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item">
                <img
                    className='imag' src={`./img/${this.props.item.image}`} alt={this.props.item.name || 'изображение'}
                />

                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.description}</p>
                <b>{this.props.item.price}$</b>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        );
    }
}

export default Item;