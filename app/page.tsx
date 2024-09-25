'use client'

import {
  main,
  wrapper,
  name,
  view,
  job,
  innerCircle,
  sunglasses,
  introduceText,
  heroWrapper, deco
} from './page.css';
import {useEffect} from 'react';
import Image from 'next/image';
import profileImage from '@/assets/images/profile.jpg';

const introduceTextArr = 'Hello World! <b>Frontend Developer</b> 개발자 성도희입니다. 10년동안 다양한 서비스를 개발해왔습니다. 좋은 동료들과 좋은 서비스를 만들 수 있다면 언제든 주도적으로 도전할 준비가 되어있습니다.'
export default function Home() {
  useEffect(() => {
  }, []);

  return (
    <main className={main}>
      <div className={wrapper}>
        <div className={view}>
          <h1 className={name}>😎</h1>
          <h1 className={name}>🧚</h1>
          <h1 className={name}>Dohee Seong</h1>
          <h2 className={job}>Frontend Developer</h2>
        </div>
        <div className={view}>
          <div className={heroWrapper}>
            <div className={innerCircle}>
              <Image src={profileImage} width={400} alt="profile 이미지"/>
              <div className={sunglasses}>🕶️</div>
            </div>
            <span className={deco} style={{ top: 50, right: 20 }}>🧚</span>
            <span className={deco} style={{ bottom: 30, left: 30 }}>🧚‍♀️</span>
          </div>
          <div className={introduceText}>
            {introduceTextArr}
          </div>
        </div>
      </div>
    </main>
  );
}
