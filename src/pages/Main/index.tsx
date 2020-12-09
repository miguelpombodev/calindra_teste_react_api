import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
// import * as Yup from 'yup'

import api from '../../services/api';

import { SearchForm, ProductsContainer, ProductItem } from './styles'

interface FormProps {
    search: string;
}

interface ItemsArray {
    items: ProductsListProps[]
}

interface ProductsListProps {
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
    const [itemsArray, setItemsArray] = useState<ItemsArray>();
    const { register, handleSubmit, errors } = useForm();

    const submitSearchHandler = useCallback(async (dataForm: FormProps) => {
        try {
            const { search } = dataForm;
            const { data } = await api.get<ItemsArray>(`/autocomplete/${search}`);

            setItemsArray(data);
        } catch (error) {
            // console.log(error);
        }
    }, [])

    return (
        <>
            <SearchForm onSubmit={handleSubmit(submitSearchHandler)}>
                <input ref={register({ required: true })} name="search" type="text" />
                {/* {errors.search && <span>Esse campo precisa ser preenchido</span>} */}
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