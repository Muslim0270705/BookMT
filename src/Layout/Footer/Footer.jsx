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
                        <p> <span>
                            Ваш email:
                        </span>
                              {JSON.parse(localStorage.getItem("user")) ? " " +JSON.parse(localStorage.getItem("user")).email : ""}
                        </p>
                    </div>


                </div>
            </div>
        </header>
    );
};

export default Footer;