import styled from 'styled-components';
import {deviceWidths} from '../../config/config';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: 0 auto;
    color: #0074d6;

    img{
        margin: 40px 0;
    }

    h2{
        margin: 40px 0;
        text-decoration: underline;
        font-weight: bold;
    }
    
    @media (max-width:${deviceWidths.smallDesktop}) {
        width: 100%;
        img{
            margin: 20px 5px;
        }
        h2{
            margin: 20px 5px;
            font-size: 20px;
        }
    }

`
