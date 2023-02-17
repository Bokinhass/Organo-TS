import styled from "styled-components";
import { Colaborador } from "../Colaborador";
import { IColaborador } from "../../shared/interfaces/IColaborador"; 

const Grupo = styled.section`
    text-align: center;
    padding: 32px;
`

const NomeTime = styled.h3`
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
`

const Grupo1= styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
`

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
}

export const Time = (props: TimeProps) => {
    const fundo = { backgroundColor: props.corSecundaria}
    const borda = { borderColor: props.corPrimaria }

    return (
        (props.colaboradores.length > 0) ? <Grupo style={fundo}>
            <NomeTime style={borda}>{props.nome}</NomeTime>
            <Grupo1>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                )}
            </Grupo1>
        </Grupo>
        :<></>
    )
}
