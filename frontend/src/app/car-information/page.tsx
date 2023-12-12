"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Layout } from "@/components/Layout";
import { useFormStore } from "@/store/form";
import styles from "./page.module.scss";
import Select from "react-select";

export default function CarInformation() {
  const router = useRouter();

  const { state, updateState } = useFormStore((state) => state);

  const [formErrors, setFormErrors] = useState({
    carStateNumber: false,
    carYearRealese: false,
    carVINCode: false,
    carTransmission: false,
    drivingExperience: false,
  });

  function handleSubmit() {
    if (!state.carStateNumber)
      setFormErrors((prev) => ({ ...prev, carStateNumber: true }));

    if (!state.carYearRealese)
      setFormErrors((prev) => ({ ...prev, carYearRealese: true }));

    if (!state.carVINCode)
      setFormErrors((prev) => ({ ...prev, carVINCode: true }));

    if (!state.carTransmission)
      setFormErrors((prev) => ({ ...prev, carTransmission: true }));

    if (!state.drivingExperience)
      setFormErrors((prev) => ({ ...prev, drivingExperience: true }));

    if (
      !!state.carStateNumber &&
      !!state.carYearRealese &&
      !!state.carVINCode &&
      !!state.carTransmission &&
      !!state.drivingExperience
    ) {
      return router.push("/success");
    }
  }

  return (
    <Layout>
      <ul className={styles.list}>
        <li>Что делать если пассажир долго не выходит на связь?</li>
        <li>
          Уведомить нашу поддержку а также поддержку в приложении ЯндексПро, и
          при необходимости отказаться от заказа.
        </li>
      </ul>

      <p className={styles.title}>
        После заполнения данной формы нажмите кнопку {'"'}Отправить{'"'}.
      </p>

      <div className={styles.form}>
        <label className={styles.textField}>
          <span aria-required>Год выпуска авто</span>

          <Select
            onChange={(e) => {
              updateState({ carYearRealese: e?.value || "" });

              if (formErrors.carYearRealese)
                setFormErrors((prev) => ({
                  ...prev,
                  carYearRealese: false,
                }));
            }}
            placeholder={state.carYearRealese || "---"}
            options={[
              { label: "1996", value: "1996" },
              { label: "1997", value: "1997" },
              { label: "1998", value: "1998" },
              { label: "1999", value: "1999" },
              { label: "2000", value: "2000" },
              { label: "2001", value: "2001" },
              { label: "2002", value: "2002" },
              { label: "2003", value: "2003" },
              { label: "2004", value: "2004" },
              { label: "2005", value: "2005" },
              { label: "2006", value: "2006" },
              { label: "2007", value: "2007" },
              { label: "2008", value: "2008" },
              { label: "2009", value: "2009" },
              { label: "2010", value: "2010" },
              { label: "2011", value: "2011" },
              { label: "2012", value: "2012" },
              { label: "2013", value: "2013" },
              { label: "2014", value: "2014" },
              { label: "2015", value: "2015" },
              { label: "2016", value: "2016" },
              { label: "2017", value: "2017" },
              { label: "2018", value: "2018" },
              { label: "2019", value: "2019" },
              { label: "2020", value: "2020" },
              { label: "2021", value: "2021" },
              { label: "2022", value: "2022" },
              { label: "2023", value: "2023" },
            ]}
          />
          {formErrors.carYearRealese && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.textField}>
          <span aria-required>Гос. номер авто</span>
          <input
            type="text"
            placeholder="Заполнять латинскими буквами"
            onChange={(e) => {
              updateState({ carStateNumber: e.target.value });

              if (formErrors.carStateNumber)
                setFormErrors((prev) => ({
                  ...prev,
                  carStateNumber: false,
                }));
            }}
            value={state.carStateNumber}
          />
          {formErrors.carStateNumber && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.textField}>
          <span aria-required>VIN код</span>
          <input
            type="text"
            placeholder="Заполнять латинскими буквами"
            onChange={(e) => {
              updateState({ carVINCode: e.target.value });

              if (formErrors.carVINCode)
                setFormErrors((prev) => ({
                  ...prev,
                  carVINCode: false,
                }));
            }}
            value={state.carVINCode}
          />
          {formErrors.carVINCode && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.textField}>
          <span aria-required>Водительский стаж с</span>
          <input
            type="date"
            onChange={(e) => {
              updateState({
                drivingExperience: e.target.value,
              });

              if (formErrors.drivingExperience)
                setFormErrors((prev) => ({
                  ...prev,
                  drivingExperience: false,
                }));
            }}
            value={state.drivingExperience}
          />
          {formErrors.drivingExperience && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.field}>
          <span aria-required>Коробка передач</span>
          <select
            onChange={(e) => {
              updateState({ carTransmission: e.currentTarget.value });

              if (formErrors.carTransmission)
                setFormErrors((prev) => ({
                  ...prev,
                  carTransmission: false,
                }));
            }}
          >
            <option value="" defaultChecked>
              ---
            </option>

            <option value="Механика">Механика</option>
            <option value="Коробка">Коробка</option>
            <option value="Робот">Робот</option>
            <option value="Вариатор">Вариатор</option>
          </select>
          {formErrors.carTransmission && <p>Это поле обязательно</p>}
        </label>
      </div>

      <div className={styles.footer}>
        <Link href={"/car-brand"} className={styles.button}>
          Назад
        </Link>

        <button onClick={handleSubmit} className={styles.button}>
          Отправить
        </button>
      </div>
    </Layout>
  );
}
