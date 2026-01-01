import { useState } from "react";
import { Pvideos } from "../../../constant/data";
import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";



const Physics = () => {
  const [show , setshow] = useState("lectures")
  // استيراد كل ملفات PDF من نفس الفولدر

  return (
    <div className="flex items-center  text-white justify-center flex-col">
      <div className=" items-center text my-2 justify-around  cursor-pointer  mt-3 w-50 px-4 h-10 bg-blue-100/10 rounded-full flex   ">
        <button onClick={()=>setshow("videos")} className={`${show==="videos"?"active-btn":""}`} >Videos</button>
        <button onClick={()=>setshow("lectures")}  className={`${show==="lectures"?"active-btn":""}`} >lectures</button>
      </div>
      {show === "lectures" &&<Lectures/> }
      {show === "videos"&&<Videos/> }
    </div>
  );
};
function Lectures (){
  const pdfFiles = import.meta.glob("./*.pdf", { eager: true });

  // تحويلهم لـ array + ترتيبهم أبجديًا
  const pdfs = Object.entries(pdfFiles).sort(([a], [b]) =>
    a.localeCompare(b)
  );
  return(
    <div className="container w-90 max-lg:w-60 pt-2 py-4 bg-white/5 text-white mt-5 rounded-lg transition duration-300 ease-in-out">
      {pdfs.map(([path, file], index) => {
        const fileName = path
          .split("/")
          .pop()
          .replace(".pdf", "");

        return (
          <div
            key={index}
            className=" border-blue-700 bg-white/10 mt-2 rounded-lg w-full flex justify-center items-center hover:bg-blue-300/20 transition"
          >
            <a
              href={file.default}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-center max-lg:text-sm no-underline text-white w-full"
            >
              {fileName}
            </a>
          </div>
        );
      })}
    </div>
  )
}

function Videos (){
  return(
    <div>
      {Pvideos.map((video)=>(
        <div className=" items-center rounded-2xl py-2 my-2 px-4 bg-blue-200/30" key={video.id}>
          <p className="text-blue-200 text-center font-bold">{video.title}</p>

    <MediaController
      style={{
        width: "100%",
        aspectRatio: "16/9",
      }}
    >
      <ReactPlayer
        slot="media"
       src={video.link}
        controls={false}
        style={{
          width: "100%",
          height: "100%",
          "--controls": "none",
        }}
      ></ReactPlayer>
      <MediaControlBar>
        <MediaPlayButton />
        <MediaSeekBackwardButton seekOffset={5} />
        <MediaSeekForwardButton seekOffset={5} />
        <MediaTimeRange />
        <MediaTimeDisplay showDuration />
        <MediaMuteButton />
        <MediaVolumeRange />
        <MediaPlaybackRateButton />
        <MediaFullscreenButton />
      </MediaControlBar>
    </MediaController>
    </div>
      ))}
  </div>
  );
} 
export default Physics;
