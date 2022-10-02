import React, {FunctionComponent} from 'react';
import s from "./header.module.scss"
import logo from "../../Assets/img/Header/logo.svg"
import user from "../../Assets/img/Header/user.svg"
import exit from "../../Assets/img/Header/exit.svg"
import {NavLink} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.menu}>
                    <div className={s.logo}>
                        <img src={logo} alt="logo"/>
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
                    <div className={s.user}>
                        <div className={s.nickname}>nickname</div>
                        <img src={user} alt="user"/>
                        <img src={exit} alt="exit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
