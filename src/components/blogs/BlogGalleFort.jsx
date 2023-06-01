import React, { Component, Fragment } from 'react'
import { Container, Col} from 'react-bootstrap';
import shopimg from '../../asset/images/shop.jpg'
import monimg from '../../asset/images/mon.jpg'
import wallimg from '../../asset/images/wall.jpg'
import sunimg from '../../asset/images/sun.jpg'
import coastimg from '../../asset/images/coast.jpg'
import visitimg from '../../asset/images/visit.jpg'


class BlogGalleFort extends Component {
    render() {
        return (
            <Fragment>

                <Container >

                    <Col md={12} >
                        <br/>
                        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Galle Fort Guide: How to visit, what to do, etc.</h2>
                        <br/>
                        <p style={{ textAlign: 'justify' }}>Galle Fort is Sri Lanka's most attractive seaside town. 
                        Locals play cricket along the beach, tourists promenade on the historic fort walls, while street 
                        sellers sell delicious tropical fruit under the palm palms. Its past has created a cultural melting pot, 
                        with a unique combination of European and Asian elements, as seen by the whitewashed Dutch-style houses 
                        that line the cobblestone streets. Travel to the country's most southwestern corner and enjoy all the 
                        magnificent things to do at Galle Fort, Sri Lanka.</p>
                        <br/>
                    <h3>1. Beautiful Shops at Galle Fort</h3>
                    </Col>

                    <div>
                   
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Walking about the historic alleyways, seeing the fantastic handicraft 
                        stores, and admiring the old-fashioned Dutch buildings is one of the greatest things to do in Galle Fort.
                         Galle Fort, in fact, contains some of the top stores in Sri Lanka! It's ideal for purchasing souvenirs 
                         and memories from your journey. </p>
                        <img src={shopimg} className='blog-design'alt="Beautiful Shops at Galle Fort" />
                    </Col> 
                    </div>


                    <br />
                    <h3>2. Galle Fort Lighthouse</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Galle Fort Lighthouse is a local landmark, surrounded by palm 
                        trees and the beautiful blue ocean. This image is used on numerous postcards, brochures, and 
                        advertisements to entice visitors to Sri Lanka's lovely beaches.  This amazing structure is 
                        also Sri Lanka's oldest lighthouse (constructed by the British in 1848), and it is still in 
                        operation today. It's a must-see on any tour to Galle Fort, offering a magnificent view at 
                        sunset for some great shots.  
                        </p>
                        <img src={monimg} className='blog-design'alt="Galle Fort Lighthouse" />
                    </Col> 
                    </div>


                    <br />
                    <h3>3. Walk Along Galle Fort Wall</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>The wall of Galle Fort is where people and visitors gather to enjoy the 
                        wonderful view of the city and the sea. Best of all, you may stroll around the fort's circumference, 
                        enjoying different viewpoints of the UNESCO World Heritage Site and the town. Begin at the Galle Fort 
                        Lighthouse on the fort's southeast corner. As you travel towards the Fort's northwest corner, you'll 
                        notice the Clock Tower, which serves as a link between Galle City and Galle Fort. The walk around the 
                        fort is about 2 kilometers long, with spectacular views of the ocean along the route. </p>
                        <img src={wallimg} className='blog-design'alt="Walk Along Galle Fort Wall" />
                    </Col> 
                    </div>

                    <br />
                    <h3>4. Sunset on the Fort's Wall</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>One of the best things to do in Galle Fort is to watch the sunset 
                        from the Fort's wall. Locals and visitors alike gather along the wall with beers and snacks to watch 
                        the sun set into the sea. Watch the sky turn colors and start up a chat with the locals.</p>
                        <img src={sunimg} className='blog-design'alt="Sunset on the Fort’s Wall" />
                    </Col> 
                    </div>

                    <br />
                    <h3>5. Take a Day Trip to the South Coast</h3>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>Galle Fort is an excellent starting point for several day journeys 
                        to Sri Lanka's gorgeous south coast. With white sand, rock pools, and tidal islands, this stretch of 
                        coastline is home to some of the country's most famous beaches. It's especially popular with surfers, 
                        who go from all over the world to enjoy the huge waves and warm seas. Day excursions to neighbouring beach 
                        towns Unawatuna (10-minute drive) or Mirissa (1-hour drive) are available, where you can find 
                        Instagram-famous spots such as Coconut Hill or palm tree beach swings.</p>
                        <img src={coastimg} className='blog-design'alt="Take a Day Trip to the South Coast" />
                    </Col> 
                    </div>


                    <br/><br />
                    <h2 style={{ textAlign: 'center', fontWeight: 'bold'}}>How to Visit Galle Fort</h2>
                    <br/>
                    <div>
                    <Col md={12} >
                        <p style={{ textAlign: 'justify' }}>One of the best things to do in Galle Fort is to watch the sunset 
                        from the Fort's wall. Locals and visitors alike gather along the wall with beers and snacks to watch 
                        the sun set into the sea. Watch the sky turn colors and start up a chat with the locals.
                        <br/>
                        Every day, there are multiple trains, and you may quickly purchase your train tickets online here can 
                        obtain a complete timetable on the Sri Lankan rail website.
                        If you like to be more flexible, we recommend hiring a car in Sri Lanka via Sunny Cars, 
                        which works with local car rental providers. When you book with Sunny Cars, all insurances are 
                        included in the price. Book your automobile hire here.
                        </p>
                        <img src={visitimg} className='blog-design'alt="How to Visit Galle Fort" />
                    </Col> 
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default BlogGalleFort