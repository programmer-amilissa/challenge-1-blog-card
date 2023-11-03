import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex font-sora min-h-screen bg-white flex-col items-center p-24">
      <div className='blog-card rounded-xl bg-white min-h-[350px] shadow-bottom-right shadow-light max-w-[336px]'>
        <Image 
        className='p-4'
        alt="cactus"
        src='/cactus_img.jpg'
        width={300}
        height={200}
        layout="responsive"
        />
        <div className=' px-4 pb-4'>

        <button
        className='rounded-full btn text-primary bg-secondary px-2 py-1 text-xs font-semibold w-20'>
          Design
        </button>
        <span className='flex font-bold pt-4 pb-[6px] text-dark'>
          Embracing Minimalism
        </span>
        <p className='text-dark-2 pb-5 text-[13px]'>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
        <span className='text-dark-2 text-xs'>Annie Spratt</span>
        </div>
      </div>
    </main>
    
  )
}
