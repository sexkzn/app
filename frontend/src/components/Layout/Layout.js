import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';

function Layout({ children }) {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <div className="layout">
      <ScrollButton />
      <Header showFilters={isMainPage} />
      <main className="app">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
