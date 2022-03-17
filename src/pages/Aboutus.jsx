import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
function Aboutus() {
  return (
    <div>
      <Card>
      <h1>About Us</h1>
      <p>
        This is the about us page.
      </p>

      <Link to="/">Go back to the homepage</Link>
      </Card>

    
    </div>
  )
}

export default Aboutus