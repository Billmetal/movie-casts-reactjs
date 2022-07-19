import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styled from "styled-components";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    /* box-shadow: 0 0 0.3em rgba(0,0,0,0.3); */
    z-index: 99999;
    background-color: #fff;
    margin: 8px;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 5px 3px 10px rgba(0,0,0,0.3);
    }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    border: 1px solid #ccc;
    padding: 8px;
    /* box-shadow: 0 0 0.3em rgba(0,0,0,0.3); */
    margin-top: -5px;

    &.is-selected {
        display: block;
    }

    img {
        height: 100%;
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;