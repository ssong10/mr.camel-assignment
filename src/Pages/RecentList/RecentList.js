import React from 'react';
import { Link } from 'react-router-dom';
import RecentCard from './RecentCard';

class RecentList extends React.Component{
    render() {
        return (
            <div>
                <RecentCard />
                <Link to='/'>홈</Link>
            </div>
        )
    }
}

export default RecentList;