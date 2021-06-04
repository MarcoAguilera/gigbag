import React from 'react';
import FilterBar from '../../component/filter-bar/filter-bar.component';
import GroupView from '../../component/group-view/group-view.component';
import SearchBar from '../../component/search-bar/search-bar.component';

import GROUP_DATA from '../../redux/group-data';

import './explore.styles.scss';

class Explore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: GROUP_DATA,
            query: ''
        }

        this.handleQuery = this.handleQuery.bind(this);
    }

    handleQuery(e) {
        this.setState({query: e.target.value});
    }

    render() {
        return (
            <div className='explore'>
                <SearchBar value={this.state.query} handleQuery={this.handleQuery} />
                <p>{this.state.query}</p>
                <FilterBar />
                <div className='container'>
                    <GroupView groups={this.state.data} />
                </div>
            </div>          
        );
    }
}

export default Explore;