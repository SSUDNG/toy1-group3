import React from "react";
import { Button } from "@mui/material";
// import FireCreate from "components/FireCreate";
import FireRead from "components/FireRead";
import FireUpdate from "components/FireUpdate";
import FireDelete from "components/FireDelete";

export default function FireTest() {
  // useEffect(() => {
  //   if (!upload) return;
  //   async function fetchData() {
  //     try {
  //       await FireCreate();
  //     } finally {
  //       setUpload(false);
  //     }
  //   }
  //   fetchData();
  // }, [upload]);

  // if (upload) {
  //   return <div>loading..</div>;
  // }

  return (
    <>
      {/* <Button onClick={() => FireCreate()}>Create Data</Button> */}
      <Button onClick={() => FireRead()}>Read Data</Button>
      <Button onClick={() => FireUpdate()}>Update Data</Button>
      <Button onClick={() => FireDelete()}>Delete Data</Button>
    </>
  );
}
