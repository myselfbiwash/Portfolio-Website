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
            Hello there! I'm Biwash Budhathoki, a dedicated frontend developer on a mission to create captivating online experiences. 
            With expertise in HTML, CSS, JavaScript, and React.js, I specialize in bringing ideas to life through smooth and responsive web design.
            <br /><span style={{color: 'lightSeaGreen'}}>Let's collaborate and bring your vision to the digital world!</span>            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="/img/Biwash.jpg" alt="Hero Section" />
        </div>
      </section>
    );
  }