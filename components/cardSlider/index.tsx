'use client';
import React from 'react';
import ProfileCardCarousel from './profileCarousel';

interface GridItemProps {
  title: string;
  description: string;
}

const GridItem: React.FC<GridItemProps> = ({ title, description }) => (
  <div>
    <div className="bg-white w-[129px] h-[1px] mb-2"></div>
    <p className="font-poppins font-black text-[18px]">{title}</p>
    <p className="font-poppins text-[16px] text-[#FFFFFFCC]">{description}</p>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid gap-3 sm:grid-cols-2">
      {/* Left Column */}
      <div className="text-white">
        <h1 className="font-poppins font-bold text-[25px] sm:font-black sm:text-[45px] sm:leading-[62.4px]">최고의 실력을 가진</h1>
        <h1 className="font-poppins font-bold text-[25px] sm:font-black sm:text-[45px] sm:leading-[62.4px]">외국인 인재를 찾고 계신가요?</h1>
        <h2 className="font-poppins font-semibold text-[15px] sm:font-extrabold sm:text-[20px] text-[#FFFFFFE5] mt-2">법률 및 인사관리 부담없이</h2>
        <h2  className="font-poppins font-semibold text-[15px] sm:font-extrabold sm:text-[20px] text-[#FFFFFFE5]">
          1주일 이내에 원격으로 채용해보세요.
        </h2>
        <p className="hidden sm:block font-poppins font-extrabold text-[15px] my-3">개발자가 필요하신가요?</p>

        {/* Grid Section for Stats */}
        <div className="hidden sm:block grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <GridItem title="평균 월 120만원" description="임금을 해당 국가를 기준으로 계산합니다." />
          <GridItem title="최대 3회 인력교체" description="막상 채용해보니 맞지 않아도 걱정하지 마세요." />
          <GridItem title="평균 3일, 최대 10일" description="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다." />
        </div>
      </div>

      {/* Right Column */}
      <div>
        <ProfileCardCarousel />
        <div className="block sm:hidden mt-4">
        <div className=" containerCheck grid grid-cols-2">
    <div className="checkbox-item flex mb-4">
      <img src="/images/Checkbox.png" alt="Checked"/>
      <span className='font-bold ml-2'>한국어 능력</span>
    </div>
    <div className="checkbox-item flex mb-4">
      <img src="/images/Checkbox.png" alt="Checked"/>
      <span className='font-bold ml-2'>업무 수행 능력</span>
    </div>
    <div className="checkbox-item flex">
      <img src="/images/Checkbox.png" alt="Checked"/>
      <span className='font-bold ml-2'>검열 여부</span>
    </div>
    <div className="checkbox-item flex">
      <img src="/images/Checkbox.png" alt="Checked"/>
      <span className='font-bold ml-2'>평판 조회</span>
    </div>
    <a href="#" className="link mt-4 font-bold text-[#fffd59] underline mb-7">개발자가 필요하신가요?</a>
  </div>
  </div>
      </div>
    </div>
  );
};

export default HeroSection;
