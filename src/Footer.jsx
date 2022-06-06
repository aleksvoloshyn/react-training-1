import PropTypes from 'prop-types'
import './Footer.css'
const Footer = ({ name }) => {
  return (
    <footer>
      <h2 className="footerTitle">hello, this is {name}</h2>
    </footer>
  )
}

Footer.propTypes = {
  name: PropTypes.string,
}

export { Footer }
