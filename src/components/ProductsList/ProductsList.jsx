import React from 'react';
import { Card, List, Image } from 'antd';
import './ProductsList.css';
import products from '../../constants/products';
import { Link } from 'react-router-dom';

export const ProductsList = ({ category, product }) => {
  if (!products[category]) {
    return <List />;
  }
  
  const productList = products?.[category]?.[product] || products?.[category];
  
  if (!Array.isArray(productList)) {
    return <List />;
  }


  return (
    <div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={productList}
        renderItem={(productItem, index) => (
          <List.Item key={index}>
            <Card
              cover={<Image src={productItem.images[0]} alt={productItem.title} />}
            >
              <Card.Meta
                title={productItem.title}
                description={`Ціна: ${productItem.price} грн`}
              />
              <Link to={`/product/${index}`}>Деталі</Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
