import React from 'react';
import GroupCard from '../group-card/group-card.component';

import './group-view.styles.scss';

const GroupView = ({ groups }) => {
    return (
        <div className='group-view'>
            {
                groups.map((group) => 
                    <GroupCard key={group.id} {...group} />
                )
            }
        </div>
    )
}

export default GroupView;