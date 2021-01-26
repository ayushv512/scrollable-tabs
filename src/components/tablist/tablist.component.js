import React from 'react';
import { TabListWrapper } from './style.js';

const TabList = (props) => {
    const tabClickHandler = (index) => {
        props.onChange(index);
    };

    const closeClickHandler = (index) => {
        props.onClose(index);
    };

    const children = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
            index,
            isActive: index === props.value,
            tabClick: tabClickHandler,
            closeClick: closeClickHandler
        });
    });

    return (
        <TabListWrapper
            role="tablist"
            aria-label="scrollable tabs"
        >
            {children}
        </TabListWrapper>
    )
}

export default TabList;
