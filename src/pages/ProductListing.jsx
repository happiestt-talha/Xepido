import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const ProductListing = () => {
    const [products, setProducts] = useState([])

    const getData = async () => {
        const res = await axios.get('https://dummyjson.com/products')
        console.log('data: ', res.data)
        setProducts(res.data.products)
    }
    useEffect(() => {
        console.log('products Fetching.. ')
        getData()
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-11'>

                {
                    products.map((product) => {
                        return (
                            <Cards key={product.id} product={product} />
                        )
                    })
                }
            </div>

        </>
    )
}

export default ProductListing