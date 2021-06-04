import styled from 'styled-components';

export const LayoutDiv = styled.div`
    width: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);

    p {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 17px;
        color: white;
    }
`;