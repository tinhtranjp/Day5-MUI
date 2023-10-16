import product from '../models/ProductRecommend'
import { Link } from 'react-router-dom'
interface IProduct{
    products : product[]
}

const RecommendProps = (props: IProduct) => {
    const {products} = props;
    return <>
        <ul className='grid grid-cols-10 gap-4'>
                {products.map(product => {
                    return (
                            <li key={product.id} className='col-span-2'>
                              <Link to={`/food/${product.id}`}>
                                <img src={product.img} alt={`anh product ${product.id}`} className='w-full'/>
                                <p className='mt-4'>{product.title}</p>
                                <p className='py-4'>{product.desc}</p>
                                <span><span>{product.price}</span>円(税込)</span>
                              </Link>
                            </li>
                    )
                })}
        </ul>
    </>
}

export default RecommendProps;