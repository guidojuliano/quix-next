"use client";
import Image from "next/image";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Description.module.sass";

const PLACEHOLDER_IMAGE =
  "data:image/jpeg;base64,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";

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => {
    setBorder(!hasBorder);
  };

  const cx = classNames.bind(styles);

  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>

      <div className={styles.Description__text}>
        <h2>The future is now.</h2>
        <p>
          Quix: Your Gateway to Tomorrow s Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
