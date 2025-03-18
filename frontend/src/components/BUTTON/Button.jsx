import React from 'react'
import Styles  from './Button.module.css'

function Button({text}) {
  return (
    <div>
        <button className={Styles.btn} type="submit">
            {text}
        </button>
      
    </div>
  )
}

export default Button
