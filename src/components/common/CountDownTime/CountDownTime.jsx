import useCountdown from "hooks/useCoutDown";
import React, { useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { ShowTime } from "./CountDownTime.styled";

const ExpiredNotice = () => {
  return <div>Hết thời gian</div>;
};

const CountDownTime = ({ targetDate, totalTime, onExpiredTime }) => {
  const { hours, minutes, seconds } = useCountdown(targetDate);

  const timeRemaining =
    hours * 1000 * 60 * 60 + minutes * 1000 * 60 + seconds * 1000;

  const percentTimeRemaining =
    100 - ((totalTime - timeRemaining) / totalTime) * 100 || 0;

  useEffect(() => {
    if (hours + minutes + seconds <= 0) {
      onExpiredTime();
    }
  }, [hours, minutes, seconds, onExpiredTime]);

  if (hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  }

  return (
    <div>
      <ShowTime>
        {hours && <span>{hours} Giờ</span>}
        <span>{minutes} phút - </span>
        <span>{seconds} giây</span>
      </ShowTime>

      <ProgressBar percent={percentTimeRemaining} />
    </div>
  );
};

export default CountDownTime;
