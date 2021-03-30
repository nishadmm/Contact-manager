import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ branding }) => {

  return (
    <nav className="navbar bg-danger py-0 mb-3 navbar-expand-sm navbar-dark">
      <div className="container">
        <a href="/" className="navbar-brand"> {branding} </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"><i className="fas fa-home"></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link"><i className="fas fa-plus"></i> Add</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"><i className="fas fa-question"></i> About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'Contacts Manager'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header
