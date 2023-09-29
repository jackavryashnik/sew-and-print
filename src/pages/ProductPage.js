import React, { useEffect } from 'react';
import products from '../constants/products';
import { useParams } from 'react-router-dom';
import { OrderWidget, SectionTitle } from '../components';
import { Image } from 'antd';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

export const ProductPage = () => {
  const { category, catalog, productID } = useParams();
  const productInfo = products[catalog]?.[category]?.[productID] || products[catalog]?.[productID] || null;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const settings = {
  //   customPaging: function(index) {
  //     return (
  //       <a href="#">
  //         <img src={productInfo.images[index]} alt={`Зображення ${index + 1}`} />
  //       </a>
  //     );
  //   },
  //   dots: true,
  //   dotsClass: "slick-dots slick-thumb",
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,

  // };
  
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
            <Image.PreviewGroup preview={{onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),}}>
              {productInfo.images.map((image, index) => (
                <Image width={150} height={130} key={index} src={image} alt={`Зображення ${index + 1}`}/>
              ))}
            </Image.PreviewGroup>
        </div>
      </div>
      
    </div>
  );
};
