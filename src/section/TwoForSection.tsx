import React, { useContext } from 'react'
import TwoFor29 from '../components/TwoFor29'
import TwoFor49 from '../components/TwoFor49'
import { TwoForProductsContext } from '../contexts/contexts'

const TwoForSection: React.FC = () => {

    const twoFor = useContext(TwoForProductsContext)

  return (
    <>
        { twoFor && <>
            <TwoFor29 items={twoFor} />
            <TwoFor49 items={twoFor} />
        </>}
    </>
  )
}

export default TwoForSection