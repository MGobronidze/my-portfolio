function Footer({ name }) {
  const year = new Date().getFullYear();   // JS გამოსახულება კომპონენტის შიგნით

  return (
    <footer className="site-footer">
      <p>© {year} {name}. აგებულია React-ით.</p>
    </footer>
  );
}

export default Footer;
