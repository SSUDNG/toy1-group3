import React from "react";
import { Container } from "@mui/material";
import styles from "./TAA.module.css";
import { AttandanceInfo } from "./TypeDef";

type TAAListProps = {
  TAAdata: AttandanceInfo[];
};

export default function TAAList({ TAAdata }: TAAListProps) {
  return (
    <Container fixed>
      {TAAdata.map((obj: AttandanceInfo) => (
        <Container key={obj.key} className={styles.itemContainer}>
          <Container className={styles.coreInfo}>
            <div>{obj.name}</div>
            <div>{obj.category}</div>
            <div>
              {obj.begin.year}-{obj.begin.month}-{obj.begin.day}
            </div>
            <div>
              {obj.end.year}-{obj.end.month}-{obj.end.day}
            </div>
          </Container>
          <Container className={styles.contents}>{obj.comment}</Container>
        </Container>
      ))}
    </Container>
  );
}
