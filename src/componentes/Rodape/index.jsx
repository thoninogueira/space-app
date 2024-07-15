import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin-left: 2%;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin-right: 2%;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="https://linkedin.com/in/thoni-nogueira.">
                        <img src="/imagens/sociais/linkedin.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/thoninogueira">
                        <img src="/imagens/sociais/github.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/thoninogueira">
                        <img src="/imagens/sociais/instagram.png" alt="" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Thoni Nogueira.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;
