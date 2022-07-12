import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
    const setting:Settings = {
        arrows:true,
        dots: true,
        infinite: false,
        slidesToScroll: 1
    }

    return(
        <Slider
            {...setting}
        >
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
        </Slider>
    )
}

export default Category;