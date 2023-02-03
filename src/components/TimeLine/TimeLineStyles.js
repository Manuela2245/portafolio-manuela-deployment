
import styled from 'styled-components'

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 0px 0 40px;
  justify-content:center;
  align-items: center;
  align-content:center;
  padding:20px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 0px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 0px auto;
  }
`
export const DivImageName = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 600px 400px;
  grid-template-rows:500px;
  gap: 24px;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
  }
`
export const ImgDivImageName = styled.div`
  grid-row: 1 / 3;
  grid-column: 2 / 2;
  font-size: 17px;
  max-height:500px;
  max-width:400px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 15px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 15px;
  }
`
export const Box = styled.div`
  border-radius: 12px;
  height: 100px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media ${props => props.theme.breakpoints.md} {
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color:white;
  

  @media ${props => props.theme.breakpoints.md} {
    font-weight: 550;
    font-size: 20px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-weight: 500;
    font-size: 20px;
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`
