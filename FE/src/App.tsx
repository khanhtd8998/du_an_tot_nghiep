import { useState } from 'react';
import { AlignJustify, Bell, Search, ShoppingCart, User } from 'lucide-react';
import { Input } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import FreeShip from '../src/assets/images/freeship.svg'
import EzChange from '../src/assets/images/ezchange.svg'
import Hotline from '../src/assets/images/hotline.svg'
import Payment from '../src/assets/images/payment.svg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Tạo state để điều khiển menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Đổi trạng thái khi nhấn nút
  };

  return (
    <>
      <div>
        {/* header */}
        <div>
          <div className='bg-[#FF8B00] w-full hidden text-white py-3 px-20 md:flex justify-between items-center'>
            <div className='text-[12px] lg:text-[14px]'>
              Hotline mua hàng: <strong>0988888888</strong> (8:30 - 21:30. Tất cả các ngày trong tuần)
            </div>
            <button className='w-[180px] flex items-center'>
              <Bell className='fill-current size-7 text-white' />
              <span className='text-[12px] p-0 lg:text-[14px]'>Thông báo của tôi</span>
            </button>
          </div>
          <div className='mx-auto px-4 md:px-8 lg:px-16'>
            <div className='nav p-2 flex items-center justify-between md:justify-between md:items-center'>
              <img className='size-24' src='../src/assets/images/logo_fshirt.png' alt="" />

              <ul
                className={`fixed top-0 left-0 w-1/2 bg-[#ccc] h-screen z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0 h-screen' : '-translate-x-full h-screen'
                  } md:hidden`}
              >
                <li className='p-4 text-[14px] border-b'>Sản phẩm mới</li>
                <li className='p-4 text-[14px] border-b'>Sản phẩm hot</li>
                <li className='p-4 text-[14px] border-b'>Bộ sưu tập</li>
                <li className='p-4 text-[14px] border-b'>Về chúng tôi</li>
              </ul>

              <ul className='hidden justify-center space-x-3 md:flex md:space-x-14 lg:space-x-16'>
                <li className='block text-[12px] md:text-[14px] lg:text-[16px]'>Sản phẩm mới</li>
                <li className='block text-[12px] md:text-[14px] lg:text-[16px]'>Sản phẩm hot</li>
                <li className='block text-[12px] md:text-[14px] lg:text-[16px]'>Bộ sưu tập</li>
                <li className='block text-[12px] md:text-[14px] lg:text-[16px]'>Về chúng tôi</li>
              </ul>

              <div className='flex items-center space-x-3'>
                <Input className='hidden lg:block h-[30px]' size="large" placeholder="Tìm kiếm" />
                <div className='flex space-x-3 items-center'>
                  <Search className='size-8 block lg:hidden' />
                  <User className='size-8' />
                  <ShoppingCart className='size-8' />
                  {/* Nút mở menu cho mobile */}
                  <AlignJustify className='size-8 block md:hidden cursor-pointer' onClick={toggleMenu} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header */}

        {/* Banner */}
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://intphcm.com/data/upload/dung-luong-banner-thoi-trang.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://intphcm.com/data/upload/dung-luong-banner-thoi-trang.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://intphcm.com/data/upload/dung-luong-banner-thoi-trang.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://intphcm.com/data/upload/dung-luong-banner-thoi-trang.jpg" alt="" /></SwiperSlide>
        </Swiper>
        <div className='w-full px-10 py-4 gap-5 md:px-16 lg:px-20 lg:py-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex w-full items-center space-x-2'>
            <img src={FreeShip} alt="" />
            <div>
              <p className='text-[12px] md:text-[16px] font-semibold'>Miễn phí vận chuyển</p>
              <p className='text-[12px] md:text-[14px]'>Áp dụng cho mọi đơn hàng từ 500k</p>
            </div>
          </div>
          <div className='flex w-full items-center space-x-2'>
            <img src={EzChange} alt="" />
            <div>
              <p className='text-[12px] md:text-[16px] font-semibold'>Miễn phí vận chuyển</p>
              <p className='text-[12px] md:text-[14px]'>Áp dụng cho mọi đơn hàng từ 500k</p>
            </div>
          </div>
          <div className='flex w-full items-center space-x-2'>
            <img src={Hotline} alt="" />
            <div>
              <p className='text-[12px] md:text-[16px] font-semibold'>Miễn phí vận chuyển</p>
              <p className='text-[12px] md:text-[14px]'>Áp dụng cho mọi đơn hàng từ 500k</p>
            </div>
          </div>
          <div className='flex w-full items-center space-x-2'>
            <img src={Payment} alt="" />
            <div>
              <p className='text-[12px] md:text-[16px] font-semibold'>Miễn phí vận chuyển</p>
              <p className='text-[12px] md:text-[14px]'>Áp dụng cho mọi đơn hàng từ 500k</p>
            </div>
          </div>
        </div>
        {/* End Banner */}
        <div className='w-full px-4 sm:px-10 md:px-20 bg-[#f7f1e3] py-16'>
          <h1 className='text-[24px] font-semibold'>DANH MỤC SẢN PHẨM</h1>
          <div className='grid grid-cols-4 gap-2 sm:gap-4 md:gap-16 mt-4 sm:mt-8'>
            <div className='w-full'>
              <img className='w-full object-cover h-[200px] sm:h-[250px] md:h-[350px]' src="https://intphcm.com/data/upload/dung-luong-banner-thoi-trang.jpg" alt="" />
            </div>
            <div className='w-full'>
              <img className='w-full object-cover h-[200px] sm:h-[250px] md:h-[350px]' src="https://intphcm.com/data/upload/dung-luong-banner-thoi-trang.jpg" alt="" />
            </div>
            <div className='w-full'>
              <img className='w-full object-cover h-[200px] sm:h-[250px] md:h-[350px]' src="https://intphcm.com/data/upload/dung-luong-banner-thoi-trang.jpg" alt="" />
            </div>
            <div className='w-full'>
              <img className='w-full object-cover h-[200px] sm:h-[250px] md:h-[350px]' src="https://intphcm.com/data/upload/dung-luong-banner-thoi-trang.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
