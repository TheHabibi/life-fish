import { useDispatch } from 'react-redux'


function ContactCard({contact}) {
  const dispatch = useDispatch()
  return (
    <div className="goal">
      
        <h2>{contact.mail}</h2>
      
    </div>
  )
}

export default ContactCard