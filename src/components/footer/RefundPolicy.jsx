import React, { Component, Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap';

class RefundPolicy extends Component {
  render() {
    return (
      <Fragment>
          <Container className="cont2">
            <h3 className="text-center" style={{ fontWeight: 'bold', textAlign:"justify", backgroundColor: "#f7cdd1"}}>Our Company Refund Policy</h3>       
            <Col md={12}>  
            <br />
              <p style={{ textAlign:"justify"}}>
              Payment for the tour is an important portion of the tour's income since it helps to cover 
              the costs of equipment, operating expenses, staffing, administration, and so on. 
              Because the majority of the Company's expenditures will have been incurred before the tour begins, 
              we must apply cancellation fees to pay these costs.
              </p><br />
              <h6 style={{ fontWeight: 'bold'}}>Deposits are not refunded. If you cancel your reservation, 
              we will charge you the following cancellation fees:</h6><br />
            </Col>

            <Row>
              <Col md={8}>
                <ul>
                  <li>30 days or more before departure - deposit forfeited</li><br/>
                  <li>15-29 days prior to departure – 30% of the total tour cost*</li><br/>
                  <li>7-14 days prior to departure – 50% of the total tour cost*</li><br/>     
                  <li>6 or fewer days prior to departure – 80% of the total tour cost*</li><br/>                      
                </ul>
              </Col>
            </Row>

            <p style={{ textAlign:"justify"}}>
            Customized trips may have different cancellation policies, 
            which will be notified to eligible Clients at the time of booking.
            Once the trip has begun, no refunds will be issued for any unused portion or part of the 
            tour or services to be performed. If you want to make adjustments to the trip or leave early,
            you must do so fully at your own expense and risk. You must also notify the trip operator
            in writing of your intention to leave the excursion. 
            </p>
          </Container>
      </Fragment>
    )
  }
}

export default RefundPolicy
