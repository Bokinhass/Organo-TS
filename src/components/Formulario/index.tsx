import styled from "styled-components";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";
import { CampoTexto } from '../CampoTexto';
import { useState } from 'react';
import { IColaborador } from './../../shared/interfaces/IColaborador';

const Secao = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0;
`;

const Forms = styled.form`
    max-width: 80%;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
`;

const Subtitiulo = styled.h2`
    font-size: 36px;
    font-weight: bold;
`;

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string []
}

export const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <Secao>
            <Forms onSubmit={aoSalvar}>
                <Subtitiulo>Preencha os dados para criar o card do colaborador</Subtitiulo>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label='Time'
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar card
                </Botao>
            </Forms>
        </Secao>
    )
}
