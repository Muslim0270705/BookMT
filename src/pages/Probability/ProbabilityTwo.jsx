import React from 'react';

const ProbabilityTwo = () => {
    return (
        <div className='container'>
            <p className="desc">
                Вероятность события - это числовая мера, отражающая относительную частоту или возможность, с которой данное событие может произойти. Вероятность события обычно выражается числом от 0 до 1, где 0 означает невозможность события, а 1 - его достоверность.
<br/>
                Формально, для случайного эксперимента, множество всех возможных исходов называется пространством элементарных исходов (Ω), а событие - это подмножество Ω. Вероятность события обозначается как P(A), где A - событие.
<br/>
                Некоторые основные свойства вероятности:
<br/>
                Вероятность события всегда находится в диапазоне от 0 до 1: 0 ≤ P(A) ≤ 1.
<br/>
                Если событие невозможно, его вероятность равна 0: P(невозможное событие) = 0.
<br/>
                Если событие обязательно произойдет, его вероятность равна 1: P(уверенное событие) = 1.
<br/>
                Для двух несовместных событий A и B (т.е. они не могут произойти одновременно), вероятность их объединения равна сумме их вероятностей: P(A или B) = P(A) + P(B).
<br/>
                Для противоположного события A' (т.е. события, которое не происходит), вероятность A' равна 1 минус вероятность события A: P(A') = 1 - P(A).
<br/>
                Для последовательного выполнения независимых событий A и B, вероятность обоих событий произойдет равна произведению их вероятностей: P(A и B) = P(A) * P(B), если A и B независимы.
<br/>
                Определение вероятности событий может основываться на математических моделях, статистических данных, экспериментальных наблюдениях или других методах. Вероятность является важным концептом в теории вероятностей и находит применение во многих областях, включая статистику, физику, экономику, игровую теорию, машинное обучение и другие.
            </p>
        </div>
    );
};

export default ProbabilityTwo;