"use client";
import { Layout } from "@/components/Layout";
import styles from "./page.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function QuestionId() {
  const params = useParams();

  return (
    <Layout>
      {Number(params.id) === 1 ? (
        <>
          <p className={styles.title}>
            Что делать в нестандартной ситуации или проблемой с клиентом?
          </p>
          <ul className={styles.list}>
            <li>
              В случае если заказ вам показался подозрительным, Вы можете
              отказаться от заказа, также напишите нам в поддержку и в поддержку
              ЯндексПро. <br /> В случае противоправных действий со стороны
              отправителя или получателя, вы всегда можете обратиться в полицию.
              И помните, Мы на Вашей стороне.
            </li>
          </ul>
        </>
      ) : (
        <>
          <p className={styles.title}>
            Что делать если отправитель или получатель долго не выходят на
            связь?
          </p>
          <ul className={styles.list}>
            <li>
              Уведомить нашу поддержку а также поддержку в приложении ЯндексПро,
              и при необходимости отказаться от заказа.
            </li>
            <li>
              Если заказ у Вас уже на руках, ни в коем случае не оставлять его
              на улице, у подъезда, у двери и т.д. Потому что пока заказ у Вас
              на руках, Вы отвечаете за его сохранность. До тех пор пока не
              передадите получателю или не вернете отправителю..
            </li>
          </ul>
        </>
      )}

      <p className={styles.title}>
        Нажмите {'"'}далее{'"'}.
      </p>
      <div className={styles.inner}>
        <Link
          href={
            Number(params.id) === 1
              ? "/date-of-birth"
              : Number(params.id) === 2
              ? "/question/1"
              : "#"
          }
          className={styles.button}
        >
          Назад
        </Link>
        <Link
          href={
            Number(params.id) === 1
              ? "/question/2"
              : Number(params.id) === 2
              ? "/success"
              : "#"
          }
          className={styles.button}
        >
          Далее
        </Link>
      </div>
    </Layout>
  );
}
