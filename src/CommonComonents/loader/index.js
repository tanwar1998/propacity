import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import React , { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';


export const LoaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 1;
    left: 0;
    position: fixed;
    background: rgb(250, 250, 250, 0.6);

    .tmp-circular{
        position: absolute;
        top: calc(50vh - 20px);
        color: #03519f;
        left: calc(50% - 20px);
    }
`;

 function Loader() {
    let redux = useContext(ReactReduxContext);
    let reduxStore = redux ? redux.store.getState() : null
    console.log('redux>>>>>>>>>>>>>>>>>', reduxStore)
    return (reduxStore?.data?.loader?.display ) ? (
        <LoaderContainer>
                <CircularProgress className='tmp-circular'/>
            </LoaderContainer>
    )
    : null
}

export default Loader;