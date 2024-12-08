import FlashSale from "./Component/FlashSale";
import Landingtop from "./Component/Landingtop";
import Mainfooter from "./Component/Mainfooter";
import MainMainheader from "./Component/Mainheader";

export default function Home() {
  return (
<div className='max-w-[1440px] h-auto'>
<MainMainheader/>
<Landingtop/>
<FlashSale/>
<Mainfooter/>
</div>
  );
}
