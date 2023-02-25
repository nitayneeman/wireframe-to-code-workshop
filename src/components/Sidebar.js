import './Sidebar.css';

function Sidebar() {
  return (
    <aside className='Sidebar'>
      <button className='NavLink'>
        <svg viewBox='0 0 24 24' width={24} className='NavLinkIcon'>
          <g>
            <path d='M4,10V21h6V15h4v6h6V10L12,3Z'></path>
          </g>
        </svg>
        Home
      </button>
    </aside>
  );
}

export default Sidebar;
