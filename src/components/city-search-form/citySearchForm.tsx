import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Field, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../redux/weatherReducer';
import { getCurrent } from '../../selectors/selectors';
import s from './citySearchForm.module.css';

export const CitySearchForm = () => {

  const current = useSelector(getCurrent)

  const dispatch = useDispatch();

  const Submit = (values: IValues) => {
    dispatch(getWeather(values.city))

  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ city: 'Kiev' }}
        onSubmit={Submit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={s.weather_form}>
            <Field type="text" name="city" />
            <Button type="primary" icon={<SearchOutlined />} htmlType='submit' className={current.temp_c === null ? `${s.middle_temp} ${s.btn_middle}` :
              current.temp_c <= 0 ? `${s.low_temp} ${s.btn}` :
                current.temp_c > 0 && current.temp_c < 30 ? `${s.middle_temp} ${s.btn_middle}` : `${s.high_temp} ${s.btn}`} size='large' shape='round'>
              Get Weather
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )

}


interface IValues {
  city: string
}



