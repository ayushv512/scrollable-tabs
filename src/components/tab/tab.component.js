import React, { useState } from 'react';
import { BtnsWrapper, TabButton, Closebutton } from './style';
import Draggable from 'react-draggable';

const Tab = (props) => {
    const [closeButton, setCloseButton] = useState(true);

    const tabMouseEnterHandler = () => {
        setCloseButton(false)
    };
    const tabMouseLeaveHandler = () => {
        setCloseButton(true)
    };

    return (
        <Draggable>
            <BtnsWrapper
                onTouchStart={tabMouseEnterHandler}
                onMouseEnter={tabMouseEnterHandler}
                onMouseLeave={tabMouseLeaveHandler}
            >
                <Closebutton
                    role="closebtn"
                    id={'close-btn-' + props.index}
                    onTouchStart={() => props.closeClick(props.index)}
                    onClick={() => props.closeClick(props.index)}
                    title={`Delete Tab ${props.index + 1}`}
                    hidden={closeButton}
                >
                    <i className="fa fa-times" aria-hidden="true"></i>
                </Closebutton>
                <TabButton
                    role="tab"
                    id={props.id}
                    aria-controls={props['aria-controls']}
                    className={props.isActive ? 'tab-active' : ''}
                    onTouchStart={() => props.tabClick(props.index)}
                    onClick={() => props.tabClick(props.index)}
                >
                    {props.label}
                </TabButton>
            </BtnsWrapper>
        </Draggable>
    )
}

export default Tab;
