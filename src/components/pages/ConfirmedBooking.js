import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
    const { state } = useLocation();
    console.log(state.occasion)
    return (
        <div>
            <h1>Your Reservation is Confirmed</h1>
            <p>The reservation for your {state.occasion} is confirmed.</p>
        </div>
    )
}

export default ConfirmedBooking