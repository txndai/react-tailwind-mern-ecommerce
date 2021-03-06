import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Product from '../components/Product'
import {listProducts} from '../actions/productActions'
import Message  from '../components/Message'
import Loader  from '../components/Loader'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]) 


    return (
        <>
            <h1 className='mb-5 text-2xl font-bold'>Latest products</h1>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : error ? (
                <Message>{error}</Message>
            ) : ( 
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {products.map(product => 
                        <div key={product._id}>
                            <Product product={product}/>
                        </div>
                        )}
                </div>
            )
            }
        </>
    )
}

export default HomeScreen
