import Link from "next/link";
import React from "react";

export function Links() {
  return (
    <div className="links-wrap">
      <a href="/?start=500">
        start from <strong>500</strong>
      </a>
      <a href="/?start=1000">
        start from <strong>1000</strong>
      </a>
    </div>
  );
}
