import React, { FunctionComponent } from 'react';
import s from "./feedbackblock.module.scss"

import star_fill from "../../Assets/img/FeedbackBlock/star-fill.svg"
import star_nofill from "../../Assets/img/FeedbackBlock/star-nofill.svg"
interface OwnProps {}

type Props = OwnProps;

const FeedbackBlock: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.feedback}>
          <div className={s.info}>
              <span className={s.nickname}>АртурТурбо</span>
              <span className={s.time}>27/09/2022  14:20</span>
          </div>
          <div className={s.text}>Сайт хороший, всё работает, долгое ожидание... Но большое спасибо команде поддержки, которые помогли мне разобраться с покупкой, ТОЛЬКО ПОЖАЛУЙСТА отвечайте быстрее</div>
          <div className={s.stars}>
              <img src={star_nofill} alt="star"/>
              <img src={star_nofill} alt="star"/>
              <img src={star_nofill} alt="star"/>
              <img src={star_nofill} alt="star"/>
              <img src={star_nofill} alt="star"/>
          </div>
      </div>
  );
};

export default FeedbackBlock;
