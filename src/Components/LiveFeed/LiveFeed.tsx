
import React, { FunctionComponent } from 'react';
import s from "./livafeed.module.scss"
import LiveProduct from "./LiveProduct/LiveProduct";
interface OwnProps {}

type Props = OwnProps;

const LiveFeed: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.livefeed}>
          <LiveProduct/>
          <LiveProduct/>
          <LiveProduct/>
          <LiveProduct/>
          <LiveProduct/>
          <LiveProduct/>
          <LiveProduct/>
          <LiveProduct/>
          <LiveProduct/>
          <LiveProduct/>
      </div>
  );
};

export default LiveFeed;
