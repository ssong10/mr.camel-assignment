import React from 'react';
import { Link } from 'react-router-dom';

class RecentList extends React.Component{
    render() {
        return (
            <div>
                RecentList
                <Link to='/'>홈</Link>
            </div>
        )
    }
}

export default RecentList;