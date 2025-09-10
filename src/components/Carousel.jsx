import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const data = [
    {
        image: '/images/carousel/img1.webp',
        title: "Great Goblin Heist"
    },
    {
        image: '/images/carousel/img2.webp',
        title: "Party Wizard Party time"
    },
    {
        image: '/images/carousel/img3.webp',
        title: "Tale of Goblin wizard"
    },
    {
        image: '/images/carousel/img4.webp',
        title: "Attack"
    },
    {
        image: '/images/carousel/img5.webp',
        title: "Come Back Builder"
    }
]


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
  className='bg-black hover:bg-slate-900 border border-white hover:cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 -right-36 w-[100px] h-[100px] rounded-l-full flex items-center justify-center'
  onClick={onClick}
>
  <FiChevronRight className="text-white text-5xl" />
</div>

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
  className='bg-black hover:bg-slate-900 border border-white hover:cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 -left-36 w-[100px] h-[100px] rounded-r-full flex items-center justify-center'
  onClick={onClick}
>
  <FiChevronLeft className="text-white text-5xl" />
</div>
  );
}


const Carousel = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
    <div className="mt-6">
      <ul className="flex justify-center gap-2">{dots}</ul>
    </div>
  ),
  customPaging: i => (
    <div className="w-4 h-4 rounded-full bg-blue-400 transition-all duration-300"></div>
  ),
  };
  return (
    
    <>
    <style>
        {`
          .slick-dots li.slick-active div {
            background-color: #000000
;
            width: 1.25rem;
            height: 1.25rem;
          }
        `}
      </style>
        <div className='w-full h-[650px] bg-white px-36 py-14  '>
            <div className='container m-auto  h-[450px] w-1/2  mb-70'>
            
                <Slider {...settings} className=''>
                    {data.map((item, index) => {
                        return (
        
                            <div key={index} className='w-1/2 h-3/4 object-contain m-auto '>
                                <div className='w-full h-full object-contain '>
                                    <img src={item.image} alt="item.title" className='rounded-3xl'/>
                                </div>
                                <div className='title m-auto text-4xl font-bold text-black  '>
                                   <p className='text-center text-xl md:text-2xl lg:text-3xl font-semibold mt-4'>
  {item.title}
</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </Slider>
            </div>
        
        </div>
    </>
  )
}

export default Carousel
