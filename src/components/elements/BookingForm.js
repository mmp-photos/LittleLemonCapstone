import React from 'react';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Container, Row, Col, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import '../../assets/styles/bookingStyles.css';
import heroImage from '../../assets/images/restauranfood.jpg';

const BookingForm = ( { updateTimes, availableTimes, } ) => {
    const [ resDate, setResDate ] = useState();
    const [ resTime, setResTime ] = useState();
    const [ guests, setGuests ] = useState();
    const [ occasion, setOccasion ] = useState();
    const [ formData, setFormData ] = useState(false);
    const occasionOptions = ["Birthday", "Anniversary"]

    // const navigate = useNavigate();
    const handleSubmit = (values, { setSubmitting }) => {
        const submittedValues = values;
        console.log(`Values passed to the form are: ${values.occasion}`);
        setSubmitting(false);
        navigate('/confirmed-booking', { state: {date: submittedValues.date, occasion: submittedValues.occasion} });

    };
    
    const handleDateChange = (date) => {
        setResDate(date);
        const newTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
        updateTimes(newTimes);
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0)

    // Yup schema for form validation
    const reservationSchema = Yup.object().shape({
        date: Yup.date().required('Please select a date').min(today,'Please choose future date'),
        time: Yup.string().required('Please select a time'),
        guests: Yup.number().required('Please select a number of guests').positive('Please select a number of 1 or grater').max(10, "We cannot reserve a table for more than 10 guests"),
        occasion: Yup.string().required('Please select an occasion'),
    });

    const initialValues = {
        date: null,
        time: '',
        guests: '1',
        occasion: '',
      };

    const timeOptions = ['12:00 PM', '1:00 PM', '6:00 PM', '8:00 PM'];

    return(
        <Container id="Booking" className="stretch-content" style={{paddingBottom: "24rem"}}>
            <Row>
                <Col>
                <Formik
                    initialValues={initialValues}
                    validationSchema={reservationSchema}
                    onSubmit={handleSubmit}
                >
                <Form>
                    <h1>Make a Reservation</h1>
                    <div>
                        <label htmlFor="date">Choose date</label>
                        <Field as="date" name="date">
                            <input type="date" id="date" value={resDate || ''} onChange={(e) => handleDateChange(e.target.value)} />
                        </Field>
                        <ErrorMessage name="date" component="div" className="error" />
                    </div>

                    <div>
                        <label>Time:</label>
                        <Field as="select" name="time">
                            <option value={resTime || ''} disabled>
                            Select a time
                            </option>
                            {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                            ))}
                        </Field>
                        <ErrorMessage name="time" component="div" className="error" />
                    </div>

                    <div>
                        <label>Guests:</label>
                        <Field as="number" name="guests">
                        <input type="number" placeholder="1" min="1" max="10" id="guests" value= {guests || ''} onChange={(e) => setGuests(e.target.value)} />
                        </Field>
                        <ErrorMessage name="guests" component="div" className="error" />
                    </div>

                    <div>
                        <label>Occasion:</label>
                        <Field as="select" name="occasion">
                        <option value="" disabled>
                            Select an occasion
                            </option>
                            {occasionOptions.map((occasion) => (
                            <option key={occasion} value={occasion}>
                                {occasion}
                            </option>
                            ))}
                        </Field>
                        <ErrorMessage name="occasion" component="div" className="error" />
                    </div>
                        <button type="submit">Make Your reservation</button>
                    </Form>
                </Formik>
                </Col>
                <Col className="desktop-only">
                    <img className="border-full" src={heroImage} alt="Dinner" />
                </Col>
            </Row>
        </Container>
    )
}

export default BookingForm;