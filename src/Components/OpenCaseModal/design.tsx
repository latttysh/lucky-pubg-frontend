import React from 'react';

import './Regular.css';

import type { IDesignPluginProps, IDesignPlugin } from 'react-roulette-pro';


export interface IRegularDesignProps {
    hideCenterDelimiter?: boolean;
    prizesWithText?: boolean;
}

export interface ITopChildrenProps {
    hideCenterDelimiter: IRegularDesignProps['hideCenterDelimiter'];
    type: IDesignPluginProps['type'];
}

const TopChildren = ({ type, hideCenterDelimiter }: ITopChildrenProps) =>
    hideCenterDelimiter !== true ? (
        <div
            data-testid="design-top"
            className={`roulette-pro-regular-design-top ${type}`}
        />
    ) : null;

const newDesign =
    ({ prizesWithText, hideCenterDelimiter }: IRegularDesignProps) =>
        ({ type }: IDesignPluginProps): IDesignPlugin => {
            const prizeItemWidth: number = 60;
            const prizeItemHeight: number = 60
            const prizeItemClassName = `roulette-pro-regular-design-prize-item-${type}`;

            return {
                topChildren: (
                    <TopChildren type={type} hideCenterDelimiter={hideCenterDelimiter} />
                ),
                bottomChildren: null,
                prizeItemWidth,
                prizeItemHeight,
                prizeItemRenderFunction: ({ image, text }) => {
                    const withText = prizesWithText === true && text !== undefined;

                    return (
                        <div
                            className="roulette-pro-regular-prize-item"
                            style={{ width: 60, height: 90 }}
                        >
                            <div
                                className={
                                    withText === true
                                        ? 'roulette-pro-regular-prize-item-wrapper'
                                        : 'roulette-pro-regular-prize-item-wrapper center'
                                }
                            >
                                <div className="roulette-pro-regular-image-wrapper">
                                    <img
                                        className="roulette-pro-regular-prize-item-image"
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

export default newDesign;