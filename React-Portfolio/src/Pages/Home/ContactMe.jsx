export default function ContactMe() {
    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            Feel Free to contact me.
          </p>
        </div>
        {/* <form className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">   
  
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
          <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select id="choose-topic" className="contact--input text-md">
              <option>Select One...</option>
              <option>Intern or Traineeship</option>
              <option>Job</option>
              <option>Freelancing Projects</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form> */}

                  {/* This is a HTML label element. It provides a usability improvement for mouse users, because if the user clicks on the text within 
            the label element, it toggles the control the label is associated with.  The htmlFor attribute establishes a relationship between this
             label and another element. The first-name value should match the id of another element, which is the element that the label is labeling.*/}
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfrgiZzOzt2PozXQ8i_kAn08wiy9ll1GcNdZHCtxJLl4O4F6g/viewform?embedded=true" width="800" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </section>
    );
  }

