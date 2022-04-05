import React from 'react'
import styled from 'styled-components'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import  {
    BsTwitter,
    BsInstagram, 
    BsYoutube
} from 'react-icons/bs';
import {FaFacebookF } from 'react-icons/fa';
export const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterTop>
                <FooterLeft>
                    <ListOne>
                        <Head>COMPANY</Head>
                        <List>Press</List>
                        <List>Our Company</List>
                        <List>Affiliate</List>
                        <List>Carreers</List>
                    </ListOne>
                    <ListTwo>
                        <Head>HELP</Head>
                        <List>FAQs</List>
                        <List>Contact Us</List>
                        <List>Pricing</List>
                    </ListTwo>
                    <ListThree>
                        <Head>LEGAL</Head>
                        <List>Terms of Service</List>
                        <List>Privacy Policy</List>
                        <List>Trafo Health PDA</List>
                    </ListThree>
                </FooterLeft>
                <FooterRight>
                    <RightHead>KEEP UP WITH US</RightHead>
                    <RightPara>Stay up to date by reading our high quality articles and personalized for you</RightPara>
                    <InputContainer>
                        <Input  placeholder="Write your email here"/>
                        <InputIcon><BsFillArrowRightCircleFill/></InputIcon>
                    </InputContainer>
                </FooterRight>
            </FooterTop>
            <FooterBottom>
                <Copyright> © 2020 Travo Health. all right reserved</Copyright>
                <FooterIcons>
                    <IconOne><FaFacebookF/></IconOne>
                    <IconTwo><BsTwitter/></IconTwo>
                    <IconThree><BsInstagram/></IconThree>
                    <IconFour><BsYoutube/></IconFour>
                </FooterIcons>
            </FooterBottom>
        </FooterWrapper>
    </FooterContainer>
  )
}

const FooterContainer =styled.div`
    width:100%;
    display:flex;
    justify-content:center;  
`
const FooterWrapper=styled.div`
    width:90%;
    height:400px;
    background-color:#050738;
    display:flex;
    flex-direction:column;
    color: #FDFDFD;
    font-size:18px;
    align-self:flex-start;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 875px){
        height:600px;
        width:100%;
      }
      @media screen and (max-width: 425px){
        height:650px;
    }
      /* @media screen and (max-width: 375px){
          height:650px;
          
      } */
      
`

const FooterTop=styled.div`
    display:flex;
    justify-content:space-between;
    width:90%;

    @media screen and (max-width: 875px){
        display:flex;
        flex-direction:column-reverse;
      }
      @media screen and (max-width: 375px){
          margin-top: -60px;
      }

`

const FooterLeft=styled.div`
    display:flex;
  

    // @media screen and (max-width: 875px){
    //     font-size:15px;
    //   }
    @media screen and (max-width: 425px){
        font-size:15px;
    }
`
const Head = styled.h4`
  font-weight: normal;
  color: #A3A4B5;
  
`

const ListOne=styled.ul`
 
`

const List=styled.li`
    list-style:none;
    font-size:15px;
    line-height: 40px;
    @media screen and (max-width: 375px){
          font-size: 13px;
          line-height: 30px;
      }
`

const ListTwo=styled.ul`

`

const ListThree=styled.ul`

`

const FooterRight=styled.div`
    width:35%;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    padding-top:20px;

    @media screen and (max-width: 875px){
        width:100%;
      }
      @media screen and (max-width: 375px){
         text-align: center;
        
      }
`


const RightHead=styled.h4`
/* font-size:25px; */
 color: #A3A4B5;
font-weight: normal;
/* @media screen and (max-width: 375px){
          margin-bottom: 10px;
      } */
`

const RightPara=styled.p`
   font-size: 15px;
   line-height: 30px;
   @media screen and (max-width: 375px){
          margin-bottom: 10px;
          line-height: normal;
          font-size: 13px;
      }
`

const InputContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    height:60px;
    
    margin-top:20px;
`

const Input=styled.input`
   border-bottom-style: solid;
   border-bottom-width: thin;
   border-color: rgba(255, 255, 255, 0.2);
   border-left: 0px;
   border-top: 0px;
   border-right: 0px;
    background: #050738;
    height:50px;
    width:100%;
    font-size: 25px;
    @media screen and (max-width: 375px){
          font-size: 20px;
          width: 75%;
          height: 40px;
      }
    
`
const InputIcon=styled.div`
   
     width: 30px;
     height: 30px;
    background: white;
    color: #00A962;
    font-size: 30px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 375px){
         font-size: 20px;
         width: 20px;
         height: 20px;
        
      }

    /* padding: */
`

const FooterBottom=styled.div`
    display:flex;
    justify-content:space-between;
    width:90%;

    @media screen and (max-width: 875px){
        display:flex;
        flex-direction:column-reverse;
        justify-self:flex-end;
      }
`

const Copyright=styled.div`
width:40%;
text-align:center;

@media screen and (max-width: 875px){
    width:100%;
    margin-top:15px;
  }

`

const FooterIcons=styled.div`
    display:flex;
    justify-content:space-around;
    width:20%;

    @media screen and (max-width: 875px){
        width:100%;
      }
`


const IconOne=styled.div`
    background-color:white;
    color:#050738;
    width:30px;
    height:30px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
`

const IconTwo=styled.div`
    background-color:white;
    color:#050738;
    width:30px;
    height:30px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
`

const IconThree=styled.div`
    background-color:white;
    color:#050738;
    width:30px;
    height:30px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
`

const IconFour=styled.div`
    background-color:white;
    color:#050738;
    width:30px;
    height:30px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
`



