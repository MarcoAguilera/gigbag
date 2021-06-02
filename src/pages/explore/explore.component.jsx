import React from 'react';
import GROUP_DATA from '../../redux/group-data';
import GroupCard from '../../component/group-card/group-card.component';

import './explore.styles.scss';

class Explore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: GROUP_DATA,
            query: ''
        }
    }

    render() {
        return (
            <div className='explore'>
            {
                this.state.data.map((group) => {
                    <GroupCard {...group} />
                })
            }
            </div>          
        );
    }
}

export default Explore;