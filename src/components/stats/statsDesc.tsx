import React, { useMemo } from "react";
import {
  ItemCount,
  ItemDescription,
  ItemTitle,
  StatsContainer,
  StatsItem,
} from "./statsDesc.style";
import { Counter } from "./counter";

interface StatsProps {
  title: string;
  count: string;
  description: string;
}

export const Stats = () => {

  const statsData: StatsProps[] = useMemo(()=> (
    [
    {
      title: "Lorem ipsum",
      count: "123+",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat.",
    },
    {
      title: "Lorem ipsum",
      count: "12+",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      title: "Lorem ipsum",
      count: "12+",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      title: "Lorem ipsum",
      count: "123",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
  ]),[]);

  return (
    <StatsContainer>
      {statsData.map((item, index) => (
        <StatsItem key={index}>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemCount>
            <Counter />
          </ItemCount>
          <ItemDescription>{item.description}</ItemDescription>
        </StatsItem>
      ))}
    </StatsContainer>
  );
};
