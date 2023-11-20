"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Layout } from "@/components/Layout";
import { useFormStore } from "@/store/form";
import styles from "./information/page.module.scss";


export default function Home() {
  const router = useRouter();

  const { state, updateState } = useFormStore((state) => state);

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
  });

  function handleSubmit() {
    updateState({ vacancy: "Такси" });
    if (!state.firstName)
      setFormErrors((prev) => ({ ...prev, firstName: true }));

    if (!state.lastName) setFormErrors((prev) => ({ ...prev, lastName: true }));

    if (!state.phone) setFormErrors((prev) => ({ ...prev, phone: true }));

    if (!!state.firstName && !!state.lastName && !!state.lastName) {
      return router.push("/date-of-birth");
    }
  }

  return (
    <Layout>
      <div className={styles.form}>
        <label className={styles.field}>
          <span aria-required>Ваша Фамилия</span>
          <input
            type="text"
            onChange={(e) => {
              updateState({ lastName: e.target.value });

              if (formErrors.lastName)
                setFormErrors((prev) => ({
                  ...prev,
                  lastName: false,
                }));
            }}
            value={state.lastName}
          />
          {formErrors.lastName && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.field}>
          <span aria-required>Ваше Имя</span>
          <input
            type="text"
            onChange={(e) => {
              updateState({ firstName: e.target.value });

              if (formErrors.firstName)
                setFormErrors((prev) => ({
                  ...prev,
                  firstName: false,
                }));
            }}
            value={state.firstName}
          />
          {formErrors.firstName && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.field}>
          <span>Ваше Отчество (при наличии)</span>
          <input
            type="text"
            onChange={(e) => {
              updateState({ middleName: e.target.value });
            }}
            value={state.middleName}
          />
        </label>

        <label className={styles.field}>
          <span aria-required>Телефон для связи</span>
          <input
            inputMode="tel"
            defaultValue="+7 "
            onChange={(e) => {
              updateState({ phone: e.target.value });

              if (formErrors.phone)
                setFormErrors((prev) => ({
                  ...prev,
                  phone: false,
                }));
            }}
            value={state.phone}
          />
          {formErrors.phone && <p>Это поле обязательно</p>}
        </label>
      </div>

      <div className={styles.footer}>
        <p className={styles.title}>
          В среднем доход наших водителей в месяц варьируется от 50 000 до 150
          000 рублей.
        </p>
        <div className={styles.inner}>
          <button onClick={handleSubmit} className={styles.button}>
            Далее
          </button>
        </div>
      </div>
    </Layout>
  );
}
