"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <CountUp
      duration={1.5}
      decimals={2}
      decimal=","
      prefix="RP."
      end={amount}
    />
  );
};

export default AnimatedCounter;
