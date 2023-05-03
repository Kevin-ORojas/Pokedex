import { useDispatch } from 'react-redux'
import { setNameTrainer } from '../../store/slices/nameTrainer.slice'

const Header = () => {

  const dispatch = useDispatch()

  const handleClickLogout = () => {
    dispatch(setNameTrainer(""))
  }

  return (
    <section className='relative'>
    <div className='h-16 bg-red-600  grid items-end'>
        <div className='max-w-[200px] sm:max-w-[280px] ml-2'>
            <img src="/images/pokedex.svg" alt="" />
        </div>
    </div>

    <div className='h-12 bg-black'></div>

    <div className='h-16 aspect-square rounded-full bg-white border-[6px] border-black absolute -bottom-2 right-0 -translate-x-1/3 after:content-[""] after:h-10 after:aspect-square after:rounded-full after:bg-gray-700  after:absolute after:border-[7px] after:border-black after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2  '><i onClick={handleClickLogout} className=' bx bx-log-out-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-30 text-2xl hover:text-red-500 cursor-pointer'></i></div>
</section>
  )
}

export default Header