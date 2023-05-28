import React, { Component, Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap';

class PrivacyPolicy extends Component {
  render() {
    return (
      <Fragment>
        <Container className="cont2">
            <h3 className="text-center" style={{ fontWeight: 'bold', textAlign:"justify", backgroundColor: "#beedb9"}}>Our Company Privacy Policy</h3>       
            <Col md={12}>  
            <br />
              <p style={{ textAlign:"justify"}}>
              We are dedicated to protecting the privacy of any personal information you disclose to us while using our website.
              This Privacy Statement explains how we handle personal information about you that we collect when you visit the site.
              </p><br />
              <h5 style={{ fontWeight: 'bold'}}>Our Privacy Policy Promise to You:</h5><br />
            </Col>

            <p style={{ textAlign:"justify"}}>
            While knowledge is essential to our capacity to deliver excellent service, 
            our most valuable asset is our clients' confidence. 
            Keeping client information private and only utilizing it as our clients wish 
            is a major responsibility for everyone at the organization. 
            So here is our guarantee to everyone of our customers: 
            </p>

            <Row>
              <Col md={12}>
                <ul>
                  <li>We will protect any information our clients share with us by adhering to strong security and confidentiality requirements.</li><br/>
                  <li>We will collect and use customer information only to the extent necessary to provide better service to our customers, which includes informing them about our goods, services, and other possibilities, as well as running our business.</li><br/>
                  <li>Only approved workers who have been educated in the correct handling of client information will be granted access to such information. Employees who break our Privacy Policy Promise will face our standard disciplinary procedure.</li><br/>     
                  <li>We shall not disclose customer information to any third party unless we have previously notified the customer via disclosures or agreements, or unless we are obligated by law.</li><br/>
                  <li>We will expect those organizations that offer support services to adhere to our privacy standards and allow us to assess them for compliance whenever we engage them.</li><br/>                      
                  <li>We shall make every effort to maintain client records comprehensive, up to date, and correct. We shall educate our customers about how and where they may easily access their information (unless where forbidden by law) and how to report inaccuracies, which we will swiftly address.</li>
                </ul>
              </Col>
            </Row>
          </Container>
      </Fragment>
    )
  }
}

export default PrivacyPolicy
