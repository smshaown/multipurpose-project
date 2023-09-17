import { BiCheck } from 'react-icons/bi';



export const WhoAreWe = () => {
  return (
    <div className='mt-20 md:mt-96 mb-40'>
        <div className='myContainer'>
        <div className="w-full lg:w-1/2">
                  <h1 className="text-4xl md:text-[39px] font-bold text-[#343f52] md:mt-16">
                    We bring rapid solutions to make the life of our customers easier.
                  </h1>
                  <p className='py-10'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum. Unde ea quidem exercitationem. Recusandae dicta mollitia, quis libero reiciendis natus sit error est fugit, iusto laborum velit commodi 
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8'>
                    <div className='flex flex-row gap-4  justify-center'>
                        < BiCheck className='-ml-2 md:ml-0 w-8 h-8 md:w-8 md:h-7 p-1 rounded-full text-[#3f78e0] bg-[#dce7f9]' />
                        <p>Aenean quam ornare. Curabitur blandit</p>
                    </div>
                    <div className='flex flex-row gap-4  justify-center md:mt-0 mt-4'>
                        < BiCheck className='-ml-2 w-8 h-8 md:w-8 md:h-7 p-1 rounded-full text-[#3f78e0] bg-[#dce7f9]' />
                        <p>Etiam porta euismod malesuada mollis.</p>
                    </div>
                    <div className='flex flex-row gap-4  justify-center mt-4'>
                        < BiCheck className='w-8 h-8 md:w-8 md:h-7 p-1 rounded-full text-[#3f78e0] bg-[#dce7f9]' /> 
                        <p>Nullam quis risus eget urna mollis ornare</p> 
                    </div>
                    <div className='flex flex-row gap-4 justify-center mt-4 md:mb-0 mb-10'>
                       < BiCheck className='w-8 h-8 md:w-8 md:h-7 p-1 rounded-full text-[#3f78e0] bg-[#dce7f9]' />
                        <p>Vivamus sagittis lacus vel augue rutrum.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                    {/* <img  className="w-full h-full" src={img} alt="" /> */}
                </div>
        </div>
    </div>
  )
}
