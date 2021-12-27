export interface getWeatherType {
    current: CurrentType,
    location: LocationType
}

export interface CurrentType {
    cloud: number,
    condition: {},
    humidity: number,
    pressure_mb: number,
    temp_c: number,
    uv: number,
    wind_kph: number
}

export interface LocationType {
    country: string,
    lat: number,
    localtime: string,
    localtime_epoch: number
    lon: number,
    name: string,
    region: string,
    tz_id: string
}

export interface ForecastType {
    forecast: {
        forecastday: Array<ForecastDayType>
    }
}

interface ForecastDayType {
    date: string,
    day: Day
}

export interface Day {
    avghumidity: number,
    avgtemp_c: number,
    condition: {
        text: string

    },
    daily_chance_of_rain: number,
    daily_chance_of_snow: number,
    maxtemp_c: number,
    maxwind_kph: number,
    mintemp_c: number,


}