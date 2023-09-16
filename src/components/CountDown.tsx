import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

type CountDownProps = {
  futureTimeStampInMs: number;
};

const CountDown = ({ futureTimeStampInMs }: CountDownProps) => {
  const [dayTime, setDayTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const trackUpdatedTime = () => {
    const currentTime = dayjs();
    const futureTime = dayjs(futureTimeStampInMs);

    const countDownTimeInSeconds = futureTime.diff(currentTime, "seconds") % 60;
    const countDownTimeInMinutes = futureTime.diff(currentTime, "minutes") % 60;
    const countDownTimeInHours = futureTime.diff(currentTime, "hours") % 24;
    const countDownTimeInDays = futureTime.diff(currentTime, "days");
    setDayTime({
      days: countDownTimeInDays.toString(),
      hours: countDownTimeInHours.toString(),
      minutes: countDownTimeInMinutes.toString(),
      seconds: countDownTimeInSeconds.toString(),
    });
  };

  useEffect(() => {
    const interval = setInterval(trackUpdatedTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <section className="date-time">
        <p>{dayTime.days.length <= 1 ? "0" + dayTime.days : dayTime.days}</p>
        <small>{parseInt(dayTime.days) <= 1 ? "Day" : "Days"}</small>
      </section>
      <section className="date-time">
        <p>{dayTime.hours.length <= 1 ? "0" + dayTime.hours : dayTime.hours}</p>
        <small>{parseInt(dayTime.hours) <= 1 ? "Hour" : "Hours"}</small>
      </section>
      <section className="date-time">
        <p>
          {dayTime.minutes.length <= 1
            ? "0" + dayTime.minutes
            : dayTime.minutes}
        </p>
        <small>{parseInt(dayTime.minutes) <= 1 ? "Minute" : "Minutes"}</small>
      </section>
      <section className="date-time">
        <p>
          {dayTime.seconds.length <= 1
            ? "0" + dayTime.seconds
            : dayTime.seconds}
        </p>

        <small>{parseInt(dayTime.seconds) <= 1 ? "Second" : "Seconds"}</small>
      </section>
    </div>
  );
};

export default CountDown;
