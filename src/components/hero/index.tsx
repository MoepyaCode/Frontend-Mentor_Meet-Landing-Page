import React from 'react'
import { Assets } from '../../assets'

type DeviceTypes = 'mobile' | 'tablet' | 'desktop' | null
enum DeviceEnum {
  mobile = 'mobile',
  tablet = 'tablet',
  desktop = 'desktop'
}

export default function Hero() {
    const [width, setWidth] = React.useState<number>(window.innerWidth)
    const [device, setDevice] = React.useState<DeviceTypes>(null)
  
    React.useEffect(() => {
      if (width < 768) setDevice(DeviceEnum.mobile)
      else if (width < 1280) setDevice(DeviceEnum.tablet)
      else setDevice(DeviceEnum.desktop)
    }, [width])
  
    React.useLayoutEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section className='max-w-[1440px] self-center flex flex-col flex-nowrap gap-[48px] pt-[64px] pb-[32px] xl:py-[64px]'>
            {/* Mobile and Tablet Image */}
            {(device === DeviceEnum.mobile || device === DeviceEnum.tablet) && (
                <img className='relative object-cover min-h-[160px] md:min-h-[303px]' src={Assets.Tablet.imageHero} alt="" />
            )}

            <div className='self-center flex flex-row justify-between gap-[32px] items-center flex-nowrap md:w-[65%] xl:w-auto'>

                {/* Desktop Image Left */}
                {device === DeviceEnum.desktop && (
                    <img className='object-cover min-h-[303px] self-start' src={Assets.Desktop.imageHeroLeft} alt="" />
                )}

                <div className='self-center flex flex-col items-center gap-[24px] px-[32px] text-center xl:px-0 xl:w-[34%]'>
                    <h1 className='font-black text-[40px] xl:text-[64px] text-slate-900 leading-[110%]'>
                        Group Chat <br /> for Everyone
                    </h1>

                    <p className='font-medium xl:text-[18px] text-slate-600 leading-[150%]'>
                        Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
                    </p>

                    <div className=' flex justify-center gap-[16px] flex-wrap'>
                        <button className='px-[40px] py-[16px] bg-cyan-600 xl:hover:bg-[#71C0D4] xl:transition-colors xl:ease-in-out font-black text-white leading-[150%] rounded-full text-nowrap border-none outline-none'>
                            Download <span className='text-cyan-300'>v1.3</span>
                        </button>
                        <button className='px-[40px] py-[16px] bg-purple-600 xl:hover:bg-[#B18BDD] xl:transition-colors xl:ease-in-out font-black text-white leading-[150%] rounded-full text-nowrap border-none outline-none'>
                            What is it?
                        </button>
                    </div>
                </div>

                {/* Desktop Image Left */}
                {device === DeviceEnum.desktop && (
                    <img className='object-cover min-h-[303px]' src={Assets.Desktop.imageHeroRight} alt="" />
                )}
            </div>
        </section>
    )
}
