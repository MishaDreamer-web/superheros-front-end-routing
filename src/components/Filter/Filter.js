import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  // console.log(filter);
  return (
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Enter nickname for Search"
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
