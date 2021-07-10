import React from 'react';
import styled from 'styled-components';
import GroupCard from '../../../component/group-card/group-card.component';
import CustomButton from '../../../component/custom-button/custom-button.component';
import InputField from '../../../component/input-field/input-field.component';
import FilterBar from '../../../component/filter-bar/filter-bar.component';
import Input from "react-phone-number-input/input";
import 'react-phone-number-input/style.css';

const Container = styled.div`
    width: 950px;
    height: 650px;
    background-color: #AC2727;
    position: absolute;
    left: 50%;
    top: calc(50% + 25px);
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const FlexboxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* height: 100%; */
`;

const GenreDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const CustomInput = styled.input`
    width: 80%;
    background-color: white;
    border: none;
    color: #959595;
    font-family: inherit;
    height: 25px;
`;

class GroupInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            genres: [],
            phone: '',
            hourly: 0,
            city: '',
            state: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e);
        // this.setState({
        //     ...state,
        //     phone: 
        // });
    }

    render() {
        return (
            <Container>
                <FlexboxDiv>
                    {this.props.children}
                    <GroupCard name={this.state.name} p_range={1} genres={this.state.genres} imageUrl="no-image.png" large />
                    <CustomButton name="Add Photo" handleClick={null} color="#5A90C2" width="226px" />
                </FlexboxDiv>
                <FlexboxDiv>
                    <InputField label="Group Name" handleChange={null} type="text" value={this.state.name} bottom="20px" />
                    <FilterBar isSideways={true} />
                    <Input country="US" value={this.state.phone} onChange={this.handleChange} inputComponent={CustomInput} />
                </FlexboxDiv>
            </Container>
        )
    }    
}

export default GroupInfo;