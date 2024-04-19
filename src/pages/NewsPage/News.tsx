import React from "react";
import Typography from "@mui/material/Typography";
import { NewsItem } from "type";
import styles from "./News.module.css";
import Post from "../../components/Post";

const News = () => {
  const newsList: NewsItem[] = [
    {
      tit: "미국 가정집 천장 뚫은 ‘정체불명’ 물체…알고보니 3년전 우주쓰레기",
      cont: "최근 미국의 한 가정집 지붕과 천장을 뚫고 추락한 정체불명 금속 덩어리가 국제우주정거장(ISS)의 부품인 것으로 밝혀졌다.16일(현지 시각) CNN에 따르면 전날 미 항공우주국(NASA)은 공식 블로그를 통해 “ISS 배터리를 장착하는 데 사용된 지지대가 지구 대기권을 통해 재진입해 플로리다주(州) 네이플스에 있는 집에 충돌했다”고 발표했다.",
      Author: "김혜진",
      uploadTime: "FEB 21, 2024",
      imgPath: "/images/news1.png",
    },
    {
      tit: "MSI, 게임/창작/업무 사용자 맞춤형 휴대용 노트북 3종 출시",
      cont: "이번에 출시된 사이보그 14 A13V는 14인치의 콤팩트한 휴대성과 유니크한 반투명 디자인을 갖춘 게이밍 노트북이다. 합리적인 가격에 고성능 노트북을 찾는 사용자들에게 인기가 높은 모델로, 뛰어난 가성비와 함께 일상 업무와 게이밍 모두를 아우르는 우수한 성능을 제공한다. 인텔 코어 i7 프로세서와 RTX 4060 또는 4050 그래픽으로 선택하여 구매 가능하다. 광시야각을 지원하는 IPS 타입 패널과 144Hz의 빠른 주사율로 매끄럽고 선명한 화면을 보여준다.",
      Author: "이혜진",
      uploadTime: "FEB 21, 2024",
      imgPath: "/images/news2.jpg",
    },
    {
      tit: "위저드, 발더스 게이트 후속작 개발사 접촉 중",
      cont: "최근 미국의 한 가정집 지붕과 천장을 뚫고 추락한 정체불명 금속 덩어리가 국제우주정거장(ISS)의 부품인 것으로 밝혀졌다.16일(현지 시각) CNN에 따르면 전날 미 항공우주국(NASA)은 공식 블로그를 통해 “ISS 배터리를 장착하는 데 사용된 지지대가 지구 대기권을 통해 재진입해 플로리다주(州) 네이플스에 있는 집에 충돌했다”고 발표했다.",
      Author: "이혜진",
      uploadTime: "FEB 21, 2024",
      imgPath: "/images/news3.jpg",
    },
    {
      tit: "허깅페이스, 매개변수 8B짜리 멀티모달모델 ‘아이드픽스2’ 출시",
      cont: "허깅페이스가 텍스트 및 이미지 프롬프트에 응답할 수 있는 초경량 멀티모달언어모델(LMM)을 출시했다. 매개변수 크기가 80억개로 가장 작은 규모의 LMM 중 하나이지만, 동급 LMM 가운데 최고 성능을 기록했다는 주장이다. ",
      Author: "이혜진",
      uploadTime: "FEB 21, 2024",
      imgPath: "/images/news4.png",
    },
  ];
  return (
    <div className={styles.newsWrap}>
      <Typography variant="h1">공지 사항</Typography>
      <ul className={styles.newsList}>
        {newsList.map((news) => (
          <li key={news.tit}>
            <Post news={news} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
