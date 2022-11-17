import React from 'react'
import CollabLetsBe from '../components/CollabLetsBe'
import CollabPamela from '../components/CollabPamela'

const CollabsSection: React.FC = () => {
  return (
    <section className='collabs container'>
        <CollabPamela />
        <CollabLetsBe />
    </section>
  )
}

export default CollabsSection