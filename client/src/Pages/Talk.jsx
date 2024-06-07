import { useState } from "react";
import { FaMicrophone } from "react-icons/fa6";

const Talk = () => {
  const [onMic,setOnMic] = useState(false)

  const handleMic = ()=>{
    if(onMic){
      setOnMic(false)
    }else{
      setOnMic(true)
    }
  }
  return (
    <div>
      <div className="flex h-[90vh] w-full mt-[0.2rem] justify-center items-center -mt-[5rem] bg-gray-500">
        <div className="w-[30%] flex justify-center ">
          <button >
            <FaMicrophone size={40} className="m-2 text-black" onClick={handleMic}/>
          </button>
          {onMic?(
            <div>
                <button>click mic to on</button>
            </div>
          ):(
            <div>
                <button>click mic to Off</button>
            </div>
          )}
        </div>
        <div className="w-[50%] flex justify-center  border-l ">
         <textarea name="" id="" className="bg-white m-2 rounded-sm h-[30rem] w-[40rem] text-black pl-10 pt-4 ml-2 shadow-2xl focus:border-pink-600" placeholder="SPEAK IN MIC " ></textarea>
        </div>
      </div>
    </div>
  )
}

export default Talk

