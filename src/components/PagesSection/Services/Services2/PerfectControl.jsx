import { BiCheck } from 'react-icons/bi';
import img from '../../../../assets/images/Pages/Services/Services2/i7.png';

export const PerfectControl = () => {
  return (
    <div>
        <div className="myContainer">
            <div className="flex flex-col md:flex-row  gap-12">
                <div className="w-full lg:w-[40%]">
                  <h1 className="text-4xl md:text-[40px] font-bold text-[#343f52]">
                    We bring rapid solutions to make the life of our customers easier.
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum. Unde ea quidem exercitationem. Recusandae dicta mollitia, quis libero reiciendis natus sit error est fugit, iusto laborum velit commodi 
                  </p>
                  <div>
                    <div>
                        < BiCheck className='w-6 h-6 rounded-full text-[#3f78e0] bg-[#dce7f9]' />
                        <p>Aenean quam ornare. Curabitur blandit</p>
                    </div>
                    <div>
                        < BiCheck className='w-6 h-6 rounded-full text-[#3f78e0] bg-[#dce7f9]' />
                        <p>Etiam porta euismod malesuada mollis.</p>
                    </div>
                    <div>
                        < BiCheck className='w-6 h-6 rounded-full text-[#3f78e0] bg-[#dce7f9]' /> 
                        <p>Nullam quis risus eget urna mollis ornare</p> 
                    </div>
                    <div>
                       < BiCheck className='w-6 h-6 rounded-full text-[#3f78e0] bg-[#dce7f9]' />
                        <p>Vivamus sagittis lacus vel augue rutrum.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[60%]"></div>
            </div>
        </div>
    </div>
  )
}
