import React from 'react';

const Header = ({ usuario, onLogout }) => {
  return (
    <div className="header">
      <div className="section">Home</div>
      <div className="section">{usuario ? `Usuário: ${usuario}` : 'Login'}</div>
      <div className="section">Cart</div>
      {usuario && <div className="section" onClick={onLogout}>Logout</div>}
    </div>
  );
};

export default Header;