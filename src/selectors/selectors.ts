import { AppStateType } from '../redux/store';

export const getLocation = (state: AppStateType) => state.weatherReducer.location;

export const getCurrent = (state: AppStateType) => state.weatherReducer.current;

export const getOneDayForecast = (state: AppStateType) => state.weatherReducer
  .oneDayForecast.forecast.forecastday[0];
