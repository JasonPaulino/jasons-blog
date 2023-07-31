import Image from "next/image"

export const ProfilePic = () => {
  return (
    <section className='w-full mx-auto'>
        <Image
            className='object-cover h-48 w-48 border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
            src='/images/Jason_Paulino_Marcy_Headshot.jpg'
            width={200}
            height={200}
            alt='picture of Jason Paulino'
            priority={true}
        />
    </section>
  )
}