import React, { useState } from 'react';

import { TabsContainerWrapper } from './style';
import TabList from '../tablist/tablist.component';
import Tab from '../tab/tab.component';
import TabPanel from '../tabpanel/tabpanel.component';
import { tabsData } from '../../config/config';
import { useAlert } from "react-alert";
import {
    isMobile
} from "react-device-detect";

const TabsContainer = () => {
    const [value, setValue] = useState(0);
    const [tabInfo, setTabInfo] = useState(tabsData);
    const alert = useAlert();

    const tabObj = (index) => {
        return {
            id: index,
            index: index,
            label: `Tab ${index + 1}`,
            content: `Tab - ${index + 1} content`
        }
    }
    const a11yProps = (index) => {
        return {
            id: `${index}`,
            'aria-controls': `scrollable-tabpanel-${index}`,
        };
    };

    const tab = tabInfo.map((item, index) => <Tab key={a11yProps(index)['id']} value={value} tabItem={item} {...a11yProps(index + 1)} />);
    const tabPanel = tabInfo.map((item, index) => <TabPanel key={`scrollable-tabpanel-${index}`} value={value} index={index}>{item.content}</TabPanel>);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleClose = (index, tabItem) => {
        const tabs = [...tabInfo];
        if (tabs.length === 1) {
            alert.show(`One tab must remain!`);
        } else {
            let filteredTabs = tabs.filter((item) => item.id !== tabItem.id);
            setTabInfo(filteredTabs);
            setValue((index === tabs.length - 1) ? index - 1 : index);
            alert.success(`${tabItem.label} deleted!`);
        }
    };


    const handleDrag = (startIndex, endIndex) => {
        const tabs = [...tabInfo];
        tabs.splice(endIndex, 0, ...tabs.splice(startIndex, 1));
        setTabInfo(tabs);
    };

    const leftArrowHandler = () => {
        setValue(value - 1);
        document.getElementById(value).scrollIntoView();
    };

    const rightArrowHandler = () => {
        setValue(value + 1);
        document.getElementById(value + 2).scrollIntoView();
    };

    const addTabHandler = () => {
        const tabs = [...tabInfo];
        const item = Math.max.apply(Math, tabs.map(item => item.id)) + 1;
        tabs.splice(tabInfo.length, 0, tabObj(item))
        setTabInfo(tabs);
        setValue(tabInfo.length);
        setTimeout(() => document.getElementById(`${tabInfo.length + 1}`).scrollIntoView(), 500)
    };

    const chevronLeftClass = ["btn"];
    const chevronRightClass = ["btn"];
    const IsMobileCheck = isMobile ? tabInfo.length < 4 : tabInfo.length < 5;
    if (IsMobileCheck || value === 0) chevronLeftClass.push("btn-hide");
    if (IsMobileCheck || value === tabInfo.length - 1) chevronRightClass.push("btn-hide");
    console.log("tabInfo:", tabInfo);

    return (
        <TabsContainerWrapper>
            <div className="tabs-header">
                <button
                    title="Move left"
                    className={chevronLeftClass.join(" ")}
                    onClick={leftArrowHandler}
                >
                    <i className="fa fa-chevron-left"></i>
                </button>
                <TabList
                    value={value}
                    onChange={handleChange}
                    onClose={handleClose}
                    onDrag={handleDrag}
                >
                    {tab}
                </TabList>
                <button
                    title="Move right"
                    className={chevronRightClass.join(" ")}
                    onClick={rightArrowHandler}
                >
                    <i className="fa fa-chevron-right"></i>
                </button>
                <button
                    title="Add tab"
                    className="btn"
                    onClick={addTabHandler}
                    disabled={tabInfo.length === 10}
                >
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            {tabPanel}
        </TabsContainerWrapper>
    )
}

export default TabsContainer;
