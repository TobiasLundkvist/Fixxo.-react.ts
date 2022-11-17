import React from 'react'

const MapSection: React.FC = () => {
  return (
    <section className="map">
        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16323.027956894945!2d15.150735419762121!3d59.24311577744098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14ce5262c35d%3A0x35322003293cc49e!2sEC%20Utbildning%20%C3%96rebro!5e0!3m2!1ssv!2sse!4v1665595067897!5m2!1ssv!2sse" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default MapSection