import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Contact from '../components/contact/Contact'
import TourPage from '../pages/TourPage'
import LoginPage from '../pages/LoginPage'
import SubscriberPage from '../pages/SubscriberPage'
import FaqPage from '../pages/FaqPage'
import AllBookingDetailsPage from '../pages/AllBookingDetailsPage'
import AboutUsPage from '../pages/AboutUsPage'
import HowToPurchasePage from '../pages/HowToPurchasePage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import RefundPolicyPage from '../pages/RefundPolicyPage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>

        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/contact" element={< Contact/>} />
            <Route exact path="/tourpackages" element={< TourPage/>} />
            <Route exact path="/login" element={< LoginPage/>} />
            <Route exact path="/subscriber" element={< SubscriberPage/>} />
            <Route exact path="/faq" element={< FaqPage/>} />

            <Route exact path="/admin/bookingdetails" element={<AllBookingDetailsPage/>} />

            <Route exact path="/about-us" element={<AboutUsPage/>} />
            <Route exact path="/HowToPurchase" element={<HowToPurchasePage/>} />
            <Route exact path="/PrivacyPolicy" element={<PrivacyPolicyPage/>} />
            <Route exact path="/RefundPolicy" element={<RefundPolicyPage/>} />




        </Routes>

      </Fragment>
    )
  }
}

export default AppRoute
