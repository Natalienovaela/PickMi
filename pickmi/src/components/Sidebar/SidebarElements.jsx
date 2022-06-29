import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

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