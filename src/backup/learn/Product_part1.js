import React, {Component} from 'react'; 

class Product extends Component{
    render() {
        // console.log(this.props);
        /** CATATATAN Penting !!
         * Penamaan di const harus sama dengan nama variable yang dikirim
         * dari App.js
         */
        // const{ nameProduct, Price, Stock } = this.props
        const{ produkvar } = this.props
        const listProduk = produkvar.map(produkku=> {
            return(
                <div className="product" key={produkku.id}>
                    <p>Nama Product : {produkku.nameProduct}</p>
                    <p>Harga Product : {produkku.Price}</p>
                    <p>Stok Product : {produkku.Stock}</p>
                </div>
            )
        })

        return (
            <div>
                { listProduk }
            </div>
        )
    }
}

export default Product;