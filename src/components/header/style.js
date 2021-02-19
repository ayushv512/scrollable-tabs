import styled from 'styled-components';
import {deviceWidths} from '../../config/config';

export const HeaderWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    color: #0074d6;
    border: 1px solid #CCC;
    img {
        margin: 40px 0;
    }

    div {
        font-size: 20px;
        margin: 40px 0;
        text-decoration: underline;
        font-weight: bold;
    }
    
    @media (max-width:${deviceWidths.smallDesktop}) {
        width: 100%;
        img {
            margin: 20px 5px;
        }
        div {
            margin: 20px 5px;
            font-size: 20px;
        }
    }

`
