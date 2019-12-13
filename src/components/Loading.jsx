import React from 'react';
import { StyledLoading } from './styles/StyledLoading';

function Loading(props) {
    return (
        <StyledLoading>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </StyledLoading>
    );
}

export default Loading;