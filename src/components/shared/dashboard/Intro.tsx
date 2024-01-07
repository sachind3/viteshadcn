import BANNER1 from "./../../../assets/img/banner-1.png";
import BANNER2 from "./../../../assets/img/banner-2.png";
const Intro = () => {
  return (
    <div className="p-4 bg-white rounded grid grid-cols-3 gap-4 mt-4">
      <div className="col-span-1 rounded overflow-hidden h-52">
        <img
          src={BANNER1}
          alt="banner 1"
          className="w-full object-cover h-52"
        />
      </div>
      <div className="col-span-2 rounded overflow-hidden h-52">
        <img
          src={BANNER2}
          alt="banner 2"
          className="w-full object-cover h-52"
        />
      </div>
    </div>
  );
};
export default Intro;
