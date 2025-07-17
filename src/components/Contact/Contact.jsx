import React from "react";
import "./Contact.css";
import { assets } from "../../assets";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "19d475d5-c817-421a-98dd-e6da48447d03");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <div className="Contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={assets.msgIcon} alt="msg" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={assets.mailIcon} alt="msgicon" />
            gandhidivyesh09@gmail.com
          </li>
          <li>
            <img src={assets.phoneIcon} alt="phoneIcon" />
            +123-456-789
          </li>
          <li>
            <img src={assets.locationIcon} alt="locationIcon" />
            77 Massachusetts Ave, Cambridge
            <br />
            MA 02139, United States
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email id"
            required
          />

          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Submit Now
            <img src={assets.whiteArrow} alt="whiteArrow" />
          </button>
        </form>

        {/* Display Submission Result */}
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
