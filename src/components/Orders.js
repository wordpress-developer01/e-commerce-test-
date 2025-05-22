import React, { Component } from 'react';

class Orders extends Component {
    render() {
        const { item } = this.props;

        // Проверка: если item не передан — ничего не рендерим или показываем заглушку
        if (!item) {
            return <div className="orders">Нет данных</div>;
        }

        return (
            <div className='orders'>
                <img className='imag' src={`./img/${item.image}`} alt={item.name || 'product'} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <b>{item.price}$</b>
            </div>
        );
    }
}

export default Orders;
