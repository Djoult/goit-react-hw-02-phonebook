import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    Filter by name or number
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
