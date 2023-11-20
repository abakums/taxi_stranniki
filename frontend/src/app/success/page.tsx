"use client";

import { useFormStore } from "@/store/form";
import styles from "./page.module.scss";


export default function Success() {
    const { state, updateState } = useFormStore((state) => state);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    };

    fetch('http://62.217.176.75:8000/api/sending_data/', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

    return (
        <main className={styles.success}>
          <p className={styles.title}>Спасибо!</p>
          <p className={styles.subtitle}>Ваше сообщение отправлено.</p>
        </main>
    );
    }
