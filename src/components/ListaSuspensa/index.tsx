import styled from "styled-components";

const Modulo = styled.div`

`;

const Rotulos = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`;

const Selecao = styled.select`
    background-color: #fff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`;

const Opcoes = styled.option`

`;

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    obrigatorio: boolean
    valor: string
    itens: string[]
}

export const ListaSuspensa = (props: ListaSuspensaProps) => {
    return (
        <Modulo>
            <Rotulos>{props.label}</Rotulos>
            <Selecao
                onChange={evento => 
                    props.aoAlterado(evento.target.value)}
                    required={props.obrigatorio}
                    value={props.valor}>
                        <option value=''></option>
                    {props.itens.map(item => {
                        return <Opcoes key={item}>{item}</Opcoes>
                    })}
            </Selecao>
        </Modulo>
    )
}
