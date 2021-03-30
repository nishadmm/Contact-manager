import PropTypes from 'prop-types'
import classnames from 'classnames'

const TextInputGroup = ({ label, type, placeholder, name, onchange, value, errors }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={classnames('form-control form-control-lg', {
          'is-invalid': errors
        })}
        value={value}
        onChange={onchange}
      />
      { errors && <div className="invalid-feedback"> {errors} </div>}
    </div>
  )
}

TextInputGroup.defaultProps = {
  type: 'text'
}

TextInputGroup.propType = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
}

export default TextInputGroup
