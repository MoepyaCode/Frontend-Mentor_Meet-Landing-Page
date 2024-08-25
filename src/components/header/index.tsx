import { Assets } from '../../assets'

export default function Header() {
  return (
    <header className='flex flex-col pt-[48px]'>
        <img className='self-center' src={Assets.logo} alt="" />
    </header>
  )
}
