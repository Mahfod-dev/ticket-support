import { Link } from "react-router-dom"
import { FaQuestionCircle,FaTicketAlt } from "react-icons/fa"

export const Home = () => {
  return (
    <section className="heading">

    <h1>What do you need help with ?</h1>
    <p>
      Please choose from an option below
    </p>

    <Link to="/new-ticket" className="btn btn-reverse btn-block">
      <FaTicketAlt/>
      <span>Create New Ticket</span>
    </Link>

    <Link to="/tickets" className="btn btn-reverse btn-block">
      <FaQuestionCircle/>
      <span>View Existing Tickets</span>
    </Link>

    </section>
  )
}