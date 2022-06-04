import React, {useContext} from 'react'
import { DataContext } from './DataProvider';
import { Link } from 'react-router-dom';
export default function Products() {
 const [products, setProduct] = useContext(DataContext)
  return (
    <div className='products'>
      {products.map((product) => (
        <div className='card' key={product._id}>
          <Link to={`/products/${product._id}`}>
            <img src={product.images[0]} alt='' />
          </Link>
          <div className='box'>
            <h3 title={product.title}>
              <Link to={`/products/${product._id}`}>{product.title}</Link>
            </h3>

            <h4>{product.price}CFA</h4>
            <button>
              <a href='https://wa.me/221779258508'>
                <i class='fa-brands fa-whatsapp'>acheter</i>
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
