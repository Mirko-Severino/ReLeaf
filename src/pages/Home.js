import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// styles
import "./Home.scss";

// hooks
import useLang from "../hooks/useLang";
import useTheme from "../hooks/useTheme";

export default function Home() {
  const { langShort } = useLang();
  const { isDark } = useTheme();
  return (
    <>
      <Helmet
        prioritizeSeoTags
        title="Homepage"
        titleTemplate="%s | reLeaf"
        htmlAttributes={{ lang: langShort, className: isDark ? "dark" : null }}
      />
      <main
        className={`flex flex-col gap-1 h-screen justify-center items-center ${
          isDark ? "bg-zinc-900 text-white" : null
        }`}
      >
        <Link
          to="/test"
          className={`m-1 p-1 text-sm border rounded-md ${
            isDark && " text-white"
          } ${!isDark && "text-gray-700 "}`}
        >
          Test Page
        </Link>
      </main>
    </>
  );
}
