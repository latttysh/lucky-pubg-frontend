import React, { FunctionComponent } from 'react';
import s from "./liveproduct.module.scss"
import corner from "../../../Assets/img/LiveProduct/corners.svg"
import case_img from "../../../Assets/img/LiveProduct/case.png"
interface OwnProps {}

type Props = OwnProps;

const LiveProduct: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.product}>
          <div className={s.bg}>
          </div>
          <div className={s.corners}>
              <img src={corner} alt="corner"/>
          </div>
          <div className={s.content}>
              <img src={case_img} alt="case"/>
          </div>
          <div className={s.info}>
              <span className={s.nickname}>Nickname</span>
              <span className={s.time}>14:50</span>
          </div>
      </div>
  );
};

export default LiveProduct;
