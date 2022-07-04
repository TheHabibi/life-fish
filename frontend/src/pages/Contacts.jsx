import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ContactForm from '../components/ContactForm'
import ContactCard from '../components/ContactCard'
import Spinner from '../components/Spinner'
import { getContacts, reset } from '../features/contacts/contactSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { contacts, isLoading, isError, message } = useSelector(
    (state) => state.contacts)
  


  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getContacts())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Here are your contacts that you want to inform {user && user.name}</h1>
        <p>Contacts</p>
      </section>

      <ContactForm />
      

   <ul>
      {contacts && contacts.contacts && contacts.contacts.length > 0 ? (
          <div className='goals'>
            {contacts.contacts.map((contact) => (
              <ContactCard key={contact._id} contact={contact} />
            ))}
      
          </div>
        ) : (
          <h3>You have not set any fishes</h3>
        )}
     </ul>
    </>
  )
}

export default Dashboard