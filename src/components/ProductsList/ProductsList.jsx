import React from 'react';
import { Card, List, Image } from 'antd';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../../components';
import products from '../../constants/products';
import './ProductsList.css';

export const ProductsList = ({ category, catalog, product, sectionTitle }) => {
  if (!products[category]) {
    return <List />;
  }
  const productList = Object.values(products?.[category]?.[catalog]?.[product] || products?.[category]?.[catalog] || products?.[category]);
  category = (category === 'machineryPreview') ? 'machinery' : category;
  const keys = Object.keys(products?.[category]);
  const keys2 = catalog ? Object.keys(products?.[category]?.[catalog]) : [];

  function scrollToTop() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  return (
    <div>
      <SectionTitle startText={sectionTitle} />
      <List
        className='products-list'
        size={"small"}
        dataSource={productList}
        renderItem={(productItem, index) => (
          <List.Item key={index}>
            <Card
              className='product-card'
              cover={<Image className='product-card__img' src={productItem.images[0]} alt={productItem.title} />}
            >
              <Card.Meta
                title={productItem.title}
                description={productItem.price ? `Ціна: ${productItem.price} грн` : ''}
              />
              {catalog && (category === 'machinery') ? (
                <Link onClick={scrollToTop} to={`/${category}/${catalog}/${keys2[index]}`}><button className="button">Детальніше</button></Link>
              ) : (
                <Link onClick={scrollToTop} to={`/${category}/${keys[index]}`}><button className="button">Детальніше</button></Link>
              )}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
