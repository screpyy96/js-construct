import React from 'react';
import { StyledBurger, BurgerWrapper } from './burger.styled';

const Burger = ({open, setOpen}) => {
    return (
        <BurgerWrapper >
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger >
        </BurgerWrapper>
    );
};

export default Burger;