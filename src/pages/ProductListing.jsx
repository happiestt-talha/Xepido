import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Loaders from '../components/Loaders'

const ProductListing = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
        const res = await axios.get('https://dummyjson.com/products')
        console.log('data: ', res.data)
        setProducts(res.data.products)
        setLoading(false)
    }
    useEffect(() => {
        console.log('products Fetching.. ')
        getData()
    }, [])

    return (
        <>
            {
                loading
                    ? <Loaders />
                    : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-11'>

                        {
                            products.map((product) => {
                                return (
                                    <Cards key={product.id} product={product} />
                                )
                            })
                        }
                    </div>

            }
        </>
    )
}

export default ProductListing