import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const LogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    // Close the modal
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Logout</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <p>Are you sure you want to logout?</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-danger" onClick={handleLogout}>Logout</button>
          <button className="button" onClick={onClose}>Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default LogoutModal;
