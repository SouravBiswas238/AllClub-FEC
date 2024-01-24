// components/Layout.jsx
import React from 'react';
import NavbarIndex from './NavbarIndex';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarIndex />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
