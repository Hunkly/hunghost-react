import StyledPageLabel from './PageLabel.styled';
import React from 'react';

interface IHeadLineProps {
    children: React.ReactNode;
}

const defaultProps: IHeadLineProps = {
    children: null
};

export default function PageLabel({ children }: IHeadLineProps) {
    return (
        <StyledPageLabel>
            <h3 className="pageLabel__label">{children}</h3>
        </StyledPageLabel>
    );
}
PageLabel.defaultProps = defaultProps;
