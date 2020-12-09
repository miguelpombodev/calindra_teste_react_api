import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../services/api';

import { SearchForm, ProductsContainer, ProductItem, ErrorMessage } from './styles'

const SearchSchema = Yup.object().shape({
    search: Yup.string().required("O campo de busca precisa ser preenchido"),
});

interface IFormProps {
    search: string;
}

interface IItemsArray {
    items: IProductsListProps[]
}

interface IProductsListProps {
    map: {
        defaultPrice: number[];
        id: number[];
        "images.id": number[];
        "images.type": string[];
        "images.url": string[];
        name: string[];
        salePrice: number[];
    }
}

const Main: React.FC = () => {
    const [itemsArray, setItemsArray] = useState<IItemsArray>();
    const { register, handleSubmit, errors } = useForm<IFormProps>({
        resolver: yupResolver(SearchSchema)
    });

    const submitSearchHandler = useCallback(async (dataForm: IFormProps) => {
        try {
            const { search } = dataForm;
            const { data } = await api.get<IItemsArray>(`/autocomplete/${search}`);

            setItemsArray(data);
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <>
            <SearchForm onSubmit={handleSubmit(submitSearchHandler)}>
                <input ref={register({ required: true })} name="search" type="text" />
                {errors.search && <ErrorMessage>{errors.search.message}</ErrorMessage>}
                <button>Buscar</button>
            </SearchForm>
            <ProductsContainer>
                {itemsArray?.items.map((item, index) => (
                    <ProductItem key={index}>
                        <div>
                            <img src={`https://static-store.worldticket.com.br/${item.map["images.url"].filter((v: string, i: number) => i === 0)}`} alt="" />
                            <h3>{item.map.name}</h3>
                        </div>
                        <span>
                            R$ {item.map.defaultPrice}
                        </span>
                    </ProductItem>
                ))}
            </ProductsContainer>
        </>
    )
}

export default Main;