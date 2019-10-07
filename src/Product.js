import React from 'react';

const Product = ({ produkvar }) => {

    const listProduk = produkvar.map(produkku => {

        let minstok = produkku.Stock <=30 ? ('minstock') : (null)
        
        return (
            <div className={minstok + " product"}  key={produkku.id}>
                <p>Nama Product : {produkku.nameProduct}</p>
                <p>Harga Product : {produkku.Price}</p>
                <p>Stok Product : {produkku.Stock}</p>
            </div>
        )


    })

    return (
        <div>
            {listProduk}
        </div>
    )
}

export default Product;