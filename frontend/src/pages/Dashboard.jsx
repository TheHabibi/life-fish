import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import FishForm from '../components/FishForm'
import FishItem from '../components/FishItem'
import Spinner from '../components/Spinner'
import { getFishes, reset } from '../features/fishes/fishSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { fishes, isLoading, isError, message } = useSelector(
    (state) => state.fishes)
  


  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getFishes())

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
        <h1>Welcome {user && user.name}</h1>
        <p>Fishes Dashboard</p>
      </section>

      <FishForm />

      <section className='content'>
        {fishes && fishes.fishes && fishes.fishes.length > 0 ? (
          <div className='goals'>
            {fishes.fishes.map((fish) => (
              <FishItem key={fish._id} fish={fish} />
            ))}
      
          </div>
        ) : (
          <h3>You have not set any fishes</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard