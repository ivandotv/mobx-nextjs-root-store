import Link from "next/link";
import React from "react";

export function Links() {
  return (
    <div className="links-wrap">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/server-render">
        <a>Server render</a>
      </Link>
    </div>
  );
}
