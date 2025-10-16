import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="navbar w-full">
      <div className="navbar-inner">
        <div className="brand">
          <span className="logo" aria-hidden="true" />
          <span>SI Web</span>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search here..."
            aria-label="Search"
          />
        </div>

        <div className="actions">
          {/* place for future action buttons / profile */}
          <a className="btn" href="#">New</a>
        </div>
      </div>
      {/* element that visually fills the navbar border to the right */}
      <div className="right-fill" aria-hidden="true" />
    </header>
  );
};

export default Navbar;