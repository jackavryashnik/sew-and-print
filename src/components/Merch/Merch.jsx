import React from 'react'
import images from '../../assets/images'

const Merch = () => {
  return (
    <>
        <div className='merch'>
            <h2 className='merch__title'>Виготовлення мерчу</h2>
            <img src={images.merch} alt="merch" />
        </div>
    </>
  )
}

export default Merch