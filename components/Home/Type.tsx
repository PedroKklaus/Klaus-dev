"use client";

import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Full-Stack Pleno",
          "C# · ASP.NET Core",
          "React · Next.js",
          "SQL Server · PostgreSQL",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
