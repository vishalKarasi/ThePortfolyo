import PropTypes from "prop-types";
import "./About.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import cvPdf from "/images/Resume.pdf";

const About = ({ data }) => {
  const {
    avatar,
    name,
    title,
    subTitle,
    description,
    quote,
    exp_year,
    address,
    some_total,
    phoneNumber,
  } = data;

  const details = [
    { title: "Quote", info: quote },
    { title: "Experience", info: exp_year },
    { title: "Address", info: address },
    { title: "Total Project", info: some_total },
    { title: "Phone", info: phoneNumber },
  ];

  return (
    <section id="about" className="st-about-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"About Me"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="st-about-img-wrap">
              <div
                className="st-about-img st-bg"
                style={{ backgroundImage: `url(${avatar.url})` }}
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              ></div>
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div
                  className={`st-text-block st-style1`}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <h2 className="st-text-block-title">
                    Hi, Myself {name}, I'm a {title}
                  </h2>
                  <h4 className="st-text-block-subtitle">{subTitle}</h4>
                  <div className="st-text-block-text">
                    <p>{description}</p>
                  </div>
                  <ul className="st-text-block-details st-mp0">
                    {details.map((item, index) => (
                      <li key={index}>
                        <span>{item.title}</span> : <span>{item.info}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="st-text-block-btn">
                    <a
                      className="st-btn st-style1 st-color1"
                      href={cvPdf}
                      download
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
