import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Category = () => {
    const SliderWrapper = styled.div`
        padding:0.5em;

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

                &:hover, &:focus, &:active{
                    opacity:100%;
                    border-bottom:1px solid;
                }

                .category-img{
                    width:32px;
                    height:32px;
                }

                .category-name{
                    font-family:"Georama";
                }
            }
        }
    `;

    const setting:Settings = {
        arrows:true,
        dots: true,
        infinite: false,
        slidesToShow: 9,
        slidesToScroll: 1
    };

    return(
        <SliderWrapper>
            <Slider
                {...setting}
            >
                <div className="category">
                    <div className="wrapper">
                        <img className="category-img" src="/src/assets/icons/island.jpeg"/>
                        <span className="category-name">Ilha</span>
                    </div>
                </div>
                <div className="category">
                    <div className="wrapper">
                        <img className="category-img" src="/src/assets/icons/park.jpg"/>
                        <span className="category-name">Parques Nacionais</span>
                    </div>
                </div>
                <div className="category">
                    <div className="wrapper">
                        <img className="category-img" src="/src/assets/icons/pool.jpg"/>
                        <span className="category-name">Piscinas incríveis</span>
                    </div>
                </div>
                <div className="category">
                    <div className="wrapper">
                        <img className="category-img" src="/src/assets/icons/arctic.jpg"/>
                        <span className="category-name">Ártico</span>
                    </div>
                </div>
                <div className="category">
                    <div className="wrapper">
                        <img className="category-img" src="/src/assets/icons/coffe.jpg"/>
                        <span className="category-name">Cama e café</span>
                    </div>
                </div>
                <div className="category">
                    <div className="wrapper">
                        <img className="category-img" src="/src/assets/icons/design.jpg"/>
                        <span className="category-name">Design Diferenciado</span>
                    </div>
                </div>
            </Slider>
        </SliderWrapper>
    )
}

export default Category;