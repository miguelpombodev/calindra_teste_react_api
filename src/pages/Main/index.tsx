import React, { } from 'react';
import { useForm } from 'react-hook-form';
// import * as Yup from 'yup'

import api from '../../services/api';

import { SearchForm } from './styles'

interface FormProps {
    search: string;
}

const Main: React.FC = () => {
    const { register, handleSubmit, errors } = useForm();

    const submitSearchHandler = async (data: FormProps) => {
        try {
            const { search } = data;
            const apiResponse = await api.get(`/autocomplete/${search}`);

            console.log(apiResponse);
        } catch (error) {
            // console.log(error);
        }
    }

    return (
        <>
            <SearchForm onSubmit={handleSubmit(submitSearchHandler)}>
                <input ref={register({ required: true })} name="search" type="text" />
                {errors.search && <span>Esse campo precisa ser preenchido</span>}
                <button>Buscar</button>
            </SearchForm>
        </>
    )
}

export default Main;