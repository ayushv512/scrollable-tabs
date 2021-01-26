import React, { useState } from 'react';

import { TabsContainerWrapper } from './style';
import TabList from '../tablist/tablist.component';
import Tab from '../tab/tab.component';
import TabPanel from '../tabpanel/tabpanel.component';
import { tabsData } from '../../config/config';
import { useAlert } from "react-alert";

const TabsContainer = () => {
    const [value, setValue] = useState(0);
    const [tabInfo, setTabInfo] = useState(tabsData);
    const alert = useAlert();

    const a11yProps = (index) => {
        return {
            id: `scrollable-tab-${index}`,
            'aria-controls': `scrollable-tabpanel-${index}`,
        };
    };

    const tab = tabInfo.map((item, index) => <Tab key={a11yProps(index)['id']} value={value} label={`Tab ${index + 1}`} {...a11yProps(index + 1)} />);
    const tabPanel = tabInfo.map((item, index) => <TabPanel key={`scrollable-tabpanel-${index}`} value={value} index={index}>{`Tab ${index + 1} contents`}</TabPanel>);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleClose = (index) => {
        const tabs = [...tabInfo];
        if (tabs.length === 1) {
            alert.show(`One tab must remain!`);
        } else {
            tabs.splice(index, 1);
            alert.success(`Tab ${index+1} deleted!`);
        }
        setTabInfo(tabs);
        setValue(index - 1 < 0 ? 0 : index - 1);
    };

    const leftArrowHandler = () => {
        setValue(value - 1);
    };

    const rightArrowHandler = () => {
        setValue(value + 1);
    };

    const addTabHandler = () => {
        const tabs = [...tabInfo];
        tabs.splice(tabInfo.length, 0, {})
        setTabInfo(tabs);
    };

    return (
        <TabsContainerWrapper>
            <div className="tabs-header">
                <button
                    title="Move left"
                    className="btn"
                    hidden={tabInfo.length < 6 || value === 0}
                    onClick={leftArrowHandler}
                >
                    <i className="fa fa-chevron-left"></i>
                </button>
                <TabList
                    value={value}
                    onChange={handleChange}
                    onClose={handleClose}
                >
                    {tab}
                </TabList>
                <button
                    title="Move right"
                    className="btn"
                    onClick={rightArrowHandler}
                    hidden={tabInfo.length < 6 || value === tabInfo.length - 1}
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
