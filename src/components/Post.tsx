import React from "react";
import { NewsItem } from "type";
import styles from "../pages/NewsPage/News.module.css";

interface PostProps {
  news: NewsItem; // news prop의 타입을 NewsItem으로 지정
}

const Post: React.FC<PostProps> = ({ news }) => {
  return (
    <>
      <img src={news.imgPath} alt="News about" />
      <div className={styles.info}>
        <h4>{news.tit}</h4>
        <p className={styles.cont}>{news.cont}</p>
        <p className={styles.right}>작성자: {news.Author}</p>
        <p className={styles.right}>작성시간: {news.uploadTime}</p>
      </div>
    </>
  );
};

export default Post;
