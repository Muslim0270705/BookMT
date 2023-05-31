import React from 'react';

const TrigonometricSeven = () => {
    return (
        <div className="container">
            <p className="desc">
                Арктангенс (atan) является обратной функцией для тангенса. Он позволяет найти угол, значение тангенса которого равно данному числу.
<br/>
                Математически записывается как atan(x) = θ, где x - значение тангенса, а θ - угол в радианах.
<br/>
                Функция арктангенса определена на всей числовой прямой и возвращает угол в радианах в пределах (-π/2, π/2). Это означает, что результат atan(x) будет находиться в этом интервале.
<br/>
                Арктангенс также может быть выражен через обратную функцию тангенса:
<br/>
                atan(x) = tan^(-1)(x)
<br/>
                В программировании, обычно используется математическая функция atan() или tan^(-1) для вычисления арктангенса. Например, чтобы вычислить арктангенс числа 1 в языке программирования, можно использовать следующий код:
<br/>
                double result = Math.atan(1);
<br/>
                Здесь result будет содержать результат арктангенса 1, который будет примерно равен 0.7854 радиан (округленное значение), что соответствует углу около 45 градусов.
<br/>
                Аналогично другим обратным тригонометрическим функциям, значение арктангенса может быть выражено как радианы или градусы, в зависимости от требований задачи.
            </p>
        </div>
    );
};

export default TrigonometricSeven;