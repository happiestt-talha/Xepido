import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Loaders from '../components/Loaders'
import { useLocation } from 'react-router-dom'

const ProductListing = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const [cat, setCat] = useState('');
    const location = useLocation();
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const catByUrl = queryParams.get('cat');

        if (catByUrl) {
            setCat(catByUrl);
        }
    }, [location.search]);

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const res = await axios.get('https://dummyjson.com/products')
            console.log('data: ', res.data)
            setProducts(res.data.products)
            setLoading(false)
        }
        const getByCat = async () => {
            setLoading(true)
            const res = await axios.get(`https://dummyjson.com/products/category/${cat}`)
            console.log('data: ', res.data)
            setProducts(res.data.products)
            setLoading(false)
        }
        console.log('products Fetching.. ')
        if (cat) {
            getByCat()
        } else {
            getData()
        }
    }, [cat])

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