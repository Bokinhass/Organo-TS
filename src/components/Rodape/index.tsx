import styled from "styled-components";

const Footer = styled.section`
    background: #6278f7;
    color: #fff;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Lista = styled.ul`
    display: inline-block;
    margin-right: 32px;
`

export const Rodape = () => {
    return (
        <Footer>
            <section>
            <Lista>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/facebook.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/twitter.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/instagram.png" alt="" />
                    </a>
                </li>
            </Lista>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
        </Footer>
    )
}
