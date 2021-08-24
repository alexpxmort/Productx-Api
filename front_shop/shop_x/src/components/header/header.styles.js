import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color:#3c47e8;
`;

export const LogoContainer = styled(Link)`
    height: 100px;
    width: 75px;
    padding: 15px;  
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    display: flex;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    color:#FFF;
`;