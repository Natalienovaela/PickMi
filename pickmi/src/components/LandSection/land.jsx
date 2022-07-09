import React from 'react'
import Logo from '../../images/logo.png'
import {LandContainer, LandLogo, Pickmi} from './LandElements.jsx'

const Land = () => {
  return (
    <>
      <LandContainer>
        <LandLogo>
          <Pickmi src={Logo} alt="pickmi-logo"></Pickmi>
        </LandLogo>
      </LandContainer>
    </>
  )
}

export default Land