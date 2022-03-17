import { ReactPropTypes } from "react"

function Button({children,version,type,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      <p>Submit</p>
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}



export default Button