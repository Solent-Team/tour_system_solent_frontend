import React, { Component, Fragment } from 'react'
import { Container, Col} from 'react-bootstrap';
import adimg from '../../asset/images/ad.jpg'
import nimg from '../../asset/images/n.jpg'
import lipimg from '../../asset/images/lip.jpg'
import ravimg from '../../asset/images/rav.jpg'
import rockimg from '../../asset/images/rock.jpg'


class BlogElla extends Component {
    render() {
        return (
            <Fragment>

                <Container >

                    <Col md={12} >
                        <br/>
                        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Top 5 exciting things to do in Ella, Sri Lanka</h2>
                        <br/>
                        <p style={{ textAlign: 'justify' }}>Ella combines the finest of Sri Lanka: stunning 
                        rainforest highlands, rolling tea farms, and dramatic waterfalls. As one of the largest 
                        tea growers, visitors can expect to spend their days among the greenest settings, taking 
                        in the views from high mansions and challenging hiking paths. Even the train trip to Ella 
                        is one of life's most memorable experiences, as you travel through bamboo woods and tropical 
                        mist on the famed blue train. With this comprehensive travel guide, you can enjoy all of the 
                        best things to do in Ella.</p>
                        <br/>
                    <h3>1. Climb up Little Adam's Peak</h3>
                    </Col>

                    <div>
                   
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Little Adam's Peak is smaller than its greater brother Adam's Peak, 
                        yet it is no less spectacular. The breathtaking ridge consists of three green peaks that 
                        stand over the valley below. Hike across breathtaking scenery, going past towns, tea plantations, 
                        and vast grass fields. Reaching the summit is a once-in-a-lifetime opportunity to take in the amazing, 
                        panoramic views and feel as if you're on top of the world! </p>
                        <img src={adimg} className='blog-design'alt="Little Adam's Peak" />
                    </Col> 
                    </div>


                    <br />
                    <h3>2. Walk Along the Rails of Nine Arch Bridge, Ella</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Ella's Nine Arch Bridge is noted internationally for its beauty. 
                        The magnificent bridge is 25 meters tall and 91 meters long! It's tucked up in the deep green hills under 
                        low-lying clouds, just outside Ella Town and on the same path as Little Adam's Peak.
                        </p>
                        <img src={nimg} className='blog-design'alt="Nine Arch Bridge, Ella" />
                    </Col> 
                    </div>


                    <br />
                    <h3>3. Endless Tea Field Views at Lipton's Seat</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Lipton's Seat in Haputale is an ideal morning or afternoon excursion 
                        from Ella. Take the train to Haputale and then a tuk-tuk to the breathtaking overlook above the Lipton tea 
                        estate. This is where Thomas Lipton (a well-known tea grower) would sit to enjoy his lovely tea fields. 
                        It's also where he sowed the first seeds of Sri Lanka's most important export. When you gaze down on the 
                        endless green tea fields, with tidy rows of plants and smiling, hard-working people collecting leaves, 
                        it's simple to see why he picked this location. </p>
                        <img src={lipimg} className='blog-design'alt="Lipton's Seat" />
                    </Col> 
                    </div>

                    <br />
                    <h3>4. Take a Refreshing Natural Shower at Ravana Falls</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Ravana Falls is smaller than Diyaluma, yet it is nonetheless 
                        breathtakingly magnificent. The falls are composed of three levels, with water tumbling through 
                        various rock pools, offering an ideal swimming spot. It's wonderful delight to escape the tropical 
                        midday heat!</p>
                        <img src={ravimg} className='blog-design'alt="Ravana Falls" />
                    </Col> 
                    </div>

                    <br />
                    <h3>5. Hike to the top of Ella Rock</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>The majestic grandeur of Ella Rock can be felt no matter where 
                        you are in Ella. The stunning green mountain is a popular walk and one of the top things to do in Ella. 
                        This trek is unusual in that the route is highly natural and overgrown, giving you a truly 
                        daring sensation. </p>
                        <img src={rockimg} className='blog-design'alt="Hike to the top of Ella Rock" />
                    </Col> 
                    </div>

                </Container>
            </Fragment>
        )
    }
}

export default BlogElla