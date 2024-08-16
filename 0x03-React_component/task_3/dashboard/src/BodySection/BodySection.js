import PropTypes from 'prop-types';

const BodySection = ({ children, title }) => {
  return (
    <div className="bodySection">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BodySection.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySection;
