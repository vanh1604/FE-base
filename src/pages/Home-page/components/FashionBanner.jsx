import { Button, Image } from "antd";

const FashionBanner = () => {
  return (
    <div className="border-b border-gray-200">
      {" "}
      {/* Đổi border nhẹ hơn */}
      <div className="max-w-400 mx-auto px-app flex flex-col md:flex-row items-center py-30 border border-gray-500 ">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <div className="mb-4 text-gray-500 font-medium flex items-center gap-2">
            <span className="w-12 h-0.5 bg-gray-400 mr-2"></span>
            OUR BESTSELLERS
          </div>
          <h1 className="text-[70px] md:text-[90px] font-serif font-bold leading-[1.05] mb-8">
            Latest <br /> Arrivals
          </h1>
          <Button className="mt-2 px-10 py-5 bg-black text-white rounded-full font-bold text-xl shadow hover:bg-gray-800 transition uppercase tracking-widest">
            Shop Now
          </Button>
        </div>

        {/* Right Content (Image) */}
        <div className="flex-1 flex items-center justify-center h-full">
          <Image
            src="https://forever-frontend-pink.vercel.app/assets/hero_img-DOCOb6wn.png"
            alt="Fashion Model"
            className="object-contain h-full w-full max-w-[500px] bg-pink-100"
            preview={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FashionBanner;
