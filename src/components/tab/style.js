import styled from 'styled-components';

export const BtnsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
export const TabButton = styled.button`
    border: none;
    background: none;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 16px;
    &:focus{
        outline: none;
    }
    &.tab-active {
        color: #0074d6;
        border-bottom: 3px solid #0074d6;
    }
`

export const Closebutton = styled.button`
    width: 15px;
    border: none;
    background: none;
    text-align: end;
    cursor: pointer;
    font-size: 15px;
    margin-bottom: -20px;
    margin-right: 10px;
    z-index: 1;
    &:focus{
        outline: none;
    }
    .btn-hide {
        visibility: hidden;
    }
`
