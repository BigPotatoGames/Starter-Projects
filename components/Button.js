import PropTypes from 'prop-types'


const Button = ({color, text, onClick }) => {
    return (
    <button onCLick= {onClick}
    style= {{ backgroundColor: color}} 
    className='btn'>
    {text}
    </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
