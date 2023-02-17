import styled from "styled-components";

const Texto = styled.div`
    margin: 24px 0;
`

const Botao = styled.input`
    background-color: #fff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`

const Rotulo = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
}

export const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio=false}: CampoTextoProps) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <Texto>
            <Rotulo>{label}</Rotulo>
            <Botao
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholder}
            />

        </Texto>
    )
}
