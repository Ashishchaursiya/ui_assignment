import { NextResponse } from 'next/server';

export async function GET() {
  const skills = [
    {
      id: 1,
      imageSrc: '/images/user-avatar.png',
      flagSrc: '/images/flag.png',
      name: 'Abhishek Gupta',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      exp: '마케팅 · 2y+',
    },
    {
      id: 2,
      imageSrc: '/images/user-avatar.png',
      flagSrc: '/images/flag.png',
      name: 'Abhishek Gupta',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      exp: '마케팅 · 5y+',
    },
    {
      id: 3,
      imageSrc: '/images/user-avatar.png',
      flagSrc: '/images/flag.png',
      name: 'Abhishek Gupta',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      exp: '마케팅 · 3y+',
    },
  ];
  return NextResponse.json(skills);
}
