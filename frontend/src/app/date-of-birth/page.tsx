"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Layout } from "@/components/Layout";
import { useFormStore } from "@/store/form";
import styles from "./page.module.scss";
import { useState } from "react";
import { navigation } from "@/data";

export default function DateOfBirth() {
  const router = useRouter();

  const { state, updateState } = useFormStore((state) => state);

  const [formErrors, setFormErrors] = useState({
    dateOfBirth: false,
  });

  function handleSubmit() {
    if (!state.dateOfBirth)
      setFormErrors((prev) => ({ ...prev, carStateNumber: true }));

    if (!!state.dateOfBirth) {
      return router.push(navigation[state.vacancy]);
    }
  }

  return (
    <Layout>
      <ul className={styles.list}>
        <li>Как происходит вывод средств?</li>
        <li>
          Вывод средств происходит в приложении {'"'}Таксиагрегатор
          {'"'}. Для вывода средств Вам достаточно добавить свою карту во
          вкладку
          {' "'}Мои карты{'"'}. <br /> Дать ей название и ввести номер карты. По
          ссылке ниже вы можете ознакомится как добавить карту для вывода
          заработка:
        </li>
      </ul>
      {/* 
      <iframe
        className={styles.iframe}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mVphp-F9rcc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}

      <div className={styles.footer}>
        <Link href={"/information"} className={styles.button}>
          Назад
        </Link>

        <button onClick={handleSubmit} className={styles.button}>
          Далее
        </button>
      </div>
    </Layout>
  );
}
