import styled from "styled-components";

export const MainContain = styled.div`
   width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  

`

export const MainWrapper = styled.div`
   width: 90%;
   display: flex;
   justify-content: center; 
   
   @media screen and (max-width: 850px){
      display: flex;
      flex-wrap: wrap;

      
   }
 
   
`
export const BottomCard = styled.div`
   width: 350px;
   
 @media screen and (max-width: 850px){
    
      margin-bottom: 30px;
   }
 
  
`

export const Icons  = styled.img`
    font-size: 35px;
    color: #161F5E;
  width:${({fs}) => fs};
  height:${({he}) => he};
  @media screen and (max-width:875px){
     width:${({fm}) => fm};
     margin-left:${({ml}) => ml};
  }
  
`
export const TextTwo = styled.h4 `

    color:#161f5e;
     font-size:35px;
     margin-top:0px;
     margin-bottom:0px;
    

`

export const Button = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 425px){
   
   width: 80%;
   
  }

  
 
`

export const Btn = styled.div`
    color: #161F5E;
    
`

export const Btn1 = styled.div`
  color: #00A962;
  padding: 3px;

`
export const Btn2 = styled.div`
    color: #161F5E;
    
   
`

export const Text = styled.h4`
    color: #161F5E;
    
`
