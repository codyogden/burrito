import React from 'react';
import { logout } from '../../Burrito';

const Dashboard = () => (
  <>
    <div>Hello, User!</div>
    <div>
      <button onClick={logout} type="button">Logout</button>
    </div>
  </>
);

export default Dashboard;
