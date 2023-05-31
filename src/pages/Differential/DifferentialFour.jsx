import React from 'react';

const DifferentialFour = () => {
    return (
        <div className="container">
            <p className="desc">
                Производные элементарных функций - это производные базовых функций, которые могут быть выражены через простые алгебраические операции и функции степени. Вот несколько примеров производных элементарных функций:
<br/>
                Константа: Если f(x) = c, где c - константа, то производная такой функции равна нулю:
                <br/>f'(x) = 0

                <br/>Линейная функция: Если f(x) = ax + b, где a и b - константы, то производная такой функции равна коэффициенту при x (т.е. производной линейной функции является сам коэффициент a):
                <br/>f'(x) = a
<br/>
                Степенная функция: Если f(x) = x^n, где n - константа, то производная степенной функции вычисляется по формуле:
                <br/>f'(x) = n * x^(n-1)
<br/>
                Экспоненциальная функция: Если f(x) = a^x, где a - константа, то производная экспоненциальной функции равна произведению значения функции на натуральный логарифм основания a:
                <br/>f'(x) = a^x * ln(a)

                Логарифмическая функция: Если f(x) = log_a(x), где a - константа и является основанием логарифма, то производная логарифмической функции вычисляется как отношение натурального логарифма аргумента к натуральному логарифму основания a:
                <br/>f'(x) = (1 / (x * ln(a)))
<br/>
                Тригонометрические функции: Производные тригонометрических функций определяются следующим образом:
<br/>
                Производная синуса: (sin(x))' = cos(x)
                <br/>Производная косинуса: (cos(x))' = -sin(x)
                <br/>Производная тангенса: (tan(x))' = sec^2(x)
                <br/>Производная котангенса: (cot(x))' = -csc^2(x)
                <br/>Это лишь несколько примеров производных элементарных функций. Существуют и другие элементарные функции, и их производные могут быть выражены через комбинации базовых правил дифференцирования.
            </p>
        </div>
    );
};

export default DifferentialFour;