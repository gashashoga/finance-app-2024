
import { Form, NavLink, useLoaderData } from 'react-router-dom'
import logomark from '../assets/logomark.svg'
import {TrashIcon} from '@heroicons/react/24/solid'

const Nav = ({username}) => {
    username = localStorage.getItem('username')
    return (
        <nav>
            <NavLink to="/" aria-label='Go to homepage'>
            <img src={logomark} alt="" height={30} />
            <span>Finance Builder</span>
            </NavLink>
            {
                username && (
                    <Form 
                        method="post"
                        action="/logout"
                        onSubmit={(event) => {
                            if(!confirm('Are you sure you want to delete this account?'))
                            {
                                event.preventDefault()
                            }
                        }}>

                    <button type='submit' className='btn btn--warning'>
                        <span>Delete User</span>
                        <TrashIcon width={20} />
                    </button>
                     
                    </Form>
                )
            }
        </nav>
    )

}
export default Nav