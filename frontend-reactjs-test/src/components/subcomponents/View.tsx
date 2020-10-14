import styled from 'styled-components';

export const View:any = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #2699FB;
    @media (max-width: 768px) {
        height: auto;
        min-height: 665px;
    }
`;

export const ViewContainer:any = styled.div`
    width: 100%;
    max-width: 1028px;
    padding-left: 20px;
    padding-right: 20px;
    /* @media (max-width: 768px) { */
        /* width: auto; */
    /* } */
`;