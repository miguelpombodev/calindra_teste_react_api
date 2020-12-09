import styled from 'styled-components';

export const SearchForm = styled.form`
    margin-top: 50px;
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