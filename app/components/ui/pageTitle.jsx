import Image from "next/image";
export default function Title({ children, image = true, side = false }) {
  if (!side) {
    return (
      <>
        {image && (
          <div className="">
            <Image
              src="/section.svg"
              alt="Hero"
              width={1572}
              height={795}
              className="hero-color absolute top-0 -z-10"
            />
          </div>
        )}
        <div className="hidden md:flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00adf4] to-transparent  w-full" />
          </div>
        </div>
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#2927b9]"></span>
            <span className="flex flex-row bg-[#2927b9] w-fit text-[#00adf4] font-bold p-2 px-5 text-xl rounded-md">
              {children}
            </span>
            <span className="w-24 h-[2px] bg-[#2927b9]"></span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="hidden lg:flex flex-col items-center absolute top-36 -right-8">
        <span className="bg-[#2d1e92] w-fit  text-[#00adf4] font-bold rotate-90 p-2 px-5 text-xl rounded-md">
          {children}
        </span>
        <span className="h-36 w-[2px] bg-[#2927b9]"></span>
      </div>
    );
  }
}

export function ProTitle ({children}){
    return (
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#2927b9] absolute left-0  w-fit  text-[#00adf4] font-bold px-5 py-3 text-xl rounded-md">
            {children}
          </span>
          <span className="w-full h-[2px] bg-[#2927b9]"></span>
        </div>
      </div>
    );

}