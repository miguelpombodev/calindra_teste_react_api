import styled, { keyframes } from 'styled-components';
import { shade } from 'polished'

const hide = keyframes`
to {
        opacity: 0;
    }
`;

export const SearchForm = styled.form`
    @media (max-width: 600px) {
        input {
            margin-left: 15px;
        }      

        button {
            margin-right: 10px;
        }
    }

    margin: 50px 0 30px 0;
    display: flex;
    justify-content: center; 
    align-items: stretch;

    input {
        width: 300px;
        border: none;
        border-bottom: 1px solid #ffbe00;
        margin-right: 5px;
        background-color: #fff;
    }

    button {
        border: none;
        width: 80px;
        height: 30px;
        color: #fff;
        background-color: #ffbe00;
        border-radius: 3px;
        margin-left: 5px;
        font-size: 17px;
        cursor: pointer;

        &:hover{
            background-color: ${shade(0.05, '#ffbe00')};
            transition: .3s linear;
        }
    }
`

export const ProductsContainer = styled.div`
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;        
    }

    @media (min-width: 601px) and (max-width: 1040px){
        display: grid;
        grid-template-columns: 1fr 1fr ;
    }

    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #ccc;
    width: 80vw;     
`

export const ProductItem = styled.div`
        margin-top: 15px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid #eee;
        border-radius: 4px; 
        height: 500px;
        width: 270px;
        margin-left: 20px;

        div {
            border: none;

            img {
                margin-bottom: 10px;
                height: 70%;
                width: 99%;
            }
        }

        span {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1rem;
            font-size: 20px;
        }

    }
`

export const ProductName = styled.p`
    position: relative;
    font-size: 25px;
    left: 10%;
`

export const ErrorMessage = styled.span`
 animation: ${hide} 1s linear 2s forwards;
  visibility: visible;
  background-color: #c53030;
  width: 350px;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  box-shadow: 4px 6px 5px #9c9c9c;
  position: absolute;
  z-index: 1;
  margin-left: -60px;
  top: 1%;

  &::before {
    content: "";
    border-style: solid;
    border-color: #c53030 transparent;
    border-width: 6px 6px 0 6px;
    top: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`