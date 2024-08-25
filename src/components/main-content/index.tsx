import { Assets } from '../../assets'

export default function MainContent() {
    return (
        <section className='self-center max-w-[1440px] px-[32px] pt-[32px] md:pt-[56px] pb-[64px] flex flex-col  gap-[64px]'>

            {/* #1 */}
            <div className='flex flex-col items-center'>
                <div className='w-[1px] h-[80px] bg-slate-300 ' />
                <div className='w-[56px] aspect-square rounded-full border border-slate-300 grid place-items-center text-slate-600 font-black leading-[150%]'>
                    01
                </div>
            </div>

            {/* 2 */}
            <div className='flex flex-wrap justify-around xl:justify-center xl:gap-[32px]'>
                <img className='object-fill xs:object-contain max-h-[144px] md:max-h-[160px] xl:max-h-[256px] rounded-[8px] w-full xs:w-auto mb-[16px]' src={Assets.Desktop.imageWomanInVideoCall} alt="" />
                <img className='object-fill xs:object-contain max-h-[144px] md:max-h-[160px] xl:max-h-[256px] rounded-[8px] w-full xs:w-auto mb-[16px]' src={Assets.Desktop.imageWomenVideoChatting} alt="" />
                <img className='object-fill xs:object-contain max-h-[144px] md:max-h-[160px] xl:max-h-[256px] rounded-[8px] w-full xs:w-auto mb-[16px]' src={Assets.Desktop.imageMenInMeeting} alt="" />
                <img className='object-fill xs:object-contain max-h-[144px] md:max-h-[160px] xl:max-h-[256px] rounded-[8px] w-full xs:w-auto' src={Assets.Desktop.imageManTexting} alt="" />
            </div>

            {/* 3 */}
            <div className='flex flex-col gap-[32px] text-center md:self-center md:w-[67.5%] xl:w-[40%]'>
                <div className='flex flex-col gap-[16px]'>
                    <h3 className='font-black  text-[12px] md:text-[14px] xl:text-[16px] text-cyan-600 leading-[110%] tracking-[4px] uppercase'>
                        Built for modern use
                    </h3>
                    <h2 className='font-black text-slate-900 text-[32px] md:text-[36px] xl:text-[40px] leading-[110%]'>
                        Smarter meetings, all in one place
                    </h2>
                </div>

                <p className='font-medium xl:text-[18px] text-slate-600 leading-[150%]'>
                    Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.
                </p>
            </div>

        </section>
    )
}
