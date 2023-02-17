import styled from "styled-components";


const BannerImg = styled.img`
    background-color: #6278f7;
    width: 100%;
`;

interface BannerProps {
    enderecoImagem: string
    textoAlternativo: string
}

export const Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
    return (
        <BannerImg src={enderecoImagem} alt={textoAlternativo}/>
    )
}
