import React, { useState } from 'react';
import { TabListWrapper } from './style.js';

const TabList = (props) => {
    const [startIndex, setStartIndex] = useState(0);

    const tabClickHandler = (index) => {
        props.onChange(index);
    };
    const closeClickHandler = (index, tabItem) => {
        props.onClose(index,tabItem);
    };
    const tabDragHandler = (startIndex) => {
        setStartIndex(startIndex);
    };
    const onDropHandler = (e) => {
        let endIndex = e.target.id - 1;
        props.onDrag(startIndex, endIndex);
    };

    const children = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
            index,
            isActive: index === props.value,
            tabClick: tabClickHandler,
            closeClick: closeClickHandler,
            tabDrag: tabDragHandler
        });
    });

    return (
        <TabListWrapper
            role="tablist"
            aria-label="scrollable tabs"
            onDrop={onDropHandler}
        >
            {children}
        </TabListWrapper>
    )
}

export default TabList;
