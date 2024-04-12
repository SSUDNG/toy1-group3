import React from "react";
import Container from "@mui/material/Container";
import { AttandanceInfo } from "./TypeDef";

type TAAListProps = {
  TAAdata: AttandanceInfo[];
};

export default function TAAList({ TAAdata }: TAAListProps) {
  return (
    <Container fixed>
      <div>
        {TAAdata.map((obj: AttandanceInfo) => (
          <div key={obj.key}>
            <span>{obj.name}</span>
            <span>{obj.category}</span>
            <span>
              {obj.begin.year}-{obj.begin.month}-{obj.begin.day}
            </span>
            <span>
              {obj.end.year}-{obj.end.month}-{obj.end.day}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
