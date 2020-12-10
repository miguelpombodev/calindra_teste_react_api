import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import firstLetterInUpper from '../../utils/firstLetterInUpper';

import api from '../../services/api';

import { SearchForm, ProductsContainer, ProductItem, ErrorMessage, ProductName } from './styles'

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

const SearchSchema = Yup.object().shape({
    search: Yup.string().required("O campo de busca precisa ser preenchido"),
});

const Main: React.FC = () => {
    const [countData, setCountData] = useState(0);
    const [productName, setProductName] = useState('')
    const [itemsArray, setItemsArray] = useState<IItemsArray>();
    const { register, handleSubmit, errors } = useForm<IFormProps>({
        mode: "onSubmit",
        resolver: yupResolver(SearchSchema)
    });

    const submitSearchHandler = useCallback(async ({ search }: IFormProps) => {
        const { data } = await api.get<IItemsArray>(`/autocomplete/${search}`);

        setCountData(data.items.length);
        setProductName(search);
        setItemsArray(data);
    }, [])

    return (
        <>
            <SearchForm onSubmit={handleSubmit(submitSearchHandler)} >
                <input ref={register({ required: true })} name="search" type="text" placeholder="Digite o nome do produto" />
                {errors.search && <ErrorMessage>{errors.search.message}</ErrorMessage>}
                <button>Buscar</button>
            </SearchForm>
            {productName && <ProductName>{firstLetterInUpper(productName) + ` (${countData})`}</ProductName>}
            <ProductsContainer>
                {itemsArray?.items.map((item, index) => (
                    <ProductItem key={index}>
                        <div>
                            <img src={`https://static-store.worldticket.com.br/${item.map["images.url"].filter((_: string, i: number) => i === 0)}`} alt="" />
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