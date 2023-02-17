import { ReactElement } from "react";
import styled from "styled-components";

const Enviar = styled.button`
    background-color: #6278f7;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 32px;
    border: none;
    cursor: pointer;
    color: #fff;
    margin: 16px 0;

    &:hover{
        color: #95ffd4;
    }
`

interface BotaoProps {
    children: ReactElement | string
}

export const Botao = (props: BotaoProps) => {
    return (
        <Enviar>{props.children}</Enviar>
    )
}
