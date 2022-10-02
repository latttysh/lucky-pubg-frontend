import React, { FunctionComponent } from 'react';
import s from "./product.module.scss"
import case_image from "../../Assets/img/Product/case.png"
interface OwnProps {}

type Props = OwnProps;

const Product: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.product}>
          <img src={case_image} alt="case"/>
          <span className={s.title}>Название кейса</span>
          <div className={s.price_block}>
              <span className={s.last_price}>3490 руб</span>
              <span className={s.price}>2000 руб</span>
          </div>
      </div>
  );
};

export default Product;
