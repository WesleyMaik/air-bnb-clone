//Modules
import styled from "styled-components";

//Components
import { UilBars } from '@iconscout/react-unicons';
import { Logo } from "../logo/logo";
import { Avatar } from '@chakra-ui/react';

const SearchLabel = () => {
    const Label = styled.div`
        width:fit-content;

        display:flex;
        gap:0.5em;

        background-color:#fff;

        border:1px solid #71717140;

        padding:1em;
        border-radius:25em;

        box-shadow:0 2.5px 5px #00000020;
        
        transition:all ease 0.2s;

        &:hover{
            box-shadow:0 4px 5px #00000030;
        }

        .divisor{
            border:1px solid #717171;
        }
    `;

    return(
        <Label>
            <button>Qualquer Lugar</button>
            <span className="divisor"/>
            <button>Qualquer Semana</button>
            <span className="divisor"/>
            <button>Hóspedes</button>
        </Label>
    )
}

const UserButton = () => {
    const Button = styled.button`
        display:flex;
        align-items:center;
        gap:0.5em;

        padding:0.5em;
        border:1px solid #71717180;
        border-radius:50px;
    `;

    return(
        <Button>
            <UilBars />
            <Avatar width={8} height={8}/>
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