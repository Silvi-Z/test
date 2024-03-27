import CurrentWeather from './components/currentWeather';
import Header from './components/header';
import { Wrapper } from './styled';
import HourlyWather from './components/hourlyWather';
import DailyWather from './components/dailyWeather';
import { Provider } from "react-redux";
import { createStore } from "redux";



function App() {
  const initialState = {
    currentCityInfo: [],
    dailyInfo: [],
    hourlyInfo: [],
    currentCity: 'Yerevan'
};

function reducer(state = initialState, action) {
  switch (action.type) {
      case "CURENT":
          return { ...state, currentCityInfo: action.val };
      case "DAILY":
          return { ...state, dailyInfo: action.val };
          case "HOURLY":
          return { ...state, hourlyInfo: action.val };
          case "SEARCH":
          return { ...state, currentCity: action.val };
      default:
          return state;
  }
}
const store = createStore(reducer);

  return (
    <Provider store={store}>
    <Header/>
      <Wrapper>
        <CurrentWeather/>
        <HourlyWather/>
      </Wrapper>
      <DailyWather/>
    </Provider>
  );
}

export default App;
