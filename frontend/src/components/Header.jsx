import {FaSignOutAlt,FaSignInAlt,FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useForm} from '../hooks/useForm'

export const Header = () => {





  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>Support Desktop</Link>
        </div>

        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt/>
                    <span>Login</span>
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser/>
                    <span>Register</span>
                </Link>
            </li>
        </ul>


    </header>
  )
}