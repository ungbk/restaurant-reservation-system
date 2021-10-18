import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className = 'container'>
            <h1>{title}</h1>
            <Button color = 'black' text = 'Sign In' onClick = {onClick}/>
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
