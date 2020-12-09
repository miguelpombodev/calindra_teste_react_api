import styled from 'styled-components';

export const SearchForm = styled.form`
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
    }
`

export const ProductsContainer = styled.div`
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
        border: 1px solid #eee; 
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