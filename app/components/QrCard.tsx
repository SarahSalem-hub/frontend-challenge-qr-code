import Image from "next/image";
import React from "react";
import { outfit } from "../layout";

type Props = {};

export default function QrCard({}: Props) {
  return (
    <article className="h-auto flex flex-col flex-wrap gap-6 pt-4 px-4 pb-10 bg-white rounded-3xl max-w-sm">
      <figure>
        <Image
          src="/images/image-qr-code.png"
          width={288}
          height={288}
          alt="qr code image"
          className="rounded-[10px]"
        />
      </figure>

      <div
        className={`${outfit.className} flex flex-col text-center gap-4 px-4 w-2xs`}
      >
        <h1 className="tracking-normall text-[22px] leading-[120%] text-[#1F314F] font-black">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[15px] text-slate-500 leading-[140%] tracking-[0.2px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </article>
  );
}
