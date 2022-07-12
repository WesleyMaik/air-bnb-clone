import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Category = () => {
    const SliderWrapper = styled.div`
        .category{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            gap:0.5em;

            .category-img{
                width:64px;
                height:64px;
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
                    <img className="category-img" src="/src/assets/icons/island.jpeg"/>
                    <span className="category-name">Ilha</span>
                </div>
            </Slider>
        </SliderWrapper>
    )
}

export default Category;