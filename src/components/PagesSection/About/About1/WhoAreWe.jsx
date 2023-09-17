import { BiCheck } from 'react-icons/bi';
import img1 from '../../../../assets/images/Pages/About/About1/about2.jpg'
import img2 from '../../../../assets/images/Pages/About/About1/about3.jpg'



export const WhoAreWe = () => {
  return (
    <div className='mt-20 md:mt-96 mb-40'>
        <div className='myContainer'>
           <div className='flex flex-col lg:flex-row gap-12'>
           <div className="w-full lg:w-1/2 order-last md:order-first mt-72 md:mt-0">
                  <span>
                  <svg viewBox="0 0 409.6 362.5" xmlns="http://www.w3.org/2000/svg" class="svg-inject icon-svg icon-svg-md mb-2 w-14 h-14"><path class="lineal-stroke" d="M343.4 302.9L61 302.5c-25.3-.2-47.5-16.8-54.8-40.9l-3.9-12.9c-7.1-24.2 2.5-50.3 23.5-64.2L262.1 29.8c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.3 249.8c2.4 6.4-.9 13.5-7.3 15.8-1.3.5-2.8.7-4.2.7zM261.8 59.4L39.3 205c-12 7.9-17.4 22.8-13.4 36.6l3.8 12.9c4.2 13.8 16.8 23.3 31.2 23.4l265.8.4-64.9-218.9z"></path><path class="lineal-stroke" d="M138 362.5c-40.4 0-72.8-31.1-73.6-70.8 0-6.8 5.5-12.3 12.3-12.3 6.6 0 12.1 5.2 12.3 11.8.6 26.2 22.1 46.7 49 46.7 14.2 0 27.7-6.2 37-16.9 4.5-5.1 12.2-5.7 17.4-1.2 5.1 4.5 5.7 12.2 1.2 17.4-14 16.1-34.3 25.3-55.6 25.3z"></path><path class="lineal-fill3" d="M183.4 96l57.8 194.5 102.1.1-74.5-250.5L183.4 96z"></path><path class="lineal-stroke" d="M343.4 302.9l-102.1-.1c-5.4 0-10.2-3.6-11.8-8.8L171.6 99.5c-1.6-5.2.5-10.8 5.1-13.8l85.4-55.9c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.5 250.6c1.9 6.5-1.8 13.4-8.3 15.3-1.1.2-2.3.4-3.4.4zm-92.9-24.7l76.4.1-65.1-218.9-63.9 41.8 52.6 177z"></path><path class="lineal-stroke" d="M351.8 330.6c-5.4 0-10.2-3.6-11.8-8.8l-91-306c-2.1-6.5 1.3-13.4 7.8-15.6 6.5-2.1 13.4 1.3 15.6 7.8.1.3.2.5.2.8l91 305.9c1.9 6.5-1.8 13.4-8.3 15.3-1.1.4-2.3.6-3.5.6zM338 91.7c-6.8 0-12.3-5.5-12.3-12.3 0-1.8.4-3.6 1.2-5.3l13.4-28.5c2.9-6.2 10.2-8.8 16.4-5.9 6.2 2.9 8.8 10.2 5.9 16.4l-13.4 28.5c-2.1 4.3-6.4 7.1-11.2 7.1zm28.2 64.9c-6.8 0-12.3-5.5-12.3-12.3 0-5.7 3.9-10.6 9.4-12l31.1-7.5c6.6-1.5 13.2 2.6 14.7 9.3 1.5 6.5-2.5 13-9 14.7l-31.2 7.4c-.8.3-1.8.4-2.7.4zm29.1 90c-2.7 0-5.4-.9-7.5-2.6l-24.9-19.4c-5.4-4.2-6.3-11.9-2.2-17.3s11.9-6.3 17.3-2.2l24.9 19.4c5.4 4.2 6.3 11.9 2.1 17.3-2.3 3-5.9 4.7-9.7 4.8z"></path></svg>
                  </span>
                  <h1 className="text-4xl md:text-[39px] font-bold text-[#343f52] mt-8">
                  Who Are We?
                  </h1>
                  <p className="py-8 text-[#60697b] text-xl md:text-[21px] font-medium tracking-wide">We are a digital and branding company that believes in the power of creative strategy and along with great design.</p>
                  <p className='mb-8 leading-6'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum. Unde ea quidem exercitationem. Recusandae dicta mollitia, quis libero reiciendis natus sit error est fugit, iusto laborum velit commodi 
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8'>
                    <div className='flex flex-row gap-4  justify-center'>
                        < BiCheck className='md:ml-0 w-8 h-8 md:w-10 lg:w-9 md:h-9 lg:h-7 p-1 rounded-full text-[#3f78e0] bg-[#dce7f9]' />
                        <p>Aenean eu leo quam ornare curabitur blandit tempus</p>
                    </div>
                    <div className='flex flex-row gap-4  justify-center md:mt-0 mt-4'>
                        < BiCheck className='w-8 h-8 md:w-10 lg:w-9 md:h-9 lg:h-7 p-1 rounded-full text-[#3f78e0] bg-[#dce7f9]' />
                        <p>Etiam porta sem malesuada magna mollis euismod.</p>
                    </div>
                    <div className='flex flex-row gap-4  justify-center mt-4'>
                        < BiCheck className='w-8 h-8 md:w-10 lg:w-9 md:h-9 lg:h-7 p-1 rounded-full text-[#3f78e0] bg-[#dce7f9]' /> 
                        <p>Nullam quis risus eget urna mollis ornare donec elit.</p> 
                    </div>
                    <div className='flex flex-row gap-4 justify-center mt-4 md:mb-0 mb-10'>
                       < BiCheck className='w-8 h-8 md:w-10 lg:w-9 md:h-9 lg:h-7 p-1 rounded-full text-[#3f78e0] bg-[#dce7f9]' />
                        <p>Fermentum massa vivamus faucibus amet euismod.</p>
                    </div>
                  </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end mt-20 relative">
               <div className='w-full h-full md:w-[550px] lg:w-[364px] md:h-[483px] lg:h-[364px]  '>
                  <img className='w-full h-full rounded-lg' src={img1} alt="" />
               </div>
               <div className="w-full h-full md:w-[450px] lg:w-[286px] md:h-[380px] lg:h-[286px] absolute -bottom-[400px] md:-bottom-24 lg:bottom-0 md:left-2">
                   <img src={img2} className='w-full h-full rounded-lg' alt="" />
               </div>
          </div>
           </div>
        </div>
    </div>
  )
}
