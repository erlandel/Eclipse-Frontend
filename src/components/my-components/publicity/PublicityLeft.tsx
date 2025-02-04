import Image from 'next/image'


export const PublicityLeft = () => {
  return (
      <>
          <div className="relative w-1/2 h-64  mx-auto mt-2 rounded-sm hidden lg:block animate__animated animate__zoomInLeft">
          <Image
              src={"/images/publicity/1.webp"}
              alt="NextUI hero Image with delay"
              fill
              sizes="(50vw, 50vh)"
              priority
              className="object-cover object-center rounded-xl"
          />
          </div>
        
      </>
  )
}
