import React from "react";
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import s from '../content/container.module.css'
import { Forecast } from "../forecast/forecast";
import logo from '../../images/logo_white_cropped.png'


export const Container = () => {
    return (
        <Layout className={s.container_page}>
            <Header className={s.header}>
                <img src={logo} alt="" className={s.logo} />
                </Header>
            <Content>
                <Forecast />
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}