
class APICALL {

  static BaseUrl = "http://127.0.0.1:8081"
  static BookingConfirm = this.BaseUrl + "/booking"
  static GetAllBookingDetails = this.BaseUrl + "/bookingdetails"


  static BookingDetailsById(id) {
    return this.BaseUrl + "/bookingdetails/" + id;
  }

  static BookingDetailsUpdateById(id) {
    return this.BaseUrl + "/bookingdetailsupdate/" + id;
  }

  static Storehotel = this.BaseUrl + "/hotelpost"

  static Gethotels = this.BaseUrl + "/hotelget"
}

export default APICALL
