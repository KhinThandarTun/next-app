import React from 'react'
import AddToCarts from './AddToCarts';
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCarts />
    </div>
  )
}

export default ProductCard
