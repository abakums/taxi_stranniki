"use client";
import Link from "next/link";

import { Layout } from "@/components/Layout";
import { useFormStore } from "@/store/form";
import styles from "./page.module.scss";
import { navigation } from "@/data";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";

export default function DriversLicense() {
  const router = useRouter();

  const { state, updateState } = useFormStore((state) => state);

  const [formErrors, setFormErrors] = useState({
    countryOfIssue: false,
    dateOfIssue: false,
    driversLicense: false,
    validityPeriod: false,
  });

  function handleSubmit() {
    if (!state.countryOfIssue)
      setFormErrors((prev) => ({ ...prev, countryOfIssue: true }));

    if (!state.dateOfIssue)
      setFormErrors((prev) => ({ ...prev, dateOfIssue: true }));

    if (!state.driversLicense)
      setFormErrors((prev) => ({ ...prev, driversLicense: true }));

    if (!state.validityPeriod)
      setFormErrors((prev) => ({ ...prev, validityPeriod: true }));

    if (
      !!state.countryOfIssue &&
      !!state.dateOfIssue &&
      !!state.driversLicense &&
      !!state.validityPeriod
    ) {
      return router.push("/car-brand");
    }
  }

  return (
    <Layout>
      <ul className={styles.list}>
        <li>Как происходит вывод средств?</li>
        <li>
          Вывод средств происходит в самом приложении ЯндексПро. Для этого
          укажите свою карту для вывода заработка.
        </li>
      </ul>

      <p className={styles.title}>
        Пожалуйста подготовьте свои документы и заполните следующие поля:
      </p>

      <div className={styles.form}>
        <label className={styles.field}>
          <span aria-required>Серия и Номер водительского удостоверения</span>
          <input
            type="text"
            onChange={(e) => {
              updateState({
                driversLicense: e.target.value,
              });

              if (formErrors.driversLicense)
                setFormErrors((prev) => ({
                  ...prev,
                  driversLicense: false,
                }));
            }}
            value={state.driversLicense}
          />
          {formErrors.driversLicense && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.field}>
          <span aria-required>Дата выдачи ВУ:</span>
          <input
            type="date"
            onChange={(e) => {
              updateState({
                dateOfIssue: e.target.value,
              });

              if (formErrors.dateOfIssue)
                setFormErrors((prev) => ({
                  ...prev,
                  dateOfIssue: false,
                }));
            }}
            value={state.dateOfIssue}
          />
          {formErrors.dateOfIssue && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.field}>
          <span aria-required>ВУ действует до:</span>
          <input
            type="date"
            onChange={(e) => {
              updateState({
                validityPeriod: e.target.value,
              });

              if (formErrors.validityPeriod)
                setFormErrors((prev) => ({
                  ...prev,
                  validityPeriod: false,
                }));
            }}
            value={state.validityPeriod}
          />
          {formErrors.validityPeriod && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.field}>
          <span aria-required>Страна выдачи ВУ:</span>
          <Select
            onChange={(e) => {
              updateState({ countryOfIssue: e?.value || "" });

              if (formErrors.countryOfIssue)
                setFormErrors((prev) => ({
                  ...prev,
                  countryOfIssue: false,
                }));
            }}
            placeholder={state.countryOfIssue || "---"}
            options={[
              { label: "Казахстан", value: "Казахстан" },
              { label: "Россия", value: "Россия" },
              { label: "Беларусь", value: "Беларусь" },
              { label: "Азербайджан", value: "Азербайджан" },
              { label: "Армения", value: "Армения" },
              { label: "Киргизия", value: "Киргизия" },
              { label: "Молдова", value: "Молдова" },
              { label: "Таджикистан", value: "Таджикистан" },
              { label: "Узбекситан", value: "Узбекситан" },
              { label: "Украина", value: "Украина" },
              { label: "Туркменистан", value: "Туркменистан" },
            ]}
          />
          {formErrors.validityPeriod && <p>Это поле обязательно</p>}
        </label>
      </div>

      <div className={styles.footer}>
        <Link href={"/date-of-birth"} className={styles.button}>
          Назад
        </Link>

        <button onClick={handleSubmit} className={styles.button}>
          Далее
        </button>
      </div>
    </Layout>
  );
}
