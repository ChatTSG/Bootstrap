import React from 'react';
//import Image from 'next/image';
//import userImg from '../assets/img/avatars/user.png'; // image path
import { Modal, Button } from 'react-bootstrap';
import SearchModal from './UniorSearchModal';

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
  return (
<div className="navigation hide-scrollbar bg-noise py-4" data-bs-theme="dark">
      <ul className="nav">
        <li className="nav-item position-relative mb-4">
          <a className="nav-link js-toggle-nav-compact" href="#" title="Toggle Compact">
            <i className="ri-side-bar-fill text-primary"></i>
            <span className="nav-link-title text-uppercase me-17">ChatTSG</span>
          </a>
          <span className="nav-close"><i className="ri-close-circle-fill"></i></span>
        </li>

        {/* Chats */}
        <li className="nav-item">
          <a className="nav-link active" href="chat-list.html" title="Chats">
            <i className="ri-chat-1-line text-info"></i>
            <span className="nav-link-title">Chats</span>
          </a>
        </li>

        {/* Search */}
        <li className="nav-item">
        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); setShowModal(true); }} title="Search">
          <i className="ri-search-eye-line text-success"></i>
          <span className="nav-link-title">Search</span>
          <span className="badge bg-secondary px-2 py-0 fs-14"><i className="ri-command-line"></i>F</span>
        </a>
      </li>

      <SearchModal show={showModal} onHide={() => setShowModal(false)} />

        {/* Plans */}
        <li className="nav-item">
          <a className="nav-link" href="plans.html" title="Manage Plans">
            <i className="ri-bank-card-line text-primary"></i>
            <span className="nav-link-title">Manage Plans</span>
          </a>
        </li>

        {/* Updates & FAQ */}
        <li className="nav-item">
          <a className="nav-link" href="faq.html" title="Updates & FAQ">
            <i className="ri-voice-recognition-line text-danger"></i>
            <span className="nav-link-title">Updates & FAQ</span>
          </a>
        </li>

        {/* Settings */}
        <li className="nav-item">
          <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#settingsModal" title="Settings">
            <i className="ri-settings-line text-warning"></i>
            <span className="nav-link-title">Settings</span>
            <span className="badge bg-secondary px-2 py-0 fs-14"><i className="ri-command-line"></i>P</span>
          </a>
        </li>
      </ul>

      {/* Collapse */}
      <ul className="nav">
        <li className="nav-item mt-3 border-top py-1">
          <a className="nav-link" title="Chat List" data-bs-toggle="collapse" href="#collapseLabels" role="button" aria-expanded="false" aria-controls="collapseLabels">
            <i className="ri-list-check-2 text-info"></i>
            <span className="nav-link-title">
              Chat List
            </span>
            <span className="text-body-secondary"><i className="ri-arrow-down-s-line"></i></span>
          </a>
        </li>
      </ul>
      <div className="collapse-wrapper">
        <div className="collapse" id="collapseLabels">
          <ul className="nav">
            {/* Welcome */}
            <li className="nav-item">
              <a className="nav-link active" href="chat-list.html" title="Welcome">
                {/* SVG icon here */}
                <span className="nav-link-title">Welcome</span>
              </a>
            </li>
            {/* ... other items ... */}
          </ul>
        </div>
      </div>

     {/* <div className="card card-upgrade bg-quaternary border-0 mx-3 mt-auto">
        <div className="card-body p-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div className="avatar avatar-sm">
                <Image src={userImg} alt="User Avatar" width={50} height={50} />
              </div>
              <div className="ms-2">
                <h6 className="mb-0">realtheme</h6>
                <p className="text-body-secondary fs-12 mb-0">@realtheme</p>
              </div>
            </div>
            <div className="ms-2">
              <span className="badge bg-success fs-14">Free</span>
            </div>
          </div>
          <a href="plans.html" className="btn btn-sm btn-outline-primary w-100 text-white mt-3" role="button">View Plans</a>
        </div>
      </div> */}
    </div>
  );
};

export default Navigation;





