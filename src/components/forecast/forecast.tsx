/* eslint-disable no-nested-ternary */
import { Divider } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../redux/weatherReducer';
import { getCurrent, getLocation, getOneDayForecast } from '../../selectors/selectors';
import CitySearchForm from '../city-search-form/citySearchForm';
import s from './forecast.module.css';

const Forecast = () => {
  const location = useSelector(getLocation);
  const current = useSelector(getCurrent);
  const oneDayForecast = useSelector(getOneDayForecast);
  const dispatch = useDispatch();

  useEffect(() => {
    const geo = navigator.geolocation;

    if (geo) {
      geo.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        dispatch(getWeather(null, lat, long));
      });
      dispatch(getWeather('Kiev', null, null));
    }
  }, []);

  return (
    <div>
      <Layout className={s.container_page}>
        <Content>
          <h1 className={s.title}>Weather in your city</h1>
          <Divider />
        </Content>
      </Layout>

      <Content className={current.temp_c === null ? `${s}  ${s.middle_temp}`
        : current.temp_c <= 0 ? `${s.search_city}  ${s.low_temp}`
          : current.temp_c > 0 && current.temp_c < 30 ? `${s.search_city}  ${s.middle_temp}` : `${s.search_city}  ${s.high_temp}`}
      >
        <CitySearchForm />
      </Content>

      <Layout className={s.container_page}>
        <Divider className={s.divider} />
        <div><h2>Current Weather: </h2></div>
        <Content>
          <div>
            {`${location.tz_id},`}
            {`${location.region},`}
            {`${location.country},`}
            сlouds:
            {`${current.cloud} %, `}
            {location.localtime}
          </div>
          <div>
            {`${current.temp_c}C,`}
            wind:
            {`${current.wind_kph}kph`}
            pressure:
            {`${current.pressure_mb}hpa`}
          </div>
          <div>
            Geo coords:
            {`${location.lat}, ${location.lon}`}
          </div>
        </Content>
        <Divider className={s.divider} />
        <div><h2>One Day Forecast: </h2></div>
        <Content>
          <div>
            {`${location.tz_id} ,`}
            {`${location.region} ,`}
            {`${location.country} ,`}
            {`${oneDayForecast.day.condition.text}`}
          </div>
          <div>
            min_temperature:
            {`${oneDayForecast.day.mintemp_c} C`}
            max_temperature:
            {`${oneDayForecast.day.maxtemp_c} C`}
            averege_temperature:
            {`${oneDayForecast.day.avgtemp_c} C`}
          </div>
          <div>
            Geo coords:
            {`${location.lat} , ${location.lon}`}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Forecast;
