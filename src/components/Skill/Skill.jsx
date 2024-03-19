import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Skill.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const Skill = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? data : data.slice(0, 5);

  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">Development Philosophy</h2>
                <div className="st-skill-subtitle">
                  In the realm of web development, I believe in the power of
                  innovation and simplicity. My approach revolves around
                  crafting elegant solutions to complex problems, always
                  striving for efficiency without sacrificing functionality.
                  With a commitment to continuous learning and adaptability, I
                  embrace new technologies and methodologies to stay at the
                  forefront of the ever-evolving web landscape.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <div className="st-progressbar-wrap">
              {visibleSkills.map((element, index) => (
                <div
                  className="st-single-progressbar"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={index * 100}
                >
                  <div className="st-progressbar-heading">
                    <h3 className="st-progressbar-title">{element.name}</h3>
                    <div
                      className="st-progressbar-percentage"
                      data--duration="1.5s"
                      data--delay="0.5s"
                    >
                      {element.percentage}%
                    </div>
                  </div>
                  <div
                    className="st-progressbar"
                    style={{ width: `${element.percentage}%` }}
                  >
                    <div className="st-progressbar-in"></div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b20"></div>
                </div>
              ))}
            </div>
            {data.length > 5 && (
              <button
                className="st-viewmore"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Skill.propTypes = {
  data: PropTypes.array,
};

export default Skill;
