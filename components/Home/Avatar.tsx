"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import myImg from "@/assets/avatar.jpeg";

function Avatar() {
  return (
    <Tilt>
      <Image
        src={myImg}
        className="img-fluid"
        alt="Foto de Pedro Klaus"
        style={{ borderRadius: "50%", marginTop: "20px", width: "350px", height: "350px" }}
      />
    </Tilt>
  );
}

export default Avatar;
