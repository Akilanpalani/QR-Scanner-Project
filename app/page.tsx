import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300">
      <div className='flex flex-col items-center rounded-md bg-white p-2 w-[300px] h-[500px] drop-shadow-2xl cursor-pointer hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]'>
            <Image
            className='rounded-md'
              src="/image-qr-code.png"
              alt="Image"
              width={290}
              height={200}
            />
            <h1 className="text-black m-6 font-bold text-center font-serif">Improve your front-end skills by building projects</h1>
            <p className="text-black text-center text-[12px] font-sans">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            <p className="text-black text-center text-[12px] m-7">Challenge by <a className="text-blue-500" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a className="text-blue-500" href="https://github.com/akilan" target="_blank">Akilan</a>.</p>
      </div>
    </main>
  )
}
