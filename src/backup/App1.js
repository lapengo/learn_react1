import React, {Component} from 'react'; 
import Product from './Product';

class App extends Component{
    render() {
        return (
            <div>
              <h1>Hay Ini React Untuk Belajar Bagian 1</h1>
              <h3>{ Date() }</h3>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        )
    }
}

export default App;
