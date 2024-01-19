import React, { useEffect } from 'react';
// import FetchedProducts from '../constants/FetchedProducts'
import products from '../constants/products.js';
import { useParams } from 'react-router-dom';
import { OrderWidget, SectionTitle } from '../components';
import { Image } from 'antd';

export const ProductPage = () => {
  // const { products } = fetchedProducts();
  const { category, catalog, productID } = useParams();
  const productInfo = products[catalog]?.[category]?.[productID] || products[catalog]?.[productID] || null;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!productInfo) {
    return <div>Товар не знайдено</div>;
  }

  return (
    <div className='product__page'>
      <SectionTitle startText={productInfo.title}/>
      <div className='product'>
        <div className='product__image'>
            <Image width={400} src={productInfo.images[0]}/>
        </div>
        
        
        <div className='product__info'>
          <div className='product__description' dangerouslySetInnerHTML={{ __html: productInfo.description }} />
          {/* <h2>Характеристики:</h2>
          <div>{productInfo.characteristics}</div> */}
        </div>
        <OrderWidget productInfo={productInfo}/>
        <div className='product__side-images'>
            <Image.PreviewGroup>
              {productInfo.images.map((image, index) => (
                <Image width={150} height={130} key={index} src={image} alt={`Зображення ${index + 1}`}/>
              ))}
            </Image.PreviewGroup>
        </div>
      </div>
      
    </div>
  );
};
