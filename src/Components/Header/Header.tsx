import React, {FunctionComponent} from 'react';
import s from "./header.module.scss"
import logo from "../../Assets/img/Header/logo.svg"
import user from "../../Assets/img/Header/user.svg"
import exit from "../../Assets/img/Header/exit.svg"
import {NavLink} from "react-router-dom";
import TelegramLoginButton from 'react-telegram-login';
import {useAppDispatch} from "../../Redux/store";
import {AsyncAuth} from "../../Redux/Slice/AsyncActions";

interface OwnProps {
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch()
    // const {TelegramLoginButton} = require("react-telegram-login")
    const handleTelegramResponse = (response: any) => {
        console.log(response);
        dispatch(AsyncAuth(response)).then(res => {
            // @ts-ignore
            if (!res.error) {
                console.log(res)
                // @ts-ignore
                window.localStorage.setItem("token", res.payload.data.token)
                window.location.reload()
            }
        })
    };

    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.menu}>
                    <div className={s.logo}>
                        <img src={logo} alt="logo"/>
                        <span className={s.logo__text}>lucky-pubg</span>
                    </div>
                    <div className={s.items_block}>
                        <NavLink to={"/"}>
                            <div className={s.item}>Главная</div>
                        </NavLink>
                        <NavLink to={"/feedbacks"}>
                            <div className={s.item}>Отзывы</div>
                        </NavLink>
                        <NavLink to={"/faq"}>
                            <div className={s.item}>FAQ</div>
                        </NavLink>
                        <NavLink to={"/guarantees"}>
                            <div className={s.item}>Гарантии</div>
                        </NavLink>
                        <NavLink to={"/support"}>
                            <div className={s.item}>Поддержка</div>
                        </NavLink>
                    </div>
                    {localStorage.getItem("token") ?
                        <div className={s.user}>
                            <div className={s.nickname}>nickname</div>
                            <img src={user} alt="user"/>
                            <img src={exit} alt="exit"/>
                        </div>
                        :
                        <>
                            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName={"funpayzalupabot"}/>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
