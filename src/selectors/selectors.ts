import { AppStateType } from "../redux/store";

export const getLocation = (state: AppStateType) => {
    return state.weatherReducer.location
}

export const getCurrent = (state: AppStateType) => {
    return state.weatherReducer.current
}

export const getOneDayForecast = (state: AppStateType) => {
    return state.weatherReducer.oneDayForecast.forecast.forecastday[0]
}