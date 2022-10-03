import React, {FunctionComponent} from 'react';
import s from "./guarantees.module.scss"
import circles from "../../Assets/img/Guarantees/circles.svg"
import rectangles from "../../Assets/img/Guarantees/rectangle.svg"
import rectangles_two from "../../Assets/img/Guarantees/rectangle_two.svg"
import polygon from "../../Assets/img/Guarantees/polygon.svg"

interface OwnProps {
}

type Props = OwnProps;

const Guarantees: FunctionComponent<Props> = (props) => {

    return (
        <div className={s.guarantees}>
            <span className={s.title}>ГАРАНТИИ</span>
            <div className={s.block}>
                <div className={s.security}>
                    <div className={s.item}>
                        <div className={s.text}>
                            <span className={s.text__title}>Безопасность</span>
                            <p className={s.text__content}>Все ваши персональные данные обрабатываются и хранятся с
                                учётом 152 ФЗ о персональных данных, а все платежи засекречены</p>
                        </div>
                        <img src={circles} alt="circles"/>
                    </div>
                </div>
                <div className={s.speed}>
                    <div className={s.item}>
                        <div className={s.text}>
                            <span className={s.text__title}>Скорость</span>
                            <p className={s.text__content}>Наши сервисы платёжных систем используют самые новые
                                технологии. Вы не успеете моргнуть, как совершённый вами платёж придёт вам на счёт</p>
                        </div>
                        <img src={rectangles} alt="circles"/>
                    </div>
                </div>

                <div className={s.quality}>
                    <div className={s.item}>
                        <div className={s.text}>
                            <span className={s.text__title}>Качество</span>
                            <p className={s.text__content}>За разработкой нашего сайта стоит команда с огромным опытом
                                за спиной. Продукт постоянно тестируется и улучшается, чтобы пользователь был
                                доволен</p>
                        </div>
                        <img src={rectangles_two} alt="circles"/>
                    </div>
                </div>

                <div className={s.reliability}>
                    <div className={s.item}>
                        <div className={s.text}>
                            <span className={s.text__title}>Надежность</span>
                            <p className={s.text__content}>За нас говорят отзывы наших постоянных покупателей. Вы можете
                                прочитать отзывы о нашей работа на соответствующей странице</p>
                        </div>
                        <img src={polygon} alt="circles"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guarantees;
