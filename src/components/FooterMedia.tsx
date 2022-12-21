import React from 'react'

const FooterMedia: React.FC = () => {
  return (
    <footer className='socialmedia-body gradient-gray'>
        <div className='socialmedia'>
          <a href='https://facebook.com' target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
          <a href='https://instagram.com' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href='https://twitter.com' target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
          <a href='https://google.se' target="_blank" rel="noreferrer"><i className="fa-brands fa-google"></i></a>
          <a href='https://linkedin.com' target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div>© 2022 Fixxo. All Rights Reserved</div>
    </footer>
  )
}

export default FooterMedia