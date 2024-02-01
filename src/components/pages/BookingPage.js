import BookingForm from '../elements/BookingForm';

function BookingPage({ updateTimes, availableTimes }) {

  // console.log("BookingPage availableTimes:", availableTimes);
  
    return (
      <>
      <BookingForm updateTimes={updateTimes} availableTimes={availableTimes} />
      </>
    );
}

export default BookingPage;
