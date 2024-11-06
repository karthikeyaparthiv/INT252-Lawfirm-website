import React, { useRef, useState  } from 'react';
import { TiContacts } from "react-icons/ti";
import { TfiTime } from "react-icons/tfi";
import Nav from "../../layout/header/nav";
import Footer from "../../layout/footer/footer";
import topStyle from "../about/about.module.css";
import style from "./contact.module.css";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Contact = () => {


  const [email, setEmail] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://email-sender-lhzc.onrender.com/send-email", {
        email,
        from,
        message,
      });
      alert("Email sent successfully");
      
      setEmail("");
      setFrom("");
      setMessage("");
    } catch (error) {
      alert("Error sending email");
    }
  };





 


  return (
    <main className={topStyle.top}>
      <Helmet>
        <title>M Venkata Ratnam Law Firm | Contact</title>
        <meta name="description" content="M Venkata Ratnam Law Firm Contact" />
      </Helmet>
      <Nav />
      <section className={topStyle.wrapper}>
        <div className={style.bg}>{""}</div>
        <header className={topStyle.header}>
          <h1 className={topStyle.header_title}>Contact Us</h1>
          <h2 className={topStyle.header_subtitle}>
            We put our clients first and achieve tremendous results!
          </h2>
        </header>
      </section>
      <section className={style.container}>
        <section className={style.content}>
          <section className={style.wrap}>
            <div className={style.details}>
              <h2 className={style.heading}>Get in Touch</h2>
              <div className={style.detail}>
                <TiContacts className={style.icon} />
                <div className={style.box}>
                  <h3 className={style.title}>Contact Information</h3>
                  <div className={style.wrapper}>
                    <p className={style.text}>
                      <b>Address:</b> 
                    </p>
                    <p className={style.text}> 
                    Office. First floor, 
                    </p>
                    <p className={style.text}> 
                    H.No.36-99/1,
                    </p>
                    <p className={style.text}> 
                    Plot No.455, 
                    </p> 
                    <p className={style.text}> 
                    Defence colony, 
                    </p> 
                    <p className={style.text}> 
                    Malkajgiri, Hyderabad
                    </p>

                    <p className={style.text}>
                      <b>Message Us:</b>
                      <a href="https://wa.me/919246882929"> +91 9246882929</a>
                    </p>
                    <p className={style.text}>
                      <b>Email:</b>
                      <a href="mailto: ratnam_adv@yahoo.co.in">
                        {" "}
                        ratnam_adv@yahoo.co.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.detail}>
                <TfiTime className={style.icon} />
                <div className={style.box}>
                  <h3 className={style.title}>Working Hours</h3>
                  <div className={style.wrapper}>
                    <p className={style.text}>
                      <b>Mon - Fri: </b>08:00 - 17:00
                    </p>
                    <p className={style.text}>
                      <b>Sun & National Holidays: </b>
                      Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.formContainer}>
              <h2 className={style.formTitle}>Send Us a Message</h2>


              <form onSubmit={handleSubmit} className={style.form}>
              <label>Name</label>
                <input
                  type="text"
                  placeholder="From"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                  className={style.input}
                />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={style.input}
                />
                <label>Message</label>
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className={style.textarea} />
                <input type="submit" value="Send" className={style.btn}/>
              </form>


            </div>
          </section>
          <aside className={style.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.4346400756253!2d78.53291677516721!3d17.486753483417505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzEyLjMiTiA3OMKwMzInMDcuOCJF!5e0!3m2!1sen!2sin!4v1728753231960!5m2!1sen!2sin"
              title="Map"
              className={style.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </aside>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
