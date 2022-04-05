import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight } from 'react-icons/ai';
import  BG from '../Images/backgrnd.png'

export const Personalized = () => {
  return (
    <PersonalizedContainer>
        <PersonalizedWrapper>
            <Head>Get your own <br/>Personalized plans</Head>
            <Para>Start consulting with us about your health condition for free</Para>
            <Button>Try for free<AiOutlineArrowRight/></Button>
        </PersonalizedWrapper>
    </PersonalizedContainer>
  )
}


const PersonalizedContainer = styled.div`
   color: white;
   width: 100%;
   display: flex;
   justify-content:center;
`
const PersonalizedWrapper = styled.div`
   background-image: url(${BG});
   width: 90%;
   height:400px;
   display: flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
    @media screen and (max-width: 425px){
        height:500px;
        width:100%;
    }
    @media screen and (max-width: 875px){
        width:100%;
    }
`
const  Head = styled.h1`
    font-size: 60px;
    text-align:center;
    line-height:60px;

    @media screen and (max-width: 425px){
        font-size:50px;
        width:90%;
    }
`

const Para = styled.p`
@media screen and (max-width: 425px){
    width:90%; 
}
@media screen and (max-width: 875px){
    width:95%;
    text-align:center;
}
`

const Button = styled.div`
    background-color: #00A962;
    width: 150px;
    height: 50px;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`