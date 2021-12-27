import { CurrentType, LocationType, Day } from './../types/types';
import { weatherAPI } from "../api/weatherAPI"
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './store';


const initialState = {
    location: {
        country: null as string | null,
        lat: null as number | null,
        localtime: null as string | null,
        localtime_epoch: null as number | null,
        lon: null as number | null,
        name: null as string | null,
        region: null as string | null,
        tz_id: null as string | null
    },
    current: {
        cloud: null as number | null,
        condition: {},
        humidity: null as number | null,
        pressure_mb: null as number | null,
        temp_c: null as number | null,
        uv: null as number | null,
        wind_kph: null as number | null
    },
    oneDayForecast: {
        forecast: {
            forecastday: [{
                date: null as string | null,
                day: {
                    avghumidity: null as number | null,
                    avgtemp_c: null as number | null,
                    condition: {
                        text: null as string | null

                    },
                    daily_chance_of_rain: null as number | null,
                    daily_chance_of_snow: null as number | null,
                    maxtemp_c: null as number | null,
                    maxwind_kph: null as number | null,
                    mintemp_c: null as number | null,
                }
            }]
        }
    }

}

const weatherReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case 'WA/WR/GET_WEATHER':
            return {
                ...state,
                location: action.location,
                current: action.current
            }
        case 'WA/WR/GET_FORECAST':
            return {
                ...state,
                ...state.oneDayForecast,
                ...state.oneDayForecast.forecast.forecastday = [...state.oneDayForecast.forecast.forecastday],
                ...state.oneDayForecast.forecast.forecastday[0] = 
                { ...state.oneDayForecast.forecast.forecastday[0], date: action.date, day: action.day }
            }
        default: return state
    }
}

const actions = {

    getWeatherAC: (current: CurrentType, location: LocationType) => {
        return {
            type: 'WA/WR/GET_WEATHER',
            current,
            location

        } as const
    },

    getForecastForOneDay: (date: string, day: Day) => {
        return {
            type: 'WA/WR/GET_FORECAST',
            date,
            day

        } as const
    }
}

export const getWeather = (city: string | null, lat?: number | null, long?: number | null): ThunkType => {
    return async (dispatch) => {
        let response = await weatherAPI.getWeather(city, lat, long)
        let response2 = await weatherAPI.getForecastForOneDay(city, lat, long)
        dispatch(actions.getForecastForOneDay(response2[0].date, response2[0].day))
        dispatch(actions.getWeatherAC(response.current, response.location))

    }
}

export default weatherReducer

type StateType = typeof initialState
type ActionTypes = ReturnType<PropOfActionType<typeof actions>>
type PropOfActionType<T> = T extends { [key: string]: infer U } ? U : never
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>