import React from "react";
import Hammer from "../../assets/image/hammer.png";
import Scale from "../../assets/image/equity.png";
import Home from "../../assets/image/mt-home.png";
import Law from "../../assets/image/interjurist.png";
import { FaFlagCheckered, FaSuitcase } from "react-icons/fa";
import Nav from "../../layout/header/nav";
import Footer from "../../layout/footer/footer";
import style from "./about.module.css";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main className={style.top}>
      <Helmet>
        <title>M Venkata Ratnam Law Firm | About</title>
        <meta
          name="description"
          content="M Venkata Ratnam Law Firm is a full-service law firm offering a comprehensive range of legal services across various areas, including legal advisory, family law, criminal defense, real estate, employment law, accident claims, bounced cheque cases, property disputes, service matters, and civil law"
        />
      </Helmet>
      <Nav />
      <header className={style.wrapper}>
        <div className={style.bg}>{""}</div>
        <div className={style.header}>
          <h1 className={style.header_title}>ABOUT OUR FIRM</h1>
          <h2 className={style.header_subtitle}>
            We Provide Reliable And Effective Legal Services
          </h2>
        </div>
      </header>
      <section className={style.container}>
        <div className={style.content}>
          <p className={style.text}>
          M Venkata Ratnam Law Firm is a full-service law firm offering a comprehensive range of legal services across various areas, including legal advisory, family law, criminal defense, real estate, employment law, accident claims, bounced cheque cases, property disputes, service matters, and civil law. With a team of highly skilled and experienced attorneys, the firm is dedicated to delivering tailored legal solutions that meet the unique needs of each client. Our services encompass everything from strategic legal guidance to robust courtroom representation, ensuring that our clients are supported through every stage of the legal process.
          We take pride in our commitment to excellence, integrity, and client-centered advocacy, working diligently to uphold our clients' rights and achieve favorable outcomes. Our legal team brings deep expertise and a thorough understanding of the Indian legal system, allowing us to provide effective counsel on complex legal matters. Whether you are an individual, a family, or a business, M Venkata Ratnam Law Firm is equipped to handle cases with the highest level of professionalism and dedication.
          Our approach is rooted in providing transparent and timely communication, personalized attention, and strategic solutions, making us a trusted partner for clients facing diverse legal challenges
          </p>
        </div>
        <section className={style.container2}>
          {/* <div className={style.box}>
            <h2 className={style.box_title}>
              Member of INTERNATIONAL ASSOCIATION OF LAW FIRMS
            </h2>
            <img src={Law} alt="Interjurist JoelCatty" className={style.img} />
          </div>
          <div className={style.box}>
            <h2 className={style.box_title_2}>
              <em>
                <strong className={style.strong}>
                  &quot;Ius civile vigilantibus scriptum est&quot;,
                </strong>
              </em>
              <span className={style.span}>
                Roman Law Civil Law has been written for the watchful.
              </span>
            </h2>
            <img src={Home} alt="Temple" className={style.img} />
          </div> */}
          <div className={style.box}>
            <h2 className={style.box_title}>20 Years of Experience</h2>
            <img src={Scale} alt="Balance Scale" className={style.img} />
          </div>
          <div className={style.box}>
            <h2 className={style.box_title}>LEGAL SERVICES</h2>
            <img src={Hammer} alt="Hammer Justice" className={style.img} />
          </div>
          {/* <div className={style.box}>
            <h2 className={`${style.block} ${style.box_title}`}>
              <strong className={style.number}>45+</strong> Legal Associates
            </h2>
            <FaSuitcase className={style.icon} />
          </div> */}
          <div className={style.box}>
            <h2 className={style.box_title}>Defining Success</h2>
            <FaFlagCheckered className={style.icon} />
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default About;
