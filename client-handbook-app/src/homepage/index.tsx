import { useState } from "react";
import Slider from "./slider/index.tsx";
import "./style.scss";

interface sliderArrayItem {
  index: number,
  title: String,
  sentence: String,
  img: String,
}

export default function HomePage() {
    const [sliderImg, setSliderImg] = useState<sliderArrayItem[]>([
        {   
            index: 0,
            title: "Chào mừng các bạn đến với Hòa Lạc",
            sentence: "Vũ trụ thông tin về Hòa Lạc",
            img: "https://daihoc.fpt.edu.vn/wp-content/uploads/2021/02/144409980_10164565272570062_7625633052716715320_o.jpg"
        },
        {   
            index: 1,
            title: "Những sự kiện đầy thú vị",
            sentence: "Hằng năm, có tới hơn 20 sự kiện được tổ chức tại khuôn viên trường Đại Học FPT",
            img: "https://hanoi.fpt.edu.vn/wp-content/uploads/2024/10/C8-scaled.jpg"
        },
        {   
            index: 2,
            title: "Canteen trường FPT",
            sentence: "Cung cấp các món ăn ngon, rẻ, chất lượng, sạch sẽ,... và siêu thì có thể mua cả thế giới",
            img: "https://hoalac-school.fpt.edu.vn/wp-content/uploads/FPTSchool-0081-scaled.jpg"
        },
    ]);
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const handleNext = () => {
      if(sliderIndex === sliderImg.length - 1) {setSliderIndex(0); return}
      setSliderIndex(sliderIndex + 1);
    }
    const handlePrevious = () => {
      if(sliderIndex === 0) {setSliderIndex(sliderImg.length - 1); return}
      setSliderIndex(sliderIndex - 1);
    }
    
    // console.log(sliderImg[sliderIndex]);
  return (
    <div className="homepage">
      <div className="relative slider">
        <div className="arrow flex items-center h-full w-full justify-between absolute z-10">
          <div onClick={handlePrevious} className="left-arrow h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.3"
              stroke="white"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div onClick={handleNext} className="right-arrow h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.3"
              stroke="white"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <Slider sliderUrl = {sliderImg[sliderIndex]}/>
      </div>
    </div>
  );
}
