export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/BiwashPic.jpg" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            I'm Biwash Budhathoki, a recent Computer Engineering graduate with a passion for web development.
Currently, I'm focused on learning frontend development, particularly JavaScript and its framework,
ReactJS. I'm also delving into backend development using Node.js and Express to streamline the
development process. 
            </p>
            <p className="hero--section-description">
            . I'm actively seeking internships or traineeships to further my journey toward
becoming a frontend developer.
            </p>
          </div>
        </div>
      </section>
    );
  }