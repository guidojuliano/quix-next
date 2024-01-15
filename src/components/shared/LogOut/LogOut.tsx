"use client";
import { RiLogoutCircleRLine } from "react-icons/ri";
import styles from "./LogOut.module.sass";

export default function LogOut() {
  // const handleLogOut = () => {
  //   window.localStorage.removeItem("cart");
  //   window.localStorage.removeItem("customer");

  //   fetch("/api/logout", { method: "GET", credentials: "include" }).then(() => {
  //     window.location.href = "/";
  //   });
  // };

  return (
    <div className={styles.LogOut}>
      <RiLogoutCircleRLine />
    </div>
  );
}
