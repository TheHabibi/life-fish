import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createFish} from '../features/fishes/fishSlice'

function FishForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createFish({text}))
        setText('')
    }
  return  <section className='form'>
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="text"> Fish</label>
            <input type="text" name='text' id='text' value={text} onChange={(e) => setText(e.target.value) } />
        </div>
        <div className="form-group">
            <button className="btn btn-block" type='submit'>Add Fish</button>
        </div>
    </form>
  </section>
}

export default FishForm