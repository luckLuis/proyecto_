import React from "react";
import {Button, Carousel, Form, Input, InputNumber} from 'antd';
import img1 from '../imagenes/HomePageIMG/1.jpg';
import img2 from '../imagenes/HomePageIMG/1_1.png';
import img3 from '../imagenes/HomePageIMG/1_2.jpg';
import img4 from '../imagenes/HomePageIMG/1_3.jpg';
import iconNext from '../imagenes/HomePageIMG/bt1.png';
import iconVision from '../imagenes/HomePageIMG/2.jpg';
import iconlist1 from '../imagenes/HomePageIMG/2_1.png';
import iconlist2 from '../imagenes/HomePageIMG/2_2.png';
import iconlist3 from '../imagenes/HomePageIMG/2_3.png';
import iconlist4 from '../imagenes/HomePageIMG/2_4.png';
import iconHear from '../imagenes/HomePageIMG/3.jpg';
import iconlist5 from '../imagenes/HomePageIMG/3_1.png';
import iconlist6 from '../imagenes/HomePageIMG/3_2.png';
import iconlist7 from '../imagenes/HomePageIMG/3_3.png';
import iconForm from '../imagenes/HomePageIMG/4.jpg'
import "../estyles/HomePage.css";


import { NavLink } from 'react-router-dom'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: '${label} is required!',
    types: {
        // eslint-disable-next-line no-template-curly-in-string
        email: '${label} is not a valid email!',
        // eslint-disable-next-line no-template-curly-in-string
        number: '${label} is not a valid number!',
    },
    number: {
        // eslint-disable-next-line no-template-curly-in-string
        range: '${label} must be between ${min} and ${max}',
    },
};


const onFinish = (values: any) => {
        console.log(values);
        };

// eslint-disable-next-line no-unused-vars
const HomePage = () => {
    return <div>
        <Carousel autoplay>
        <div>
            <img src={img1} className="App-logo, walpapper" alt="fond1" />
        </div>
        <div>
            <img src={img2} className="App-logo, walpapper" alt="fond2" />
        </div>
        <div>
            <img src={img3} className="App-logo, walpapper" alt="fond3" />
        </div>
        <div>
            <img src={img4} className="App-logo, walpapper" alt="fond4" />
        </div>
    </Carousel>,
        <div className="Container">
            <h1 id="Inicio">Bienvenido a los tests visuales y auditivos de HearVision</h1>
            <p>Estas pruebas miden el estado de la visi??n y audici??n del usuario, con el fin de detectar y prevenir a tiempo alguna complicacion en su calidad de vida.</p>
            <Button className="ant-btn-1"><NavLink to="/test"> Comenzar Test </NavLink><img src={iconNext} className="App-logo, iconTam" alt="iconBtt" /></Button>

        </div>
        <div align = "center" className="introductionBody">
        <h2 id="Servicios">Nosotros buscamos ayudar a la gente a sentirse mejor a trav??s de un diagn??stico online</h2>
        <p>Durante este periodo de confinamiento se puso en evidencia nuestro sistema de salud. Lo cual gener?? un descuido a ciertos sentidos vitales, como el o??do y nuestra agudeza visual.</p>
        </div>
        <div className="row gy-5">

            <div class="row g-5">
                <div align = "center" className="col">
                    <img src={iconVision} className="App-logo, boxImg" alt="iconVision" />
                </div>
                <div className="col">
                    <h2 align="center">Que es un Test Visual?</h2>
                    <p>El test visual es una prueba optom??trica sencilla y nada invasiva destinada a medir la agudeza visual. Nos permite hacer una evaluaci??n de la capacidad del sistema visual.</p>
                    <ul className="menuList">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="#"> <img src={iconlist1} className="App-logo, iconlistTam" alt="iconlist1" /> Agudeza Visual </a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="#"> <img src={iconlist2} className="App-logo, iconlistTam" alt="iconlist2" /> Bicromatico </a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="#"> <img src={iconlist3} className="App-logo, iconlistTam" alt="iconlist3" /> Circulo Horario </a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="#"> <img src={iconlist4} className="App-logo, iconlistTam" alt="iconlist4" /> Daltonismo </a></li>

                    </ul>
                </div>
            </div>

            <div className="row g-5">
                <div className="col">
                    <h2 align="center">??Qu?? es un test Auditivo?</h2>
                    <p>Las pruebas de audici??n miden que tan bien usted oye. Cuando una persona tiene audici??n normal, las ondas sonoras viajan por el o??do y hacen que el t??mpano vibre. Esta vibraci??n env??a las ondas sonoras hacia el interior del o??do para que las c??lulas nerviosas env??en la informaci??n del sonido al cerebro.</p>
                    <ul className="menuList">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="#"> <img src={iconlist5} className="App-logo, iconlistTam"
                                              alt="iconlist5"/> Seleccion de Objetos </a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="#"> <img src={iconlist6} className="App-logo, iconlistTam"
                                              alt="iconlist6"/> Ruido Ambiental </a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="#"> <img src={iconlist7} className="App-logo, iconlistTam"
                                              alt="iconlist7"/> Frecuencia </a></li>

                    </ul>
                </div>
                <div align="center" className="col">
                    <img src={iconHear} className="App-logo, boxImg" alt="iconHear"/>
                </div>
            </div>

        </div>;

        <div className="sectionAbout">
            <h2  id="Acerca_Nosotros">Acerca de Nosotros</h2>
            <h3>"Brindamos un servicios de exelencia y calidad</h3>

            <p>Somos una red independiente que buscamos brindar atenci??n a todo el p??blico, brindamos servicios integrales de salud a traves de nuestros test.</p>
            <p>Nuestro objetivo es elevar la calidad de vida a trav??s del cuidado y  prevenci??n de la salud visual y auditiva.</p>
            <div align="center" className="row">
            <div className="col">
                <div className="sectionBox">
                <h3>Misi??n</h3>
                    <l>Ocuparnos del cuidado de la salud visual y auditiva de las personas, somos un equipo con vocacion y servicio.</l>
                </div>
                </div>
            <div className="col">
                <div className="sectionBox">
                    <h3>Visi??n</h3>
                    <l>Ser una de las mejores plataformas para la salud visual y auditiva.</l>
                </div>
            </div>
            </div>

        </div>
        <div className="row sectionForm">
            <div align="center" className="col-5">
                <h2 id="Contactos">??C??mo podemos ayudarte?</h2>
                <h3>No lo dudes m??s, contacta con nosotros.</h3>
                <img src={iconForm} className="App-logo, imgForm" alt="fondForm" />
            </div>
            <div className="col-7 formS">
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'name']} label="Tu nombre*" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Correo Electronico*" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="Age*" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="Asunto*">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Mensaje*">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Enviar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    </div>;



};

export default HomePage;