import React from 'react'
import Logo from '../../images/logo.png'
import {LandContainer, Pickmi, Landh1, LandContent, Button, Landp, ButtonWrp} from './LandElements';

const Land = () => {
  return (
    <LandContainer>
      <LandContent>
        <Landh1>Welcome to</Landh1>
        <Pickmi src={Logo} alt="pickmi-logo"></Pickmi>
        <Landp>your personal restaurant picker</Landp>   
        <ButtonWrp>
          <Button to="/filter">
           Pick a restaurant!
          </Button>
        </ButtonWrp>
      </LandContent>
    </LandContainer>
  )
};

export default Land;