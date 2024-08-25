import { Assets } from '../../assets'

export default function Hero() {
    return (
        <section className='flex flex-col flex-nowrap gap-[48px] pt-[64px] pb-[32px]'>
            <img className='relative object-cover min-h-[160px] md:min-h-[303px]' src={Assets.Tablet.imageHero} alt="" />

            <div className='self-center flex flex-col items-center gap-[24px] px-[32px] text-center md:w-[65%]'>
                <h1 className='font-black text-[40px] text-slate-900 leading-[110%]'>
                    Group Chat <br /> for Everyone
                </h1>

                <p className='font-medium text-slate-600 leading-[150%]'>
                    Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
                </p>

                <div className=' flex justify-center gap-[16px] flex-wrap'>
                    <button className='px-[40px] py-[16px] bg-cyan-600 font-black text-white leading-[150%] rounded-full text-nowrap border-none outline-none'>
                        Download <span className='text-cyan-300'>v1.3</span>
                    </button>
                    <button className='px-[40px] py-[16px] bg-purple-600 font-black text-white leading-[150%] rounded-full text-nowrap border-none outline-none'>
                        What is it?
                    </button>
                </div>
            </div>
        </section>
    )
}
