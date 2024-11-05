import React from "react";
import Employment from "../../assets/image/employment-law.jpg";
import Corporate from "../../assets/image/corporate-and-commercial-law.jpg";
import FLSA from "../../assets/image/FLSA.jpg";
import CriminalLaw from "../../assets/image/criminal-law.jpg";
import Patent from "../../assets/image/intellectual.jpg";

import Tax from "../../assets/image/tax.png";
import Invest from "../../assets/image/invest.jpeg";
import Dispute from "../../assets/image/disputes.jpg";
import International from "../../assets/image/international.jpeg";
import Counsel from "../../assets/image/counsel.jpg";
import Nav from "../../layout/header/nav";
import Footer from "../../layout/footer/footer";
import topStyle from "../about/about.module.css";
import style from "./practice.module.css";
import { Helmet } from "react-helmet-async";

import Legal from "../../assets/image/Legal-Advisory.png";
import Family from "../../assets/image/family-law.jpg";
import Real from "../../assets/image/real-estate-law.jpg";
import Accident from "../../assets/image/Accident-claims.png";
import Bounced from "../../assets/image/Bounced-Cheque-Cases.png";
import Property from "../../assets/image/property-disputes.png";
import Service from "../../assets/image/service-matters.jpg";
import Civil from "../../assets/image/civil-law.jpg";



const PracticeArea = () => {
  return (
    <main className={topStyle.top}>
      <Helmet>
        <title>M Venkata Ratnam Law Firm | Practice Area</title>
        <meta
          name="description"
          content="M Venkata Ratnam Law Firm was built on the idea that sophisticated legal services should be convenient, modern and affordable. We put our clients first and achieve tremendous results. Experience how law can be done better."
        />
      </Helmet>
      <Nav />
      <section className={topStyle.wrapper}>
        <div className={style.bg}>{""}</div>
        <header className={topStyle.header}>
          <h1 className={topStyle.header_title}>Legal Services</h1>
          <h2 className={topStyle.header_subtitle}>
            We help people in solving legal issues!
          </h2>
        </header>
      </section>
      <section className={topStyle.container}>
        <div className={style.container}>
          <h2 className={style.heading}>
            We are experts in a lot of legal areas
          </h2>
          <p className={style.para}>
          M Venkata Ratnam Law Firm is a full-service law firm offering a comprehensive range of legal services across various areas, including legal advisory, family law, criminal defense, real estate, employment law, accident claims, bounced cheque cases, property disputes, service matters, and civil law
          </p>
        </div>
        <section className={style.container}>

          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Legal Advisory</h2>
              <p className={style.text}>
              Our legal advisory services are designed to provide clients with reliable, well-informed guidance on a wide range of legal matters. We prioritize personalized counsel, helping clients navigate complex situations with clarity, foresight, and strategic advice.
              </p>
            </div>
            <img src={Legal} alt="Legal" className={style.img} />
          </div>

          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Criminal Law</h2>
              <p className={style.text}>
              Our criminal law practice is committed to defending the rights of individuals facing criminal charges. We provide a robust defense, leveraging our experience and knowledge to secure the best possible outcomes for our clients in complex criminal cases.
              </p>
            </div>
            <img
              src={CriminalLaw}
              alt="Criminal Law"
              className={style.img}
            />
          </div>

          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Family Law</h2>
              <p className={style.text}>
              We handle family law cases with the utmost care and sensitivity, recognizing the personal nature of these matters. Our expertise covers divorce, custody disputes, alimony, and other family-related issues, ensuring that our clients receive compassionate support and a fair resolution.
              </p>
            </div>
            <img src={Family} alt="Family" className={style.img} />
          </div>

          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Employment Law</h2>
              <p className={style.text}>
              Our employment law services are focused on representing both employers and employees in a range of workplace issues. From contracts to disputes over wrongful termination and workplace rights, we are dedicated to advocating for fair and just treatment.
              </p>
            </div>
            <img src={Employment} alt="Employment" className={style.img} />
          </div>

          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Real Estate Matters</h2>
              <p className={style.text}>
              We offer comprehensive legal assistance in real estate matters, from property transactions and leasing agreements to resolving disputes. Our team ensures that every deal is secure, legally compliant, and in the best interest of our clients.
              </p>
            </div>
            <img src={Real} alt="Real-Estate" className={style.img} />
          </div>

          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Accident Claims</h2>
              <p className={style.text}>
              We provide skilled representation for clients involved in accident claims, striving to secure rightful compensation for injuries, damages, and losses. Our team handles each case with diligence, pursuing the support our clients need to recover.
              </p>
            </div>
            <img
              src={Accident}
              alt="Accident-Claims"
              className={style.img}
            />
          </div>

          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Bounced Cheque Cases</h2>
              <p className={style.text}>
              We assist clients in dealing with bounced cheque cases, helping them navigate the legal processes and recourse available for unpaid debts. Our approach is focused on efficiency and effectiveness to resolve these matters swiftly.
              </p>
            </div>
            <img src={Bounced} alt="Bounced-Cheque" className={style.img} />
          </div>

          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Property Disputes</h2>
              <p className={style.text}>
              Our firm is experienced in managing property disputes, from inheritance conflicts to boundary issues and title claims. We approach these cases with a deep understanding of property laws, working toward equitable resolutions for our clients.
              </p>
            </div>
            <img src={Property} alt="Property-disputes" className={style.img} />
          </div>

          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Service Matters</h2>
              <p className={style.text}>
              We handle service-related matters involving employment in government and public sector roles, including promotion disputes, disciplinary actions, and retirement benefits. Our expertise in this area allows us to protect our clients' professional rights.
              </p>
            </div>
            <img src={Service} alt="Service-matters" className={style.img} />
          </div>

          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Civil Law</h2>
              <p className={style.text}>
              Our civil law practice covers a broad spectrum of legal disputes, including breach of contract, defamation, and other personal or business conflicts. We aim to resolve civil matters efficiently, helping our clients achieve justice and maintain their reputations.
              </p>
            </div>
            <img src={Civil} alt="Civil Law" className={style.img} />
          </div>
          
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default PracticeArea;
