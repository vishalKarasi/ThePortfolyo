import PropTypes from "prop-types";

const SingleResume = ({ element }) => {
  const { company_name, summary, jobLocation, startDate, endDate } = element;
  const startYear = new Date(startDate).getFullYear();
  const endYear = new Date(endDate).getFullYear();
  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{company_name}</h3>
      <div className="st-resume-timeline-duration">
        {startYear}-{endYear}
      </div>
      <h4 className="st-resume-timeline-subtitle">{jobLocation}</h4>
      <div className="st-resume-timeline-text">
        <p>{summary}</p>
      </div>
    </div>
  );
};

SingleResume.propTypes = {
  element: PropTypes.object,
};

export default SingleResume;
