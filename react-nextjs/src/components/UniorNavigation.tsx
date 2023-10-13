import React from 'react';

const Navigation = () => {
  return (
    <div className="navigation hide-scrollbar bg-noise py-4" data-bs-theme="dark">
      <ul className="nav">
        {/* Other nav items... */}
        <li className="nav-item">
          <a className="nav-link active" href="chat-list.html" title="Chats">
            <i className="ri-chat-1-line text-info"></i>
            <span className="nav-link-title">
              <span>Chats</span>
            </span>
          </a>
        </li>
        {/* Other nav items... */}
      </ul>
      {/* Other navigation content... */}
    </div>
  );
};

export default Navigation;
