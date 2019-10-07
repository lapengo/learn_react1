import React, { Component } from "react";
import Product from "./Product";
import Style from "./Style.module.css";

class App extends Component {
  state = {
    produk: [
      { id: 1, nameProduct: "Keyboard", Price: "7jt", Stock: "70" },
      { id: 2, nameProduct: "Rumah", Price: "1M", Stock: "23" },
      { id: 3, nameProduct: "Sendal", Price: "2rb", Stock: "199" },
      { id: 4, nameProduct: "Sepeda", Price: "5jt", Stock: "3" },
      { id: 5, nameProduct: "Laptop", Price: "7jt", Stock: "45" },
      { id: 6, nameProduct: "Mesin Cuci", Price: "90Jt", Stock: "99" }
    ]
  };

  render() {
    return (
      <div>
        <h1>Hay Ini React Untuk Belajar Bagian 1</h1>
        <h3>{Date()}</h3>
        <Product produkvar={this.state.produk} />
      </div>
    );
  }
}

export default App;

/**
 * 1. Webpack React
 * 2. Props - List Dataa
 */
