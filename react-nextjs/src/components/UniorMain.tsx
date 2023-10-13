import React from 'react';

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
            {/* Additional toolbar content... */}
          </div>
        </div>
        <div className="main-content">
          <div className="main-body">
            <div className="chat" data-simplebar data-simplebar-auto-hide="true">
              <div className="chat-content">
                {/* Chat content... */}
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
