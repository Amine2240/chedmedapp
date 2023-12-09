import logo1 from "../../assets/images/moon.svg";
import logo2 from "../../assets/images/handSHake.svg";
import logo4 from "../../assets/images/logout.svg";
const index = () => {
  return (
    <nav className="flex items-center p-[10px] justify-between ">
      <div className="flex items-center ">
        <img src={logo2} />
        <h1 className="pl-[10px] font-bold text-2xl ">CHED MED</h1>
      </div>
      <div className="flex items-center">
        <h1 className="pr-[10px] font-bold">Darko Staar</h1>
        {/* <img src={logo3} className="pl-[10px] pr-[5px]" /> */}
        <img src={logo4} className="pl-[10px] pr-[5px] w-10 h-10" />
        <img src={logo1} className="pl-[10px] w-8 h-8  bg" />
      </div>
    </nav>
  );
};

export default index;
