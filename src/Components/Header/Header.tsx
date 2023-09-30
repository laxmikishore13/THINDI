import "./header.css";

export default function Header() {
  return (
    <header>
      <nav className="header-container">
        <h2>THINDI</h2>
        <ul className="header-link-container">
          <li className="header-links">Home</li>
          <li className="header-links">Offers</li>
          <li className="header-links">Sign In</li>
          <li className="header-links">Cart - {0}</li>
        </ul>
      </nav>
    </header>
  );
}
