import { useNavigate } from "react-router-dom"
import Brunel from '../assets/Brunel.png'
import cross from '../assets/cross.png'



const Navbar_2 = () => {

  const navigate = useNavigate()

const handle_front = ()=>{
  
  navigate('/')
  
}
  return (
    <div className='flex flex-col items-center justify-center '>
        <div className="justify-left flex items-center" style={{ display: 'flex' }}>
      <img src={Brunel} width={150} height={150} className="rounded" style={{ position: 'absolute', top: 30, left: 20 }} alt="logo"/>
    </div>
    <div className="justify-right flex items-center" style={{ display: 'flex' }}>
      <button onClick={handle_front}>
    <img src={cross} width={50} height={50} className="rounded" style={{ position: 'absolute', top: 30, right: 20 }} alt="cross"/></button>
    </div>
    </div>
  )
}

export default Navbar_2