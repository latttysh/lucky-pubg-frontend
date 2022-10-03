import React, { FunctionComponent } from 'react';
import s from "./feedbacks.module.scss"
import FeedbackBlock from "../../Components/FeedbackBlock/FeedbackBlock";
interface OwnProps {}

type Props = OwnProps;

const Feedbacks: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.feedback}>
          <span className={s.title}>Отзывы</span>
          <button className={s.action}>Оставить отзыв</button>
          <div className={s.block}>
              <FeedbackBlock/>
              <FeedbackBlock/>
              <FeedbackBlock/>
              <FeedbackBlock/>
              <FeedbackBlock/>
              <FeedbackBlock/>

          </div>
      </div>
  );
};

export default Feedbacks;
