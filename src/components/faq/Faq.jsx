import React, { Component } from 'react'
import { Fragment } from 'react'
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";

class Faq extends Component {
  render() {
    return (
      <Fragment>
        {
          (
            <MDBContainer>
              <section>
                <MDBTypography
                  tag="h3"
                  className="text-center mb-4 pb-2 text-primary fw-bold"
                >
                  FAQ
                </MDBTypography>
                <p className="text-center mb-5" style={{ fontWeight: 'bold', backgroundColor: '#9dc0f2' }}>
                  The Answers to our Most Frequently Asked Questions are given below </p>

                <MDBRow>

                  <MDBCol md="6" lg="4" className="mb-4">
                    <MDBTypography tag="h6" className="mb-3 text-primary">
                      <MDBIcon fas icon="pen-alt text-primary pe-2" /> Can I get a local mobile connection on vacation?
                    </MDBTypography>
                    <p>
                      <strong> <u>Absolutely!</u></strong>{" "}
                      If you have a 'dual band' and unlocked phone, you may select from numerous mobile providers, including Dialog,
                      Mobitel, Etisalat, Hutch, and Airtel, to get a local SIM and top up cards (recharge cards).
                      Dialog offers a counter at Katunayake International Airport where you may purchase a connection for Rs. 1500/=.
                    </p>
                  </MDBCol>

                  <MDBCol md="6" lg="4" className="mb-4">
                    <MDBTypography tag="h6" className="mb-3 text-primary">
                      <MDBIcon fas icon="pen-alt text-primary pe-2" /> Which languages will individuals be able to speak in?
                    </MDBTypography>
                    <p>
                      While Sinhala and Tamil are the official and most frequently spoken languages in the nation,
                      English is a link language that most people understand.
                      All hotels, large restaurants, and businesses speak English.
                      The majority of road signs are written in both Sinhalese and English.
                    </p>
                  </MDBCol>

                  <MDBCol md="6" lg="4" className="mb-4">
                    <MDBTypography tag="h6" className="mb-3 text-primary">
                      <MDBIcon fas icon="pen-alt text-primary pe-2" /> Are credit cards accepted everywhere in Sri Lanka?
                    </MDBTypography>
                    <p>
                      <strong>
                        <u>Yes.</u>
                      </strong>{" "}
                      Credit cards are widely accepted and widely utilized by local businesses (even in tiny communities).
                      Visa and MasterCard are the most commonly used card kinds, with American Express being utilized to a lesser extent.
                      Using your Credit Card (legal for worldwide usage) whenever feasible would be a convenient choice.
                    </p>
                  </MDBCol>

                  <MDBCol md="6" lg="4" className="mb-4">
                    <MDBTypography tag="h6" className="mb-3 text-primary">
                      <MDBIcon fas icon="pen-alt text-primary pe-2" /> Is there anything else I should be concerned about?
                    </MDBTypography>
                    <p>
                      Flash photography is not permitted at the Sigiriya frescoes, but where there is no prohibition, please act carefully.
                      Never stand near or in front of a Buddha statue (with your back to it).
                      Such behavior is seen as exceedingly disrespectful. Do not photograph a monk without first obtaining permission.
                    </p>
                  </MDBCol>

                  <MDBCol md="6" lg="4" className="mb-4">
                    <MDBTypography tag="h6" className="mb-3 text-primary">
                      <MDBIcon fas icon="pen-alt text-primary pe-2" /> What should I do while mingling with the locals?
                    </MDBTypography>
                    <p>
                      Always use your right hand to offer, receive, and eat. It is exceedingly impolite to eat with your left hand.
                      Respect cultural differences, local laws, and import rules,
                      as well as ensuring that your actions do not breach environmental responsibility.
                    </p>
                  </MDBCol>

                  <MDBCol md="6" lg="4" className="mb-4">
                    <MDBTypography tag="h6" className="mb-3 text-primary">
                      <MDBIcon fas icon="pen-alt text-primary pe-2" /> When is the most ideal time to travel?
                    </MDBTypography>
                    <p>
                      The best and driest seasons are from December to March on
                      the West and South Coasts, and from May to September on the East Coast.
                    </p>
                  </MDBCol>

                  <MDBCol md="6" lg="4" className="mb-4">
                    <MDBTypography tag="h6" className="mb-3 text-primary">
                      <MDBIcon fas icon="pen-alt text-primary pe-2" /> What is the nightlife like in Sri Lanka?
                    </MDBTypography>
                    <p>
                      Colombo, Negombo, and Hikkaduwa all have a vibrant nightlife.
                      Colombo boasts a number of good pubs, nightclubs, karaoke lounges, and bars.
                      In Colombo, there is a rising pub culture among the young people.
                      Friday and Saturday nights are reserved for all-night revelry.
                    </p>
                  </MDBCol>

                  <MDBCol md="6" lg="4" className="mb-4">
                    <MDBTypography tag="h6" className="mb-3 text-primary">
                      <MDBIcon fas icon="pen-alt text-primary pe-2" /> Is there free internet access for me to access?
                    </MDBTypography>
                    <p>
                      The majority of hotels provide internet access.
                      Most localities have internet cafés with ADSL connections.
                      Connections will be slow in distant towns.
                      Surfing in a Cyber Cafe costs roughly Euro 0.50 per hour on average.
                      Many 5 star and boutique hotels provide free WiFi to their customers.
                    </p>
                  </MDBCol>

                  <MDBCol md="6" lg="4" className="mb-4">
                    <MDBTypography tag="h6" className="mb-3 text-primary">
                      <MDBIcon fas icon="pen-alt text-primary pe-2" /> In Sri Lanka, what mobile technology is supported?
                    </MDBTypography>
                    <p>
                      On GSM 900 / 1800 bands, all mobile providers support GSM technology.
                      WAP and GPRS are widely supported. Colombo now has 3G and wireless broadband.
                      Wi-Fi zones may be located in strategic locations around large cities.
                    </p>
                  </MDBCol>

                </MDBRow>

                <p className="text-center mb-5" style={{ fontWeight: 'bold', backgroundColor: '#9dc0f2' }}>
                  If you have any further questions, do contact us using the "Contact Us" link provided below </p>

              </section>
            </MDBContainer>
          )
        }
      </Fragment>
    )
  }
}

export default Faq
