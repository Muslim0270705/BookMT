import React from 'react';

const GeometryFive = () => {
    return (
        <div className="container">
            <p className="desc">
                Формулы для площади некоторых основных геометрических фигур:
<br/>
                Площадь треугольника:
                <br/>Площадь треугольника можно вычислить, используя различные формулы, в зависимости от известных параметров треугольника.
<br/>
                Если известны длины двух сторон треугольника a и b, а также между ними заключенный угол C, то площадь можно вычислить по формуле: A = 0.5 * a * b * sin(C).
                <br/>Если известны длины трех сторон треугольника a, b и c, то площадь можно вычислить по формуле Герона: A = √(s * (s - a) * (s - b) * (s - c)), где s = (a + b + c) / 2 - полупериметр треугольника.
                <br/>Площадь квадрата:
                <br/>Площадь квадрата можно вычислить, зная длину его стороны a: A = a^2.
<br/>
                Площадь прямоугольника:
                <br/>Площадь прямоугольника можно вычислить, зная длины его двух сторон a и b: A = a * b.
<br/>
                Площадь круга:
                <br/>Площадь круга можно вычислить, зная радиус r или диаметр d:
<br/>
                Если известен радиус круга r: A = π * r^2.
                <br/>Если известен диаметр круга d: A = π * (d/2)^2 = (π * d^2) / 4.
                <br/>В этих формулах π (пи) представляет собой математическую константу, приближенно равную 3.14159.

                <br/>Эти формулы позволяют вычислять площади данных геометрических фигур, и они широко используются в математике, геометрии, физике, инженерии и других научных областях.
            </p>
        </div>
    );
};

export default GeometryFive;