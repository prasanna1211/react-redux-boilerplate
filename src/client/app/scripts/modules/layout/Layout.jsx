/**
 * Layout component
 */
import React from 'react';
import Navbar from 'scripts/modules/layout/Navbar.jsx';
import Sidebar from 'scripts/modules/layout/Sidebar.jsx';

var Layout = (props) => {
  return (
    <div>
      {/* Navbar component */}
      <div className = "navbar">
        <Navbar />
      </div>
      {/* Sidebar component */}
      <div>
        <Sidebar className = "sidebar"/>
      </div>
      {/* Render app content */}
      <div className = "content">
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
