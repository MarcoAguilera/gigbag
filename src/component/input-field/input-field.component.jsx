import React from 'react';
import styled from 'styled-components';

const LabelContainer = styled.div`
    width: 100%
    text-align: left;
    
    label {
        color: white;
        font-size: 17px;
        font-weight: 500;
        text-align: left;
        display: block;
        margin-bottom: 5px;
    }

    input {
        width: calc(100% - 20px);
        height: 25px;
        border: none;
        background-color: white;
        color: #959595;
        font-family: inherit;
        padding: 5px 10px;
        margin-bottom: 10px;
    }
`;

const InputField = ({label, handleChange, type, value}) => {
    return (
        <LabelContainer>
            <label>{label}</label>
            <input type={type} name={label} onChange={handleChange} value={value} placeholder={label} />
        </LabelContainer>
    );
};

export default InputField;