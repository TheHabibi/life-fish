import { useDispatch } from 'react-redux'
import { deleteFish } from '../features/fishes/fishSlice'

function FishItem({fish}) {
  const dispatch = useDispatch()
  return (
    <div className="goal">
        <div>
            {new Date(fish.createdAt).toLocaleString
            ('en-US')}
        </div>
        <h2>{fish.text}</h2>
        <button onClick={() => dispatch(deleteFish(fish._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default FishItem