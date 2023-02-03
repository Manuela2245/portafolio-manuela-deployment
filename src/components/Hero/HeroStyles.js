import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: white;
  transition: 0.4s ease;
  border:30px solid #A5F5C8;
  background-color: #A5F5C8;
  border-radius:40px;
  &:hover {
    color: #B3BCF2;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;