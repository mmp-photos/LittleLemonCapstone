import { React, useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/lemonStyles.css';
import Header from './components/Header';
import Routing from './components/Routing';
import Footer from './components/Footer';

const seedRandom = function(seed){
  var m = 2**35 - 31;
  var a = 185685;
  var s = seed % m;

  return function(){
    return (s = s * a % m) /m;
  }
}

const fetchAPI = function(date){
  let result = []
  let random = seedRandom(date.getDate())

  for (let i = 17; i <= 23; i++ ){
    if (random() < 0.5){
      result.push(i + ':00')
    }
    if (random() > 0.5){
      result.push(i + ':30')
    }
  }
  return result;
}

const initialState = {availableTimes: fetchAPI(new Date())};

const reducer = (state, date) => {
      return {availableTimes: fetchAPI(new Date())};
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (state.availableTimes) {
      console.log("HomePage availableTimes:", state.availableTimes);
    }
  }, [state.availableTimes]);

  const updateTimes = (newTimes) => {
    dispatch({
      type: 'UPDATE_TIMES',
      payload: newTimes,
    })
  }

  return (
    <>
      <Header availableTimes={state.availableTimes} updateTimes={updateTimes} />
        <Routing availableTimes={state.availableTimes} updateTimes={updateTimes} />
      <Footer />
    </>
  );
}

export default App;
