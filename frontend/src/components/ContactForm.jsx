import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createContact} from '../features/contacts/contactSlice'

function ContactForm() {
    const [mail, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createContact({mail}))
        setText('')
    }
  return  <section className='form'>
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="mail"> Contact Email</label>
            <input  type='email'
              className='form-control'
              id='email'
              name='email'
              value={mail} onChange={(e) => setText(e.target.value) } />
        </div>
        <div className="form-group">
            <button className="btn btn-block" type='submit'>Add Contact Email</button>
        </div>
    </form>
  </section>
}

export default ContactForm