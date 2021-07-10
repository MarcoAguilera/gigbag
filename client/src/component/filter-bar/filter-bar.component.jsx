import React from 'react';
import CheckBox from '../checkbox/checkbox.component';
import './filter-bar.styles.scss';


class FilterBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mariachi: true,
            norteño: true,
            banda: true,
            siereño: true,
            tejano: true
        };

        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(genre) {
        this.setState({
            ...this.state,
            [genre]: !this.state[genre]
        });
    }

    render() {
        return (
            <div className='filter-bar'>
                <h1 className='title'>Type of Group</h1>
                {
                    Object.keys(this.state).map((key, idx) => 
                        <CheckBox 
                            key={idx} 
                            handleCheck={() => this.handleCheck(key)} 
                            genre={key} 
                            checked={this.state[key]}
                        />
                    )
                }
            </div>
        )
    }
}

export default FilterBar;