// index.tsx
import React from 'react';
import UniorHeader from '../components/UniorHeader';
import MainComponent from '../components/UniorMain';
import SidebarComponent from '../components/UniorSidebar';
import SearchModal from '../components/UniorSearchModal';
import SettingsModal from '../components/UniorSettingsModal';

const HomePage: React.FC = () => {
  return (
    <>
      <UniorHeader />
      <MainComponent />
      <SidebarComponent />
      <SearchModal />
      <SettingsModal />
      {/* Other components and content */}
    </>
  );
};

export default HomePage;
