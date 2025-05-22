import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    name: "T-Shirt 'TurkStyle'",
                    description: "High-quality cotton T-shirt with a patriotic print. Fits well and doesn't fade after washing.",
                    price: 299.99,
                    image: "chair-grey.jpeg",
                },
                {
                    id: 2,
                    name: "Hoodie 'Anadolu Spirit'",
                    description: "Warm hoodie with soft lining. Perfect for chilly evenings. Features a Turkish-style ornament.",
                    price: 549.99,
                    image: "chair-white.jpeg",
                },
                {
                    id: 3,
                    name: "Cap 'Istanbul Dreams'",
                    description: "Light summer cap. Protects from the sun and adds a stylish look.",
                    price: 149.99,
                    image: "huk.jpeg",
                },
                {
                    id: 4,
                    name: "Tote Bag 'Ege'",
                    description: "Eco-friendly bag made from thick fabric. Convenient for shopping and walks.",
                    price: 199.99,
                    image: "kuk.jpeg",
                },
                {
                    id: 5,
                    name: "Tote Bag 'Ege'",
                    description: "Eco-friendly bag made from thick fabric. Convenient for shopping and walks.",
                    price: 199.99,
                    image: "sofa.jpeg",
                },
                {
                    id: 6,
                    name: "Tote Bag 'Ege'",
                    description: "Eco-friendly bag made from thick fabric. Convenient for shopping and walks.",
                    price: 199.99,
                    image: "wall-light.jpeg",
                },
            ]
        }
        this.addToOrder = this.addToOrder.bind(this);
    }

    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} />
                <Items items={this.state.items} onAdd ={this.addToOrder}/>
                <Footer/>
            </div>
        );
    }

    addToOrder(item) {
        this.setState({orders: [...this.state.orders, item]})
    }


}

export default App;


