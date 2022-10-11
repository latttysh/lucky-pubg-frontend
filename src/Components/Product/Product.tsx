import React, { FunctionComponent } from 'react';
import s from "./product.module.scss"
import case_image from "../../Assets/img/Product/case.png"
interface OwnProps {
    title: string,
    price: number,
    openModal: ()=> void
}

type Props = OwnProps;

const Product: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.product} onClick={props.openModal}>
          <img src={case_image} alt="case"/>
          <span className={s.title}>{props.title}</span>
          <div className={s.price_block}>
              <span className={s.last_price}>3490 руб</span>
              <span className={s.price}>{props.price} руб</span>
          </div>
      </div>
  );
};

export default Product;
