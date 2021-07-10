import styled from 'styled-components';

export const AccountType = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: 45px;
    width: 200px;
    background-color: #792121;
    border-radius: 3px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid white;
    -webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -6px black;

    p {
        color: white;
        font-weight: bold;
        font-size: 15px;
    }
`;