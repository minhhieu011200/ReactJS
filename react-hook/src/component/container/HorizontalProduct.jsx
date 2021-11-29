import React from 'react';
import Slider from "react-slick";

function HorizontalProduct(props) {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        dot: true
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img className="img-responsive" src="https://hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg" />
                </div>
                <div>
                    <img className="img-responsive" src="https://hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg" />
                </div>
                <div>
                    <img className="img-responsive" src="https://hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg" />
                </div>
                <div>
                    <img className="img-responsive" src="https://hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg" />
                </div>
                <div>
                    <img className="img-responsive" src="https://hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg" />
                </div>
                <div>
                    <img className="img-responsive" src="https://hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg" />
                </div>
                <div>
                    <img className="img-responsive" src="https://hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg" />
                </div>
                <div>
                    <img className="img-responsive" src="https://hoanghamobile.com/i/productlist/dsp/Uploads/2020/09/17/51kGDXeFZKL._SL1024_.jpg" />
                </div>
            </Slider>
        </div>
    );
}

export default HorizontalProduct;