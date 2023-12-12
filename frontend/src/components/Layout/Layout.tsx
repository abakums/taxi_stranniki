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
      {/*eslint-disable-next-line @next/next/no-img-element */}
      <noscript><div><img src="https://mc.yandex.ru/watch/95781936" style={{position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>
      <h1 className={styles.heading}>Странники</h1>

      <div className={styles.wrapper}>{children}</div>
    </main>
  );
}
