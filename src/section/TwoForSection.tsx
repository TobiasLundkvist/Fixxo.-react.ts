import React, { useContext, useEffect } from 'react'
import TwoFor29 from '../components/TwoFor29'
import TwoFor49 from '../components/TwoFor49'
import { ProductContextType, useProductContext } from '../contexts/productContext'

const TwoForSection: React.FC = () => {
  const {twoFor, getTwoFor} = useProductContext() as ProductContextType;

  useEffect(() => {
    getTwoFor()
  }, [])

  return (
    <>
      <TwoFor29 items={twoFor} />
      <TwoFor49 items={twoFor} />
    </>
  )
}

export default TwoForSection