import React from 'react'
import India from './ui/India'

const MadeInIndia = () => {
  return (
    <div className="info">
    <h2 className="info-label">
      made in <India />
    </h2>
    <div className="info-description">
      <p className="info-text">
        Our tabletop is designed and crafted with care in India,{" "}
        {/* <br /> */}
        it is a testament to the beauty of local craftsmanship.
      </p>
    </div>
  </div>
  )
}

export default MadeInIndia