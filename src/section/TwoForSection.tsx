import React, { useContext, useEffect } from 'react'
import TwoFor29 from '../components/TwoFor29'
import TwoFor49 from '../components/TwoFor49'
import { ProductContextType, useProductContext } from '../contexts/productContext'

const TwoForSection: React.FC = () => {
  const {twoFor29, getTwoFor29} = useProductContext() as ProductContextType;
  const {twoFor49, getTwoFor49} = useProductContext() as ProductContextType;

  
  useEffect(() => {
    getTwoFor29(4)
  }, [])

  useEffect(() => {
    getTwoFor49(4)
  }, [])

  return (
    <>
      <TwoFor29 items={twoFor29} />
      <TwoFor49 items={twoFor49} />
    </>
  )
}

export default TwoForSection