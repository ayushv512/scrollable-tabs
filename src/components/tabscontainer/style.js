import styled from 'styled-components';
import {deviceWidths} from '../../config/config';

export const TabsContainerWrapper = styled.div`
    width: 40%;
    margin: 0 auto;
    border: 1px solid #ccc;
    height: 500px;

    .tabs-header {
        display: flex;
        justify-content: space-around;
        background: #f6f6f6;
        .btn {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 20px;
            &:focus{
                outline: none;
            }
        }
    }
    
    @media (max-width:${deviceWidths.smallDesktop}) {
        width: 100%;
    }
`
