import styled from "styled-components";
import img from "../images/image-header-desktop.jpg";


export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: ${({theme}) => theme.colors.bodyColor};
 
`
export const ContainerSection = styled.div`
   
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
  
  
   
   @media (max-width:${({theme}) => theme.mobile}){
      
    flex-direction: column-reverse;
    margin-top: 50px;
     
   }


   
`

         /********CONTAINER_LEFT******** */


export const ContainerLeft = styled.div`
   padding: 50px;
   padding-right: 80px;
   text-align: left;
   width: 450px;
   height: 350px;
   background: ${({theme}) => theme.colors.primaryDarkColor};
   border-radius: 5px 0 0 5px;
  
   @media (max-width:${({theme}) => theme.tab}){
    padding: 30px;
    padding-right: 60px;
    width: 380px;
   }
   @media (max-width:${({theme}) => theme.mobile}){
   text-align: center;
   padding-right: 30px;
   margin-bottom: 50px;
   height: auto;
   border-radius: 0 0 5px 5px;
   }
   
`
export  const Header = styled.h2`
   font-size: 26px;
   letter-spacing: 0.02rem;
   color: ${({theme}) => theme.colors.whiteColor} ;
   margin-bottom: 40px;

   @media (max-width:${({theme}) => theme.tab}){
   font-size: 24px;
   margin-bottom: 35px;
   }
`
export const HighlightText = styled.span`
    color: ${({theme}) => theme.colors.primaryColor};
`
export const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.mainParagraphColor};
    margin-bottom: 60px;
    font-size: 13px;

    @media (max-width:${({theme}) => theme.tab}){
     font-size: 12px;
     margin-bottom: 50px;
   }
`
export const  PreviewContainer = styled.div`
    display: flex;
    gap: 10%;
    @media (max-width:${({theme}) => theme.tab}){
     gap: 10%;
   }

   @media (max-width:${({theme}) => theme.mobile}){
   flex-direction: column;
   gap: 50px;
   }

`
export const Preview = styled.div`
   
`
export const PreviewValue = styled.h2`
    font-size: 24px;
    color: ${({theme}) => theme.colors.whiteColor};
    text-transform: uppercase;

    @media (max-width:${({theme}) => theme.tab}){
     font-size: 22px;
   }

`
export const PreviewText = styled.p`
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.darkTextColor};
    font-size: 13px;

    @media (max-width:${({theme}) => theme.tab}){
     font-size: 12px;
   }
`

/************CONTAINER_RIGHT************* */

export const ContainerRight = styled.div`
    background-image: linear-gradient(0deg, hsl(277, 89%, 61%, 0.5),  hsl(277, 89%, 61%, 0.5)), url(${img});
    width: 450px;
    height: 350px;
    background-size: cover;
    border-radius: 0 5px 5px 0;
    @media (max-width:${({theme}) => theme.tab}){
    width: 380px;
   }

   @media (max-width:${({theme}) => theme.mobile}){
      
      border-radius: 5px 5px 0 0;
       
     }
`


