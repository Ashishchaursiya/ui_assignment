import Image from 'next/image';

interface FooterLinkProps {
  imageSrc: string;
  altText: string;
  title: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ imageSrc, altText, title }) => (
  <div className="sm:col-span-2 flex flex-col items-start">
    <Image src={imageSrc} alt={altText} width={40} height={40} className="mb-2" />
    <p className="font-poppins text-[14px] font-black leading-[21px] text-left">{title}</p>
    <div className="flex items-center">
      <p className="font-poppins text-[14px] font-medium leading-[21px] text-left inline">바로가기 </p>
      <Image src="/images/arrow.png" alt="arrow" width={20} height={20} className="mb-2 inline" />
    </div>
  </div>
);

export default function Footer() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 sm:mt-20">
        <div className="grid sm:grid-cols-12 p-3 gap-x-3">
          <div className="sm:col-span-3">
            <Image src="/images/flogo.png" alt="footer logo" width="187" height="34" className="mb-2" />
            <p className="font-poppins text-sm font-black leading-[21px] text-left">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <p className="font-poppins text-[13px] font-black leading-[19.5px] text-left text-[#5e626e]">
              010-0000-0000
            </p>
            <p className="font-poppins text-[13px] font-black leading-[19.5px] text-left text-[#5e626e]">
              aaaaa@naver.com
            </p>
          </div>

          
          <FooterLink imageSrc="/images/code.png" altText="code image" title="해외 개발자 원격 채용" />
          <FooterLink imageSrc="/images/user.png" altText="user image" title="외국인 원격 채용 (비개발)" />
          <FooterLink imageSrc="/images/kor.png" altText="kor image" title="한국어 가능 외국인 채용" />
          <FooterLink imageSrc="/images/setting.png" altText="setting image" title="해외 개발자 활용 서비스" />
        </div>

        <div className="grid sm:grid-cols-12 p-3 gap-x-5">
          <div className="sm:col-span-3">
            <p className="font-poppins text-[12px] font-black leading-[18px] text-left">상호명 </p>
            <p className="font-poppins text-[13px] leading-[18px] text-left">하이퍼하이어</p>
            <p className="font-poppins text-[13px] font-black leading-[18px] text-left">Hyperhire India Private Limited</p>
          </div>
          <div className="sm:col-span-2">
            <p className="font-poppins text-[12px] font-black leading-[18px] text-left">대표 CEO </p>
            <p className="font-poppins text-[13px] leading-[18px] text-left">김주현</p>
            <p className="font-poppins text-[13px] font-black leading-[18px] text-left">Juhyun Kim</p>
          </div>
          <div className="sm:col-span-2">
            <p className="font-poppins text-[12px] font-black leading-[18px] text-left">사업자등록번호 CIN </p>
            <p className="font-poppins text-[13px] leading-[18px] text-left">427-86-01187</p>
            <p className="font-poppins text-[13px] font-black leading-[18px] text-left">U74110DL2016PTC290812 </p>
          </div>
          <div className="sm:col-span-5">
            <p className="font-poppins text-[12px] font-black leading-[18px] text-left">주소 ADDRESS </p>
            <p className="font-poppins text-[13px] leading-[18px] text-left">서울특별시 강남대로 479, 지하 1층 238호</p>
            <p className="font-poppins text-[13px] font-black leading-[18px] text-left">
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
            </p>
          </div>
        </div>
        <p className="font-poppins text-[13px] font-black leading-[19px]">ⓒ 2023 Hyperhire</p>
      </div>
    </>
  );
}
