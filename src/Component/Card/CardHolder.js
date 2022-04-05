import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import File from '../Images/file.png'
import Door from '../Images/door.png'
import Chat from '../Images/chat.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


export const CardHolder = () => {
  return (
      <MainContain>
         <MainWrap>
         <TopCard>
          <TextTop>Changing the way<br/>you manage your<br/>health care</TextTop> 
        
        </TopCard>  
        
        
    <CardContain>
      <Card
         Arrow='Learn more'
         Images={Chat}
         FirstLine='Online consultation'
         SecondLine='with your doctor'
         Icon={<BsFillArrowRightCircleFill/>}
      />

      <Card
         Arrow='Learn more'
         Images={Door}
         FirstLine='Medicine on your'
         SecondLine='front door'
         Icon={<BsFillArrowRightCircleFill/>}
      />
      
      <Card 
         Arrow='Learn more'
         Images={File}
         FirstLine='Digital medical'
         SecondLine='records'
         Icon={<BsFillArrowRightCircleFill/>}
      />
    </CardContain>
    </MainWrap>
    </MainContain>
  )
}

const MainContain = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;

`

const CardContain = styled.div`
   display: flex;
   justify-content: space-around;
   width: 90%;
   align-items: center;
    margin-left: 140px;
   
   @media screen and (max-width: 850px){
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
   }
   @media screen and (max-width: 425px){
         display: flex;
         align-items: center;
        justify-content: center;
        /* text-align: center; */
        
      }
  
`
const MainWrap = styled.div`
  width: 90%;
  @media screen and (max-width: 538px){
     margin-right: 40px;
   
   }

  
`


const TopCard = styled.div`
   width: 50%;
   margin-left: 150px;
 
   @media screen and (max-width: 850px){
      width: 80%;
      
     
   }
  
`

const TextTop = styled.h1`
    color: #161F5E;
  font-size: 50px;
  @media screen and (max-width: 1020px){
     font-size: 35px;
   
  }
  
  @media screen and (max-width: 850px){
     font-size: 35px;
   
  }
  @media screen and (max-width: 425px){
         font-size: 25px;
      }   



`



