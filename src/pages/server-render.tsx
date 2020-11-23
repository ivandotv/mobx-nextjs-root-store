import React from "react";
import { Page } from "../Page";

export default function ServerProps() {
  return (
    <>
      <Page title="Server render" />
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      hydrationData: {
        stopwatchStore: {
          startTime: new Date(2020, 0, 1, 13, 12, 12, 121).toJSON(),
          size: "BIG",
        },
      },
    },
  };
}
