import { ForecastType, getWeatherType } from './../types/types';
import axios from 'axios';


export const weatherAPI = {
    getWeather(city: string | null, lat?: number | null, long?: number | null) {
        if (city === null) {
            return axios.get<getWeatherType>(`http://api.weatherapi.com/v1/current.json?key=c2500146bfbd44eb831152245212212&q=${lat},${long} &aqi=no`).then((response) => response.data)
        }
        return axios.get<getWeatherType>(`http://api.weatherapi.com/v1/current.json?key=c2500146bfbd44eb831152245212212&q=${city}&aqi=no`).then((response) => response.data)
    },
    getForecastForOneDay(city: string | null, lat?: number | null, long?: number | null) {
        if (city === null) {
            return axios.get<ForecastType>(`http://api.weatherapi.com/v1/forecast.json?key=c2500146bfbd44eb831152245212212&q=${lat},${long}&days=1&aqi=no&alerts=no`).then((response) => response.data.forecast.forecastday)
        }
        return axios.get<ForecastType>(`http://api.weatherapi.com/v1/forecast.json?key=c2500146bfbd44eb831152245212212&q=${city}&days=1&aqi=no&alerts=no`).then((response) => response.data.forecast.forecastday)
    }
}

