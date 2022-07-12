//Modules
import styled from "styled-components";
import { UilUser } from '@iconscout/react-unicons';

//Components
import { Logo } from "../logo/logo";

const SearchLabel = () => {
    const Label = styled.div`
        width:fit-content;

        display:flex;
        gap:0.5em;

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

const UserButton = () => {
    const Button = styled.div`
        border:1px solid #717171;
    `;

    return(
        <Button>
            <UilUser />
        </Button>
    )   
}

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
            <div className="search-label">
                <SearchLabel/>
            </div>
            <div className="user-area">
                <UserButton />
            </div>
        </Nav>
    )
}