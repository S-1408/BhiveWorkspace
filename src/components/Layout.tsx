import { publicUrl } from "../utils/publicUrl"

export const BottomLayout =()=>{
    return (
        <div>
            <div className="px-4 md:px-20 py-10">
  {/* Heading */}
  <p className="text-4xl font-semibold mb-6 text-center md:text-left">
    Download our app now
  </p>

  {/* Shadow Card */}
  <div className="relative bg-white border shadow-lg rounded-2xl flex flex-col md:flex-row overflow-visible p-4 md:p-6 min-h-[280px] md:min-h-[340px]">
    
    {/* Image Wrapper - fixed size and bottom aligned */}
    <div className="w-full md:w-[240px] flex justify-center md:justify-start relative z-10">
      <img
        src={publicUrl("/media/group1.png")}
        alt="Group"
        className="w-[180px] md:w-[220px] lg:w-[260px] object-contain 
                   md:absolute md:bottom-0 md:translate-y-[30%] 
                   md:-top-[60px] md:left-0"
      />
    </div>

    {/* Content */}
    <div className="w-full flex flex-col justify-center items-center md:items-end text-center md:text-right">
      <p className="text-sm md:text-base text-gray-700 mb-4 max-w-full md:max-w-[90%]">
        Boost your productivity with the BHIVE Workspace app. Elevate your workspace,
        collaborate efficiently, and unlock exclusive perks.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
        <img
          src={publicUrl("/media/googlestore.png")}
          alt="Google Play"
          className="w-[130px] md:w-[146px] h-[40px] object-contain"
        />
        <img
          src={publicUrl("/media/appstore.png")}
          alt="App Store"
          className="w-[130px] md:w-[146px] h-[40px] object-contain"
        />
      </div>
    </div>
  </div>
</div>
        </div>
    )
}


export const HeaderLayout = () => {
  return (
     <div className="flex flex-col lg:flex-row items-center sm:px-6 lg:px-8 py-8 gap-8">
  {/* Image Section */}
  <div className="relative w-full max-w-7xl aspect-[929/754]">
    <img src={publicUrl("/media/bg-img.png")} alt="Background" className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="font-bold text-center sm:text-xl md:text-2xl lg:text-6xl sm:px-4">
        Host your meeting with world-class amenities. Starting at ₹199/-!
      </p>
    </div>
  </div>

  {/* Video Section */}
  <div className="relative md:w-[388px] lg:w-[550px]  md:h-[388px] lg:h-[550px] rounded-lg overflow-hidden">
    <video
      src={publicUrl("/media/Coworking-video.mp4")}
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
    {/* Overlay polygon that appears to come from left */}
   <div className="absolute inset-0 z-10 pointer-events-none right-0">
      <div className="w-full h-full custom-overlay" />
    </div>
  </div>
   
</div>
  )
}

