import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
    const setting = {
        arrows:true,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        <Slider
            {...setting}
            arrows
        >
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
        </Slider>
    )
}

export default Category;