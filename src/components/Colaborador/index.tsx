import styled from "styled-components";

const Divisao = styled.div`
    width: 280px;
`

const Divisao1 = styled.div`
    background-color: #f0f0f0;
    border-radius: 10px 10px 0px 0px;
`

const Divisao2 = styled.div`
    background-color: #ffffff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;
`

const Nome = styled.h4`
    color: #6278f7;
    font-size: 18px;
    line-height: 22px;
`

const Cargo = styled.h5`

`

const Foto = styled.img`
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
`
interface ColaradorProps {
    nome: string
    imagem: string
    cargo: string
    corDeFundo: string
}


export const Colaborador = ({nome, imagem, cargo, corDeFundo}: ColaradorProps) => {
    return (
        <Divisao>
            <Divisao1 style={{ backgroundColor: corDeFundo }}>
                <Foto src={imagem} alt={nome}/>
            </Divisao1>

            <Divisao2>
                <Nome>{nome}</Nome>
                <Cargo>{cargo}</Cargo>
            </Divisao2>
        </Divisao>
    )
}
