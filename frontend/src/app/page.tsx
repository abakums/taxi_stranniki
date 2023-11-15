"use client";
import Link from "next/link";

import { Layout } from "@/components/Layout";
import { useFormStore } from "@/store/form";
import styles from "./page.module.scss";
import { useEffect, useRef } from 'react';

export default function Home() {
  const { state, updateState } = useFormStore((state) => state);
  const queryRef = useRef<string>("init");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParams = Object.fromEntries(urlParams.entries());
    queryRef.current = queryParams.park;
  }, []);
  console.log(queryRef.current);
  console.log(typeof queryRef.current);
  // updateState({ taxiPark: queryRef.current });
  return (
    <Layout>
      <p className={styles.title}>ВЫБЕРИТЕ ВАКАНСИЮ</p>

      <div className={styles.form}>
        <label
          onClick={() => updateState({ vacancy: "Такси" })}
          className={styles.input}
        >
          <input type="radio" name="radio-input" />
          <span>Такси</span>
        </label>

        <label
          onClick={() => updateState({ vacancy: "Авто Курьер" })}
          className={styles.input}
        >
          <input type="radio" name="radio-input" />
          <span>Авто Курьер</span>
        </label>

        <label
          onClick={() => updateState({ vacancy: "Пеший или Вело курьер" })}
          className={styles.input}
        >
          <input type="radio" name="radio-input" />
          <span>Пеший или Вело курьер</span>
        </label>

        <label
          onClick={() => updateState({ vacancy: "Грузоперевозки" })}
          className={styles.input}
        >
          <input type="radio" name="radio-input" />
          <span>Грузоперевозки</span>
        </label>

        <label
          onClick={() => updateState({ vacancy: "Мото Курьер" })}
          className={styles.input}
        >
          <input type="radio" name="radio-input" />
          <span>Мото Курьер</span>
        </label>
      </div>

      <Link
        href={state?.vacancy ? "/information" : "#"}
        onClick={() => updateState({ taxiPark: queryRef.current })}
        className={styles.button}
      >
        Далее
      </Link>
    </Layout>
  );
}

// export default function Home() {
//   const [quizTab, setQuizTab] = useState<
//     | "vacancy"
//     | "information"
//     | "dateOfBirth"
//     | "question"
//     | "question2"
//     | "success"
//   >("vacancy");

//   const [formData, setFormData] = useState({
//     vacancy: "",
//     lastName: "",
//     firstName: "",
//     middleName: "",
//     phone: "+7 ",
//     dateOfBirth: "",
//   });
//   const [formErrors, setFormErrors] = useState({
//     vacancy: false,
//     lastName: false,
//     firstName: false,
//     phone: false,
//     dateOfBirth: false,
//   });

//   function handleNext() {
//     if (quizTab === "vacancy") {
//       if (formData.vacancy !== "") {
//         setQuizTab("information");
//       }

//       return;
//     }

//     if (quizTab === "information") {
//       if (
//         formData.firstName === "" ||
//         formData.lastName === "" ||
//         formData.phone === "+7 "
//       ) {
//         if (
//           formData.firstName === "" ||
//           formData.firstName === undefined ||
//           formData.firstName === null
//         ) {
//           setFormErrors((prev) => ({ ...prev, firstName: true }));
//         } else {
//           setFormErrors((prev) => ({ ...prev, firstName: false }));
//         }

//         if (
//           formData.lastName === "" ||
//           formData.lastName === undefined ||
//           formData.lastName === null
//         ) {
//           setFormErrors((prev) => ({ ...prev, lastName: true }));
//         } else {
//           setFormErrors((prev) => ({ ...prev, lastName: false }));
//         }

//         if (
//           formData.phone === "+7 " ||
//           formData.phone === "+7" ||
//           formData.phone === "" ||
//           formData.phone === undefined ||
//           formData.phone === null
//         ) {
//           setFormErrors((prev) => ({ ...prev, phone: true }));
//         } else {
//           setFormErrors((prev) => ({ ...prev, phone: false }));
//         }

//         return;
//       }

//       return setQuizTab("dateOfBirth");
//     }

//     if (quizTab === "dateOfBirth") {
//       if (
//         formData.dateOfBirth === "" ||
//         formData.dateOfBirth === undefined ||
//         formData.dateOfBirth === null
//       ) {
//         setFormErrors((prev) => ({ ...prev, dateOfBirth: true }));
//       } else {
//         setFormErrors((prev) => ({ ...prev, dateOfBirth: false }));
//       }

//       return setQuizTab("question");
//     }

//     if (quizTab === "question") {
//       return setQuizTab("question2");
//     }

//     if (quizTab === "question2") {
//       setQuizTab("success");

//       // Логика отправки данных в API
//       return;
//     }
//   }

//   function handlePrev() {
//     if (quizTab === "information") {
//       setQuizTab("vacancy");

//       return;
//     }
//     if (quizTab === "dateOfBirth") {
//       setQuizTab("information");

//       return;
//     }
//     if (quizTab === "question") {
//       setQuizTab("dateOfBirth");

//       return;
//     }
//     if (quizTab === "question2") {
//       setQuizTab("question");

//       return;
//     }
//   }

//   useEffect(() => {
//     if (quizTab === "vacancy") {
//       if (formData.vacancy === "") {
//         setFormErrors((prev) => ({ ...prev, vacancy: true }));
//       } else {
//         setFormErrors((prev) => ({ ...prev, vacancy: false }));
//       }

//       return;
//     }
//   }, [quizTab, formData]);

//   return (
//     <Container>
//       {/* <Header /> */}

//       {
//         {
//
//           information: (
//             <main className={styles.information}>
//               <h1 className={styles.heading}>G - Park</h1>

//               <div className={styles.wrapper}>
//                 <div className={styles.form}>
//                   <label className={styles.field}>
//                     <span aria-required>Ваша Фамилия</span>
//                     <input
//                       type="text"
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           lastName: e.target.value,
//                         }))
//                       }
//                       value={formData.lastName}
//                     />
//                     {formErrors.lastName && <p>Это поле обязательно</p>}
//                   </label>

//                   <label className={styles.field}>
//                     <span aria-required>Ваше Имя</span>
//                     <input
//                       type="text"
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           firstName: e.target.value,
//                         }))
//                       }
//                       value={formData.firstName}
//                     />
//                     {formErrors.firstName && <p>Это поле обязательно</p>}
//                   </label>

//                   <label className={styles.field}>
//                     <span>Ваше Отчество (при наличии)</span>
//                     <input
//                       type="text"
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           middleName: e.target.value,
//                         }))
//                       }
//                       value={formData.middleName}
//                     />
//                   </label>

//                   <label className={styles.field}>
//                     <span aria-required>Телефон для связи</span>
//                     <input
//                       inputMode="tel"
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           phone: e.target.value,
//                         }))
//                       }
//                       value={formData.phone}
//                     />
//                     {formErrors.phone && <p>Это поле обязательно</p>}
//                   </label>
//                 </div>

//                 <div className={styles.footer}>
//                   <p className={styles.title}>
//                     В среднем доход наших мото курьеров в месяц варьируется от
//                     250 тыс. до 500 тыс. тенге и выше.
//                   </p>
//                   <div className={styles.inner}>
//                     <button onClick={handlePrev} className={styles.button}>
//                       Назад
//                     </button>
//                     <button onClick={handleNext} className={styles.button}>
//                       Далее
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           ),
//           dateOfBirth: (
//             <main className={styles.dateOfBirth}>
//               <h1 className={styles.heading}>G - Park</h1>

//               <div className={styles.wrapper}>
//                 <ul>
//                   <li>Как происходит вывод средств?</li>
//                   <li>
//                     Вывод средств происходит в приложении {'"'}Таксиагрегатор
//                     {'"'}. Для вывода средств Вам достаточно добавить свою карту
//                     во вкладку
//                     {' "'}Мои карты{'"'}. <br /> Дать ей название и ввести номер
//                     карты. По ссылке ниже вы можете ознакомится как добавить
//                     карту для вывода заработка:
//                   </li>
//                 </ul>

//                 <iframe
//                   width="560"
//                   height="315"
//                   src="https://www.youtube.com/embed/mVphp-F9rcc"
//                   title="YouTube video player"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   allowFullScreen
//                 ></iframe>

//                 <div className={styles.form}>
//                   <label className={styles.field}>
//                     <span aria-required>Дата рождения</span>
//                     <input
//                       type="date"
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           dateOfBirth: e.target.value,
//                         }))
//                       }
//                       value={formData.dateOfBirth}
//                     />
//                     {formErrors.dateOfBirth && <p>Это поле обязательно</p>}
//                   </label>
//                 </div>

//                 <div className={styles.footer}>
//                   <button onClick={handlePrev} className={styles.button}>
//                     Назад
//                   </button>
//                   <button onClick={handleNext} className={styles.button}>
//                     Далее
//                   </button>
//                 </div>
//               </div>
//             </main>
//           ),
//           question: (
//             <main className={styles.question}>
//               <h1 className={styles.heading}>G - Park</h1>

//               <div className={styles.wrapper}>
//                 <p className={styles.title}>
//                   Что делать в нестандартной ситуации или проблемой с клиентом?
//                 </p>

//                 <ul>
//                   <li>
//                     В случае если заказ вам показался подозрительным, Вы можете
//                     отказаться от заказа, также напишите нам в поддержку и в
//                     поддержку ЯндексПро. <br /> В случае противоправных действий
//                     со стороны отправителя или получателя, вы всегда можете
//                     обратиться в полицию. И помните, Мы на Вашей стороне.
//                   </li>
//                 </ul>

//                 <p className={styles.title}>
//                   Нажмите {'"'}далее{'"'}.
//                 </p>
//                 <div className={styles.inner}>
//                   <button onClick={handlePrev} className={styles.button}>
//                     Назад
//                   </button>
//                   <button onClick={handleNext} className={styles.button}>
//                     Далее
//                   </button>
//                 </div>
//               </div>
//             </main>
//           ),
//           question2: (
//             <main className={styles.question2}>
//               <h1 className={styles.heading}>G - Park</h1>

//               <div className={styles.wrapper}>
//                 <p className={styles.title}>
//                   Что делать если отправитель или получатель долго не выходят на
//                   связь?
//                 </p>

//                 <ul>
//                   <li>
//                     Уведомить нашу поддержку а также поддержку в приложении
//                     ЯндексПро, и при необходимости отказаться от заказа.
//                   </li>
//                   <li>
//                     Если заказ у Вас уже на руках, ни в коем случае не оставлять
//                     его на улице, у подъезда, у двери и т.д. Потому что пока
//                     заказ у Вас на руках, Вы отвечаете за его сохранность. До
//                     тех пор пока не передадите получателю или не вернете
//                     отправителю..
//                   </li>
//                 </ul>

//                 <p className={styles.title}>
//                   Нажмите кнопку {'"'}Отправить{'"'}.
//                 </p>
//                 <div className={styles.inner}>
//                   <button onClick={handlePrev} className={styles.button}>
//                     Назад
//                   </button>
//                   <button onClick={handleNext} className={styles.button}>
//                     Отправить
//                   </button>
//                 </div>
//               </div>
//             </main>
//           ),
//
//         }[quizTab]
//       }
//     </Container>
//   );
// }
