import React, { Component, Fragment } from 'react'
import { Container, Col} from 'react-bootstrap';
import nineimg from '../../asset/images/nine.jpg'
import diyaimg from '../../asset/images/diya.jpg'
import simg from '../../asset/images/s.jpg'
import teaimg from '../../asset/images/tea.jpg'
import sigimg from '../../asset/images/sig.jpg'


class BlogPopular extends Component {
    render() {
        return (
            <Fragment>

                <Container >

                    <Col md={12} >
                        <br/>
                        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Top 5 most popular spots to visit in Sri Lanka</h2>
                        <br/>
                        <p style={{ textAlign: 'justify' }}>Sri Lanka has it all: jungle-covered mountains, picture-perfect beaches,
                        delectable food, friendly people, and rolling tea plantations. It also has some of Asia's most amazing
                        animals! Cross the nation by rail, soaking in the geographical diversity, and fall in love with one
                        of our favorite countries. With this comprehensive travel guide, you may find the top ten locations 
                        to visit in Sri Lanka.</p>
                        <br/>
                    <h3>1. Visiting the Nine Arch Bridge in Ella</h3>
                    </Col>

                    <div>
                   
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Sri Lanka has it all: jungle-covered mountains, picture-perfect beaches,
                         delectable food, friendly people, and rolling tea plantations. It also has some of Asia's most amazing
                          animals! Cross the nation by rail, soaking in the geographical diversity, and fall in love with one
                           of our favorite countries. With this comprehensive travel guide, you may find the top ten locations 
                           to visit in Sri Lanka.</p>
                           <img src={nineimg} className='blog-design'alt="nine arch bridge" />
                    </Col> 
                    </div>


                    <br />
                    <h3>2. Hike to the Top of the Diyaluma Falls</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>At Diyaluma waterfall, you may play in nature's playground! 
                        It is the country's second tallest waterfall and one of the top sites to visit in Sri Lanka.
                        This wonderful piece of nature is only 40 kilometers from Ella, making it an excellent day 
                        excursion during your visit. Request that your tuk-tuk driver take you to the trail's end. 
                        From here, the trek from the waterfall's base to the summit takes around 2 hours.
                        </p>
                        <img src={diyaimg} className='blog-design'alt="Diyaluma Falls" />
                    </Col> 
                    </div>


                    <br />
                    <h3>3. The Southern Beach: Swings & Palm Trees</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Imagine swinging in the shade of palm trees, a coconut in hand, 
                        and the sea wind in your hair; the southern beaches of Sri Lanka have become widely recognized 
                        for precisely this! Several beaches include Instagram-famous swings, which are popular among 
                        tourists who wish to act out their beach vacation fantasies. The swing at Dalawella Beach is particularly
                         well-known. It is located high up in the bend of a bending palm tree, directly in front of Dream Cabana,
                          and is one of the nicest spots to visit in Sri Lanka! The swing is magnificent at sunset, 
                          as you swing across the sky, watching the colors of the sun change.</p>
                        <img src={simg} className='blog-design'alt="Southern Beach" />
                    </Col> 
                    </div>

                    <br />
                    <h3>4. Tea Plantations at Nuwara Eliya</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Nuwara Eliya is one of the nicest destinations to visit in 
                        Sri Lanka, known for its beautiful tea plantations and rolling green hills. This region has a 
                        long history and is renowned as one of the world's most prominent tea growers; 
                        it is also the birthplace of Lipton Tea! During colonial times, the British imported tea here 
                        after discovering that the cold environment and high altitude of Nuwara Eliya afforded 
                        ideal growing conditions. Tea production in Sri Lanka continues, 
                        and the country is still one of the top exporters of the plant today.</p>
                        <img src={teaimg} className='blog-design'alt="Plantations at Nuwara Eliya" />
                    </Col> 
                    </div>

                    <br />
                    <h3>5. Sigiriya Lion Rock</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Sigiriya Lion Rock is regarded as one of the world's most 
                        stunning natural phenomena and is one of the best sites to visit in Sri Lanka! 
                        The massive (200m) square-shaped rock rises from the earth in the middle of a flat, 
                        densely forested area. The sheer magnitude of the stone is really mind-boggling, almost 
                        as if it materialized by magic.</p>
                        <img src={sigimg} className='blog-design'alt="Sigiriya Lion Rock" />
                    </Col> 
                    </div>

                </Container>
            </Fragment>
        )
    }
}

export default BlogPopular