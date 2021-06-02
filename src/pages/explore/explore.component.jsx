import React from 'react';
import GroupCard from '../../component/group-card/group-card.component';
import FilterBar from '../../component/filter-bar/filter-bar.component';
import GroupView from '../../component/group-view/group-view.component';

import GROUP_DATA from '../../redux/group-data';

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
                <FilterBar />
                <div className='container'>
                    <GroupView groups={this.state.data} />
                    {/* <GroupView groups={this.state.data} /> */}
                    {/* <GroupView groups={this.state.data} /> */}
                </div>
            </div>          
        );
    }
}

export default Explore;