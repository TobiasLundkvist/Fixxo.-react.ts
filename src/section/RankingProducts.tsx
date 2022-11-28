import React, { useContext, useEffect } from 'react'
import RankingProduct from '../components/RankingProduct'
import RankingSale from '../components/RankingSale'
import { ProductContextType, useProductContext } from '../contexts/productContext'

const RankingProducts: React.FC = () => {
  const {productsRank, getProductsRank} = useProductContext() as ProductContextType;

  useEffect(() => {
    getProductsRank()
  }, [])

  return ( 
    <>
        <RankingSale />
        <div className='rankProducts container'>
          <RankingProduct sectionTitle = 'Latest Product' items={productsRank} />
          <RankingProduct sectionTitle = 'Best Selling Product' items={productsRank} />
          <RankingProduct sectionTitle = 'Top Reacted Product' items={productsRank} />
        </div>
    </>
  )
}

export default RankingProducts