import React from 'react';
import { Card, List, Image } from 'antd';
import './ProductsList.css';
import products from '../../constants/products';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../../components';

export const ProductsList = ({ category, product, sectionTitle }) => {
  if (!products[category]) {
    return <List />;
  }
  
  const productList = Object.values(products?.[category]?.[product] || products?.[category]);
  const path = (category === 'machineryPreview') ? 'machinery' : `${category}`;
  
  return (
    <div>
      <SectionTitle startText={sectionTitle} />
      <List
        grid={{ gutter: 16, column: 4 }}
        size={"small"}
        dataSource={productList}
        renderItem={(productItem, index) => (
          <List.Item key={index}>
            <Card
              cover={<Image src={productItem.images[0]} alt={productItem.title} />}
            >
              <Card.Meta
                title={productItem.title}
                description={productItem.price ? `Ціна: ${productItem.price} грн` : ''}
              />
              <Link to={`/${path}/${product}`}>Деталі</Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
