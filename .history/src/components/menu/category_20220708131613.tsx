//Modules
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { HTMLAttributes, useState } from "react";

//Components
import Slider, { Settings } from "react-slick";
import { BsSliders } from "react-icons/Bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


interface IArrow extends HTMLAttributes<HTMLDivElement>{
    type:"LEFT" | "RIGHT"
}

const Category = () => {
    const SliderWrapper = styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:0.5em;

        padding:0.5em;

        .slider{
            width:90%;
            margin:0 2em;

            .slick-arrow{
                &::before, &::after{
                    color:#fff;
                    font-size:28px;
                    border:1px solid #00000020;
                    background-color:#000;
                    border-radius:50px;
                } 
            }
            
            .category{
                text-align:center;
                .wrapper{
                    cursor: pointer;

                    width:fit-content;

                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    gap:0.5em;

                    opacity:50%;

                    margin:auto;

                    transition:all ease-out 0.25s;

                    &:hover, &:focus, &:active{
                        opacity:100%;
                        border-bottom:1px solid;
                    }

                    .category-img{
                        width:24px;
                        height:24px;
                    }

                    .category-name{
                        font-family:"Georama";
                        font-size:12px;
                    }
                }
            }
        }

        .filter{
            width:10%;

            .wrapper{
                width:fit-content;

                display:flex;
                flex-direction:row;
                align-items:center;
                gap:0.5em;

                padding:0.5em;

                border:1px solid #00000020;

                border-radius:8px;
            }
        }
    `,

    Arrow = (props:IArrow) => {
        const ArrowContent = styled.div`
            position:absolute;
            top:50%;

            ${
                props.type == "LEFT" ?
                `left:0;`
                : "right:0;"
            }

            transform:translateY(-50%);
            
            padding:0.5em;

            border:1px solid #00000020;
            border-radius:50px;

            z-index:10;

            background-color:#fff;
        `;
        
        return(
            <ArrowContent onClick={handleArrow}>
                {
                    props.type == "LEFT" ?
                    <FiChevronLeft />
                    : <FiChevronRight />
                }
            </ArrowContent>
        )
    };

    const setting:Settings = {
        arrows:true,
        dots: true,
        infinite: false,
        slidesToShow: 9,
        slidesToScroll: 1
    },
    sliderRef = useState<any>(),
    categories = [
        {
            name:"Ilha",
            imgName:"island.jpeg"
        },
        {
            name:"Parques Nacionais",
            imgName:"park.jpg"
        },
        {
            name:"Piscinas incríveis",
            imgName:"pool.jpg"
        },
        {
            name:"Ártico",
            imgName:"arctic.jpg"
        },
        {
            name:"Cama e café",
            imgName:"coffe.jpg"
        },
        {
            name:"Design Diferenciado",
            imgName:"design.jpg"
        },

        {
            name:"Ilha",
            imgName:"island.jpeg"
        },
        {
            name:"Parques Nacionais",
            imgName:"park.jpg"
        },
        {
            name:"Piscinas incríveis",
            imgName:"pool.jpg"
        },
        {
            name:"Ártico",
            imgName:"arctic.jpg"
        },
        {
            name:"Cama e café",
            imgName:"coffe.jpg"
        },
        {
            name:"Design Diferenciado",
            imgName:"design.jpg"
        },
        {
            name:"Ilha",
            imgName:"island.jpeg"
        },
        {
            name:"Parques Nacionais",
            imgName:"park.jpg"
        },
        {
            name:"Piscinas incríveis",
            imgName:"pool.jpg"
        },
        {
            name:"Ártico",
            imgName:"arctic.jpg"
        },
        {
            name:"Cama e café",
            imgName:"coffe.jpg"
        },
        {
            name:"Design Diferenciado",
            imgName:"design.jpg"
        },
        {
            name:"Ilha",
            imgName:"island.jpeg"
        },
        {
            name:"Parques Nacionais",
            imgName:"park.jpg"
        },
        {
            name:"Piscinas incríveis",
            imgName:"pool.jpg"
        },
        {
            name:"Ártico",
            imgName:"arctic.jpg"
        },
        {
            name:"Cama e café",
            imgName:"coffe.jpg"
        },
        {
            name:"Design Diferenciado",
            imgName:"design.jpg"
        },
        {
            name:"Ilha",
            imgName:"island.jpeg"
        },
        {
            name:"Parques Nacionais",
            imgName:"park.jpg"
        },
        {
            name:"Piscinas incríveis",
            imgName:"pool.jpg"
        },
        {
            name:"Ártico",
            imgName:"arctic.jpg"
        },
        {
            name:"Cama e café",
            imgName:"coffe.jpg"
        },
        {
            name:"Design Diferenciado",
            imgName:"design.jpg"
        },
    ];

    const handleArrow = () => console.log(sliderRef)

    return(
        <SliderWrapper>
            <Slider
                ref={sliderRef}
                {...setting}
                prevArrow={<Arrow type="LEFT" />}
                nextArrow={<Arrow type="RIGHT" />}
                className="slider"
                
            >
                {  
                    categories.map((item, key) => {
                        return(
                            <div className="category" key={key}>
                                <div className="wrapper">
                                    <img className="category-img" src={"/src/assets/icons/" + item.imgName}/>
                                    <span className="category-name">{item.name}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="filter">
                <div className="wrapper">
                    <BsSliders />
                    <span className="text">Filtros</span>
                </div>
            </div>
        </SliderWrapper>
    )
}

export default Category;