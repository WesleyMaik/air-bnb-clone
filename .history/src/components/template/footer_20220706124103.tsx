import styled from "styled-components";

const Footer = () => {
    const Footer = styled.footer`
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:0.5em;
    `;

    return(
        <Footer>
            <span>© 2022 Airbnb, Inc.</span>
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
            <a href="#">Mapa do site</a>
            <a href="#">Informações da empresa</a>
            <a href="#">Destino</a>
        </Footer>
    )
}

export default Footer;