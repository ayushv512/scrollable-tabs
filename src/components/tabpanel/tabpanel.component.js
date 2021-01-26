import React from 'react';
import { TabPanelWrapper } from './style';

const TabPanel = ({ value, index, children }) => {
    return (
        <TabPanelWrapper
            role='tabpanel'
            hidden={value !== index}
            id={`scrollable-tabpanel-${index}`}
        >
            {
                value === index && (
                    <h2 className="tab-panel-content">
                        {children}
                    </h2>
                )
            }
        </TabPanelWrapper>
    )
}

export default TabPanel;
