import React, { useState } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  console.log(currentTime);
  return (
    <div>
      <span>{currentTime}</span>
      <span>:</span>
      <span></span>
    </div>
  );
};

export default CurrentTime;
