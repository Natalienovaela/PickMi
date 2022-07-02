import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    background-color: #745454;
    z-index: 999;
    width: 20%;
    height: 100%;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    /*opacity: ${({isOpen}) => (isOpen ? '90%' : '0')};
    left: ${({isOpen}) => (isOpen ? '80%' : '100%')};*/
    top: 0;
`
export const CloseIcon = styled(FaTimes) `
    color: #ffffff;
`
export const Icon = styled.div`
    position: absolute;
    top: 6rem;
    right: 2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    size: 2-x;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6.8rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    margin-left:0;
    padding-left:0;
    border-left:0;

    &:hover {
        background: #523b3b;
        background-size: auto;
        transition: 0.2s ease-in-out;
        font-size: 7.5rem;
        text-shadow: .12em .05em 0 hsl(110, 1%, 6%);
    }
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 250px);
    text-align: center;
    margin-left:0;
    padding-left:0;
`