import React from 'react';
import Image from 'next/image';
import userImg from '../assets/img/avatars/user.png'; // image path
import UniorChatContent from '@/components/UniorChatContent';
import UniorChatInterface from './UniorChatInterface'; // Import your new chat interface component

const MainComponent = () => {
  const [startChat, setStartChat] = useState(false);

  const handleStartTalking = () => {
    setStartChat(true);
  }

const MainComponent = () => {
  return (
    <main className="main">
      <div className="main-inner">
        <div className="main-toolbar">
          {/* Toolbar Left */}
          <div className="d-flex align-items-center overflow-hidden">
            <button className="d-xl-none js-navigation-show btn btn-icon btn-nav btn-sm me-2" type="button">
              <i className="ri-menu-2-fill"></i>
            </button>
            <a className="btn btn-icon btn-sm me-2" href="chat-list.html" title="Back to the list" role="button">
              <i className="ri-apps-line"></i>
            </a>
            <h3 className="h5 d-none d-sm-inline-block text-truncate mb-0 ms-sm-2">Welcome 👋</h3>
          </div>
          {/* Toolbar Right */}
          <div className="d-flex align-items-center">
            <button className="btn btn-icon btn-sm me-2" type="button" title="Notifications">
              <i className="ri-notification-2-line"></i>
            </button>
            <button className="btn btn-icon btn-sm js-toggle-sidebar" type="button" title="Toggle Sidebar">
              <i className="ri-layout-right-line"></i>
            </button>
            <div className="avatar avatar-sm mx-2">
              <Image src={userImg} alt="Avatar" width={40} height={40} />
            </div>
            <div className="row align-items-center g-1 ms-1">
              <div className="col-auto">
                <div className="form-check form-switch form-switch-theme">
                  <input className="form-check-input" type="checkbox" role="switch" id="switchTheme" title="Theme Switcher" value="light" />
                </div>
              </div>
            </div>
        </div>
        </div>
        <div className="main-content">
          <div className="main-body">
            <div className="chat" data-simplebar data-simplebar-auto-hide="true">
            <div className="chat-content">
              {!startChat ? 
                <UniorChatContent onStartTalking={handleStartTalking} /> : 
                <UniorChatInterface />}
            </div>
            </div>
          </div>
          {/* Sidebar Component */}
          {/* You might want to create a separate Sidebar component and include it here */}
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
