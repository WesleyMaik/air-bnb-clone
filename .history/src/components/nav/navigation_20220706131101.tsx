//Modules
import styled from "styled-components";

//Components
import { FiGlobe, FiSearch, FiMenu } from "react-icons/fi";
import { Logo } from "../logo/logo";
import { Avatar } from '@chakra-ui/react';

const SearchLabel = () => {
    const Label = styled.div`
        width:fit-content;

        display:flex;
        gap:0.5em;

        background-color:#fff;

        border:1px solid #71717140;

        font-size:0.9em;

        padding:1em;
        border-radius:25em;

        box-shadow:0 2.5px 5px #00000020;
        
        transition:all ease 0.2s;

        &:hover{
            box-shadow:0 4px 5px #00000030;
        }

        .divisor{
            border-left:1px solid #71717180;
        }

        .search{
            color:#fff;
            background-color:var(--primary-color);

            padding:0.4em;
            border-radius:25em;
        }

        button{
            display:flex;
            align-items:center;
            gap:0.5em;  
        }
    `;

    return(
        <Label>
            <button>Qualquer Lugar</button>
            <span className="divisor"/>
            <button>Qualquer Semana</button>
            <span className="divisor"/>
            <button>
                <span className="text">Hóspedes</span>
                <FiSearch className="search" size={28}/>
            </button>
        </Label>
    )
}

const UserButton = () => {
    const Button = styled.button`
        display:flex;
        align-items:center;
        gap:0.5em;

        padding:0.5em;
        border:1px solid #71717140;
        border-radius:25em;
        
        transition:all ease 0.2s;

        &:hover{
            box-shadow:0 4px 5px #00000030;
        }
    `;

    return(
        <Button>
            <FiMenu />
            <Avatar width={8} height={8}/>
        </Button>
    )   
}

export const Navigation = () => {
    const Nav = styled.nav`
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        gap:1em;

        position:sticky;
        padding:1em;

        border-bottom:1px solid #71717140;

        .user-area{
            display:flex;
            align-items:center;
            gap:1em;

            a{
                padding:0.5em;
                border-radius:50px;
                transition:all ease 0.25s;
                &:hover{
                    background-color:#00000010;
                }
            }
        }
    `;

    return(
        <Nav>
            <div className="logo">
                <a href="/">
                    <Logo color="#FF385D"/>
                </a>
            </div>
            <div className="search-label">
                <SearchLabel/>
            </div>
            <div className="user-area">
                <a href="#">Seja um anfitrião</a>
                <a href="#"><FiGlobe /></a>
                <UserButton />
            </div>
        </Nav>
    )
}