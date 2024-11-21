import React from 'react';
import style from './profileCard.module.css';

interface CardProps {
  imageSrc: string;
  name: string;
  skills: string[];
  flagSrc: string;
  exp: String;
}

const Card: React.FC<CardProps> = ({ imageSrc, name, skills, flagSrc, exp }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden p-6 mx-auto">
      <div className="flex justify-center mb-4 relative">
        <img src={imageSrc} alt={name} className="w-32 h-32 object-cover rounded-full" />

        <div className={`${style.CardImage} absolute w-[25px] h-[18px] shadow-md overflow-hidden`}>
          <img src={flagSrc} alt="Country Flag" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-black text-gray-800">{name}</h2>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-base font-bold text-[#4A77FF]">{exp}</h2>
      </div>

      <div className=" flex flex-wrap justify-center gap-1">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-2 flex flex-row rounded-lg border border-gray-300 text-center text-sm font-semibold text-gray-700">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
