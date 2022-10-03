import React, { FunctionComponent } from 'react';
import s from "./footer.module.scss"
import logo from "../../Assets/img/Header/logo.svg"
import {NavLink} from "react-router-dom";
import banner from "../../Assets/img/Footer/banner.png"
interface OwnProps {}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.wrapper}>
          <div className="container">
              <div className={s.footer}>
                  <div className={s.menu}>
                      <div className={s.logo}>
                          <img src={logo} alt=""/>
                          <span className={s.logo__text}>lucky-pubg</span>
                      </div>
                      <div className={s.items_block}>
                          <NavLink to={"/home"}>
                              <div className={s.item}>Главная</div>
                          </NavLink>
                          <NavLink to={"/feedbacks"}>
                              <div className={s.item}>Отзывы</div>
                          </NavLink>
                          <NavLink to={"/faq"}>
                              <div className={s.item}>FAQ</div>
                          </NavLink>
                          <NavLink to={"/guart"}>
                              <div className={s.item}>Гарантии</div>
                          </NavLink>
                          <NavLink to={"/support"}>
                              <div className={s.item}>Поддержка</div>
                          </NavLink>
                      </div>
                  </div>
                  <div className={s.stats}>
                      <div className={s.stat_block}>
                          <span className={s.stat__title}>Открыто кейсов</span>
                          <span className={s.stat__counter}>2162</span>
                      </div>
                      <div className={s.stat_block}>
                          <span className={s.stat__title}>Зарегистрировано</span>
                          <span className={s.stat__counter}>678</span>
                      </div>
                      <div className={s.stat_block}>
                          <span className={s.stat__title}>Онлайн пользователей</span>
                          <span className={s.stat__counter}>32</span>
                      </div>
                  </div>
                  <div className={s.banner}><img src={banner} alt="banner"/></div>
              </div>
          </div>
      </div>
  );
};

export default Footer;
