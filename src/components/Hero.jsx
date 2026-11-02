function Hero({ name, title, about }) {
  return (
    <section className="hero">
      <h1>გამარჯობა, მე ვარ {name}</h1>
      <h2>{title}</h2>
      <p>{about}</p>
    </section>
  );
}

export default Hero;