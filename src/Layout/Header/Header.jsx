import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {IoIosClose} from "react-icons/io";
import {BsChatDots} from "react-icons/bs";



const Header = () => {
    const [active,setActive] = useState(false)
    const navigate = useNavigate()

    return (
        <header className="header">
            <div className="container">
                <div className="header__nav">
                    <div>
                        <Link to="/" style={{color:"white"}}>
                            <h1 className="header__title">
                                MT.Learn
                            </h1>

                        </Link>
                        <a href="https://www.youtube.com/watch?v=he7sxL3NDEc&list=PLsq4h667Dnr2f1rDyAyukNJFkVMuHZ1Lq">
                            Видео о высшей матиматике
                        </a>
                    </div>
                    <Link className="header__link" to={"/Mathematics"}>
                        Математика
                    </Link>

                    <div>

                        <h2 className="header__title">
                            Видео уроки <br/>
                        </h2>
                        <a href="https://urokimatematiki.ru">https://urokimatematiki.ru</a>
                    </div>
                    {
                        JSON.parse(localStorage.getItem("user")) ?
                            <p onClick={() => {
                                localStorage.removeItem("user")
                                navigate('/')
                            }}>
                                Выйти
                            </p>:
                        <Link to={"/reg"}>
                            Войти/Регистрация
                        </Link>
                    }


                </div>
            </div>
            <BsChatDots onClick={() => setActive(true)} className="chat"/>
            {
                active ?

                    <div className="popup">
                        <div className={"container"}>
                            <div className="form-container">
                                <div style={{textAlign: "right"}}>
                                    <IoIosClose onClick={() => setActive(false)}/>
                                </div>

                                <h2>Напиши нам</h2>
                                <form action="https://formsubmit.co/magezamuslim40@gmail.com" method="POST">
                                    <input type="hidden" name="_captcha" value="false"/>
                                    <input type="hidden" name="_next" value="http://localhost:3000/"/>
                                    <div className="form-group">
                                        <label htmlFor="name">Имя:</label>
                                        <input type="text" id="name" name="name" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Сообщение:</label>
                                        <textarea id="message" name="message" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit ">Отправить</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> : ""
            }

        </header>
    );
};

export default Header;