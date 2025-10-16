import { NavLink } from "react-router";

function IconBox() {
  return (
    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="3" width="7" height="7" stroke="#64748b" strokeWidth="1.5" rx="1" />
      <rect x="14" y="3" width="7" height="7" stroke="#64748b" strokeWidth="1.5" rx="1" />
      <rect x="3" y="14" width="7" height="7" stroke="#64748b" strokeWidth="1.5" rx="1" />
      <rect x="14" y="14" width="7" height="7" stroke="#64748b" strokeWidth="1.5" rx="1" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 3h2l1 12a2 2 0 0 0 2 2h8" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="20" r="1" fill="#fb923c"/>
      <circle cx="18" cy="20" r="1" fill="#fb923c"/>
    </svg>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">SideBar</div>
      <nav>
        <div className="space-y-2">
          <div>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <IconBox />
              <span>Dashboards</span>
            </NavLink>
          </div>

          <div>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <IconCart />
              <span>Products</span>
            </NavLink>
          </div>

          <div>
            <NavLink to="/categories" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="3" y="5" width="7" height="14" stroke="#94a3b8" strokeWidth="1.5" rx="1" />
                <rect x="14" y="5" width="7" height="14" stroke="#94a3b8" strokeWidth="1.5" rx="1" />
              </svg>
              <span>Categories</span>
            </NavLink>
          </div>

          <div>
            <NavLink to="/sale" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2v6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M5 8h14l-1 11H6L5 8z" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Sale</span>
            </NavLink>
          </div>

          <div>
            <NavLink to="/purchases" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
              </svg>
              <span>Purchases</span>
            </NavLink>
          </div>

          <div>
            <NavLink to="/returns" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 12h9" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 3v9" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Returns</span>
            </NavLink>
          </div>

          <div>
            <NavLink to="/people" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="8" r="2.5" stroke="#94a3b8" strokeWidth="1.5"/>
                <path d="M5 20c1-4 6-6 7-6s6 2 7 6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>People</span>
            </NavLink>
          </div>

          <div>
            <NavLink to="/reports" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
                <path d="M8 12h8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Reports</span>
            </NavLink>
          </div>

          <div>
            <NavLink to="/other" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
              </svg>
              <span>Other Page</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
}