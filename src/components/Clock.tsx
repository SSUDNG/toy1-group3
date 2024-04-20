import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import styles from "components/Clock.module.css";

const Clock: React.FunctionComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  const dateString = time.toLocaleDateString("ko-KR", options);
  const timeString = time.toLocaleTimeString("ko-KR");

  return (
    <div className={styles.clock}>
      <Typography variant="h1">{timeString}</Typography>
      <Typography variant="body2">{dateString}</Typography>
    </div>
  );
};

export default Clock;
