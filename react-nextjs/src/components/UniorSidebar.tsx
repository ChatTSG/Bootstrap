import React from 'react';
import Image from 'next/image';

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      {/* Sidebar content... */}
      <div className="card card-upgrade bg-quaternary border-0 mx-3 mt-auto">
        <div className="card-body p-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div className="avatar avatar-sm">
                <Image src="/assets/img/avatars/user.png" />

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
      </div>
    </div>
  );
};

export default SidebarComponent;
