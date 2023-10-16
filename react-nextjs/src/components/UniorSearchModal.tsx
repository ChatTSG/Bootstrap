import React from 'react';

type SearchModalProps = {
  show: boolean;
  onHide: () => void;
};

const SearchModal: React.FC<SearchModalProps> = ({ show, onHide }) => {
  return (
<div className={`modal ${show ? 'show' : 'fade'}`} id="searchModal" tabIndex={-1} aria-labelledby="searchModalLabel" aria-hidden={!show}>
      <div className="modal-dialog modal-dialog-scrollable modal-fullscreen-sm-down modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title h5" id="searchModalLabel">Quick Search</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <button type="button" className="btn-close" onClick={onHide} aria-label="Close"></button>

          </div>
          <div className="modal-body">
            {/* Form */}
            <div className="input-group input-group-lg mb-4">
              <span className="input-group-text" id="search-addon1">
                <i className="ri-search-eye-line text-secondary"></i>
              </span>
              <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="search-addon1" />
            </div>
            {/* Time */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <h3 className="h6 mb-0">Today</h3>
              <span className="small text-body-secondary">Fri 7 Apr</span>
            </div>
            {/* Media */}
            {/* ... You can continue to add the media cards here ... */}
            {/* For brevity, I'm not adding all the media cards, but you can continue in the same pattern */}
            <a href="#" className="text-reset text-decoration-none d-block mb-1">
              {/* ... Media card content ... */}
            </a>
            {/* ... */}
          </div>
          <div className="modal-footer p-1">
            <button type="button" className="btn btn-sm btn-quaternary" onClick={onHide}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
