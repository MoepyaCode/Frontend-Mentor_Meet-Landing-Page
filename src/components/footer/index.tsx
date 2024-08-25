
export default function Footer() {
    return (
        <footer>

            {/* #1 */}
            <div className='relative flex justify-center items-center z-10'>
                <div className='w-[1px] h-[108px] bg-slate-300' />
                <div className='absolute bottom-[-26px] bg-white w-[56px] aspect-square rounded-full border border-slate-300 grid place-items-center text-slate-600 font-black leading-[150%]'>
                    02
                </div>
            </div>

            {/* #2 */}
            <div className='relative grid place-items-center px-[32px] py-[64px] xl:px-[80px] xl:py-[112px] bg-[url(/src/assets/mobile/image-footer.jpg)] md:bg-[url(/src/assets/tablet/image-footer.jpg)] xl:bg-[url(/src/assets/desktop/image-footer.jpg)] bg-cover bg-no-repeat  before:absolute before:w-full before:h-full before:bg-cyan-600  before:opacity-90'>
                <div className='z-10 flex flex-col gap-[24px] text-center xl:text-left text-white md:w-[72.5%] xl:w-auto max-w-[1440px] xl:flex xl:flex-row xl:flex-nowrap xl:justify-between xl:gap-[32px]'>
                    <h2 className='font-black text-[32px] md:text-[36px] xl:text-[40px] leading-[110%] xl:max-w-[445px]'>
                        Experience more together
                    </h2>

                    <p className='font-medium xl:text-[18px] leading-[150%] xl:max-w-[355px]'>
                        Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
                    </p>

                    <button className='self-center xl:self-start px-[40px] py-[16px] bg-purple-600 xl:hover:bg-[#B18BDD] xl:transition-colors xl:ease-in-out font-black text-white leading-[150%] rounded-full text-nowrap border-none outline-none'>
                        Download <span className='text-purple-300'>v1.3</span>
                    </button>
                </div>
            </div>
        </footer>
    )
}
