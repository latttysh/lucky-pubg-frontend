import React, { FunctionComponent } from 'react';
import s from "./mobilemenu.module.scss"
import feedback from "../../Assets/img/MobileMenu/feedbakcs.svg"
import support from "../../Assets/img/MobileMenu/support.svg"
import person from "../../Assets/img/MobileMenu/profile.svg"
import guar from "../../Assets/img/MobileMenu/guar.svg"
import headph from "../../Assets/img/MobileMenu/headph.svg"
interface OwnProps {}

type Props = OwnProps;

const MobileMenu: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.wrapper}>
          <div className={s.item}>
              <img src={feedback} alt="feedback"/>
          </div>
          <div className={s.item}>
              <img src={support} alt="feedback"/>
          </div>
          <div className={s.item}>
              <img src={person} alt="feedback"/>
          </div>
          <div className={s.item}>
              <img src={guar} alt="feedback"/>
          </div>
          <div className={s.item}>
              <img src={headph} alt="feedback"/>
          </div>
      </div>
  );
};

export default MobileMenu;
