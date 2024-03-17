export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Biwash Budhathoki</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Frontend</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            I'm Biwash Budhathoki, a recent Computer Engineering graduate with a passion for web development.
Currently, I'm focused on learning frontend development, particularly JavaScript and its framework,
ReactJS. I'm also delving into backend development using Node.js and Express to streamline the
development process. 
              <br /> I'm actively seeking internships or traineeships to further my journey toward
becoming a frontend developer.
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="/img/Biwash.jpg" alt="Hero Section" />
        </div>
      </section>
    );
  }