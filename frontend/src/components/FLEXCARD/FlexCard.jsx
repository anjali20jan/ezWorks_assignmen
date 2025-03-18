import React from 'react'

import Styles from './flexCard.module.css'

function FlexCard({icon,name,text}) {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.box}>
          <div className={Styles.header}>
          <img src={icon} alt="image" />
          <h3>{name}</h3>
          </div>
          <div className={Styles.para}>
            <p>{text}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FlexCard
