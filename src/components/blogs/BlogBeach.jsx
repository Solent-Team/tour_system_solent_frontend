import React, { Component, Fragment } from 'react'
import { Container, Col} from 'react-bootstrap';
import wijimg from '../../asset/images/wij.jpg'
import mirimg from '../../asset/images/mir.jpg'
import dalimg from '../../asset/images/dal.jpg'
import trincoimg from '../../asset/images/trinco.jpg'
import tangimg from '../../asset/images/tang.jpg'


class BlogBeach extends Component {
    render() {
        return (
            <Fragment>

                <Container >

                    <Col md={12} >
                        <br/>
                        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Top 5 most relaxing beaches to visit in Sri Lanka</h2>
                        <br/>
                        <p style={{ textAlign: 'justify' }}>Sri Lanka's beaches are a slice of heaven, with picturesque scenery,
                         colorful animals, and fantastic surfing. Every beach, from east to west, has its own distinct 
                         personality, from white sand beaches and tidal islands to palm tree beach swings and bohemian 
                         beach bars. Furthermore, there is something for every type of tourist, whether you are an 
                         experienced surfer seeking for the greatest waves or a hammock lover wishing to rest, sip 
                         fresh coconuts, and paddle in the shallows. Whatever your interests are, spending time on 
                         the beaches in Sri Lanka is a definite must! </p>
                         <br/>
                    <h3>1. Wijaya Beach - Stunning beach in Sri Lanka</h3>
                    </Col>

                    <div>
                   
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Wijaya beach is our absolute favorite of all the Sri Lanka beaches 
                        we've visited. This beautiful white-sand beach is surrounded by palm palms and lapped by crystal blue 
                        water. It genuinely feels like a small piece of heaven! A natural swimming pool formed by large boulders 
                        and a coral reef is ideal for a swim. It's also a great area to watch huge turtles; 
                        look for their small heads peeking up above the water for some fresh air. </p>
                           <img src={wijimg} className='blog-design' alt="Wijaya beach" />
                    </Col> 
                    </div>


                    <br />
                    <h3>2. Mirissa Beach in Sri Lanka</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Mirissa welcomes a diverse range of visitors, 
                        from experienced surfers to sunbathers. Mirissa Beach is the most well-known of Sri Lanka's 
                        beaches; it's noted for its outstanding surfing, restaurants, bars, and snorkelling. 
                        The beach itself is 2 kilometres long, with the famous Parrot Rock in the middle. 
                        The finest snorkelling location is on the left side of the rock. Surfers of all ages 
                        and skills may be on the right side, enjoying the magnificent waves. 
                        </p>
                        <img src={mirimg} className='blog-design'alt="Mirissa Beach" />
                    </Col> 
                    </div>


                    <br />
                    <h3>3. Dalawella Beach in Sri Lanka</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Imagine swinging in the shade of palm trees, a coconut in hand, 
                        and the sea wind in your hair; the southern beaches of Sri Lanka have become widely recognized 
                        for precisely this! Several beaches include Instagram-famous swings, which are popular among 
                        tourists who wish to act out their beach vacation fantasies. The swing at Dalawella Beach is particularly
                         well-known. It is located high up in the bend of a bending palm tree, directly in front of Dream Cabana,
                          and is one of the nicest spots to visit in Sri Lanka! The swing is magnificent at sunset, 
                          as you swing across the sky, watching the colors of the sun change.</p>
                        <img src={dalimg} className='blog-design'alt="Dalawella Beach" />
                    </Col> 
                    </div>

                    <br />
                    <h3>4. Trincomalee Beach</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Trincomalee Beach and Nilaveli Beach are unlike any other 
                        beaches in Sri Lanka. Because of their remote location on the east coast, these beaches are nearly
                        always deserted. In addition, the view is spectacular.  Trincomalee beach is busy, with traditional,
                         colorful fishing boats and residents throwing their nets right off the beach. 
                         There are also some wonderful beach bars where you can sit on swings and select from a
                          variety of delicious beverages.</p>
                        <img src={trincoimg} className='blog-design'alt="Trincomalee Beach" />
                    </Col> 
                    </div>

                    <br />
                    <h3>5. Tangalle Beach</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Tangalle, located on Sri Lanka's south-eastern coast, 
                        is one of such beautiful beaches. It's a little more difficult to get to because it's off the 
                        regular Sri Lanka itinerary, but it's well worth the effort! Tangalle has less tourists, 
                        resulting in a more serene experience (you'll note that the region only has a few prominent resorts).</p>
                        <img src={tangimg} className='blog-design'alt="Tangalle Beach" />
                    </Col> 
                    </div>

                </Container>
            </Fragment>
        )
    }
}

export default BlogBeach