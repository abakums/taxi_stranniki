"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Layout } from "@/components/Layout";
import { useFormStore } from "@/store/form";
import styles from "./page.module.scss";
import Select from "react-select";

export default function CarBrand() {
  const router = useRouter();
  const { state, updateState } = useFormStore((state) => state);

  const [formErrors, setFormErrors] = useState({
    carBrand: false,
    carColor: false,
    carType: false,
    carBodyLength: false,
    carBodyWidth: false,
    carBodyHeight: false,
    carLoadCapacity: false,
  });

  function handleSubmit() {
    if (state.vacancy !== "Грузоперевозки") {
      if (!state.carBrand)
        setFormErrors((prev) => ({ ...prev, carBrand: true }));

      if (!state.carType) setFormErrors((prev) => ({ ...prev, carType: true }));

      if (!state.carColor)
        setFormErrors((prev) => ({ ...prev, carColor: true }));

      if (!!state.carBrand && !!state.carType && !!state.carColor) {
        return router.push("/car-information");
      }

      return;
    }

    if (!state.carBrand) setFormErrors((prev) => ({ ...prev, carBrand: true }));
    if (!state.carType) setFormErrors((prev) => ({ ...prev, carType: true }));
    if (!state.carColor) setFormErrors((prev) => ({ ...prev, carColor: true }));
    if (!state.carBodyLength)
      setFormErrors((prev) => ({ ...prev, carBodyLength: true }));
    if (!state.carBodyWidth)
      setFormErrors((prev) => ({ ...prev, carBodyWidth: true }));
    if (!state.carBodyHeight)
      setFormErrors((prev) => ({ ...prev, carBodyHeight: true }));
    if (!state.carLoadCapacity)
      setFormErrors((prev) => ({ ...prev, carLoadCapacity: true }));

    if (
      !!state.carBrand &&
      !!state.carType &&
      !!state.carColor &&
      !!state.carBodyLength &&
      !!state.carBodyWidth &&
      !!state.carBodyHeight &&
      !!state.carLoadCapacity
    ) {
      return router.push("/car-information");
    }
  }

  return (
    <Layout>
      <ul className={styles.list}>
        <li>Что делать в нестандартной ситуации или проблемой с клиентом?</li>
        <li>
          В случае если пассажир не корректен с Вами, Вы можете отказаться от
          заказа, также напишите нам в поддержку и в поддержку ЯндексПро. <br />
          В случае противоправных действий со стороны пассажира, вы всегда
          можете обратиться в полицию. <br /> И помните, Мы на Вашей стороне.
        </li>
      </ul>

      <p className={styles.title}>
        Заполните пожалуйста данные своего автомобиля:
      </p>

      <div className={styles.form}>
        <label className={styles.field}>
          <span aria-required>Марка АВТО</span>
          <Select
            placeholder={state.carBrand || "---"}
            onChange={(e) => {
              updateState({ carBrand: e?.value || "" });

              if (formErrors.carBrand)
                setFormErrors((prev) => ({ ...prev, carBrand: false }));
            }}
            options={[
              { label: "Toyota", value: "Toyota" },
              { label: "BMW", value: "BMW" },
              { label: "Mercedes-Benz", value: "Mercedes-Benz" },
            ]}
          />

          {formErrors.carBrand && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.field}>
          <span aria-required>Модель:</span>

          <Select
            placeholder={state.carType || "---"}
            onChange={(e) => {
              updateState({ carType: e?.value || "" });

              if (formErrors.carType)
                setFormErrors((prev) => ({ ...prev, carType: false }));
            }}
            options={
              state.carBrand === "Toyota"
                ? [
                    { label: "Agya", value: "Agya" },
                    { label: "Avalon", value: "Avalon" },
                    { label: "Corolla", value: "Corolla" },
                  ]
                : state.carBrand === "BMW"
                ? [
                    { label: "M2", value: "M2" },
                    { label: "M6", value: "M6" },
                    { label: "X5", value: "X5" },
                  ]
                : [
                    { label: "G-klasse AMG", value: "G-klasse AMG" },
                    { label: "M-klasse", value: "M-klasse" },
                    { label: "Sprinter", value: "Sprinter" },
                  ]
            }
          />

          {formErrors.carType && <p>Это поле обязательно</p>}
        </label>

        <label className={styles.field}>
          <span aria-required>Цвет</span>

          <Select
            onChange={(e) => {
              updateState({ carColor: e?.value || "" });

              if (formErrors.carColor)
                setFormErrors((prev) => ({ ...prev, carColor: false }));
            }}
            isSearchable
            placeholder={state.carColor || "---"}
            options={[
              { value: "Белый", label: "Белый" },
              { value: "Желтый", label: "Желтый" },
              { value: "Бежевый", label: "Бежевый" },
              { value: "Черный", label: "Черный" },
              { value: "Голубой", label: "Голубой" },
              { value: "Серый", label: "Серый" },
              { value: "Красный", label: "Красный" },
              { value: "Оранжевый", label: "Оранжевый" },
              { value: "Синий", label: "Синий" },
              { value: "Зеленый", label: "Зеленый" },
              { value: "Коричневый", label: "Коричневый" },
              { value: "Фиолетовый", label: "Фиолетовый" },
              { value: "Розовый", label: "Розовый" },
            ]}
          />

          {formErrors.carColor && <p>Это поле обязательно</p>}
        </label>

        {state.vacancy === "Грузоперевозки" && (
          <>
            <label className={styles.field}>
              <span aria-required>Длина кузова (в см)</span>
              <input
                type="text"
                onChange={(e) => {
                  updateState({ carBodyLength: e.target.value });

                  if (formErrors.carBodyLength)
                    setFormErrors((prev) => ({
                      ...prev,
                      carBodyLength: false,
                    }));
                }}
                value={state.carBodyLength}
              />
              {formErrors.carBodyLength && <p>Это поле обязательно</p>}
            </label>

            <label className={styles.field}>
              <span aria-required>Ширина кузова (в см)</span>
              <input
                type="text"
                onChange={(e) => {
                  updateState({ carBodyWidth: e.target.value });

                  if (formErrors.carBodyWidth)
                    setFormErrors((prev) => ({ ...prev, carBodyWidth: false }));
                }}
                value={state.carBodyWidth}
              />
              {formErrors.carBodyWidth && <p>Это поле обязательно</p>}
            </label>

            <label className={styles.field}>
              <span aria-required>Высота кузова (в см)</span>
              <input
                type="text"
                onChange={(e) => {
                  updateState({ carBodyHeight: e.target.value });

                  if (formErrors.carBodyHeight)
                    setFormErrors((prev) => ({
                      ...prev,
                      carBodyHeight: false,
                    }));
                }}
                value={state.carBodyHeight}
              />
              {formErrors.carBodyHeight && <p>Это поле обязательно</p>}
            </label>

            <label className={styles.field}>
              <span aria-required>Грузоподъемность (в кг)</span>
              <input
                type="text"
                onChange={(e) => {
                  updateState({ carLoadCapacity: e.target.value });

                  if (formErrors.carLoadCapacity)
                    setFormErrors((prev) => ({
                      ...prev,
                      carLoadCapacity: false,
                    }));
                }}
                value={state.carLoadCapacity}
              />
              {formErrors.carLoadCapacity && <p>Это поле обязательно</p>}
            </label>
          </>
        )}
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
