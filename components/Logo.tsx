"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { MouseEventHandler } from "react";

export function Logo({ onClick }: { onClick?: MouseEventHandler<HTMLAnchorElement> }) {
  const [hasLogo, setHasLogo] = useState(true);

  return (
    <Link
      className="brand-lockup"
      href="/"
      onClick={onClick}
      aria-label="Enteegee Technologies home"
    >
      {hasLogo ? (
        // Replace /public/logo.png with your final brand logo.
        <Image
          src="/ETlogo.png"
          alt="Enteegee Technologies"
          width={48}
          height={48}
          className="brand-image"
          onError={() => setHasLogo(false)}
          priority
        />
      ) : (
        <span className="brand-mark" aria-hidden="true">E</span>
      )}
      <span className="brand-name">
        Enteegee<span>Technologies</span>
      </span>
    </Link>
  );
}
