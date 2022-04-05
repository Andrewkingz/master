import React, {useState} from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  return (
    <Container>
      <ContainerWrapper>
        <LogoWrap>
          <Logo1>trafo</Logo1>
           <Logo>health</Logo>
        </LogoWrap>


        <Navs onClick={handleClick} click={click}>
          <NavLinks>Plans</NavLinks>
          <NavLinks>Membership</NavLinks>
          <NavLinks>Our Doctors</NavLinks>
          <NavLinks>Services</NavLinks>
          <NavLinks>Blog</NavLinks>
        </Navs>

        <Button>
          Try for free
        </Button>

        
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/>}

         </MobileIcon>
      </ContainerWrapper>
    </Container>
  )
}

const Container = styled.div`
   width: 100%;
   height: 80px;
   background-color: white;
   color: #16195E;
   display: flex;
   justify-content: center;
`


const ContainerWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

`
const Logo = styled.div`
  font-size: 35px;
  @media screen and (max-width: 425px){
         font-size: 30px;
        
      }
`
const Logo1 = styled.div`
  font-size: 35px;
  font-weight: bold;
  @media screen and (max-width: 425px){
         font-size: 30px;
        
      }
`
const LogoWrap = styled.div`
   display: flex;
   
`
const MobileIcon = styled.div`
  font-size: 25px;
 display: none;
  @media screen and (max-width: 768px){
    display: block;
  }
  
`

const Navs = styled.ul`
  width: 500px;
  height:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
@media screen and (max-width: 768px){
  flex-direction: column;
  position: absolute;
  background-color: whitesmoke;
  opacity: 0.8;
  height:62vh;
  width: 25%;
  top:63px;
  left: ${({click}) => (click ? 0 : '-100%' )};
  transition: all 0.8s ease-in-out;
}
`

const NavLinks = styled.li`
   list-style: none;
`

const Button = styled.div`
  background-color: #00A962;
  width: 120px;
  height: 40px;
  color: white;
  padding: 10px 0 0 0;
  text-align: center;
`