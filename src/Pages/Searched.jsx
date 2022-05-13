import { useEffect } from "react";
import { useParams } from "react-router-dom"
import styled from 'styled-components';

export default function Searched() {

    let params = useParams();


    return(
        <SearchedText>Searched : {params.search}</SearchedText>
    )
}

const SearchedText = styled.h1`
    text-align:center;

`