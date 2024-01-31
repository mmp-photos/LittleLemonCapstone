import React from 'react';
import { useState, useEffect } from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Container, Row, Col, Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { useNavigate } from "react-router-dom";
import '../../assets/styles/bookingStyles.css';

const BookingForm = ( { updateTimes, availableTimes, } ) => {
    const [ resDate, setResDate ] = useState();
    const [ resTime, setResTime ] = useState();
    const [ guests, setGuests ] = useState();
    const [ occasion, setOccasion ] = useState();
    const [ formData, setFormData ] = useState(false);

    const handleSubmit = () => {
        setFormData(true)
    };
    
    const handleDateChange = (date) => {
        setResDate(date);
        const newTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
        updateTimes(newTimes);
    };

    const navigate = useNavigate();
    function submitForm(formData){
        if(formData){
            console.log('formData has been passed to the sumbitForm function')
            navigate('/confirmed-booking');
        }
    };
  
    useEffect(() => {
        submitForm();
    },[]);

    const today = new Date();
    today.setHours(0, 0, 0, 0)

    // Yup schema for form validation
    const reservationSchema = Yup.object().shape({
        date: Yup.date().required('Please select a date').min(today,'Please choose future date'),
        time: Yup.string().required('Please select a time'),
        occasion: Yup.string().required('Please select an occasion'),
    });

    const initialValues = {
        date: null,
        time: '',
        occasion: '',
      };

    const formik = useFormik({
        initialValues: {reservationDate: '',
                        reservationTime: '',
                        guests: '1',
                        occasion: ''},
        onSubmit: values => {
                    alert(JSON.stringify(values, null, 2));
                  },
      });    

    return(
        <Container className="stretch-content">
            <Row>
                <Col>
                <Formik
                    initialValues={initialValues}
                    validationSchema={reservationSchema}
                    onSubmit={handleSubmit}
                >
                <Form style={{display: "grid", maxWidth: "200px", gap: "20px", backgroundColor: "#F4CE14", paddingRight: "4rem"}}>
                    <div>
                        <label htmlFor="date">Choose date</label>
                        <Field as="date" name="date">
                            <input type="date" id="date" value={resDate || ''} onChange={(e) => handleDateChange(e.target.value)} />
                        </Field>
                        <ErrorMessage name="date" component="div" className="error" />
                    </div>


                        <label htmlFor="res-time">Choose time</label>
                        <select id="reservationTime" value={resTime || ''} name="reservation time" onChange={(e) => {setResTime(e.target.value)}}>
                            <option > Select a Time</option>
							{
								availableTimes.map(time => {return (
									<option key={time}>{time}</option>
								)})
							}
                        </select>

                        <label htmlFor="res-time">Choose time</label>
                        <select id="resTime" value={resTime || ''} name="reservation time" onChange={(e) => {setResTime(e.target.value)}}>
                            <option > Select a Time</option>
							{
								availableTimes.map(time => {return (
									<option key={time}>{time}</option>
								)})
							}
                        </select>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" value= {guests || ''} onChange={(e) => setGuests(e.target.value)} />
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={occasion || ''} onChange={(e) => setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>

                        <Button onClick={handleSubmit} value="Make Your reservation">Make Your reservation</Button>

                    </Form>
                </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default BookingForm;