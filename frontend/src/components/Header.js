import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS js
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black',

// }

export default Header
