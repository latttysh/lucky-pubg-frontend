import React, { FunctionComponent } from 'react';
import s from "./opencasemodal.module.scss"
import type {IDesignPluginProps, IDesignPlugin} from 'react-roulette-pro';
import type {IRegularDesignProps, ITopChildrenProps} from "./design";
// import "./Regular.css"
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';
interface OwnProps {
    close: ()=> void
    data: {
        title: string,
        id: number,
        img_url: string,
        price: number,
        products: [],
        updatedAt: string
    }
}

type Props = OwnProps;

const OpenCaseModal: FunctionComponent<Props> = (props) => {
    console.log(props.data)


    const regularDesign =
        ({prizesWithText, hideCenterDelimiter}: IRegularDesignProps) =>
            ({type}: IDesignPluginProps): IDesignPlugin => {

                const prizeItemWidth: number = 65;
                const prizeItemHeightWithoutText = 60
                const prizeItemHeight: number = 60
                const prizeItemClassName = `roulette-pro-regular-design-prize-item-${type}`;

                return {
                    bottomChildren: null,
                    prizeItemWidth,
                    prizeItemHeight,
                    prizeItemRenderFunction: ({image, text}) => {
                        const withText = prizesWithText === true && text !== undefined;

                        return (
                            <div
                                className="roulette-item"
                                style={{width: 65, height: 60}}
                            >
                                <div
                                    className={
                                        'roulette-item-wrapper'
                                    }
                                >
                                    <div className="roulette-image-wrapper">
                                        <img
                                            className="roulette-item-image"
                                            src={image}
                                            alt={withText === true ? `prize item ${text}` : 'prize item'}
                                        />
                                    </div>
                                    {withText === true && (
                                        <p className="roulette-pro-regular-prize-item-text">{text}</p>
                                    )}
                                </div>
                            </div>
                        );
                    },
                    classes: {
                        prizeItem: prizeItemClassName,
                    },
                };
            };

    const prizes = [
        {
            image: 'https://i.ibb.co/6Z6Xm9d/good-1.png',
        },
        {
            image: 'https://i.ibb.co/T1M05LR/good-2.png',
        },
        {
            image: 'https://i.ibb.co/Qbm8cNL/good-3.png',
        },
        {
            image: 'https://i.ibb.co/5Tpfs6W/good-4.png',
        },
        {
            image: 'https://i.ibb.co/64k8D1c/good-5.png',
        },
    ]

    const reproductionArray = (array = [], length = 0) => [
        ...Array(length)
            .fill('_')
            .map(() => array[Math.floor(Math.random() * array.length)]),
    ];

    const [prizeList, setPrizeList] = React.useState([]);
    const [start, setStart] = React.useState(false);
    const [spinning, setSpinning] = React.useState(false);
    const [winColor,setWinColor] =React.useState("")
    const [isStart, setIsStart] = React.useState(false);
    const [prizeIndex, setPrizeIndex] = React.useState(0);


    React.useEffect(() => {
        const reproducedArray = [
            ...prizes,
            // @ts-ignore
            ...reproductionArray(prizes, prizes.length * 3),
            ...prizes,
            // @ts-ignore
            ...reproductionArray(prizes, prizes.length),
        ];

        const list = [...reproducedArray].map((item, i) => ({
            ...item,
            id: i,
        }));

        // @ts-ignore
        setPrizeList(list);
    }, []);

    React.useEffect(() => {
        if (!prizeIndex || start) {
            return;
        }

        setStart(true);
    }, [prizeIndex, start]);
    const getRandomIntInRange = (min = 0, max = 0) => {
        const minNumber = Math.ceil(min);
        const maxNumber = Math.floor(max);

        return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    };
    const API = {
        getPrizeIndex: async () => {
            const randomPrizeIndex = getRandomIntInRange(0, prizes.length - 1);
            const randomPrizeIndexOffset = prizes.length * 4;

            return randomPrizeIndex + randomPrizeIndexOffset;
        },
    };

    React.useEffect(() => {
        if (!spinning || !prizeList.length) {
            return;
        }

        const prepare = async () => {
            const newPrizeIndex = await API.getPrizeIndex();
            setPrizeIndex(newPrizeIndex);
            setStart(false);
            const { id } = prizeList[newPrizeIndex];
            setStart(false);
        };

        prepare();
    }, [spinning, prizeList]);

    const handleStart = () => {
        setSpinning(true);
    };

    const handlePrizeDefined = () => {
        console.log(123)
        setSpinning(false);
    };

  return (
      <div className={s.wrapper} onClick={e => (e.currentTarget === e.target) && props.close()}>
        <div className={s.modal}>
          <div className={s.title}>{props.data.title}</div>
            <>
                <RoulettePro
                    prizes={prizeList}
                    prizeIndex={prizeIndex}
                    start={start}
                    onPrizeDefined={handlePrizeDefined}
                    spinningTime={5}
                    // designPlugin={regularDesign({prizesWithText: false, hideCenterDelimiter: true})}
                    options={{
                        withoutAnimation: true,
                        stopInCenter: true
                    }}
                />
                <button onClick={()=>handleStart()}>click</button>
            </>
        </div>
      </div>
  );
};

export default OpenCaseModal;
