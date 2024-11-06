import React from "react";
import { Link } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { IoIosCall } from "react-icons/io";
import Hammer from "../../assets/image/hammer.png";
import Scale from "../../assets/image/equity.png";
import home from "../../assets/image/mt-home.png";
import Law from "../../assets/image/interjurist.png";
import Patent from "../../assets/image/intellectual.jpg";
import FLSA from "../../assets/image/FLSA.jpg";
import CriminalLaw from "../../assets/image/criminal-law.jpg";
import { FaFlagCheckered, FaSuitcase } from "react-icons/fa";
import style from "./home.module.css";
import style2 from "../about/about.module.css";
import style3 from "../practice/practice.module.css";
import Nav from "../../layout/header/nav";
import Footer from "../../layout/footer/footer";
import { Helmet } from "react-helmet-async";

import Legal from "../../assets/image/Legal-Advisory.png";
import Family from "../../assets/image/family-law.jpg";

const Home = () => {
  return (
    <main className={style.home}>
      <Helmet>
        <title>M Venkata Ratnam Law Firm | Home</title>
        <meta
          name="description"
          content="M Venkata Ratnam Law Firm was built on the idea that sophisticated legal services should be convenient, modern and affordable. We put our clients first and achieve tremendous results. Experience how law can be done better."
        />
      </Helmet>
      <section className={style.wrapper}>
        <Nav />
        <div className={style.bg}>{""}</div>
        <header className={style.container}>
          <div className={style.head}>
            <span className={style.span}>{""}</span>
            <h1 className={style.header}>Peer Voted No. 1 Law Firm</h1>
          </div>
          <div className={style.content}>
            <h2 className={style.title}>
              Get in touch with us for your Legal Issues!
            </h2>
            <h3 className={style.subtitle}>We prepared to oppose for you!!</h3>
            <h3 className={style.subtitle}>
              Our fighting is for your justice!!!
            </h3>
          </div>
        </header>
        <section className={style.container2}>
          <div className={style.box}>
            <h2 className={style.box_title}>
              <TfiLocationPin className={style.box_icon} /> Our Location
            </h2>
            <p className={style.box_text}>Malkajgiri, Hyderabad</p>
          </div>
          <div className={style.box}>
            <h2 className={style.box_title}>
              <IoIosCall className={style.box_icon} /> Call Us
            </h2>
            <a href="https://wa.me/919246882929" className={style.box_text}>
              +91 9246882929
            </a>
          </div>
        </section>
      </section>

      <section className={style.imagecontainer}>
        <section className={style.imageitem1}>
          <img src="/images/image1.png" className={style.img122} />
          <h3 className={style3.text}>Venu Gopal</h3>
          <p className={style3.text}>LL.B., Senior Advocate</p>
        </section>
        <section className={style.imageitem1}>
          <img src="/images/chantiphotoblur.jpg" className={style.img122} />
          <h3 className={style3.text}>M Venkata Ratnam</h3>
          <p className={style3.text}>LL.B., Senior Advocate</p>
        </section>
      </section>

      <section className={style2.container2}>
        {/* <div className={style2.box}>
          <h2 className={style2.box_title}>
            Member of INTERNATIONAL ASSOCIATION OF LAW FIRMS
          </h2>
          <img src={Law} alt="Interjurist JoelCatty" />
        </div>
        <div className={style2.box}>
          <h2 className={style2.box_title_2}>
            <em>
              <strong className={style2.strong}>
                &quot;Ius civile vigilantibus scriptum est&quot;,
              </strong>
            </em>
            <span className={style2.span}>
              Roman Law Civil Law has been written for the watchful.
            </span>
          </h2>
          <img src={home} alt="Temple" />
        </div> */}
        <div className={style2.box}>
          <h2 className={style2.box_title}>20 Years of Experience</h2>
          <img src={Scale} alt="Balance Scale" />
        </div>
        <div className={style2.box}>
          <h2 className={style2.box_title}>LEGAL SERVICES</h2>
          <img src={Hammer} alt="Hammer Justice" />
        </div>
        {/* <div className={style2.box}>
          <h2 className={`${style2.block} ${style2.box_title}`}>
            <strong className={style2.number}>45+</strong> Legal Associates
          </h2>
          <FaSuitcase className={style2.icon} />
        </div> */}
        <div className={style2.box}>
          <h2 className={style2.box_title}>Defining Success</h2>
          <FaFlagCheckered className={style2.icon} />
        </div>
      </section>
      <section className={style3.container}>
        <h2 className={style3.heading}>
          We are experts in a lot of legal areas
        </h2>

        <div className={style3.content}>
          <div className={style3.box}>
            <h2 className={style3.title}>Legal Advisory</h2>
            <p className={style3.text}>
              Our legal advisory services are designed to provide clients with
              reliable, well-informed guidance on a wide range of legal matters.
              We prioritize personalized counsel, helping clients navigate
              complex situations with clarity, foresight, and strategic advice.
            </p>
          </div>
          <img src={Legal} alt="Legal" className={style3.img} />
        </div>

        <div className={style3.content}>
          <div className={style3.box}>
            <h2 className={style3.title}>Criminal Law</h2>
            <p className={style3.text}>
              Our criminal law practice is committed to defending the rights of
              individuals facing criminal charges. We provide a robust defense,
              leveraging our experience and knowledge to secure the best
              possible outcomes for our clients in complex criminal cases.
            </p>
          </div>
          <img src={CriminalLaw} alt="Criminal Law" className={style3.img} />
        </div>
        <div className={style3.content}>
          <div className={style3.box}>
            <h2 className={style3.title}>Family Law</h2>
            <p className={style3.text}>
              We handle family law cases with the utmost care and sensitivity,
              recognizing the personal nature of these matters. Our expertise
              covers divorce, custody disputes, alimony, and other
              family-related issues, ensuring that our clients receive
              compassionate support and a fair resolution.
            </p>
          </div>
          <img src={Family} alt="Family" className={style3.img} />
        </div>
        <button type="submit" className={style.cta}>
          <Link to="/practice" className={style.btn}>
            More Services
          </Link>
        </button>
      </section>
      <section className={style.contact}>
        <div className={style.contactBG}>{""}</div>
        <div className={style.contactHeader}>
          <h2 className={style.contactTitle}>
            Let's get Started!!! We are experts in a lot of legal areas.
          </h2>
          <button type="submit" className={style.cta}>
            <Link to="/contact" className={style.btn}>
              Contact Us
            </Link>
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
