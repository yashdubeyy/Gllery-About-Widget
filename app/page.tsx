import TabsInfo from "./TabsInfo";
import GalleryInfo from "./galleryInfo";
export default function Home() {
  return (
    // main container 
    <div className="grid grid-cols-12 gap-[60px] p-[60px] w-screen h-screen bg-[#191B1F]">
      {/* Left Empty Container */}
      <div className="col-span-6 h-[694px] rounded-[27px] hidden md:block">
      </div>
      {/* Right Container  */}
      <div className="grid grid-rows-2 gap-5 col-span-6 h-[694px]">
        {/* Top Right Container  */}
        <div className="row-span-1 rounded-[27px] bg-[#363c43] overflow-hidden">
          <TabsInfo />
        </div>
        {/* Bottom Right Container  */}
        <div className="row-span-1 rounded-[27px] bg-[#363c43]  overflow-hidden">
          <GalleryInfo />
        </div>
      </div>
    </div>
  );
}