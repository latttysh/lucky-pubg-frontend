import React, { FunctionComponent } from 'react';
import s from "./home.module.scss"
interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.home}></div>
  );
};

export default Home;
