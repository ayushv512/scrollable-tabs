import React, { useState } from 'react';
import { BtnsWrapper, TabButton, Closebutton } from './style';

const Tab = (props) => {
    const [closeButton, setCloseButton] = useState(true);

    const tabMouseEnterHandler = () => {
        setCloseButton(false)
    };
    const tabMouseLeaveHandler = () => {
        setCloseButton(true)
    };
    const onTabDragStart = (event, index) => {
        props.tabDrag(index);
    }
    const onTabDragOver = (event) => {
        event.preventDefault();
    }
    const closeBtnClass = closeButton ? 'btn-hide' : '';

    return (
        <BtnsWrapper
            draggable="true"
            onMouseEnter={tabMouseEnterHandler}
            onMouseLeave={tabMouseLeaveHandler}
            onDragStart={(e) => onTabDragStart(e, props.index)}
            onDragOver={onTabDragOver}
        >
            <Closebutton
                role="closebtn"
                id={'close-btn-' + props.index}
                onClick={() => props.closeClick(props.index, props.tabItem)}
                title={`Delete Tab ${props.index + 1}`}
                className={closeBtnClass}
            >
                <i className="fa fa-times" aria-hidden="true"></i>
            </Closebutton>
            <TabButton
                role="tab"
                id={props.id}
                aria-controls={props['aria-controls']}
                className={props.isActive ? 'tab-active' : ''}
                onClick={() => props.tabClick(props.index)}
            >
                {props.tabItem.label}
            </TabButton>
        </BtnsWrapper>
    )
}

export default Tab;
