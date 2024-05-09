import woman from '../assets/woman.png'
import sparks from '../assets/sparks.png'
import arrow from '../assets/right_arrow.png'
import carousel from '../assets/carousel.png'
import rocket from '../assets/rocket.png'
import '../index.css'

const Explore = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center items-center mt-5'>
        <h1 className="font-covered-by-your-grace text-4xl text-green-800 title">Success Stories</h1>
        <h1 className="font-manrope text-5xl title">Every success journey</h1>
        <h1 className="font-manrope text-5xl title">we've encountered</h1>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-2/3 p-8 relative'>
        <div className='flex flex-col justify-center items-center relative'>
  {/* Woman Image */}
  <img src={woman} width={500} height={500} style={{ borderRadius: "10%", minWidth: '200px', minHeight: '200px' }} alt="Woman" />

  {/* Box */}
  <div className='absolute left-0 top-1/2 transform -translate-y-1/2 md:top-0 bg-white rounded-lg shadow-xl' style={{ top: '45%', width: '30%', height: '35%'}}>
  <div className='flex flex-col justify-center items-center h-full'>
    <img src={sparks} width={40} height={40} style={{transform:'translateX(-120%) translateY(30%)'}}></img>
    <h1 className='text-5xl md:text-6xl font-manrope font-bold relative z-10 m-0 title'>40%</h1>
    <p className='text-sm md:text-md font-manrope pl-2 md:pl-5 z-10 w-3/4 m-0 copyright'>Achieved reduction in project execution time by optimising team availability</p>
  </div>
</div>

{/* Box2 */}

<div className='flex absolute left-0 top-0 bg-white rounded-full shadow-xl justify-center items-center' style={{ height: '20%', width: '90%', maxWidth: '400px', marginLeft: '5%', transform: 'translateY(350%)', paddingTop:'15px' }}>
  <div className='flex flex-row justify-between space-x-5'>
    <div className='bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center'>
      <img src={rocket} width={24} height={24} alt="Rocket" />
    </div>

    <div className='flex flex-col mb-3'>
      <h1 className='text-3xl sm:text-4xl md:text-3xl font-manrope font-bold'>10 DAYS</h1>
      <p className='ml-2 text-base sm:text-xl md:text-lg text-gray-500'>Staff Deployment</p>
    </div>
  </div>
</div>


{/* Box3 */}

<div className='flex absolute right-0 bottom-0 justify-center items-center' style={{ height: '70%', width: '90%', maxWidth: '400px', marginRight: '5%', transform: 'translateX(20%) translateY(10%)', paddingTop:'15px' }}>
  <div className='flex flex-col bg-green-950 rounded-xl border shadow-xl border-gray-700 w-[70%]'>
    <div className='flex flex-row items-center p-5'>
      <h1 className='text-4xl sm:text-xl md:text-6xl font-switzer text-white'>$0.5 <span className='text-lg sm:text-xl md:text-2xl text-gray-300'>MILLION</span></h1>
    </div>
    <p className='text-base sm:text-lg md:text-xl text-white p-5'>Reduced client expenses by saving on hiring and employee costs.</p>
  </div>
</div>





</div>
</div>

        {/* 2nd part */}
        <div className='w-full md:w-1/3 p-8 flex flex-col justify-start items-center md:items-start'>
          <h2 className="text-3xl font-manrope my-6 text-center md:text-left w-[60%]">Enhance fortune 50 company’s insights teams research capabilities</h2>
          <div className='flex flex-col w-[60%] mb-10'>
            <img src={carousel} width={60} height={60} className='hover:cursor-pointer' alt="Carousel" />
          </div>
          <div className='flex flex-col md:flex-row justify-start items-start w-[60%]' >
            <button className='bg-black flex items-center space-x-3 rounded-full px-6 py-3 hover:bg-gray-700 hover:text-white'>
              <h1 className='text-xl text-white font-manrope font-bold'>Explore More</h1>
              <img src={arrow} alt="Arrow" className="h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore;
