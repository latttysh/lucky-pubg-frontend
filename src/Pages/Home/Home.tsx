import React, { FunctionComponent } from 'react';
import s from "./home.module.scss"
import Product from "../../Components/Product/Product";
import {useAppDispatch} from "../../Redux/store";
import {AsyncGetCases} from "../../Redux/Slice/AsyncActions";
import {useSelector} from "react-redux";
import OpenCaseModal from "../../Components/OpenCaseModal/OpenCaseModal";
interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedCase, setSelectedCase] =React.useState<{
        title: string,
        id: number,
        img_url: string,
        price: number,
        products: [],
        updatedAt: string
    }>({
        title: "",
        id: 0,
        img_url: "",
        price: 0,
        products: [],
        updatedAt: ""
    })
    // @ts-ignore
    const state = useSelector(state => state.state);
    React.useEffect(()=> {
        dispatch(AsyncGetCases())
    },[])

    const onProductClick = (item:any) => {
        setSelectedCase(item)
        setIsOpen(true)
    }

  return (
      <div className={s.home}>
          {isOpen && <OpenCaseModal data={selectedCase} close={()=>setIsOpen(false)}/>}
          <span className={s.title}>ЭСКЛЮЗИВНЫЕ КЕЙСЫ</span>
          <div className={s.products}>
              {state.Cases.status === "loaded" &&
                  state.Cases.data.map((item:any) =>{
                  return <Product key={item.id} price={item.price} title={item.title} openModal={()=> onProductClick(item)}/>
              })}
          </div>
          <span className={s.title}>ЭСКЛЮЗИВНЫЕ КЕЙСЫ</span>
          <div className={s.products}>
              {state.Cases.status === "loaded" &&
                  state.Cases.data.map((item:any) =>{
                      return <Product key={item.id}  price={item.price} title={item.title} openModal={()=> onProductClick(item)}/>
                  })}
          </div>
      </div>
  );
};

export default Home;
