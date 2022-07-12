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
    `,

    SearchLabel = () => {
        const Label = styled.div`
            width:fit-content;

            background-color:#fff;

            padding:1em;
            border-radius:6px;
        `;

        return(
            <Label>
                <button>Qualquer Lugar</button>
                <button>Qualquer Semana</button>
                <button>Hóspedes</button>
            </Label>
        )
    }

    return(
        <Nav>
            <div className="logo">
                <Logo color="#FF385D"/>
            </div>
            <div className="search-label">
                <SearchLabel/>
            </div>
        </Nav>
    )
}