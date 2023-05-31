import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
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
                            Имя Фамилия

                        </h2>

                    </div>


                </div>
            </div>
        </header>
    );
};

export default Footer;