"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import styles from "./Layout.module.scss";
import { useFormStore } from "@/store/form";
import type { Form, IChild } from "@/types";

export function Layout({ children }: IChild) {
  const router = useRouter();
  const pathname = usePathname();

  const { updateState } = useFormStore((state) => state);

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("state") as string);

    if (localState?.vacancy) {
      updateState({ ...localState });
    }

    if (!localState?.vacancy && pathname !== "/") {
      router.push("/");
    }
  }, [router, pathname, updateState]);

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Союз водителей</h1>

      <div className={styles.wrapper}>{children}</div>
    </main>
  );
}
