import React from 'react';
import {FooterS} from '../../../style';
export default function Footer() {
    //        event handler: 인스타 아이콘 버튼 클릭 이벤트 처리
    const onInstaIconButtonClickHandler = () => {
        window.open('https://www.instagram.com');
    }

    //        event handler: 네이버 블로그 아이콘 버튼 클릭 이벤트 처리
    const onNaverIconButtonClickHandler = () => {
        window.open('https://blog.naver.com');
    }
    console.log("Footer pos")

    //       render:푸터 레이아웃 렌더링
    return (
        <FooterS>
        <div className="center">
            <p>
                Company name: CrossFit Shout Terminal Branch ｜ 대표자 : Hong Gill Dong ｜{" "}
            </p>
            <p>
                Address: Basement 1, 38, Meokgeori 8-gil, Dongnam-gu, Cheonan-si,
                Chungcheongnam-do ｜ Phone: 041-522-1809{" "}
            </p>
        </div>
        </FooterS>

    )
}