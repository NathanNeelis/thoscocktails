import React from "react";
import { ImageWrapper } from "@src/view/components";
import Link from "next/link";

import $ from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <ImageWrapper
        className={$.logoImage}
        alt="Logo Tho's Cocktails"
        src="/logo_thos-cocktails_v2.svg"
        width={65}
        height={65}
        priority
      />
    </Link>
  );
};

export default Logo;
