//Modules
import styled from "styled-components";

//Components
import { FiGlobe } from "react-icons/fi";

const Footer = () => {
    const Footer = styled.footer`
        width:100%;

        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        gap:0.5em;

        position:fixed;
        left:0;
        bottom:0;

        font-size:0.9em;

        padding:1em;

        background-color:#fff;

        border:1px solid #00000020;

        .links{
            > * {
                margin:0 0.25em;
            }
        }

        .global{
            font-weight:600;
        }
    `;

    return(
        <Footer>
            <div className="links">
                <span>© 2022 Airbnb, Inc.</span>
                •
                <a href="#">Privacidade</a>
                •
                <a href="#">Termos</a>
                •
                <a href="#">Mapa do site</a>
                •
                <a href="#">Informações da empresa</a>
                •
                <a href="#">Destino</a>
            </div>
            <div className="global">
                <a href="#">
                    <FiGlobe />
                    Português
                </a>
            </div>
        </Footer>
    )
}

export default Footer;