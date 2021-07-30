import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <Link to="/recentList">최근조회이력</Link>
      </div>
    );
  }
}

export default Home;
