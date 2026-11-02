function Header({ name }) {
  return (
    <header className="site-header">
      <strong>{name}</strong>
      <nav>
        <a href="#skills">უნარები</a>
        <a href="#projects">პროექტები</a>
        <a href="#contact">კონტაქტი</a>
      </nav>
    </header>
  );
}

export default Header;