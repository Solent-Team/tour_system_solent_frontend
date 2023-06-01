import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Contact from '../components/contact/Contact'
import TourPage from '../pages/TourPage'
import PopularTourPage from '../pages/PopularTourPage'
import DiscoverTourPage from '../pages/DiscoverTourPage'
import LoginPage from '../pages/LoginPage'
import SubscriberPage from '../pages/SubscriberPage'
import FaqPage from '../pages/FaqPage'
import AllBookingDetailsPage from '../pages/AllBookingDetailsPage'
import AboutUsPage from '../pages/AboutUsPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import RefundPolicyPage from '../pages/RefundPolicyPage'
import BookingDetailsEditPage from '../pages/BookingDetailsEditPage'
import FamilyTourPage from '../pages/FamilyTourPage'
import HoneymoonTourPage from '../pages/HoneymoonTourPage'
import JaffnaTourPage from '../pages/JaffnaTourPage'
import ColomboTourPage from '../pages/ColomboTourPage'
import KandyTourPage from '../pages/KandyTourPage'
import BlogPopularPage from '../pages/BlogPopularPage'
import BlogBeachPage from '../pages/BlogBeachPage'
import BlogEllaPage from '../pages/BlogEllaPage'
import BlogGalleFortPage from '../pages/BlogGalleFortPage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>

        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/contact" element={< Contact/>} />
            <Route exact path="/SafariTour" element={< TourPage/>} />
            <Route exact path="/login" element={< LoginPage/>} />
            <Route exact path="/subscriber" element={< SubscriberPage/>} />
            <Route exact path="/faq" element={< FaqPage/>} />
            <Route exact path="/admin/bookingdetails" element={<AllBookingDetailsPage/>} />
            <Route exact path="/about-us" element={<AboutUsPage/>} />
            <Route exact path="/PrivacyPolicy" element={<PrivacyPolicyPage/>} />
            <Route exact path="/RefundPolicy" element={<RefundPolicyPage/>} />

            <Route exact path='/editbooking/:id' element={<BookingDetailsEditPage/>} />












            <Route exact path="/Popular" element={< PopularTourPage/>} />
            <Route exact path="/FamilyTrip" element={< FamilyTourPage/>} />
            <Route exact path="/Discover" element={< DiscoverTourPage/>} />
            <Route exact path="/Honeymoon" element={< HoneymoonTourPage/>} />
            <Route exact path="/JaffnaTour" element={< JaffnaTourPage/>} />
            <Route exact path="/ColomboTour" element={< ColomboTourPage/>} />
            <Route exact path="/KandyTour" element={< KandyTourPage/>} />

            <Route exact path="/BlogPopular" element={< BlogPopularPage/>} />
            <Route exact path="/BlogBeach" element={< BlogBeachPage/>} />
            <Route exact path="/BlogElla" element={< BlogEllaPage/>} />
            <Route exact path="/BlogGalleFort" element={< BlogGalleFortPage/>} />
        </Routes>

      </Fragment>
    )
  }
}

export default AppRoute
