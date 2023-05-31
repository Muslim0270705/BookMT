import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home__top">
                    <h2 className="home__top-title">
                        Современный учебник Математики
                    </h2>
                    <p className="home__top-desc">
                        Перед вами учебник по математике, начиная с основ, <br/>
                        включающий в себя много
                        тонкостей и фишек <br/> математических концепций.
                    </p>
                </div>


                <div className="home__info">
                    <ul className="home__info-menu">
                        <h2 className="home__info-menu-title" >Глава 1: Основы математики</h2>
                        <ul className="home__info-menu-gb">
                            <li className='home__info-menu-gb-tl'><Link to="">1.1 Арифметика</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/arithmeticone">Целочисленная арифметика</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/arithmetictwo">Десятичная арифметика</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/arithmeticthree">Десятичные дроби</Link></li>
                        </ul>
                        <ul className="home__info-menu-gb">
                            <li className='home__info-menu-gb-tl'><Link to="">1.2 Алгебра</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/AlgebraOne">Линейные уравнения</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/AlgebraTwo">Квадратные уравнения</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/AlgebraThree">Неравенства</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/AlgebraFour">Системы уравнений</Link></li>
                        </ul>
                    </ul>
                    <ul className="home__info-menu">
                        <h2 className="home__info-menu-title">Глава 2: Тригонометрия</h2>
                        <ul className="home__info-menu-gb">
                            <li className='home__info-menu-gb-tl'><Link to="">2.1 Тригонометрические функции</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/Trigonometric">Синус</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/TrigonometricTwo">Косинус</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/TrigonometricThree">Тангенс</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/TrigonometricFour">Котангенс</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/TrigonomeFive">Арксинус</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/TrigonometricSix">Арккосинус</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/TrigonometricSeven">Арктангенс</Link></li>
                        </ul>
                        <ul className="home__info-menu-gb">
                            <li className='home__info-menu-gb-tl'><Link to="">2.2 Тригонометрические тождества</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/TrignOne">Тождества для синуса и косинуса</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/TrignTwo">Тождества для тангенса и котангенса</Link></li>
                        </ul>
                    </ul>
                    <ul className="home__info-menu">
                        <h2 className="home__info-menu-title">Глава 3: Геометрия</h2>
                        <ul className="home__info-menu-gb">
                            <li className='home__info-menu-gb-tl'><Link to="/">3.1 Геометрические фигуры</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/GeometryOne">Треугольники</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/GeometryTwo">Квадраты</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/GeometryThree">Прямоугольники</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/GeometryFour">Круги</Link></li>
                        </ul>
                        <ul className="home__info-menu-gb">
                            <li className='home__info-menu-gb-tl'><Link to="">3.2 Площади и объемы</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="GeometryFive">Формулы для площади треугольника, квадрата, прямоугольника и круга</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="GeometrySix">Формулы для объема прямоугольного параллелепипеда и цилиндра</Link></li>
                        </ul>
                    </ul>
                    <ul className="home__info-menu">
                        <h2 className="home__info-menu-title">Глава 4: Вероятность и статистика</h2>
                        <ul className="home__info-menu-gb">
                            <li className='home__info-menu-gb-tl'><Link to="">4.1 Основы вероятности</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/ProbabilityOne">Эксперименты и исходы</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/ProbabilityTwo">Вероятность события</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/ProbabilityThree">Равновероятные исходы</Link></li>
                        </ul>
                        <ul className="home__info-menu-gb">
                            <li className='home__info-menu-gb-tl'><Link to="/">4.2 Статистика</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/ProbabilityFour">Сбор и анализ данных</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/ProbabilityFive">Диаграммы и графики</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/ProbabilitySix">Среднее значение, медиана и мода</Link></li>
                        </ul>
                    </ul>
                    <ul className="home__info-menu">
                        <h2 className="home__info-menu-title">Глава 5: Дифференциальное и интегральное исчисление</h2>
                        <ul className="home__info-menu-gb">
                            <li className='home__info-menu-gb-tl'><Link to="/">5.1 Производные и дифференцирование</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/DifferentialOne">Пределы и непрерывность</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/DifferentialTwo">Производная функции</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/DifferentialTree">Правила дифференцирования</Link></li>
                            <li className='home__info-menu-gb-ds'><Link to="/DifferentialFour">Производные элементарных функций</Link></li>
                        </ul>
                    </ul>
                </div>


            </div>
        </section>
    );
};

export default Home;