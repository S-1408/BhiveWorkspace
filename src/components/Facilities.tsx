import React from 'react'

const Facilities = () => {

     const facilities= [
 {id:1 ,event:'Community Events',icon:"/media/star.png"},
 {id: 2,event:' Gym Facilities ' ,icon:"/media/gym.png"},
 {id: 3,event:'Cafe  Tea Bar',icon:"/media/cup.png"},
 {id: 4,event:"High-Speed WiFi" ,icon:"/media/wifi.png"},
 {id:5 ,event:"Affordable",icon:"/media/rs.png"}, 
 {id:6 ,event:"Comfort Lounges",icon:"/media/lounge.png"}, 
 {id:7 ,event:"Quick Booking",icon:"/media/time.png"},
 {id:8 ,event:"Sports Area",icon:"/media/zoom.png"},
  ]

  return (
   <div className="px-20 flex justify-center flex-col mb-8 "> 
        <p className="text-4xl font-700 mb-4 ">Why Choose us?</p>
        <div className="flex flex-wrap gap-4 ">
       {
        facilities.map((fac)=>(
          <div key={fac.id } className=" flex items-center w-full sm:w-[48%] md:w-[31%] lg:w-[23%] p4 border-b border-r border-gray-100"
          >
     
          <img src={fac.icon} alt=" " className="w-6 h-6 object-contain mr-3" />
           <p className="p-4 font-inter ">{fac.event}</p>
          </div>
        ))
       }
       </div>
       </div>
  )
}

export default Facilities