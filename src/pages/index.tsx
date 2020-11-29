import { GetServerSideProps } from "next";
import React from "react";
import { Page } from "../Page";

export default function Index() {
  return (
    <>
      <Page title="Server render" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async function getServerSideProps(
  ctx
) {
  let start = 0;

  if (ctx.query.start && typeof ctx.query.start === "string") {
    start = Number(ctx.query.start);
  }

  return {
    props: {
      hydrationData: {
        stopwatchStore: {
          start,
        },
      },
    },
  };
};
