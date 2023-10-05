import React from 'react'
import './PrintDesignItem.css'

const PrintDesignItem = ({image, title, description}) => {
  return (
    <div className='print-design-item'>
        <div className='print-design-item__img' dangerouslySetInnerHTML={{ __html: image }}/>
        <h3 className='print-design-item__title'>{title}</h3>
        <div className='print-design-item__description'>{description}</div>
    </div>
  )
}

export default PrintDesignItem