import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UKFlag from '../../asset/images/UK_Flag.svg.png';
import canada from '../../asset/images/canada.png';
import india from '../../asset/images/india.png';
import australia from '../../asset/images/australia.png';
import Dubai from '../../asset/images/Dubai.png';
import UAE from '../../asset/images/UAE.png';
import pakistan from '../../asset/images/pakistan.png';


class Countries extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <Fragment>
                <div>
                    <hr className="line" />
                    <h2 className="text-center">Countries We Offer</h2>

                    
                        <Container fluid={true}>
                        <Row>
                        <Slider {...settings}>
                       
                            <div>
                            <img src={UKFlag} alt="UK Flag" style={{ width: 'auto', height: '160px' }}></img>

                            </div>
                            <div>
                            <img src={canada} alt="Canada Flag" style={{ width: 'auto', height: '160px' }}></img>
                            </div>
                            <div>
                            <img src={india} alt="India Flag" style={{ width: '320px', height: '160px' }}></img>
                            </div>
                            <div>
                            <img src={australia} alt="Australia Flag" style={{ width: 'auto', height: '160px' }}></img>
                            </div>
                            <div>
                            <img src={Dubai} alt="Dubai Flag" style={{ width: 'auto', height: '160px' }}></img>
                            </div>
                            <div>
                            <img src={UAE} alt="UAE Flag" style={{ width: '320px', height: '160px' }}></img>
                            </div>
                            <div>
                            <img src={pakistan} alt="pakistan Flag" style={{ width: '320px', height: '160px' }}></img>
                            </div>
                            <div>
                                <img src='data:image/png;base64,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' />
                            </div>
                            
                        </Slider>
                        </Row>
                        </Container>
                       
                    

                </div>
            </Fragment>
        )
    }
}

export default Countries
