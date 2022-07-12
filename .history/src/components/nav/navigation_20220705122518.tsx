import styled from "styled-components"
import { Logo } from "../logo/logo";

export const Navigation = () => {
    const Nav = styled.nav`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        gap:1em;

        padding:1em;
    `;

    return(
        <Nav>
            <div className="logo">
                <Logo color="#FF385D"/>
            </div>
        </Nav>
    )
}