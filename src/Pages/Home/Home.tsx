import React, { FunctionComponent } from 'react';
import s from "./home.module.scss"
import Product from "../../Components/Product/Product";
interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.home}>
          <span className={s.title}>ЭСКЛЮЗИВНЫЕ КЕЙСЫ</span>
          <div className={s.products}>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
          </div>
          <span className={s.title}>ЭСКЛЮЗИВНЫЕ КЕЙСЫ</span>
          <div className={s.products}>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
          </div>
      </div>
  );
};

export default Home;
