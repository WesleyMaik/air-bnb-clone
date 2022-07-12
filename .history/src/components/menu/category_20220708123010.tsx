//Modules
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

//Components
import Slider, { Settings } from "react-slick";
import { BsSliders } from "react-icons/Bs";

const Category = () => {
    const SliderWrapper = styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:0.5em;

        padding:0.5em;

        .slider{
            width:100%;
            
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
            display:flex;
            flex-direction:row;
            align-items:center;
            gap:0.5em;
        }
    `;

    const setting:Settings = {
        arrows:true,
        dots: true,
        infinite: false,
        slidesToShow: 9,
        slidesToScroll: 1
    },
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
    ];

    return(
        <SliderWrapper>
            <Slider
                {...setting}
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
                <BsSliders />
                <span className="text">Filtros</span>
            </div>
        </SliderWrapper>
    )
}

export default Category;