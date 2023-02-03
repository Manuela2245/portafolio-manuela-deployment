import styled from 'styled-components';


export const GridImages=styled.div`
display:grid;
grid-template-columns: 320px 320px 320px;
grid-template-rows: 210px 210px 210px;
row-gap:50px;
column-gap:50px;
padding-top:20px;
padding-bottom:20px;
@media screen and (max-width:1050px) {
    grid-template-columns: 320px 320px 320;
    grid-template-rows: 210px 210px 210px 210 ;
    row-gap:20px;
    column-gap:20px;
    padding-top:10px;
    padding-bottom:10px;
  }
  @media screen and (max-width:1050px) {
    grid-template-columns: auto auto ;
    grid-template-rows: 310px 310px 310px 310 ;
    row-gap:30px;
    column-gap:30px;
    padding-top:10px;
    padding-bottom:10px;
  }
  @media screen and (max-width:768px) {
    grid-template-columns: 320px 320px ;
    grid-template-rows: 210px 210px 210px 210 ;
    row-gap:30px;
    column-gap:20px;
    padding-top:10px;
    padding-bottom:10px;
  }
  @media screen and (max-width:739px) {
    grid-template-columns: auto  ;
    grid-template-rows: 310px 310px 310px 310 ;
    row-gap:30px;
    column-gap:80px;
    padding-top:10px;
    padding-bottom:10px;
  }
  @media screen and (max-width:640px) {
    grid-template-columns: auto  ;
    grid-template-rows: 410px 410px 410px 410 ;
    row-gap:30px;
    column-gap:80px;
    padding-top:10px;
    padding-bottom:10px;
  }
`;
export const divImg= styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
align-content:center;
`;

export const ModalDiv1=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
padding-top:20px;
padding-right:20px;
padding-left:20px;
padding-bottom:60px;
`

export const ModalDiv1Title=styled.div`
font-weight:bold;
font-size:40px;
color:white;
@media ${(props) => props.theme.breakpoints.sm} {
  font-size:30px;
}
@media ${(props) => props.theme.breakpoints.md} {
  font-size:30px;
}
`
export const ModalDiv2=styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 600px 650px;
  grid-template-rows:400px;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  padding-right:10px
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
  }
`
export const ModalDiv2Div=styled.div`
display:flex;
flex-direction:column;
padding-left:10px;
padding:20px;
justify-content: center;

`
export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:white;
font-size: 2rem;
padding:1rem 1.5rem;
background: #A5F5C8;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;
}
`;

export const ModalDiv3=styled.div`
  grid-column:2/3;
  height:100%;
  width-max:100%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`

export const Imagesdiv=styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 500px 220px;
  grid-template-rows: 400px;
  column-gap:40px;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
  }
  
`