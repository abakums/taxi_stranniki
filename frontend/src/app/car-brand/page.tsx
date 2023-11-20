"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
                { label: "AC", value: "AC" },
              { label: "Acura", value: "Acura" },
              { label: "Adler", value: "Adler" },
              { label: "Alfa Romeo", value: "Alfa Romeo" },
              { label: "Alpina", value: "Alpina" },
              { label: "Alpine", value: "Alpine" },
              { label: "AM General", value: "AM General" },
              { label: "AMC", value: "AMC" },
              { label: "Ariel", value: "Ariel" },
              { label: "Aro", value: "Aro" },
              { label: "Asia", value: "Asia" },
              { label: "Aston Martin", value: "Aston Martin" },
              { label: "Audi", value: "Audi" },
              { label: "Austin", value: "Austin" },
              { label: "Autobianchi", value: "Autobianchi" },
              { label: "BAIC", value: "BAIC" },
              { label: "Bajaj", value: "Bajaj" },
              { label: "Baltijas Dzips", value: "Baltijas Dzips" },
              { label: "BAOBO", value: "BAOBO" },
              { label: "Baojun", value: "Baojun" },
              { label: "Batmobile", value: "Batmobile" },
              { label: "BAW", value: "BAW" },
              { label: "Beijing", value: "Beijing" },
              { label: "Bentley", value: "Bentley" },
              { label: "Bertone", value: "Bertone" },
              { label: "Bike", value: "Bike" },
              { label: "Bilenkin", value: "Bilenkin" },
              { label: "Bitter", value: "Bitter" },
              { label: "BKM", value: "BKM" },
              { label: "BMW", value: "BMW" },
              { label: "Borgward", value: "Borgward" },
              { label: "Brabus", value: "Brabus" },
              { label: "Brilliance", value: "Brilliance" },
              { label: "Bristol", value: "Bristol" },
              { label: "Bufori", value: "Bufori" },
              { label: "Bugatti", value: "Bugatti" },
              { label: "Buick", value: "Buick" },
              { label: "BYD", value: "BYD" },
              { label: "Byvin", value: "Byvin" },
              { label: "Cadillac", value: "Cadillac" },
              { label: "Callaway", value: "Callaway" },
              { label: "Carbodies", value: "Carbodies" },
              { label: "Caterham", value: "Caterham" },
              { label: "Caterpillar", value: "Caterpillar" },
              { label: "Changan", value: "Changan" },
              { label: "ChangFeng", value: "ChangFeng" },
              { label: "Changhe", value: "Changhe" },
              { label: "Chery", value: "Chery" },
              { label: "CheryExeed", value: "CheryExeed" },
              { label: "Chevrolet", value: "Chevrolet" },
              { label: "Chrysler", value: "Chrysler" },
              { label: "Citroen", value: "Citroen" },
              { label: "Cizeta", value: "Cizeta" },
              { label: "Coggiola", value: "Coggiola" },
              { label: "Dacia", value: "Dacia" },
              { label: "Dadi", value: "Dadi" },
              { label: "Daewoo", value: "Daewoo" },
              { label: "DAF", value: "DAF" },
              { label: "Daihatsu", value: "Daihatsu" },
              { label: "Daimler", value: "Daimler" },
              { label: "Datsun", value: "Datsun" },
              { label: "Dayun", value: "Dayun" },
              { label: "De Tomaso", value: "De Tomaso" },
              { label: "Delage", value: "Delage" },
              { label: "DeLorean", value: "DeLorean" },
              { label: "Derways", value: "Derways" },
              { label: "DeSoto", value: "DeSoto" },
              { label: "Dodge", value: "Dodge" },
              { label: "DongFeng", value: "DongFeng" },
              { label: "Doninvest", value: "Doninvest" },
              { label: "Donkervoort", value: "Donkervoort" },
              { label: "DS", value: "DS" },
              { label: "E-Car", value: "E-Car" },
              { label: "Eagle", value: "Eagle" },
              { label: "Eagle Cars", value: "Eagle Cars" },
              { label: "Ecomotors", value: "Ecomotors" },
              { label: "Enovate", value: "Enovate" },
              { label: "Evolute", value: "Evolute" },
              { label: "Excalibur", value: "Excalibur" },
              { label: "FAW", value: "FAW" },
              { label: "Ferrari", value: "Ferrari" },
              { label: "Fiat", value: "Fiat" },
              { label: "Fisker", value: "Fisker" },
              { label: "Ford", value: "Ford" },
              { label: "Foton", value: "Foton" },
              { label: "FSO", value: "FSO" },
              { label: "Fuqi", value: "Fuqi" },
              { label: "GAC", value: "GAC" },
              { label: "GAC Aion", value: "GAC Aion" },
              { label: "GAC Gonow", value: "GAC Gonow" },
              { label: "Geely", value: "Geely" },
              { label: "Genesis", value: "Genesis" },
              { label: "Geo", value: "Geo" },
              { label: "GMC", value: "GMC" },
              { label: "Gonow", value: "Gonow" },
              { label: "Gordon", value: "Gordon" },
              { label: "GP", value: "GP" },
              { label: "Great Wall", value: "Great Wall" },
              { label: "Hafei", value: "Hafei" },
              { label: "Haima", value: "Haima" },
              { label: "Hanomag", value: "Hanomag" },
              { label: "Haval", value: "Haval" },
              { label: "Hawtai", value: "Hawtai" },
              { label: "Hindustan", value: "Hindustan" },
              { label: "Hino", value: "Hino" },
              { label: "Hispano-Suiza", value: "Hispano-Suiza" },
              { label: "Holden", value: "Holden" },
              { label: "Honda", value: "Honda" },
              { label: "Hongqi", value: "Hongqi" },
              { label: "Horch", value: "Horch" },
              { label: "HuangHai", value: "HuangHai" },
              { label: "Hudson", value: "Hudson" },
              { label: "Hummer", value: "Hummer" },
              { label: "Hyundai", value: "Hyundai" },
              { label: "Ikarbus", value: "Ikarbus" },
              { label: "Infiniti", value: "Infiniti" },
              { label: "Innocenti", value: "Innocenti" },
              { label: "Invicta", value: "Invicta" },
              { label: "Iran Khodro", value: "Iran Khodro" },
              { label: "Isdera", value: "Isdera" },
              { label: "Isuzu", value: "Isuzu" },
              { label: "Iveco", value: "Iveco" },
              { label: "JAC", value: "JAC" },
              { label: "Jaguar", value: "Jaguar" },
              { label: "JBC", value: "JBC" },
              { label: "Jeep", value: "Jeep" },
              { label: "Jensen", value: "Jensen" },
              { label: "Jetour", value: "Jetour" },
              { label: "Jinbei", value: "Jinbei" },
              { label: "JMC", value: "JMC" },
              { label: "Junfeng", value: "Junfeng" },
              { label: "Kaiyi", value: "Kaiyi" },
              { label: "Kangaroo", value: "Kangaroo" },
              { label: "Karry", value: "Karry" },
              { label: "Keyton", value: "Keyton" },
              { label: "Khazar", value: "Khazar" },
              { label: "Kia", value: "Kia" },
              { label: "Kingstar", value: "Kingstar" },
              { label: "Koenigsegg", value: "Koenigsegg" },
              { label: "KTM AG", value: "KTM AG" },
              { label: "LADA (ВАЗ)", value: "LADA (ВАЗ)" },
              { label: "Lamborghini", value: "Lamborghini" },
              { label: "Lancia", value: "Lancia" },
              { label: "Land Rover", value: "Land Rover" },
              { label: "Landwind", value: "Landwind" },
              { label: "Langfeng", value: "Langfeng" },
              { label: "LDV", value: "LDV" },
              { label: "Leapmotor", value: "Leapmotor" },
              { label: "LEVC", value: "LEVC" },
              { label: "Lexus", value: "Lexus" },
              { label: "Li", value: "Li" },
              { label: "Liebao Motor", value: "Liebao Motor" },
              { label: "Lifan", value: "Lifan" },
              { label: "Lincoln", value: "Lincoln" },
              { label: "Link Tour", value: "Link Tour" },
              { label: "Lotus", value: "Lotus" },
              { label: "LTI", value: "LTI" },
              { label: "Luxgen", value: "Luxgen" },
              { label: "Mahindra", value: "Mahindra" },
              { label: "Man", value: "Man" },
              { label: "Marcos", value: "Marcos" },
              { label: "Marlin", value: "Marlin" },
              { label: "Marussia", value: "Marussia" },
              { label: "Maruti", value: "Maruti" },
              { label: "Maserati", value: "Maserati" },
              { label: "MAXUS", value: "MAXUS" },
              { label: "Maybach", value: "Maybach" },
              { label: "Mazda", value: "Mazda" },
              { label: "McLaren", value: "McLaren" },
              { label: "Mega", value: "Mega" },
              { label: "Mercedes-Benz", value: "Mercedes-Benz" },
              { label: "Mercury", value: "Mercury" },
              { label: "Metrocab", value: "Metrocab" },
              { label: "MG", value: "MG" },
              { label: "Microcar", value: "Microcar" },
              { label: "Minelli", value: "Minelli" },
              { label: "MINI", value: "MINI" },
              { label: "Mitsubishi", value: "Mitsubishi" },
              { label: "Mitsuoka", value: "Mitsuoka" },
              { label: "Morgan", value: "Morgan" },
              { label: "Morris", value: "Morris" },
              { label: "Naveco", value: "Naveco" },
              { label: "Neta", value: "Neta" },
              { label: "Nissan", value: "Nissan" },
              { label: "Noble", value: "Noble" },
              { label: "Oldsmobile", value: "Oldsmobile" },
              { label: "Opel", value: "Opel" },
              { label: "Ora", value: "Ora" },
              { label: "Osca", value: "Osca" },
              { label: "Packard", value: "Packard" },
              { label: "Pagani", value: "Pagani" },
              { label: "Panoz", value: "Panoz" },
              { label: "Perodua", value: "Perodua" },
              { label: "Peugeot", value: "Peugeot" },
              { label: "PGO", value: "PGO" },
              { label: "Piaggio", value: "Piaggio" },
              { label: "Plymouth", value: "Plymouth" },
              { label: "Polestar", value: "Polestar" },
              { label: "Pontiac", value: "Pontiac" },
              { label: "Porsche", value: "Porsche" },
              { label: "Premier", value: "Premier" },
              { label: "Proton", value: "Proton" },
              { label: "PUCH", value: "PUCH" },
              { label: "Puma", value: "Puma" },
              { label: "Qoros", value: "Qoros" },
              { label: "Qvale", value: "Qvale" },
              { label: "Ravon", value: "Ravon" },
              { label: "Reliant", value: "Reliant" },
              { label: "Renaissance", value: "Renaissance" },
              { label: "Renault", value: "Renault" },
              { label: "Renault Samsung", value: "Renault Samsung" },
              { label: "Rezvani", value: "Rezvani" },
              { label: "Rimac", value: "Rimac" },
              { label: "Roewe", value: "Roewe" },
              { label: "Rolls-Royce", value: "Rolls-Royce" },
              { label: "Ronart", value: "Ronart" },
              { label: "Rover", value: "Rover" },
              { label: "Saab", value: "Saab" },
              { label: "Saipa", value: "Saipa" },
              { label: "Saleen", value: "Saleen" },
              { label: "Sanili (motorbike)", value: "Sanili (motorbike)" },
              { label: "Santana", value: "Santana" },
              { label: "Saturn", value: "Saturn" },
              { label: "Scania", value: "Scania" },
              { label: "Scion", value: "Scion" },
              { label: "Scooter", value: "Scooter" },
              { label: "SEAT", value: "SEAT" },
              { label: "Senke (motorbike)", value: "Senke (motorbike)" },
              { label: "Shanghai Maple", value: "Shanghai Maple" },
              { label: "Shineray", value: "Shineray" },
              { label: "ShuangHuan", value: "ShuangHuan" },
              { label: "Skoda", value: "Skoda" },
              { label: "Skywell", value: "Skywell" },
              { label: "Smart", value: "Smart" },
              { label: "Solaris", value: "Solaris" },
              { label: "Soueast", value: "Soueast" },
              { label: "Spectre", value: "Spectre" },
              { label: "Spyker", value: "Spyker" },
              { label: "SsangYong", value: "SsangYong" },
              { label: "Steyr", value: "Steyr" },
              { label: "Subaru", value: "Subaru" },
              { label: "Suzuki", value: "Suzuki" },
              { label: "Talbot", value: "Talbot" },
              { label: "TATA", value: "TATA" },
              { label: "Tatra", value: "Tatra" },
              { label: "Tazzari", value: "Tazzari" },
              { label: "Tesla", value: "Tesla" },
              { label: "Think", value: "Think" },
              { label: "Tianma", value: "Tianma" },
              { label: "Tianye", value: "Tianye" },
              { label: "Tofas", value: "Tofas" },
              { label: "Toyota", value: "Toyota" },
              { label: "Trabant", value: "Trabant" },
              { label: "Tramontana", value: "Tramontana" },
              { label: "Tricycle", value: "Tricycle" },
              { label: "Triumph", value: "Triumph" },
              { label: "TVR", value: "TVR" },
              { label: "TVS (motorbike)", value: "TVS (motorbike)" },
              { label: "Ultima", value: "Ultima" },
              { label: "Vauxhall", value: "Vauxhall" },
              { label: "Vector", value: "Vector" },
              { label: "Venturi", value: "Venturi" },
              { label: "Venucia", value: "Venucia" },
              { label: "Volkswagen", value: "Volkswagen" },
              { label: "Volvo", value: "Volvo" },
              { label: "Vortex", value: "Vortex" },
              { label: "W Motors", value: "W Motors" },
              { label: "Wanderer", value: "Wanderer" },
              { label: "Wartburg", value: "Wartburg" },
              { label: "Weltmeister", value: "Weltmeister" },
              { label: "Westfield", value: "Westfield" },
              { label: "Wiesmann", value: "Wiesmann" },
              { label: "Willys", value: "Willys" },
              { label: "Wuling", value: "Wuling" },
              { label: "Xin Kai", value: "Xin Kai" },
              { label: "Xpeng", value: "Xpeng" },
              { label: "Yuejin", value: "Yuejin" },
              { label: "Zastava", value: "Zastava" },
              { label: "Zenos", value: "Zenos" },
              { label: "Zenvo", value: "Zenvo" },
              { label: "Zibar", value: "Zibar" },
              { label: "Zotye", value: "Zotye" },
              { label: "ZX", value: "ZX" },
              { label: "Автокам", value: "Автокам" },
              { label: "Богдан", value: "Богдан" },
              { label: "Бронто", value: "Бронто" },
              { label: "ВИС", value: "ВИС" },
              { label: "ГАЗ", value: "ГАЗ" },
              { label: "ЗАЗ", value: "ЗАЗ" },
              { label: "ЗИЛ", value: "ЗИЛ" },
              { label: "ЗиС", value: "ЗиС" },
              { label: "ИЖ", value: "ИЖ" },
              { label: "КАМАЗ", value: "КАМАЗ" },
              { label: "Канонир", value: "Канонир" },
              { label: "Комбат", value: "Комбат" },
              { label: "ЛиАЗ", value: "ЛиАЗ" },
              { label: "ЛуАЗ", value: "ЛуАЗ" },
              { label: "МАЗ", value: "МАЗ" },
              { label: "Москвич", value: "Москвич" },
              { label: "СМЗ", value: "СМЗ" },
              { label: "ТагАЗ", value: "ТагАЗ" },
              { label: "УАЗ", value: "УАЗ" },
              { label: "УРАЛ", value: "УРАЛ" },
              { label: "Эксклюзив", value: "Эксклюзив" },
              { label: "Ё-мобиль", value: "Ё-мобиль" },
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
              state.carBrand === "AC"
                ? [
                    { label: "378 GT Zagato", value: "378 GT Zagato" },
                    { label: "Ace", value: "Ace" },
                    { label: "Aceca", value: "Aceca" },
                    { label: "Cobra", value: "Cobra" },
                  ]
              : state.carBrand === "Acura"
                ? [
                    { label: "ILX", value: "ILX" },
                    { label: "RDX", value: "RDX" },
                    { label: "SLX", value: "SLX" },
                    { label: "RSX", value: "RSX" },
                    { label: "TLX", value: "TLX" },
                    { label: "Legend", value: "Legend" },
                    { label: "MDX", value: "MDX" },
                    { label: "TSX", value: "TSX" },
                    { label: "EL", value: "EL" },
                    { label: "Integra", value: "Integra" },
                    { label: "RLX", value: "RLX" },
                    { label: "CL", value: "CL" },
                    { label: "TL", value: "TL" },
                    { label: "ZDX", value: "ZDX" },
                    { label: "NSX", value: "NSX" },
                    { label: "RL", value: "RL" },
                    { label: "CSX", value: "CSX" },
                  ]
              : state.carBrand === "Adler"
                ? [
                    { label: "Diplomat", value: "Diplomat" },
                    { label: "Trumpf Junior", value: "Trumpf Junior" },
                  ]
              : state.carBrand === "Alfa Romeo"
                ? [
                    { label: "6", value: "6" },
                    { label: "90", value: "90" },
                    { label: "2600", value: "2600" },
                    { label: "105/115", value: "105/115" },
                    { label: "166", value: "166" },
                    { label: "SZ", value: "SZ" },
                    { label: "Arna", value: "Arna" },
                    { label: "155", value: "155" },
                    { label: "75", value: "75" },
                    { label: "146", value: "146" },
                    { label: "GTV", value: "GTV" },
                    { label: "8C Competizione", value: "8C Competizione" },
                    { label: "Alfetta", value: "Alfetta" },
                    { label: "Disco Volante", value: "Disco Volante" },
                    { label: "Montreal", value: "Montreal" },
                    { label: "GTA Coupe", value: "GTA Coupe" },
                    { label: "Spider", value: "Spider" },
                    { label: "145", value: "145" },
                    { label: "33", value: "33" },
                    { label: "Stelvio", value: "Stelvio" },
                    { label: "GT", value: "GT" },
                    { label: "RZ", value: "RZ" },
                    { label: "4C", value: "4C" },
                    { label: "164", value: "164" },
                    { label: "Alfasud", value: "Alfasud" },
                    { label: "Giulietta", value: "Giulietta" },
                    { label: "Sprint", value: "Sprint" },
                    { label: "159", value: "159" },
                    { label: "156", value: "156" },
                    { label: "1900", value: "1900" },
                    { label: "6C", value: "6C" },
                    { label: "MiTo", value: "MiTo" },
                    { label: "147", value: "147" },
                    { label: "Brera", value: "Brera" },
                    { label: "Giulia", value: "Giulia" },
                  ]
              : state.carBrand === "Alpina"
                ? [
                    { label: "D10", value: "D10" },
                    { label: "B12", value: "B12" },
                    { label: "B6", value: "B6" },
                    { label: "D3", value: "D3" },
                    { label: "B8", value: "B8" },
                    { label: "C1", value: "C1" },
                    { label: "B5", value: "B5" },
                    { label: "B10", value: "B10" },
                    { label: "B4", value: "B4" },
                    { label: "D5", value: "D5" },
                    { label: "XD3", value: "XD3" },
                    { label: "B9", value: "B9" },
                    { label: "B7", value: "B7" },
                    { label: "B11", value: "B11" },
                    { label: "Roadster", value: "Roadster" },
                    { label: "C2", value: "C2" },
                    { label: "B3", value: "B3" },
                  ]
              : state.carBrand === "Alpine"
                ? [
                    { label: "A110", value: "A110" },
                    { label: "A610", value: "A610" },
                    { label: "A310", value: "A310" },
                    { label: "GTA", value: "GTA" },
                  ]
              : state.carBrand === "AM General"
                ? [
                    { label: "HMMWV (Humvee)", value: "HMMWV (Humvee)" },
                  ]
              : state.carBrand === "AMC"
                ? [
                    { label: "Hornet", value: "Hornet" },
                  ]
              : state.carBrand === "Ariel"
                ? [
                    { label: "Atom", value: "Atom" },
                  ]
              : state.carBrand === "Aro"
                ? [
                    { label: "10", value: "10" },
                    { label: "24", value: "24" },
                  ]
              : state.carBrand === "Asia"
                ? [
                    { label: "Rocsta", value: "Rocsta" },
                    { label: "Retona", value: "Retona" },
                    { label: "Topic", value: "Topic" },
                  ]
              : state.carBrand === "Aston Martin"
                ? [
                    { label: "DBS", value: "DBS" },
                    { label: "Tickford Capri", value: "Tickford Capri" },
                    { label: "V8 Vantage", value: "V8 Vantage" },
                    { label: "Lagonda", value: "Lagonda" },
                    { label: "DB7", value: "DB7" },
                    { label: "DB9", value: "DB9" },
                    { label: "Virage", value: "Virage" },
                    { label: "V12 Vantage", value: "V12 Vantage" },
                    { label: "Rapide", value: "Rapide" },
                    { label: "DB AR1", value: "DB AR1" },
                    { label: "Bulldog", value: "Bulldog" },
                    { label: "Vanquish", value: "Vanquish" },
                    { label: "V8 Zagato", value: "V8 Zagato" },
                    { label: "V12 Zagato", value: "V12 Zagato" },
                    { label: "DB11", value: "DB11" },
                    { label: "DB5", value: "DB5" },
                    { label: "One-77", value: "One-77" },
                    { label: "Cygnet", value: "Cygnet" },
                  ]
              : state.carBrand === "Audi"
                ? [
                    { label: "SQ7", value: "SQ7" },
                    { label: "RS 7", value: "RS 7" },
                    { label: "S5", value: "S5" },
                    { label: "S8", value: "S8" },
                    { label: "TTS", value: "TTS" },
                    { label: "Quattro", value: "Quattro" },
                    { label: "920", value: "920" },
                    { label: "S2", value: "S2" },
                    { label: "V8", value: "V8" },
                    { label: "A6 allroad", value: "A6 allroad" },
                    { label: "RS 3", value: "RS 3" },
                    { label: "Q8", value: "Q8" },
                    { label: "A4 allroad", value: "A4 allroad" },
                    { label: "90", value: "90" },
                    { label: "S6", value: "S6" },
                    { label: "RS 6", value: "RS 6" },
                    { label: "Coupe", value: "Coupe" },
                    { label: "A6", value: "A6" },
                    { label: "A4", value: "A4" },
                    { label: "A5", value: "A5" },
                    { label: "e-tron", value: "e-tron" },
                    { label: "RS 2", value: "RS 2" },
                    { label: "50", value: "50" },
                    { label: "e-tron Sportback", value: "e-tron Sportback" },
                    { label: "A2", value: "A2" },
                    { label: "NSU RO 80", value: "NSU RO 80" },
                    { label: "TT RS", value: "TT RS" },
                    { label: "5000", value: "5000" },
                    { label: "A3 e-tron", value: "A3 e-tron" },
                    { label: "Q3", value: "Q3" },
                    { label: "A7", value: "A7" },
                    { label: "Q5", value: "Q5" },
                    { label: "RS Q3", value: "RS Q3" },
                    { label: "Typ R", value: "Typ R" },
                    { label: "S4", value: "S4" },
                    { label: "A3", value: "A3" },
                    { label: "S3", value: "S3" },
                    { label: "TT", value: "TT" },
                    { label: "SQ5", value: "SQ5" },
                    { label: "80", value: "80" },
                    { label: "S1", value: "S1" },
                    { label: "Cabriolet", value: "Cabriolet" },
                    { label: "Q2", value: "Q2" },
                    { label: "Q9", value: "Q9" },
                    { label: "S7", value: "S7" },
                    { label: "Q7", value: "Q7" },
                    { label: "RS 5", value: "RS 5" },
                    { label: "RS 4", value: "RS 4" },
                    { label: "200", value: "200" },
                    { label: "A1", value: "A1" },
                    { label: "A8", value: "A8" },
                    { label: "R8", value: "R8" },
                    { label: "100", value: "100" },
                  ]
              : state.carBrand === "Austin"
                ? [
                    { label: "Maxi", value: "Maxi" },
                    { label: "Ambassador", value: "Ambassador" },
                    { label: "Montego", value: "Montego" },
                    { label: "Metro", value: "Metro" },
                    { label: "Mini", value: "Mini" },
                    { label: "Allegro", value: "Allegro" },
                    { label: "Maestro", value: "Maestro" },
                    { label: "Princess", value: "Princess" },
                  ]
              : state.carBrand === "Autobianchi"
                ? [
                    { label: "A 112", value: "A 112" },
                  ]
              : state.carBrand === "BAIC"
                ? [
                    { label: "A115", value: "A115" },
                    { label: "EU5", value: "EU5" },
                    { label: "X25", value: "X25" },
                    { label: "X7", value: "X7" },
                    { label: "A113", value: "A113" },
                    { label: "EV200", value: "EV200" },
                    { label: "M60", value: "M60" },
                    { label: "D20", value: "D20" },
                    { label: "EX5", value: "EX5" },
                    { label: "EC", value: "EC" },
                    { label: "U5", value: "U5" },
                    { label: "X55", value: "X55" },
                  ]
              : state.carBrand === "Bajaj"
                ? [
                    { label: "Qute", value: "Qute" },
                  ]
              : state.carBrand === "Baltijas Dzips"
                ? [
                    { label: "Boxer (BM 150)", value: "Boxer (BM 150)" },
                    { label: "BD-1322", value: "BD-1322" },
                    { label: "Boxer (BM 100)", value: "Boxer (BM 100)" },
                  ]
              : state.carBrand === "BAOBO"
                ? [
                    { label: "HX150ZK", value: "HX150ZK" },
                  ]
              : state.carBrand === "Baojun"
                ? [
                    { label: "310", value: "310" },
                  ]
              : state.carBrand === "Batmobile"
                ? [
                    { label: "1989", value: "1989" },
                  ]
              : state.carBrand === "BAW"
                ? [
                    { label: "Fenix", value: "Fenix" },
                    { label: "28189000001062", value: "28189000001062" },
                    { label: "Tonik", value: "Tonik" },
                  ]
              : state.carBrand === "Beijing"
                ? [
                    { label: "Jeep Cherokee 2500", value: "Jeep Cherokee 2500" },
                    { label: "BJ212", value: "BJ212" },
                    { label: "BJ2020", value: "BJ2020" },
                    { label: "EU7", value: "EU7" },
                  ]
              : state.carBrand === "Bentley"
                ? [
                    { label: "R Type", value: "R Type" },
                    { label: "Flying Spur", value: "Flying Spur" },
                    { label: "T-Series", value: "T-Series" },
                    { label: "Brooklands", value: "Brooklands" },
                    { label: "Azure", value: "Azure" },
                    { label: "Continental Flying Spur", value: "Continental Flying Spur" },
                    { label: "Continental GT", value: "Continental GT" },
                    { label: "Mulsanne", value: "Mulsanne" },
                    { label: "Bentayga", value: "Bentayga" },
                    { label: "Continental", value: "Continental" },
                    { label: "Eight", value: "Eight" },
                    { label: "S", value: "S" },
                    { label: "Mark VI", value: "Mark VI" },
                    { label: "Arnage", value: "Arnage" },
                    { label: "Turbo R", value: "Turbo R" },
                  ]
              : state.carBrand === "Bertone"
                ? [
                    { label: "Freeclimber", value: "Freeclimber" },
                  ]
              : state.carBrand === "Bike"
                ? [
                    { label: "Driver", value: "Driver" },
                    { label: "Courier", value: "Courier" },
                  ]
              : state.carBrand === "Bilenkin"
                ? [
                    { label: "Vintage", value: "Vintage" },
                  ]
              : state.carBrand === "Bitter"
                ? [
                    { label: "Type 3", value: "Type 3" },
                    { label: "CD", value: "CD" },
                  ]
              : state.carBrand === "BKM"
                ? [
                    { label: "AKSM-321", value: "AKSM-321" },
                  ]
              : state.carBrand === "BMW"
                ? [
                    { label: "315", value: "315" },
                    { label: "M3", value: "M3" },
                    { label: "Z8", value: "Z8" },
                    { label: "M2", value: "M2" },
                    { label: "501", value: "501" },
                    { label: "2er Active Tourer", value: "2er Active Tourer" },
                    { label: "M4", value: "M4" },
                    { label: "502", value: "502" },
                    { label: "i8", value: "i8" },
                    { label: "02 (E10)", value: "02 (E10)" },
                    { label: "X1", value: "X1" },
                    { label: "iX5", value: "iX5" },
                    { label: "318i", value: "318i" },
                    { label: "503", value: "503" },
                    { label: "X4", value: "X4" },
                    { label: "Z1", value: "Z1" },
                    { label: "5er", value: "5er" },
                    { label: "4er", value: "4er" },
                    { label: "520", value: "520" },
                    { label: "X7", value: "X7" },
                    { label: "2er Grand Tourer", value: "2er Grand Tourer" },
                    { label: "iX", value: "iX" },
                    { label: "iX3", value: "iX3" },
                    { label: "2000 C/CS", value: "2000 C/CS" },
                    { label: "3200", value: "3200" },
                    { label: "321", value: "321" },
                    { label: "7er", value: "7er" },
                    { label: "M6", value: "M6" },
                    { label: "X6 M", value: "X6 M" },
                    { label: "327", value: "327" },
                    { label: "Z4", value: "Z4" },
                    { label: "X3", value: "X3" },
                    { label: "X5", value: "X5" },
                    { label: "700", value: "700" },
                    { label: "3er", value: "3er" },
                    { label: "E3", value: "E3" },
                    { label: "3/15", value: "3/15" },
                    { label: "6er", value: "6er" },
                    { label: "600", value: "600" },
                    { label: "E9", value: "E9" },
                    { label: "M5", value: "M5" },
                    { label: "X6", value: "X6" },
                    { label: "X2", value: "X2" },
                    { label: "8er", value: "8er" },
                    { label: "i3", value: "i3" },
                    { label: "Z4 M", value: "Z4 M" },
                    { label: "Z3 M", value: "Z3 M" },
                    { label: "340", value: "340" },
                    { label: "New Class", value: "New Class" },
                    { label: "X5 M", value: "X5 M" },
                    { label: "2er", value: "2er" },
                    { label: "Z3", value: "Z3" },
                    { label: "1M", value: "1M" },
                    { label: "326", value: "326" },
                    { label: "507", value: "507" },
                    { label: "1er", value: "1er" },
                  ]
              : state.carBrand === "Borgward"
                ? [
                    { label: "2000", value: "2000" },
                    { label: "Hansa 1100", value: "Hansa 1100" },
                  ]
              : state.carBrand === "Brabus"
                ? [
                    { label: "ML 63 Biturbo", value: "ML 63 Biturbo" },
                    { label: "M V12", value: "M V12" },
                    { label: "7.3S", value: "7.3S" },
                    { label: "SV12", value: "SV12" },
                  ]
              : state.carBrand === "Brilliance"
                ? [
                    { label: "M1 (BS6)", value: "M1 (BS6)" },
                    { label: "V3", value: "V3" },
                    { label: "H530", value: "H530" },
                    { label: "V5", value: "V5" },
                    { label: "M3 (BC3)", value: "M3 (BC3)" },
                    { label: "H230", value: "H230" },
                    { label: "FRV (BS2)", value: "FRV (BS2)" },
                    { label: "M2 (BS4)", value: "M2 (BS4)" },
                  ]
              : state.carBrand === "Bristol"
                ? [
                    { label: "Fighter", value: "Fighter" },
                    { label: "Blenheim Speedster", value: "Blenheim Speedster" },
                    { label: "Blenheim", value: "Blenheim" },
                  ]
              : state.carBrand === "Bufori"
                ? [
                    { label: "La Joya", value: "La Joya" },
                    { label: "Geneva", value: "Geneva" },
                  ]
              : state.carBrand === "Bugatti"
                ? [
                    { label: "EB Veyron 16.4", value: "EB Veyron 16.4" },
                    { label: "EB 110", value: "EB 110" },
                    { label: "Chiron", value: "Chiron" },
                    { label: "EB 112", value: "EB 112" },
                    { label: "Type 55", value: "Type 55" },
                  ]
              : state.carBrand === "Buick"
                ? [
                    { label: "Electra", value: "Electra" },
                    { label: "Super", value: "Super" },
                    { label: "Reatta", value: "Reatta" },
                    { label: "Roadmaster", value: "Roadmaster" },
                    { label: "Enclave", value: "Enclave" },
                    { label: "Rainer", value: "Rainer" },
                    { label: "Skyhawk", value: "Skyhawk" },
                    { label: "Century", value: "Century" },
                    { label: "GS", value: "GS" },
                    { label: "Encore", value: "Encore" },
                    { label: "Special", value: "Special" },
                    { label: "Lucerne", value: "Lucerne" },
                    { label: "Envision", value: "Envision" },
                    { label: "GL8", value: "GL8" },
                    { label: "Regal", value: "Regal" },
                    { label: "Riviera", value: "Riviera" },
                    { label: "Excelle", value: "Excelle" },
                    { label: "Skylark", value: "Skylark" },
                    { label: "Rendezvous", value: "Rendezvous" },
                    { label: "Park Avenue", value: "Park Avenue" },
                    { label: "Estate Wagon", value: "Estate Wagon" },
                    { label: "Verano", value: "Verano" },
                    { label: "LaCrosse", value: "LaCrosse" },
                    { label: "Limited", value: "Limited" },
                    { label: "Wildcat", value: "Wildcat" },
                    { label: "Terraza", value: "Terraza" },
                    { label: "LeSabre", value: "LeSabre" },
                  ]
              : state.carBrand === "BYD"
                ? [
                    { label: "S6", value: "S6" },
                    { label: "QCJ7", value: "QCJ7" },
                    { label: "Han", value: "Han" },
                    { label: "Yuan", value: "Yuan" },
                    { label: "G6", value: "G6" },
                    { label: "F6", value: "F6" },
                    { label: "F0", value: "F0" },
                    { label: "E5", value: "E5" },
                    { label: "Flyer", value: "Flyer" },
                    { label: "M6", value: "M6" },
                    { label: "F3", value: "F3" },
                    { label: "F5", value: "F5" },
                    { label: "Qin Plus", value: "Qin Plus" },
                    { label: "Tang", value: "Tang" },
                    { label: "L3", value: "L3" },
                    { label: "Qin Pro", value: "Qin Pro" },
                    { label: "G3", value: "G3" },
                    { label: "E6", value: "E6" },
                    { label: "Song Plus", value: "Song Plus" },
                    { label: "E2", value: "E2" },
                    { label: "F8 (S8)", value: "F8 (S8)" },
                  ]
              : state.carBrand === "Byvin"
                ? [
                    { label: "BD326J (Moca)", value: "BD326J (Moca)" },
                    { label: "BD132J (CoCo)", value: "BD132J (CoCo)" },
                  ]
              : state.carBrand === "Cadillac"
                ? [
                    { label: "ELR", value: "ELR" },
                    { label: "CTS", value: "CTS" },
                    { label: "SRX", value: "SRX" },
                    { label: "LSE", value: "LSE" },
                    { label: "DeVille", value: "DeVille" },
                    { label: "Allante", value: "Allante" },
                    { label: "Sixty Special", value: "Sixty Special" },
                    { label: "XLR", value: "XLR" },
                    { label: "Series 62", value: "Series 62" },
                    { label: "XT5", value: "XT5" },
                    { label: "Catera", value: "Catera" },
                    { label: "Escalade", value: "Escalade" },
                    { label: "CTS-V", value: "CTS-V" },
                    { label: "STS", value: "STS" },
                    { label: "ATS-V", value: "ATS-V" },
                    { label: "Seville", value: "Seville" },
                    { label: "CT6", value: "CT6" },
                    { label: "ATS", value: "ATS" },
                    { label: "BLS", value: "BLS" },
                    { label: "DTS", value: "DTS" },
                    { label: "Brougham", value: "Brougham" },
                    { label: "Eldorado", value: "Eldorado" },
                    { label: "Fleetwood", value: "Fleetwood" },
                    { label: "XTS", value: "XTS" },
                  ]
              : state.carBrand === "Callaway"
                ? [
                    { label: "C12", value: "C12" },
                  ]
              : state.carBrand === "Carbodies"
                ? [
                    { label: "FX4", value: "FX4" },
                  ]
              : state.carBrand === "Caterham"
                ? [
                    { label: "CSR", value: "CSR" },
                    { label: "21", value: "21" },
                    { label: "Seven", value: "Seven" },
                  ]
              : state.carBrand === "Caterpillar"
                ? [
                    { label: "777F", value: "777F" },
                  ]
              : state.carBrand === "Changan"
                ? [
                    { label: "CX70", value: "CX70" },
                    { label: "SC1027DAC5", value: "SC1027DAC5" },
                    { label: "1027DBA4", value: "1027DBA4" },
                    { label: "Eado", value: "Eado" },
                    { label: "Alsvin V5", value: "Alsvin V5" },
                    { label: "CS35", value: "CS35" },
                    { label: "Alsvin V3", value: "Alsvin V3" },
                    { label: "Alsvin V7", value: "Alsvin V7" },
                    { label: "CS75", value: "CS75" },
                    { label: "SC1040", value: "SC1040" },
                    { label: "Changxing", value: "Changxing" },
                    { label: "SC1030FW9", value: "SC1030FW9" },
                    { label: "CS35 Plus", value: "CS35 Plus" },
                    { label: "CM-8", value: "CM-8" },
                    { label: "CX20", value: "CX20" },
                    { label: "Raeton", value: "Raeton" },
                    { label: "CS85", value: "CS85" },
                    { label: "UNI-T", value: "UNI-T" },
                    { label: "Auchan A600 EV", value: "Auchan A600 EV" },
                    { label: "CS15", value: "CS15" },
                    { label: "Benni", value: "Benni" },
                    { label: "UNI-K", value: "UNI-K" },
                    { label: "Hunter", value: "Hunter" },
                    { label: "Z-Shine", value: "Z-Shine" },
                    { label: "CS55", value: "CS55" },
                    { label: "Honor", value: "Honor" },
                  ]
              : state.carBrand === "ChangFeng"
                ? [
                    { label: "Flying", value: "Flying" },
                    { label: "SUV (CS6)", value: "SUV (CS6)" },
                  ]
              : state.carBrand === "Changhe"
                ? [
                    { label: "Q25", value: "Q25" },
                    { label: "M60", value: "M60" },
                    { label: "M50S", value: "M50S" },
                    { label: "Ideal", value: "Ideal" },
                  ]
              : state.carBrand === "Chery"
                ? [
                    { label: "Bonus 3 (E3/A19)", value: "Bonus 3 (E3/A19)" },
                    { label: "Eastar", value: "Eastar" },
                    { label: "Tiggo 4", value: "Tiggo 4" },
                    { label: "Very (A13)", value: "Very (A13)" },
                    { label: "IndiS (S18D)", value: "IndiS (S18D)" },
                    { label: "Tiggo 3xe", value: "Tiggo 3xe" },
                    { label: "Tiggo 7 Pro", value: "Tiggo 7 Pro" },
                    { label: "Tiggo 2 Pro", value: "Tiggo 2 Pro" },
                    { label: "Sweet (QQ)", value: "Sweet (QQ)" },
                    { label: "CrossEastar (B14)", value: "CrossEastar (B14)" },
                    { label: "Tiggo 4 Pro", value: "Tiggo 4 Pro" },
                    { label: "Windcloud (A11)", value: "Windcloud (A11)" },
                    { label: "Tiggo 3", value: "Tiggo 3" },
                    { label: "Arrizo 5", value: "Arrizo 5" },
                    { label: "Kimo (A1)", value: "Kimo (A1)" },
                    { label: "Arrizo 3", value: "Arrizo 3" },
                    { label: "QQ6 (S21)", value: "QQ6 (S21)" },
                    { label: "Arrizo 7", value: "Arrizo 7" },
                    { label: "Tiggo 5", value: "Tiggo 5" },
                    { label: "Tiggo 7", value: "Tiggo 7" },
                    { label: "Tiggo 8", value: "Tiggo 8" },
                    { label: "Tiggo 8 Pro Max", value: "Tiggo 8 Pro Max" },
                    { label: "Tiggo (T11)", value: "Tiggo (T11)" },
                    { label: "E5", value: "E5" },
                    { label: "Oriental Son (B11)", value: "Oriental Son (B11)" },
                    { label: "Tiggo 2", value: "Tiggo 2" },
                    { label: "QQme", value: "QQme" },
                    { label: "Tiggo 8 Pro", value: "Tiggo 8 Pro" },
                    { label: "M11 (A3)", value: "M11 (A3)" },
                    { label: "Fora (A21)", value: "Fora (A21)" },
                    { label: "Amulet (A15)", value: "Amulet (A15)" },
                    { label: "Bonus (A13)", value: "Bonus (A13)" },
                    { label: "B13", value: "B13" },
                  ]
              : state.carBrand === "CheryExeed"
                ? [
                    { label: "TXL", value: "TXL" },
                    { label: "LX", value: "LX" },
                    { label: "VX", value: "VX" },
                  ]
              : state.carBrand === "Chevrolet"
                ? [
                    { label: "Bel Air", value: "Bel Air" },
                    { label: "MATIZ", value: "MATIZ" },
                    { label: "Avalanche", value: "Avalanche" },
                    { label: "Tahoe", value: "Tahoe" },
                    { label: "Tosca", value: "Tosca" },
                    { label: "Monte Carlo", value: "Monte Carlo" },
                    { label: "Colorado", value: "Colorado" },
                    { label: "Kalos", value: "Kalos" },
                    { label: "Celta", value: "Celta" },
                    { label: "Klan J200", value: "Klan J200" },
                    { label: "Menlo", value: "Menlo" },
                    { label: "HHR", value: "HHR" },
                    { label: "C-10", value: "C-10" },
                    { label: "Lanos", value: "Lanos" },
                    { label: "Starcraft", value: "Starcraft" },
                    { label: "Omega", value: "Omega" },
                    { label: "Traverse", value: "Traverse" },
                    { label: "Camaro", value: "Camaro" },
                    { label: "Metro", value: "Metro" },
                    { label: "Lacetti", value: "Lacetti" },
                    { label: "Alero", value: "Alero" },
                    { label: "Lumina APV", value: "Lumina APV" },
                    { label: "Klac", value: "Klac" },
                    { label: "Uplander", value: "Uplander" },
                    { label: "Orlando", value: "Orlando" },
                    { label: "Vectra", value: "Vectra" },
                    { label: "Malibu", value: "Malibu" },
                    { label: "Corvette", value: "Corvette" },
                    { label: "Blazer K5", value: "Blazer K5" },
                    { label: "Prizm", value: "Prizm" },
                    { label: "Monza", value: "Monza" },
                    { label: "Viva", value: "Viva" },
                    { label: "Special DeLuxe", value: "Special DeLuxe" },
                    { label: "Venture", value: "Venture" },
                    { label: "Corvair", value: "Corvair" },
                    { label: "Labo", value: "Labo" },
                    { label: "Tracker", value: "Tracker" },
                    { label: "Niva", value: "Niva" },
                    { label: "Nubira", value: "Nubira" },
                    { label: "Celebrity", value: "Celebrity" },
                    { label: "Epica", value: "Epica" },
                    { label: "Cruze", value: "Cruze" },
                    { label: "Silverado", value: "Silverado" },
                    { label: "Sail", value: "Sail" },
                    { label: "Chevelle", value: "Chevelle" },
                    { label: "Astra", value: "Astra" },
                    { label: "Trans Sport", value: "Trans Sport" },
                    { label: "Captiva", value: "Captiva" },
                    { label: "Impala", value: "Impala" },
                    { label: "Zafira", value: "Zafira" },
                    { label: "Nexia", value: "Nexia" },
                    { label: "Aveo", value: "Aveo" },
                    { label: "Corsa", value: "Corsa" },
                    { label: "LUV D-MAX", value: "LUV D-MAX" },
                    { label: "Citation", value: "Citation" },
                    { label: "Bolt", value: "Bolt" },
                    { label: "Chevette", value: "Chevette" },
                    { label: "Volt", value: "Volt" },
                    { label: "Beretta", value: "Beretta" },
                    { label: "Express", value: "Express" },
                    { label: "Tavera", value: "Tavera" },
                    { label: "Deluxe", value: "Deluxe" },
                    { label: "Damas", value: "Damas" },
                    { label: "Blazer", value: "Blazer" },
                    { label: "Tacuma", value: "Tacuma" },
                    { label: "Caprice", value: "Caprice" },
                    { label: "Spark", value: "Spark" },
                    { label: "Rezzo", value: "Rezzo" },
                    { label: "Cruze (HR)", value: "Cruze (HR)" },
                    { label: "Lumina", value: "Lumina" },
                    { label: "Cobalt", value: "Cobalt" },
                    { label: "Trax", value: "Trax" },
                    { label: "Suburban", value: "Suburban" },
                    { label: "Sonic", value: "Sonic" },
                    { label: "Evanda", value: "Evanda" },
                    { label: "TrailBlazer", value: "TrailBlazer" },
                    { label: "Van", value: "Van" },
                    { label: "Master", value: "Master" },
                    { label: "SS", value: "SS" },
                    { label: "Astro", value: "Astro" },
                    { label: "Cavalier", value: "Cavalier" },
                    { label: "Equinox", value: "Equinox" },
                    { label: "El Camino", value: "El Camino" },
                    { label: "C/K", value: "C/K" },
                    { label: "Corsica", value: "Corsica" },
                    { label: "Classic", value: "Classic" },
                    { label: "SSR", value: "SSR" },
                    { label: "S-10 Pickup", value: "S-10 Pickup" },
                    { label: "Fleetmaster", value: "Fleetmaster" },
                    { label: "MW", value: "MW" },
                  ]
              : state.carBrand === "Chrysler"
                ? [
                    { label: "300C SRT8", value: "300C SRT8" },
                    { label: "Voyager", value: "Voyager" },
                    { label: "Imperial Crown", value: "Imperial Crown" },
                    { label: "Saratoga", value: "Saratoga" },
                    { label: "Vision", value: "Vision" },
                    { label: "300", value: "300" },
                    { label: "Windsor", value: "Windsor" },
                    { label: "Town & Country", value: "Town & Country" },
                    { label: "Imperial", value: "Imperial" },
                    { label: "Aspen", value: "Aspen" },
                    { label: "LHS", value: "LHS" },
                    { label: "Stratus", value: "Stratus" },
                    { label: "Newport", value: "Newport" },
                    { label: "Neon", value: "Neon" },
                    { label: "Viper", value: "Viper" },
                    { label: "Intrepid", value: "Intrepid" },
                    { label: "Fifth Avenue", value: "Fifth Avenue" },
                    { label: "Sebring", value: "Sebring" },
                    { label: "TC by Maserati", value: "TC by Maserati" },
                    { label: "Prowler", value: "Prowler" },
                    { label: "300C", value: "300C" },
                    { label: "Cordoba", value: "Cordoba" },
                    { label: "Cirrus", value: "Cirrus" },
                    { label: "180", value: "180" },
                    { label: "200", value: "200" },
                    { label: "Concorde", value: "Concorde" },
                    { label: "300M", value: "300M" },
                    { label: "LeBaron", value: "LeBaron" },
                    { label: "New Yorker", value: "New Yorker" },
                    { label: "300 Letter Series", value: "300 Letter Series" },
                    { label: "PT Cruiser", value: "PT Cruiser" },
                    { label: "Dynasty", value: "Dynasty" },
                    { label: "Pacifica", value: "Pacifica" },
                    { label: "Crossfire", value: "Crossfire" },
                    { label: "Nassau", value: "Nassau" },
                  ]
              : state.carBrand === "Citroen"
                ? [
                    { label: "C3 Aircross", value: "C3 Aircross" },
                    { label: "C5 Aircross", value: "C5 Aircross" },
                    { label: "SM", value: "SM" },
                    { label: "Xsara Picasso", value: "Xsara Picasso" },
                    { label: "Traction Avant", value: "Traction Avant" },
                    { label: "C-Triomphe", value: "C-Triomphe" },
                    { label: "Dyane", value: "Dyane" },
                    { label: "DS4", value: "DS4" },
                    { label: "Xsara", value: "Xsara" },
                    { label: "C-ZERO", value: "C-ZERO" },
                    { label: "Xantia", value: "Xantia" },
                    { label: "C2", value: "C2" },
                    { label: "C1", value: "C1" },
                    { label: "DS", value: "DS" },
                    { label: "Berlingo Cargo", value: "Berlingo Cargo" },
                    { label: "BX", value: "BX" },
                    { label: "E-Mehari", value: "E-Mehari" },
                    { label: "Jumpy", value: "Jumpy" },
                    { label: "C4 Picasso", value: "C4 Picasso" },
                    { label: "C8", value: "C8" },
                    { label: "Saxo", value: "Saxo" },
                    { label: "C4", value: "C4" },
                    { label: "C4 Cactus", value: "C4 Cactus" },
                    { label: "ZX", value: "ZX" },
                    { label: "XM", value: "XM" },
                    { label: "AMI", value: "AMI" },
                    { label: "C-Crosser", value: "C-Crosser" },
                    { label: "C5", value: "C5" },
                    { label: "GS", value: "GS" },
                    { label: "CX", value: "CX" },
                    { label: "C4 Aircross", value: "C4 Aircross" },
                    { label: "LN", value: "LN" },
                    { label: "C3", value: "C3" },
                    { label: "DS3", value: "DS3" },
                    { label: "DS5", value: "DS5" },
                    { label: "C6", value: "C6" },
                    { label: "Jumper", value: "Jumper" },
                    { label: "C-Elysee", value: "C-Elysee" },
                    { label: "C3 Picasso", value: "C3 Picasso" },
                    { label: "Nemo", value: "Nemo" },
                    { label: "Evasion", value: "Evasion" },
                    { label: "Berlingo", value: "Berlingo" },
                    { label: "SpaceTourer", value: "SpaceTourer" },
                    { label: "C-Quatre", value: "C-Quatre" },
                    { label: "AX", value: "AX" },
                    { label: "2 CV", value: "2 CV" },
                    { label: "Visa", value: "Visa" },
                  ]
              : state.carBrand === "Cizeta"
                ? [
                    { label: "V16t", value: "V16t" },
                  ]
              : state.carBrand === "Coggiola"
                ? [
                    { label: "T Rex", value: "T Rex" },
                  ]
              : state.carBrand === "Dacia"
                ? [
                    { label: "1410", value: "1410" },
                    { label: "Pick-Up", value: "Pick-Up" },
                    { label: "Duster", value: "Duster" },
                    { label: "Lodgy", value: "Lodgy" },
                    { label: "SuperNova", value: "SuperNova" },
                    { label: "1310", value: "1310" },
                    { label: "Nova", value: "Nova" },
                    { label: "Sandero", value: "Sandero" },
                    { label: "Solenza", value: "Solenza" },
                    { label: "Jogger", value: "Jogger" },
                    { label: "1300", value: "1300" },
                    { label: "Dokker", value: "Dokker" },
                    { label: "1325", value: "1325" },
                    { label: "Logan", value: "Logan" },
                  ]
              : state.carBrand === "Dadi"
                ? [
                    { label: "City Leading", value: "City Leading" },
                    { label: "Shuttle", value: "Shuttle" },
                    { label: "Smoothing", value: "Smoothing" },
                  ]
              : state.carBrand === "Daewoo"
                ? [
                    { label: "Racer", value: "Racer" },
                    { label: "Espero", value: "Espero" },
                    { label: "Labo", value: "Labo" },
                    { label: "Nubira", value: "Nubira" },
                    { label: "Kalos", value: "Kalos" },
                    { label: "Damas", value: "Damas" },
                    { label: "Chairman", value: "Chairman" },
                    { label: "Prince", value: "Prince" },
                    { label: "Leganza", value: "Leganza" },
                    { label: "Musso", value: "Musso" },
                    { label: "Winstorm", value: "Winstorm" },
                    { label: "Magnus", value: "Magnus" },
                    { label: "Arcadia", value: "Arcadia" },
                    { label: "Tico", value: "Tico" },
                    { label: "Lacetti", value: "Lacetti" },
                    { label: "Lanos", value: "Lanos" },
                    { label: "Nexia", value: "Nexia" },
                    { label: "Matiz", value: "Matiz" },
                    { label: "G2X", value: "G2X" },
                    { label: "Gentra", value: "Gentra" },
                    { label: "Sens", value: "Sens" },
                    { label: "Rezzo", value: "Rezzo" },
                    { label: "Tosca", value: "Tosca" },
                    { label: "Evanda", value: "Evanda" },
                    { label: "Tacuma", value: "Tacuma" },
                    { label: "Alpheon", value: "Alpheon" },
                    { label: "Korando", value: "Korando" },
                    { label: "LeMans", value: "LeMans" },
                  ]
              : state.carBrand === "DAF"
                ? [
                    { label: "75СF", value: "75СF" },
                  ]
              : state.carBrand === "Daihatsu"
                ? [
                    { label: "Charade", value: "Charade" },
                    { label: "Esse", value: "Esse" },
                    { label: "Feroza", value: "Feroza" },
                    { label: "Hijet", value: "Hijet" },
                    { label: "Move Conte", value: "Move Conte" },
                    { label: "Sirion", value: "Sirion" },
                    { label: "Thor", value: "Thor" },
                    { label: "Materia", value: "Materia" },
                    { label: "Taft", value: "Taft" },
                    { label: "Xenia", value: "Xenia" },
                    { label: "Rugger", value: "Rugger" },
                    { label: "Cuore", value: "Cuore" },
                    { label: "Mebius", value: "Mebius" },
                    { label: "MAX", value: "MAX" },
                    { label: "Move", value: "Move" },
                    { label: "Applause", value: "Applause" },
                    { label: "Tanto Exe", value: "Tanto Exe" },
                    { label: "Trevis", value: "Trevis" },
                    { label: "Ceria", value: "Ceria" },
                    { label: "Storia", value: "Storia" },
                    { label: "Mira e:S", value: "Mira e:S" },
                    { label: "Wake", value: "Wake" },
                    { label: "Coo", value: "Coo" },
                    { label: "Move Canbus", value: "Move Canbus" },
                    { label: "Copen", value: "Copen" },
                    { label: "Mira Gino", value: "Mira Gino" },
                    { label: "Charmant", value: "Charmant" },
                    { label: "Mira", value: "Mira" },
                    { label: "Naked", value: "Naked" },
                    { label: "Opti", value: "Opti" },
                    { label: "Terios", value: "Terios" },
                    { label: "Wildcat", value: "Wildcat" },
                    { label: "Cast", value: "Cast" },
                    { label: "Atrai", value: "Atrai" },
                    { label: "Pyzar", value: "Pyzar" },
                    { label: "Delta Wagon", value: "Delta Wagon" },
                    { label: "Boon", value: "Boon" },
                    { label: "Tanto", value: "Tanto" },
                    { label: "Leeza", value: "Leeza" },
                    { label: "YRV", value: "YRV" },
                    { label: "Midget", value: "Midget" },
                    { label: "Move Latte", value: "Move Latte" },
                    { label: "Altis", value: "Altis" },
                    { label: "Gran Move", value: "Gran Move" },
                    { label: "Be-go", value: "Be-go" },
                    { label: "Sonica", value: "Sonica" },
                    { label: "Rocky", value: "Rocky" },
                  ]
              : state.carBrand === "Daimler"
                ? [
                    { label: "XJS", value: "XJS" },
                    { label: "X308", value: "X308" },
                    { label: "X300", value: "X300" },
                    { label: "DS420", value: "DS420" },
                    { label: "XJ40", value: "XJ40" },
                    { label: "X350", value: "X350" },
                    { label: "Sovereign (XJ6)", value: "Sovereign (XJ6)" },
                  ]
              : state.carBrand === "Datsun"
                ? [
                    { label: "GO", value: "GO" },
                    { label: "on-DO", value: "on-DO" },
                    { label: "mi-DO", value: "mi-DO" },
                    { label: "280ZX", value: "280ZX" },
                    { label: "240Z", value: "240Z" },
                    { label: "Urvan", value: "Urvan" },
                    { label: "Sunny", value: "Sunny" },
                    { label: "Cherry", value: "Cherry" },
                    { label: "GO+", value: "GO+" },
                    { label: "720", value: "720" },
                    { label: "Stanza", value: "Stanza" },
                    { label: "Violet", value: "Violet" },
                    { label: "Bluebird", value: "Bluebird" },
                  ]
              : state.carBrand === "Dayun"
                ? [
                    { label: "ES3", value: "ES3" },
                  ]
              : state.carBrand === "De Tomaso"
                ? [
                    { label: "Vallelunga", value: "Vallelunga" },
                    { label: "Mangusta", value: "Mangusta" },
                    { label: "Bigua", value: "Bigua" },
                    { label: "Pantera", value: "Pantera" },
                    { label: "Guara", value: "Guara" },
                  ]
              : state.carBrand === "Delage"
                ? [
                    { label: "D6", value: "D6" },
                  ]
              : state.carBrand === "DeLorean"
                ? [
                    { label: "DMC-12", value: "DMC-12" },
                  ]
              : state.carBrand === "Derways"
                ? [
                    { label: "Land Crown", value: "Land Crown" },
                    { label: "Cowboy", value: "Cowboy" },
                    { label: "Plutus", value: "Plutus" },
                    { label: "Antelope", value: "Antelope" },
                    { label: "Saladin", value: "Saladin" },
                    { label: "Shuttle", value: "Shuttle" },
                    { label: "Aurora", value: "Aurora" },
                    { label: "DW Hower H3", value: "DW Hower H3" },
                  ]
              : state.carBrand === "DeSoto"
                ? [
                    { label: "Firedome", value: "Firedome" },
                    { label: "Fireflite", value: "Fireflite" },
                  ]
              : state.carBrand === "Dodge"
                ? [
                    { label: "Ramcharger", value: "Ramcharger" },
                    { label: "Lancer", value: "Lancer" },
                    { label: "Daytona", value: "Daytona" },
                    { label: "Durango", value: "Durango" },
                    { label: "Shadow", value: "Shadow" },
                    { label: "Caliber", value: "Caliber" },
                    { label: "Monaco", value: "Monaco" },
                    { label: "600", value: "600" },
                    { label: "Aries", value: "Aries" },
                    { label: "WC series", value: "WC series" },
                    { label: "Charger", value: "Charger" },
                    { label: "D/W Series", value: "D/W Series" },
                    { label: "Stratus", value: "Stratus" },
                    { label: "Journey", value: "Journey" },
                    { label: "Magnum", value: "Magnum" },
                    { label: "RAM", value: "RAM" },
                    { label: "Dart", value: "Dart" },
                    { label: "Omni", value: "Omni" },
                    { label: "Diplomat", value: "Diplomat" },
                    { label: "Dynasty", value: "Dynasty" },
                    { label: "Stealth", value: "Stealth" },
                    { label: "Charger Daytona", value: "Charger Daytona" },
                    { label: "Viper", value: "Viper" },
                    { label: "Neon", value: "Neon" },
                    { label: "Dakota", value: "Dakota" },
                    { label: "Caravan", value: "Caravan" },
                    { label: "Nitro", value: "Nitro" },
                    { label: "Sprinter", value: "Sprinter" },
                    { label: "Avenger", value: "Avenger" },
                    { label: "Raider", value: "Raider" },
                    { label: "Mayfair", value: "Mayfair" },
                    { label: "Challenger", value: "Challenger" },
                    { label: "Spirit", value: "Spirit" },
                    { label: "Intrepid", value: "Intrepid" },
                  ]
              : state.carBrand === "DongFeng"
                ? [
                    { label: "EQ", value: "EQ" },
                    { label: "A9", value: "A9" },
                    { label: "AX7", value: "AX7" },
                    { label: "ER30", value: "ER30" },
                    { label: "E1", value: "E1" },
                    { label: "A30", value: "A30" },
                    { label: "Fengshen S30", value: "Fengshen S30" },
                    { label: "Joyear X5", value: "Joyear X5" },
                    { label: "580", value: "580" },
                    { label: "Joyear S50", value: "Joyear S50" },
                    { label: "Joyear X3", value: "Joyear X3" },
                    { label: "E11K", value: "E11K" },
                    { label: "S50", value: "S50" },
                    { label: "MPV", value: "MPV" },
                    { label: "370", value: "370" },
                    { label: "S30", value: "S30" },
                    { label: "S50 EV", value: "S50 EV" },
                    { label: "H30 Cross", value: "H30 Cross" },
                    { label: "Joyear SUV", value: "Joyear SUV" },
                    { label: "Rich", value: "Rich" },
                    { label: "Oting", value: "Oting" },
                    { label: "K07", value: "K07" },
                  ]
              : state.carBrand === "Doninvest"
                ? [
                    { label: "Orion", value: "Orion" },
                    { label: "Assol", value: "Assol" },
                    { label: "Kondor", value: "Kondor" },
                  ]
              : state.carBrand === "Donkervoort"
                ? [
                    { label: "D8", value: "D8" },
                    { label: "D8 GTO", value: "D8 GTO" },
                  ]
              : state.carBrand === "DS"
                ? [
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                    { label: "6", value: "6" },
                    { label: "5", value: "5" },
                    { label: "7", value: "7" },
                  ]
              : state.carBrand === "E-Car"
                ? [
                    { label: "GD04B", value: "GD04B" },
                  ]
              : state.carBrand === "Eagle"
                ? [
                    { label: "Summit", value: "Summit" },
                    { label: "Vision", value: "Vision" },
                    { label: "Premier", value: "Premier" },
                    { label: "Talon", value: "Talon" },
                  ]
              : state.carBrand === "Eagle Cars"
                ? [
                    { label: "SS", value: "SS" },
                  ]
              : state.carBrand === "Ecomotors"
                ? [
                    { label: "Estrima Biro", value: "Estrima Biro" },
                  ]
              : state.carBrand === "Enovate"
                ? [
                    { label: "ME7", value: "ME7" },
                  ]
              : state.carBrand === "Evolute"
                ? [
                    { label: "I-pro", value: "I-pro" },
                  ]
              : state.carBrand === "Excalibur"
                ? [
                    { label: "Series IV", value: "Series IV" },
                    { label: "Series V", value: "Series V" },
                  ]
              : state.carBrand === "FAW"
                ? [
                    { label: "X80", value: "X80" },
                    { label: "Bestune T77", value: "Bestune T77" },
                    { label: "Besturn B30", value: "Besturn B30" },
                    { label: "10xx", value: "10xx" },
                    { label: "3802", value: "3802" },
                    { label: "Besturn B30 EV", value: "Besturn B30 EV" },
                    { label: "Besturn B70", value: "Besturn B70" },
                    { label: "Besturn B50", value: "Besturn B50" },
                    { label: "CA6371", value: "CA6371" },
                    { label: "V5", value: "V5" },
                    { label: "D60", value: "D60" },
                    { label: "Jinn", value: "Jinn" },
                    { label: "CA1010", value: "CA1010" },
                    { label: "Vita", value: "Vita" },
                    { label: "Besturn X40", value: "Besturn X40" },
                    { label: "CA6390", value: "CA6390" },
                    { label: "Oley", value: "Oley" },
                    { label: "Xiali N5", value: "Xiali N5" },
                    { label: "V2", value: "V2" },
                    { label: "CA1024", value: "CA1024" },
                  ]
              : state.carBrand === "Ferrari"
                ? [
                    { label: "GTC4Lusso", value: "GTC4Lusso" },
                    { label: "348", value: "348" },
                    { label: "400", value: "400" },
                    { label: "250 GTO", value: "250 GTO" },
                    { label: "488", value: "488" },
                    { label: "Portofino", value: "Portofino" },
                    { label: "Dino 208/308 GT4", value: "Dino 208/308 GT4" },
                    { label: "FF", value: "FF" },
                    { label: "Dino 246 GT", value: "Dino 246 GT" },
                    { label: "Mondial", value: "Mondial" },
                    { label: "512 TR", value: "512 TR" },
                    { label: "812 Superfast", value: "812 Superfast" },
                    { label: "512 M", value: "512 M" },
                    { label: "575M", value: "575M" },
                    { label: "FXX K", value: "FXX K" },
                    { label: "328", value: "328" },
                    { label: "412", value: "412" },
                    { label: "F12berlinetta", value: "F12berlinetta" },
                    { label: "456", value: "456" },
                    { label: "California", value: "California" },
                    { label: "F355", value: "F355" },
                    { label: "F40", value: "F40" },
                    { label: "550", value: "550" },
                    { label: "360", value: "360" },
                    { label: "F430", value: "F430" },
                    { label: "Enzo", value: "Enzo" },
                    { label: "599", value: "599" },
                    { label: "512 BB", value: "512 BB" },
                    { label: "F50", value: "F50" },
                    { label: "612", value: "612" },
                    { label: "LaFerrari", value: "LaFerrari" },
                    { label: "Dino 206 GT", value: "Dino 206 GT" },
                    { label: "Testarossa", value: "Testarossa" },
                    { label: "458", value: "458" },
                  ]
              : state.carBrand === "Fiat"
                ? [
                    { label: "Barchetta", value: "Barchetta" },
                    { label: "Stilo", value: "Stilo" },
                    { label: "Multipla", value: "Multipla" },
                    { label: "500X", value: "500X" },
                    { label: "Tipo", value: "Tipo" },
                    { label: "126", value: "126" },
                    { label: "Coupe", value: "Coupe" },
                    { label: "Argenta", value: "Argenta" },
                    { label: "Marea", value: "Marea" },
                    { label: "131", value: "131" },
                    { label: "X 1/9", value: "X 1/9" },
                    { label: "238", value: "238" },
                    { label: "Croma", value: "Croma" },
                    { label: "Scudo", value: "Scudo" },
                    { label: "Punto", value: "Punto" },
                    { label: "Uno", value: "Uno" },
                    { label: "Ritmo", value: "Ritmo" },
                    { label: "Seicento", value: "Seicento" },
                    { label: "124", value: "124" },
                    { label: "Qubo", value: "Qubo" },
                    { label: "128", value: "128" },
                    { label: "508", value: "508" },
                    { label: "Palio", value: "Palio" },
                    { label: "Doblo", value: "Doblo" },
                    { label: "Siena", value: "Siena" },
                    { label: "Duna", value: "Duna" },
                    { label: "900T", value: "900T" },
                    { label: "Doblo Cargo", value: "Doblo Cargo" },
                    { label: "Cinquecento", value: "Cinquecento" },
                    { label: "Panda", value: "Panda" },
                    { label: "Fiorino", value: "Fiorino" },
                    { label: "Albea", value: "Albea" },
                    { label: "Freemont", value: "Freemont" },
                    { label: "Bravo", value: "Bravo" },
                    { label: "130", value: "130" },
                    { label: "127", value: "127" },
                    { label: "124 Spider", value: "124 Spider" },
                    { label: "Regata", value: "Regata" },
                    { label: "Fullback", value: "Fullback" },
                    { label: "Talento", value: "Talento" },
                    { label: "Brava", value: "Brava" },
                    { label: "Sedici", value: "Sedici" },
                    { label: "Ulysse", value: "Ulysse" },
                    { label: "132", value: "132" },
                    { label: "124 Sport Spider", value: "124 Sport Spider" },
                    { label: "500L", value: "500L" },
                    { label: "Ducato", value: "Ducato" },
                    { label: "600", value: "600" },
                    { label: "Strada", value: "Strada" },
                    { label: "500", value: "500" },
                    { label: "Linea", value: "Linea" },
                    { label: "Idea", value: "Idea" },
                    { label: "Tempra", value: "Tempra" },
                  ]
              : state.carBrand === "Fisker"
                ? [
                    { label: "Karma", value: "Karma" },
                  ]
              : state.carBrand === "Ford"
                ? [
                    { label: "Focus RS", value: "Focus RS" },
                    { label: "Focus (North America)", value: "Focus (North America)" },
                    { label: "GT40", value: "GT40" },
                    { label: "Cougar", value: "Cougar" },
                    { label: "Escort (North America)", value: "Escort (North America)" },
                    { label: "Expedition", value: "Expedition" },
                    { label: "Torino", value: "Torino" },
                    { label: "Thunderbird", value: "Thunderbird" },
                    { label: "Scorpio", value: "Scorpio" },
                    { label: "Mustang", value: "Mustang" },
                    { label: "Fiesta ST", value: "Fiesta ST" },
                    { label: "Mustang Mach-E", value: "Mustang Mach-E" },
                    { label: "Tempo", value: "Tempo" },
                    { label: "LTD Crown Victoria", value: "LTD Crown Victoria" },
                    { label: "Focus", value: "Focus" },
                    { label: "Explorer", value: "Explorer" },
                    { label: "Ranger", value: "Ranger" },
                    { label: "Taurus", value: "Taurus" },
                    { label: "Transit Custom", value: "Transit Custom" },
                    { label: "Fairmont", value: "Fairmont" },
                    { label: "Zephyr", value: "Zephyr" },
                    { label: "Puma", value: "Puma" },
                    { label: "Orion", value: "Orion" },
                    { label: "Ixion", value: "Ixion" },
                    { label: "Galaxy", value: "Galaxy" },
                    { label: "Ikon", value: "Ikon" },
                    { label: "Telstar", value: "Telstar" },
                    { label: "Transit Connect", value: "Transit Connect" },
                    { label: "Consul", value: "Consul" },
                    { label: "Laser", value: "Laser" },
                    { label: "Escape", value: "Escape" },
                    { label: "Mondeo ST", value: "Mondeo ST" },
                    { label: "F-150", value: "F-150" },
                    { label: "B-MAX", value: "B-MAX" },
                    { label: "Aerostar", value: "Aerostar" },
                    { label: "Transit", value: "Transit" },
                    { label: "Flex", value: "Flex" },
                    { label: "Maverick", value: "Maverick" },
                    { label: "Explorer Sport Trac", value: "Explorer Sport Trac" },
                    { label: "Escort", value: "Escort" },
                    { label: "Festiva", value: "Festiva" },
                    { label: "Taurus X", value: "Taurus X" },
                    { label: "Mondeo", value: "Mondeo" },
                    { label: "Edge", value: "Edge" },
                    { label: "M151", value: "M151" },
                    { label: "Freestar", value: "Freestar" },
                    { label: "GT", value: "GT" },
                    { label: "Fusion", value: "Fusion" },
                    { label: "Excursion", value: "Excursion" },
                    { label: "Kuga", value: "Kuga" },
                    { label: "Freestyle", value: "Freestyle" },
                    { label: "Taunus", value: "Taunus" },
                    { label: "S-MAX", value: "S-MAX" },
                    { label: "Crown Victoria", value: "Crown Victoria" },
                    { label: "Bronco", value: "Bronco" },
                    { label: "V8", value: "V8" },
                    { label: "Fairlane", value: "Fairlane" },
                    { label: "Focus Electric", value: "Focus Electric" },
                    { label: "Fusion (North America)", value: "Fusion (North America)" },
                    { label: "Custom", value: "Custom" },
                    { label: "Five Hundred", value: "Five Hundred" },
                    { label: "Mainline", value: "Mainline" },
                    { label: "Spectron", value: "Spectron" },
                    { label: "C-MAX", value: "C-MAX" },
                    { label: "Focus ST", value: "Focus ST" },
                    { label: "Capri", value: "Capri" },
                    { label: "Windstar", value: "Windstar" },
                    { label: "Fiesta", value: "Fiesta" },
                    { label: "Tourneo Connect", value: "Tourneo Connect" },
                    { label: "Tourneo Custom", value: "Tourneo Custom" },
                    { label: "KA", value: "KA" },
                    { label: "Ranger (North America)", value: "Ranger (North America)" },
                    { label: "Granada (North America)", value: "Granada (North America)" },
                    { label: "Figo", value: "Figo" },
                    { label: "Territory", value: "Territory" },
                    { label: "Tourneo Courier", value: "Tourneo Courier" },
                    { label: "Model A", value: "Model A" },
                    { label: "GPA", value: "GPA" },
                    { label: "Sierra", value: "Sierra" },
                    { label: "Granada", value: "Granada" },
                    { label: "Model T", value: "Model T" },
                    { label: "Aspire", value: "Aspire" },
                    { label: "Ranchero", value: "Ranchero" },
                    { label: "Everest", value: "Everest" },
                    { label: "Galaxie", value: "Galaxie" },
                    { label: "Contour", value: "Contour" },
                    { label: "Bronco-II", value: "Bronco-II" },
                    { label: "EcoSport", value: "EcoSport" },
                    { label: "Econoline", value: "Econoline" },
                    { label: "Freda", value: "Freda" },
                    { label: "Probe", value: "Probe" },
                  ]
              : state.carBrand === "Foton"
                ? [
                    { label: "BJ5026XXYD1", value: "BJ5026XXYD1" },
                    { label: "Forland BJ", value: "Forland BJ" },
                    { label: "Auman", value: "Auman" },
                    { label: "Sauvana", value: "Sauvana" },
                    { label: "Tunland", value: "Tunland" },
                    { label: "Midi", value: "Midi" },
                    { label: "Aumark", value: "Aumark" },
                    { label: "Ollin", value: "Ollin" },
                  ]
              : state.carBrand === "FSO"
                ? [
                    { label: "125p", value: "125p" },
                    { label: "132p", value: "132p" },
                    { label: "127p", value: "127p" },
                    { label: "Polonez", value: "Polonez" },
                    { label: "126p", value: "126p" },
                  ]
              : state.carBrand === "Fuqi"
                ? [
                    { label: "6500 (Land King)", value: "6500 (Land King)" },
                  ]
              : state.carBrand === "GAC"
                ? [
                    { label: "GS8", value: "GS8" },
                    { label: "GE3", value: "GE3" },
                    { label: "GN8", value: "GN8" },
                    { label: "GS5", value: "GS5" },
                  ]
              : state.carBrand === "GAC Aion"
                ? [
                    { label: "S", value: "S" },
                    { label: "V", value: "V" },
                  ]
              : state.carBrand === "GAC Gonow"
                ? [
                    { label: "Way", value: "Way" },
                  ]
              : state.carBrand === "Geely"
                ? [
                    { label: "Haoqing", value: "Haoqing" },
                    { label: "GS", value: "GS" },
                    { label: "Emgrand GT", value: "Emgrand GT" },
                    { label: "LC (Panda)", value: "LC (Panda)" },
                    { label: "FC (Vision)", value: "FC (Vision)" },
                    { label: "Atlas", value: "Atlas" },
                    { label: "Monjaro", value: "Monjaro" },
                    { label: "Beauty Leopard", value: "Beauty Leopard" },
                    { label: "Geometry C", value: "Geometry C" },
                    { label: "Emgrand EC8", value: "Emgrand EC8" },
                    { label: "Emgrand 7", value: "Emgrand 7" },
                    { label: "Emgrand X7", value: "Emgrand X7" },
                    { label: "GC6", value: "GC6" },
                    { label: "Okavango", value: "Okavango" },
                    { label: "CK (Otaka)", value: "CK (Otaka)" },
                    { label: "TX4", value: "TX4" },
                    { label: "Emgrand EC7", value: "Emgrand EC7" },
                    { label: "MK", value: "MK" },
                    { label: "SC7", value: "SC7" },
                    { label: "GC9", value: "GC9" },
                    { label: "Atlas Pro", value: "Atlas Pro" },
                    { label: "MR", value: "MR" },
                    { label: "Tugella", value: "Tugella" },
                    { label: "GC7", value: "GC7" },
                    { label: "MK Cross", value: "MK Cross" },
                    { label: "Emgrand EV", value: "Emgrand EV" },
                    { label: "Coolray", value: "Coolray" },
                    { label: "LC (Panda) Cross", value: "LC (Panda) Cross" },
                  ]
              : state.carBrand === "Genesis"
                ? [
                    { label: "G70", value: "G70" },
                    { label: "G80", value: "G80" },
                    { label: "G90", value: "G90" },
                    { label: "GV70", value: "GV70" },
                  ]
              : state.carBrand === "Geo"
                ? [
                    { label: "Metro", value: "Metro" },
                    { label: "Spectrum", value: "Spectrum" },
                    { label: "Tracker", value: "Tracker" },
                    { label: "Prizm", value: "Prizm" },
                    { label: "Storm", value: "Storm" },
                  ]
              : state.carBrand === "GMC"
                ? [
                    { label: "Safari", value: "Safari" },
                    { label: "Canyon", value: "Canyon" },
                    { label: "Jimmy", value: "Jimmy" },
                    { label: "Savana", value: "Savana" },
                    { label: "Terrain", value: "Terrain" },
                    { label: "Sonoma", value: "Sonoma" },
                    { label: "Syclone", value: "Syclone" },
                    { label: "Suburban", value: "Suburban" },
                    { label: "Sierra", value: "Sierra" },
                    { label: "Typhoon", value: "Typhoon" },
                    { label: "Vandura", value: "Vandura" },
                    { label: "Envoy", value: "Envoy" },
                    { label: "Yukon", value: "Yukon" },
                    { label: "Acadia", value: "Acadia" },
                  ]
              : state.carBrand === "Gonow"
                ? [
                    { label: "Troy", value: "Troy" },
                  ]
              : state.carBrand === "Gordon"
                ? [
                    { label: "Roadster", value: "Roadster" },
                  ]
              : state.carBrand === "GP"
                ? [
                    { label: "Madison", value: "Madison" },
                  ]
              : state.carBrand === "Great Wall"
                ? [
                    { label: "Florid", value: "Florid" },
                    { label: "Voleex C10 (Phenom)", value: "Voleex C10 (Phenom)" },
                    { label: "Hover", value: "Hover" },
                    { label: "Deer", value: "Deer" },
                    { label: "Coolbear", value: "Coolbear" },
                    { label: "Voleex C30", value: "Voleex C30" },
                    { label: "Wingle", value: "Wingle" },
                    { label: "Sailor", value: "Sailor" },
                    { label: "Hover M2", value: "Hover M2" },
                    { label: "Hover H5", value: "Hover H5" },
                    { label: "Peri", value: "Peri" },
                    { label: "Pegasus", value: "Pegasus" },
                    { label: "Sing RUV", value: "Sing RUV" },
                    { label: "Hover H6", value: "Hover H6" },
                    { label: "Hover H3", value: "Hover H3" },
                    { label: "Hover M4", value: "Hover M4" },
                    { label: "Socool", value: "Socool" },
                    { label: "Safe", value: "Safe" },
                    { label: "Hover M1 (Peri 4x4)", value: "Hover M1 (Peri 4x4)" },
                    { label: "Cowry (V80)", value: "Cowry (V80)" },
                  ]
              : state.carBrand === "Hafei"
                ? [
                    { label: "Brio", value: "Brio" },
                    { label: "Simbo", value: "Simbo" },
                    { label: "Saibao", value: "Saibao" },
                    { label: "Sigma", value: "Sigma" },
                    { label: "Princip", value: "Princip" },
                  ]
              : state.carBrand === "Haima"
                ? [
                    { label: "M3", value: "M3" },
                    { label: "7", value: "7" },
                    { label: "S5", value: "S5" },
                    { label: "3", value: "3" },
                  ]
              : state.carBrand === "Hanomag"
                ? [
                    { label: "Rekord", value: "Rekord" },
                  ]
              : state.carBrand === "Haval"
                ? [
                    { label: "F7x", value: "F7x" },
                    { label: "Dargo", value: "Dargo" },
                    { label: "F7", value: "F7" },
                    { label: "H6 Coupe", value: "H6 Coupe" },
                    { label: "H8", value: "H8" },
                    { label: "H9", value: "H9" },
                    { label: "H5", value: "H5" },
                    { label: "H2", value: "H2" },
                    { label: "H6", value: "H6" },
                    { label: "Jolion", value: "Jolion" },
                  ]
              : state.carBrand === "Hawtai"
                ? [
                    { label: "Boliger", value: "Boliger" },
                    { label: "Laville", value: "Laville" },
                  ]
              : state.carBrand === "Hindustan"
                ? [
                    { label: "Ambassador", value: "Ambassador" },
                    { label: "Contessa", value: "Contessa" },
                  ]
              : state.carBrand === "Hino"
                ? [
                    { label: "700", value: "700" },
                    { label: "500", value: "500" },
                    { label: "300", value: "300" },
                  ]
              : state.carBrand === "Hispano-Suiza"
                ? [
                    { label: "K6", value: "K6" },
                  ]
              : state.carBrand === "Holden"
                ? [
                    { label: "Zafira", value: "Zafira" },
                    { label: "UTE", value: "UTE" },
                    { label: "Barina", value: "Barina" },
                    { label: "Monaro", value: "Monaro" },
                    { label: "Calais", value: "Calais" },
                    { label: "Jackaroo", value: "Jackaroo" },
                    { label: "Vectra", value: "Vectra" },
                    { label: "Apollo", value: "Apollo" },
                    { label: "Caprice", value: "Caprice" },
                    { label: "Rodeo", value: "Rodeo" },
                    { label: "Astra", value: "Astra" },
                    { label: "Frontera", value: "Frontera" },
                    { label: "Commodore", value: "Commodore" },
                    { label: "Statesman", value: "Statesman" },
                    { label: "Cruze", value: "Cruze" },
                  ]
              : state.carBrand === "Honda"
                ? [
                    { label: "Pilot", value: "Pilot" },
                    { label: "S-MX", value: "S-MX" },
                    { label: "Concerto", value: "Concerto" },
                    { label: "NSX", value: "NSX" },
                    { label: "Amaze", value: "Amaze" },
                    { label: "Avancier", value: "Avancier" },
                    { label: "Torneo", value: "Torneo" },
                    { label: "Vamos", value: "Vamos" },
                    { label: "Jade", value: "Jade" },
                    { label: "City", value: "City" },
                    { label: "Beat", value: "Beat" },
                    { label: "Freed", value: "Freed" },
                    { label: "M-NV", value: "M-NV" },
                    { label: "Ascot Innova", value: "Ascot Innova" },
                    { label: "Orthia", value: "Orthia" },
                    { label: "CR-Z", value: "CR-Z" },
                    { label: "N360", value: "N360" },
                    { label: "Legend", value: "Legend" },
                    { label: "Odyssey", value: "Odyssey" },
                    { label: "Civic", value: "Civic" },
                    { label: "Inspire", value: "Inspire" },
                    { label: "N-One", value: "N-One" },
                    { label: "Shuttle", value: "Shuttle" },
                    { label: "Odyssey (North America)", value: "Odyssey (North America)" },
                    { label: "Domani", value: "Domani" },
                    { label: "Fit", value: "Fit" },
                    { label: "Civic Ferio", value: "Civic Ferio" },
                    { label: "Today", value: "Today" },
                    { label: "Vezel", value: "Vezel" },
                    { label: "Prelude", value: "Prelude" },
                    { label: "145", value: "145" },
                    { label: "Airwave", value: "Airwave" },
                    { label: "Passport", value: "Passport" },
                    { label: "HR-V", value: "HR-V" },
                    { label: "Stream", value: "Stream" },
                    { label: "Capa", value: "Capa" },
                    { label: "Brio", value: "Brio" },
                    { label: "Mobilio", value: "Mobilio" },
                    { label: "Life", value: "Life" },
                    { label: "FCX Clarity", value: "FCX Clarity" },
                    { label: "Saber", value: "Saber" },
                    { label: "Mobilio Spike", value: "Mobilio Spike" },
                    { label: "Integra SJ", value: "Integra SJ" },
                    { label: "Stepwgn", value: "Stepwgn" },
                    { label: "N-WGN", value: "N-WGN" },
                    { label: "Ridgeline", value: "Ridgeline" },
                    { label: "Grace", value: "Grace" },
                    { label: "Partner", value: "Partner" },
                    { label: "That'S", value: "That'S" },
                    { label: "Ascot", value: "Ascot" },
                    { label: "S500", value: "S500" },
                    { label: "Integra", value: "Integra" },
                    { label: "N-BOX", value: "N-BOX" },
                    { label: "S2000", value: "S2000" },
                    { label: "Crossroad", value: "Crossroad" },
                    { label: "Fit Shuttle", value: "Fit Shuttle" },
                    { label: "Logo", value: "Logo" },
                    { label: "Ballade", value: "Ballade" },
                    { label: "FR-V", value: "FR-V" },
                    { label: "S600", value: "S600" },
                    { label: "Z", value: "Z" },
                    { label: "Crosstour", value: "Crosstour" },
                    { label: "Jazz", value: "Jazz" },
                    { label: "CR-V", value: "CR-V" },
                    { label: "Lagreat", value: "Lagreat" },
                    { label: "Horizon", value: "Horizon" },
                    { label: "Everus VE-1", value: "Everus VE-1" },
                    { label: "Edix", value: "Edix" },
                    { label: "Element", value: "Element" },
                    { label: "Vigor", value: "Vigor" },
                    { label: "MDX", value: "MDX" },
                    { label: "Fit Aria", value: "Fit Aria" },
                    { label: "X-NV", value: "X-NV" },
                    { label: "Insight", value: "Insight" },
                    { label: "Rafaga", value: "Rafaga" },
                    { label: "S660", value: "S660" },
                    { label: "CR-X", value: "CR-X" },
                    { label: "Acty", value: "Acty" },
                    { label: "Street", value: "Street" },
                    { label: "Civic Type R", value: "Civic Type R" },
                    { label: "Zest", value: "Zest" },
                    { label: "Quint", value: "Quint" },
                    { label: "Elysion", value: "Elysion" },
                    { label: "Accord", value: "Accord" },
                  ]
              : state.carBrand === "Hongqi"
                ? [
                    { label: "E-HS9", value: "E-HS9" },
                  ]
              : state.carBrand === "Horch"
                ? [
                    { label: "830", value: "830" },
                  ]
              : state.carBrand === "HuangHai"
                ? [
                    { label: "Antelope", value: "Antelope" },
                    { label: "Plutus", value: "Plutus" },
                    { label: "Landscape", value: "Landscape" },
                  ]
              : state.carBrand === "Hudson"
                ? [
                    { label: "Super Six", value: "Super Six" },
                    { label: "Deluxe Eight", value: "Deluxe Eight" },
                  ]
              : state.carBrand === "Hummer"
                ? [
                    { label: "H1", value: "H1" },
                    { label: "H2", value: "H2" },
                    { label: "H3", value: "H3" },
                  ]
              : state.carBrand === "Hyundai"
                ? [
                    { label: "HD 120", value: "HD 120" },
                    { label: "Veracruz", value: "Veracruz" },
                    { label: "Solaris", value: "Solaris" },
                    { label: "Venue", value: "Venue" },
                    { label: "IONIQ", value: "IONIQ" },
                    { label: "Grandeur", value: "Grandeur" },
                    { label: "HD 35", value: "HD 35" },
                    { label: "Aslan", value: "Aslan" },
                    { label: "Centennial", value: "Centennial" },
                    { label: "Avante", value: "Avante" },
                    { label: "Coupe", value: "Coupe" },
                    { label: "Pony", value: "Pony" },
                    { label: "HD 78", value: "HD 78" },
                    { label: "Veloster", value: "Veloster" },
                    { label: "Genesis Coupe", value: "Genesis Coupe" },
                    { label: "Entourage", value: "Entourage" },
                    { label: "Lantra", value: "Lantra" },
                    { label: "IONIQ 5", value: "IONIQ 5" },
                    { label: "i30 N", value: "i30 N" },
                    { label: "Santamo", value: "Santamo" },
                    { label: "Grace", value: "Grace" },
                    { label: "Grand Starex", value: "Grand Starex" },
                    { label: "H-1", value: "H-1" },
                    { label: "Trajet", value: "Trajet" },
                    { label: "i30", value: "i30" },
                    { label: "Stellar", value: "Stellar" },
                    { label: "Atos", value: "Atos" },
                    { label: "Excel", value: "Excel" },
                    { label: "Tiburon", value: "Tiburon" },
                    { label: "Genesis", value: "Genesis" },
                    { label: "Kona Electric", value: "Kona Electric" },
                    { label: "Nexo", value: "Nexo" },
                    { label: "Terracan", value: "Terracan" },
                    { label: "Starex", value: "Starex" },
                    { label: "Elantra", value: "Elantra" },
                    { label: "Creta", value: "Creta" },
                    { label: "Galloper", value: "Galloper" },
                    { label: "Equus", value: "Equus" },
                    { label: "Lavita", value: "Lavita" },
                    { label: "Matrix", value: "Matrix" },
                    { label: "H100", value: "H100" },
                    { label: "ix35", value: "ix35" },
                    { label: "Tucson", value: "Tucson" },
                    { label: "i20", value: "i20" },
                    { label: "Click", value: "Click" },
                    { label: "Grand i10", value: "Grand i10" },
                    { label: "IONIQ Electric", value: "IONIQ Electric" },
                    { label: "Verna", value: "Verna" },
                    { label: "HD 72", value: "HD 72" },
                    { label: "i10", value: "i10" },
                    { label: "Staria", value: "Staria" },
                    { label: "Dynasty", value: "Dynasty" },
                    { label: "EON", value: "EON" },
                    { label: "i40", value: "i40" },
                    { label: "Santa Fe", value: "Santa Fe" },
                    { label: "Accent", value: "Accent" },
                    { label: "Kona", value: "Kona" },
                    { label: "Scoupe", value: "Scoupe" },
                    { label: "Marcia", value: "Marcia" },
                    { label: "Getz", value: "Getz" },
                    { label: "H35", value: "H35" },
                    { label: "Libero", value: "Libero" },
                    { label: "XG", value: "XG" },
                    { label: "Maxcruz", value: "Maxcruz" },
                    { label: "Porter", value: "Porter" },
                    { label: "Tuscani", value: "Tuscani" },
                    { label: "Palisade", value: "Palisade" },
                    { label: "ix20", value: "ix20" },
                    { label: "ix55", value: "ix55" },
                    { label: "HD 65", value: "HD 65" },
                    { label: "Sonata", value: "Sonata" },
                  ]
              : state.carBrand === "Ikarbus"
                ? [
                    { label: "IK-218m", value: "IK-218m" },
                  ]
              : state.carBrand === "Infiniti"
                ? [
                    { label: "Q", value: "Q" },
                    { label: "QX4", value: "QX4" },
                    { label: "QX56", value: "QX56" },
                    { label: "QX55", value: "QX55" },
                    { label: "QX60", value: "QX60" },
                    { label: "QX30", value: "QX30" },
                    { label: "FX", value: "FX" },
                    { label: "Q50", value: "Q50" },
                    { label: "EX", value: "EX" },
                    { label: "JX", value: "JX" },
                    { label: "J", value: "J" },
                    { label: "Q70", value: "Q70" },
                    { label: "QX70", value: "QX70" },
                    { label: "QX80", value: "QX80" },
                    { label: "Q40", value: "Q40" },
                    { label: "I", value: "I" },
                    { label: "G", value: "G" },
                    { label: "Q60", value: "Q60" },
                    { label: "QX50", value: "QX50" },
                    { label: "Q30", value: "Q30" },
                    { label: "M", value: "M" },
                  ]
              : state.carBrand === "Innocenti"
                ? [
                    { label: "Elba", value: "Elba" },
                    { label: "Mille", value: "Mille" },
                    { label: "Mini", value: "Mini" },
                  ]
              : state.carBrand === "Invicta"
                ? [
                    { label: "S1", value: "S1" },
                  ]
              : state.carBrand === "Iran Khodro"
                ? [
                    { label: "Bardo", value: "Bardo" },
                    { label: "Soren", value: "Soren" },
                    { label: "Samand", value: "Samand" },
                    { label: "Dena", value: "Dena" },
                    { label: "Runna", value: "Runna" },
                    { label: "Tara", value: "Tara" },
                    { label: "Arisun", value: "Arisun" },
                    { label: "Paykan", value: "Paykan" },
                    { label: "Sarir", value: "Sarir" },
                  ]
              : state.carBrand === "Isdera"
                ? [
                    { label: "Imperator 108i", value: "Imperator 108i" },
                    { label: "Commendatore 112i", value: "Commendatore 112i" },
                    { label: "Spyder", value: "Spyder" },
                  ]
              : state.carBrand === "Isuzu"
                ? [
                    { label: "Amigo", value: "Amigo" },
                    { label: "Elf", value: "Elf" },
                    { label: "Wizard", value: "Wizard" },
                    { label: "Piazza", value: "Piazza" },
                    { label: "Impulse", value: "Impulse" },
                    { label: "Aska", value: "Aska" },
                    { label: "NQR", value: "NQR" },
                    { label: "Stylus", value: "Stylus" },
                    { label: "Forward", value: "Forward" },
                    { label: "Hombre", value: "Hombre" },
                    { label: "MU", value: "MU" },
                    { label: "Bighorn", value: "Bighorn" },
                    { label: "VehiCross", value: "VehiCross" },
                    { label: "TF (Pickup)", value: "TF (Pickup)" },
                    { label: "Axiom", value: "Axiom" },
                    { label: "KB", value: "KB" },
                    { label: "Trooper", value: "Trooper" },
                    { label: "Rodeo", value: "Rodeo" },
                    { label: "Gemini", value: "Gemini" },
                    { label: "MU-7", value: "MU-7" },
                    { label: "Ascender", value: "Ascender" },
                    { label: "MU-X", value: "MU-X" },
                    { label: "Fargo Filly", value: "Fargo Filly" },
                    { label: "D-Max", value: "D-Max" },
                  ]
              : state.carBrand === "Iveco"
                ? [
                    { label: "EuroCargo", value: "EuroCargo" },
                    { label: "Stralis", value: "Stralis" },
                    { label: "Daily", value: "Daily" },
                  ]
              : state.carBrand === "JAC"
                ? [
                    { label: "Sunray", value: "Sunray" },
                    { label: "J6 (Heyue RS)", value: "J6 (Heyue RS)" },
                    { label: "JS4", value: "JS4" },
                    { label: "T6", value: "T6" },
                    { label: "S3", value: "S3" },
                    { label: "JS3", value: "JS3" },
                    { label: "J3 (Tongyue,Tojoy)", value: "J3 (Tongyue,Tojoy)" },
                    { label: "J4 (Heyue A30)", value: "J4 (Heyue A30)" },
                    { label: "J7 (Binyue)", value: "J7 (Binyue)" },
                    { label: "S7", value: "S7" },
                    { label: "J7", value: "J7" },
                    { label: "N25", value: "N25" },
                    { label: "iEV7S", value: "iEV7S" },
                    { label: "Refine M4", value: "Refine M4" },
                    { label: "J3 (Tagaz C10)", value: "J3 (Tagaz C10)" },
                    { label: "M1 (Refine)", value: "M1 (Refine)" },
                    { label: "N75", value: "N75" },
                    { label: "T8", value: "T8" },
                    { label: "S4", value: "S4" },
                    { label: "Sehol E20X", value: "Sehol E20X" },
                    { label: "J2 (Yueyue)", value: "J2 (Yueyue)" },
                    { label: "S1 (Rein)", value: "S1 (Rein)" },
                    { label: "X200", value: "X200" },
                    { label: "HFC", value: "HFC" },
                    { label: "J5 (Heyue)", value: "J5 (Heyue)" },
                    { label: "S5 (Eagle)", value: "S5 (Eagle)" },
                    { label: "iEVS4", value: "iEVS4" },
                    { label: "M5", value: "M5" },
                    { label: "47881", value: "47881" },
                  ]
              : state.carBrand === "Jaguar"
                ? [
                    { label: "E-Pace", value: "E-Pace" },
                    { label: "XK", value: "XK" },
                    { label: "XJ220", value: "XJ220" },
                    { label: "F-Type SVR", value: "F-Type SVR" },
                    { label: "XJR", value: "XJR" },
                    { label: "XF", value: "XF" },
                    { label: "XJ", value: "XJ" },
                    { label: "F-Pace", value: "F-Pace" },
                    { label: "X-Type", value: "X-Type" },
                    { label: "Mark 2", value: "Mark 2" },
                    { label: "XFR", value: "XFR" },
                    { label: "E-type", value: "E-type" },
                    { label: "XKR", value: "XKR" },
                    { label: "XE", value: "XE" },
                    { label: "XJS", value: "XJS" },
                    { label: "I-Pace", value: "I-Pace" },
                    { label: "S-Type", value: "S-Type" },
                    { label: "F-Type", value: "F-Type" },
                  ]
              : state.carBrand === "JBC"
                ? [
                    { label: "SY1041", value: "SY1041" },
                  ]
              : state.carBrand === "Jeep"
                ? [
                    { label: "Grand Wagoneer", value: "Grand Wagoneer" },
                    { label: "Grand Cherokee SRT8", value: "Grand Cherokee SRT8" },
                    { label: "Commander", value: "Commander" },
                    { label: "Compass", value: "Compass" },
                    { label: "CJ", value: "CJ" },
                    { label: "Renegade", value: "Renegade" },
                    { label: "Wrangler", value: "Wrangler" },
                    { label: "Grand Cherokee", value: "Grand Cherokee" },
                    { label: "Cherokee", value: "Cherokee" },
                    { label: "Liberty (North America)", value: "Liberty (North America)" },
                    { label: "Liberty (Patriot)", value: "Liberty (Patriot)" },
                  ]
              : state.carBrand === "Jensen"
                ? [
                    { label: "S-V8", value: "S-V8" },
                    { label: "Interceptor", value: "Interceptor" },
                  ]
              : state.carBrand === "Jetour"
                ? [
                    { label: "Х70", value: "Х70" },
                  ]
              : state.carBrand === "Jinbei"
                ? [
                    { label: "Haise", value: "Haise" },
                  ]
              : state.carBrand === "JMC"
                ? [
                    { label: "Baodian", value: "Baodian" },
                    { label: "A0107", value: "A0107" },
                  ]
              : state.carBrand === "Junfeng"
                ? [
                    { label: "DFA6400W30QD", value: "DFA6400W30QD" },
                  ]
              : state.carBrand === "Kaiyi"
                ? [
                    { label: "X3 Pro", value: "X3 Pro" },
                    { label: "X3", value: "X3" },
                  ]
              : state.carBrand === "Kangaroo"
                ? [
                    { label: "Electro", value: "Electro" },
                  ]
              : state.carBrand === "Karry"
                ? [
                    { label: "K60", value: "K60" },
                    { label: "K60 EV", value: "K60 EV" },
                  ]
              : state.carBrand === "Keyton"
                ? [
                    { label: "EX80", value: "EX80" },
                    { label: "V60", value: "V60" },
                  ]
              : state.carBrand === "Khazar"
                ? [
                    { label: "LX", value: "LX" },
                    { label: "SD", value: "SD" },
                  ]
              : state.carBrand === "Kia"
                ? [
                    { label: "Sedona", value: "Sedona" },
                    { label: "Quoris", value: "Quoris" },
                    { label: "Cee'd GT", value: "Cee'd GT" },
                    { label: "Sephia", value: "Sephia" },
                    { label: "Shuma", value: "Shuma" },
                    { label: "Cee'd", value: "Cee'd" },
                    { label: "Clarus", value: "Clarus" },
                    { label: "Venga", value: "Venga" },
                    { label: "Forte", value: "Forte" },
                    { label: "X-Trek", value: "X-Trek" },
                    { label: "Carnival", value: "Carnival" },
                    { label: "K9", value: "K9" },
                    { label: "K3", value: "K3" },
                    { label: "Lotze", value: "Lotze" },
                    { label: "Picanto", value: "Picanto" },
                    { label: "Mentor", value: "Mentor" },
                    { label: "Optima", value: "Optima" },
                    { label: "Ray", value: "Ray" },
                    { label: "Concord", value: "Concord" },
                    { label: "Mohave (Borrego)", value: "Mohave (Borrego)" },
                    { label: "Potentia", value: "Potentia" },
                    { label: "Cee'd SW", value: "Cee'd SW" },
                    { label: "Soul EV", value: "Soul EV" },
                    { label: "Towner", value: "Towner" },
                    { label: "Carstar", value: "Carstar" },
                    { label: "Stinger", value: "Stinger" },
                    { label: "Visto", value: "Visto" },
                    { label: "K8", value: "K8" },
                    { label: "Opirus", value: "Opirus" },
                    { label: "Pregio", value: "Pregio" },
                    { label: "Pride", value: "Pride" },
                    { label: "Sportage", value: "Sportage" },
                    { label: "Quanlima", value: "Quanlima" },
                    { label: "Pegas", value: "Pegas" },
                    { label: "Avella", value: "Avella" },
                    { label: "K5", value: "K5" },
                    { label: "Soul", value: "Soul" },
                    { label: "Stonic", value: "Stonic" },
                    { label: "Capital", value: "Capital" },
                    { label: "Enterprise", value: "Enterprise" },
                    { label: "Spectra", value: "Spectra" },
                    { label: "EV6", value: "EV6" },
                    { label: "Cerato", value: "Cerato" },
                    { label: "Joice", value: "Joice" },
                    { label: "e-Niro", value: "e-Niro" },
                    { label: "K900", value: "K900" },
                    { label: "Niro", value: "Niro" },
                    { label: "Carens", value: "Carens" },
                    { label: "Sorento", value: "Sorento" },
                    { label: "K7", value: "K7" },
                    { label: "Magentis", value: "Magentis" },
                    { label: "Morning", value: "Morning" },
                    { label: "ProCeed", value: "ProCeed" },
                    { label: "Rio", value: "Rio" },
                    { label: "Seltos", value: "Seltos" },
                    { label: "Cadenza", value: "Cadenza" },
                    { label: "Bongo", value: "Bongo" },
                    { label: "Elan", value: "Elan" },
                    { label: "Retona", value: "Retona" },
                  ]
              : state.carBrand === "Kingstar"
                ? [
                    { label: "Jupiter", value: "Jupiter" },
                  ]
              : state.carBrand === "Koenigsegg"
                ? [
                    { label: "CCX", value: "CCX" },
                    { label: "One:1", value: "One:1" },
                    { label: "CC8S", value: "CC8S" },
                    { label: "Agera", value: "Agera" },
                    { label: "Regera", value: "Regera" },
                    { label: "CCR", value: "CCR" },
                  ]
              : state.carBrand === "KTM AG"
                ? [
                    { label: "X-Bow", value: "X-Bow" },
                  ]
              : state.carBrand === "LADA (ВАЗ)"
                ? [
                    { label: "2104", value: "2104" },
                    { label: "2107", value: "2107" },
                    { label: "Revolution", value: "Revolution" },
                    { label: "2110", value: "2110" },
                    { label: "2113", value: "2113" },
                    { label: "2121 (4x4)", value: "2121 (4x4)" },
                    { label: "Priora", value: "Priora" },
                    { label: "2131 (4x4)", value: "2131 (4x4)" },
                    { label: "EL Lada", value: "EL Lada" },
                    { label: "2114", value: "2114" },
                    { label: "2103", value: "2103" },
                    { label: "XRAY", value: "XRAY" },
                    { label: "2101", value: "2101" },
                    { label: "2111", value: "2111" },
                    { label: "2120 Надежда", value: "2120 Надежда" },
                    { label: "2329", value: "2329" },
                    { label: "2109", value: "2109" },
                    { label: "2123", value: "2123" },
                    { label: "Largus Фургон", value: "Largus Фургон" },
                    { label: "2108", value: "2108" },
                    { label: "2129", value: "2129" },
                    { label: "Vesta", value: "Vesta" },
                    { label: "Kalina", value: "Kalina" },
                    { label: "Granta", value: "Granta" },
                    { label: "2102", value: "2102" },
                    { label: "Niva Travel", value: "Niva Travel" },
                    { label: "2105", value: "2105" },
                    { label: "Largus", value: "Largus" },
                    { label: "1111 Ока", value: "1111 Ока" },
                    { label: "2106", value: "2106" },
                    { label: "Granta Фургон", value: "Granta Фургон" },
                    { label: "2115", value: "2115" },
                    { label: "2328", value: "2328" },
                    { label: "4x4 Фургон", value: "4x4 Фургон" },
                    { label: "21099", value: "21099" },
                    { label: "2112", value: "2112" },
                  ]
              : state.carBrand === "Lamborghini"
                ? [
                    { label: "Jalpa", value: "Jalpa" },
                    { label: "Gallardo", value: "Gallardo" },
                    { label: "Jarama", value: "Jarama" },
                    { label: "Centenario", value: "Centenario" },
                    { label: "Urus Concept", value: "Urus Concept" },
                    { label: "Miura", value: "Miura" },
                    { label: "Reventon", value: "Reventon" },
                    { label: "LM001", value: "LM001" },
                    { label: "Espada", value: "Espada" },
                    { label: "Veneno", value: "Veneno" },
                    { label: "Diablo", value: "Diablo" },
                    { label: "Egoista", value: "Egoista" },
                    { label: "350/400 GT", value: "350/400 GT" },
                    { label: "Murcielago", value: "Murcielago" },
                    { label: "Aventador", value: "Aventador" },
                    { label: "Urraco", value: "Urraco" },
                    { label: "Huracán", value: "Huracán" },
                    { label: "LM002", value: "LM002" },
                    { label: "Silhouette", value: "Silhouette" },
                    { label: "Islero", value: "Islero" },
                    { label: "Countach", value: "Countach" },
                    { label: "Sesto Elemento", value: "Sesto Elemento" },
                  ]
              : state.carBrand === "Lancia"
                ? [
                    { label: "Delta", value: "Delta" },
                    { label: "Prisma", value: "Prisma" },
                    { label: "Zeta", value: "Zeta" },
                    { label: "Thema", value: "Thema" },
                    { label: "Flavia", value: "Flavia" },
                    { label: "A 112", value: "A 112" },
                    { label: "Y10", value: "Y10" },
                    { label: "Musa", value: "Musa" },
                    { label: "Thesis", value: "Thesis" },
                    { label: "Rally 037", value: "Rally 037" },
                    { label: "Appia", value: "Appia" },
                    { label: "Fulvia", value: "Fulvia" },
                    { label: "Hyena", value: "Hyena" },
                    { label: "Gamma", value: "Gamma" },
                    { label: "Lybra", value: "Lybra" },
                    { label: "Voyager", value: "Voyager" },
                    { label: "Stratos", value: "Stratos" },
                    { label: "Lambda", value: "Lambda" },
                    { label: "Kappa", value: "Kappa" },
                    { label: "Flaminia", value: "Flaminia" },
                    { label: "Aurelia", value: "Aurelia" },
                    { label: "Ypsilon", value: "Ypsilon" },
                    { label: "Trevi", value: "Trevi" },
                    { label: "Beta", value: "Beta" },
                    { label: "Dedra", value: "Dedra" },
                    { label: "Monte Carlo", value: "Monte Carlo" },
                    { label: "Phedra", value: "Phedra" },
                  ]
              : state.carBrand === "Land Rover"
                ? [
                    { label: "Range Rover", value: "Range Rover" },
                    { label: "Range Rover Velar", value: "Range Rover Velar" },
                    { label: "Series I", value: "Series I" },
                    { label: "Series III", value: "Series III" },
                    { label: "Defender", value: "Defender" },
                    { label: "Range Rover Sport", value: "Range Rover Sport" },
                    { label: "Discovery Sport", value: "Discovery Sport" },
                    { label: "Series II", value: "Series II" },
                    { label: "Range Rover Evoque", value: "Range Rover Evoque" },
                    { label: "Discovery", value: "Discovery" },
                    { label: "Freelander", value: "Freelander" },
                  ]
              : state.carBrand === "Landwind"
                ? [
                    { label: "X5", value: "X5" },
                    { label: "X6", value: "X6" },
                    { label: "Forward", value: "Forward" },
                    { label: "Х9", value: "Х9" },
                    { label: "X7", value: "X7" },
                    { label: "Fashion (CV9)", value: "Fashion (CV9)" },
                  ]
              : state.carBrand === "Langfeng"
                ? [
                    { label: "SMA7132E3", value: "SMA7132E3" },
                  ]
              : state.carBrand === "LDV"
                ? [
                    { label: "Maxus", value: "Maxus" },
                  ]
              : state.carBrand === "Leapmotor"
                ? [
                    { label: "T03", value: "T03" },
                  ]
              : state.carBrand === "LEVC"
                ? [
                    { label: "TX", value: "TX" },
                  ]
              : state.carBrand === "Lexus"
                ? [
                    { label: "UX Hybrid", value: "UX Hybrid" },
                    { label: "CT", value: "CT" },
                    { label: "NX", value: "NX" },
                    { label: "RC", value: "RC" },
                    { label: "GS", value: "GS" },
                    { label: "RX", value: "RX" },
                    { label: "IS", value: "IS" },
                    { label: "SC", value: "SC" },
                    { label: "ES", value: "ES" },
                    { label: "GX", value: "GX" },
                    { label: "LX", value: "LX" },
                    { label: "LS", value: "LS" },
                    { label: "LFA", value: "LFA" },
                    { label: "HS", value: "HS" },
                    { label: "LC", value: "LC" },
                    { label: "RC F", value: "RC F" },
                    { label: "UX", value: "UX" },
                    { label: "GS F", value: "GS F" },
                    { label: "IS F", value: "IS F" },
                  ]
              : state.carBrand === "Li"
                ? [
                    { label: "One", value: "One" },
                  ]
              : state.carBrand === "Liebao Motor"
                ? [
                    { label: "Leopard", value: "Leopard" },
                  ]
              : state.carBrand === "Lifan"
                ? [
                    { label: "Smily", value: "Smily" },
                    { label: "Solano", value: "Solano" },
                    { label: "Breez (520)", value: "Breez (520)" },
                    { label: "Cebrium (720)", value: "Cebrium (720)" },
                    { label: "X50", value: "X50" },
                    { label: "LF5021", value: "LF5021" },
                    { label: "1022A1", value: "1022A1" },
                    { label: "Myway", value: "Myway" },
                    { label: "X70", value: "X70" },
                    { label: "X60", value: "X60" },
                    { label: "Murman", value: "Murman" },
                    { label: "620", value: "620" },
                    { label: "Celliya (530)", value: "Celliya (530)" },
                  ]
              : state.carBrand === "Lincoln"
                ? [
                    { label: "MKS", value: "MKS" },
                    { label: "MKZ", value: "MKZ" },
                    { label: "Mark LT", value: "Mark LT" },
                    { label: "LS", value: "LS" },
                    { label: "MKT", value: "MKT" },
                    { label: "Aviator", value: "Aviator" },
                    { label: "MKX", value: "MKX" },
                    { label: "Town Car", value: "Town Car" },
                    { label: "MKC", value: "MKC" },
                    { label: "Premiere", value: "Premiere" },
                    { label: "Navigator", value: "Navigator" },
                    { label: "Capri", value: "Capri" },
                    { label: "Blackwood", value: "Blackwood" },
                    { label: "Mark IV", value: "Mark IV" },
                    { label: "Mark VIII", value: "Mark VIII" },
                    { label: "Mark VII", value: "Mark VII" },
                    { label: "Continental", value: "Continental" },
                  ]
              : state.carBrand === "Link Tour"
                ? [
                    { label: "K-One", value: "K-One" },
                  ]
              : state.carBrand === "Lotus"
                ? [
                    { label: "Eclat", value: "Eclat" },
                    { label: "Elan", value: "Elan" },
                    { label: "Evora", value: "Evora" },
                    { label: "Exige", value: "Exige" },
                    { label: "Excel", value: "Excel" },
                    { label: "340R", value: "340R" },
                    { label: "Esprit", value: "Esprit" },
                    { label: "Europa", value: "Europa" },
                    { label: "Elise", value: "Elise" },
                    { label: "Europa S", value: "Europa S" },
                    { label: "Elite", value: "Elite" },
                  ]
              : state.carBrand === "LTI"
                ? [
                    { label: "TX", value: "TX" },
                  ]
              : state.carBrand === "Luxgen"
                ? [
                    { label: "Luxgen7 SUV", value: "Luxgen7 SUV" },
                    { label: "U7 Turbo", value: "U7 Turbo" },
                    { label: "Luxgen7 MPV", value: "Luxgen7 MPV" },
                    { label: "Luxgen5", value: "Luxgen5" },
                    { label: "U6 Turbo", value: "U6 Turbo" },
                  ]
              : state.carBrand === "Mahindra"
                ? [
                    { label: "MM", value: "MM" },
                    { label: "Marshal", value: "Marshal" },
                    { label: "Xylo", value: "Xylo" },
                    { label: "Voyager", value: "Voyager" },
                    { label: "NC 640 DP", value: "NC 640 DP" },
                    { label: "Commander", value: "Commander" },
                    { label: "Bolero", value: "Bolero" },
                    { label: "Verito", value: "Verito" },
                    { label: "Armada", value: "Armada" },
                    { label: "Scorpio", value: "Scorpio" },
                    { label: "CL", value: "CL" },
                    { label: "CJ-3", value: "CJ-3" },
                  ]
              : state.carBrand === "Man"
                ? [
                    { label: "TGL", value: "TGL" },
                    { label: "SG 313", value: "SG 313" },
                    { label: "TGA", value: "TGA" },
                    { label: "TGM", value: "TGM" },
                  ]
              : state.carBrand === "Marcos"
                ? [
                    { label: "LM 400", value: "LM 400" },
                    { label: "Mantis", value: "Mantis" },
                    { label: "Marcasite", value: "Marcasite" },
                    { label: "GTS", value: "GTS" },
                    { label: "LM 500", value: "LM 500" },
                  ]
              : state.carBrand === "Marlin"
                ? [
                    { label: "5EXi", value: "5EXi" },
                    { label: "Sportster", value: "Sportster" },
                  ]
              : state.carBrand === "Marussia"
                ? [
                    { label: "B1", value: "B1" },
                    { label: "B2", value: "B2" },
                  ]
              : state.carBrand === "Maruti"
                ? [
                    { label: "Baleno", value: "Baleno" },
                    { label: "Gypsy", value: "Gypsy" },
                    { label: "Zen", value: "Zen" },
                    { label: "Alto", value: "Alto" },
                    { label: "800", value: "800" },
                    { label: "1000", value: "1000" },
                    { label: "Wagon R", value: "Wagon R" },
                    { label: "Versa", value: "Versa" },
                    { label: "Omni", value: "Omni" },
                    { label: "Esteem", value: "Esteem" },
                  ]
              : state.carBrand === "Maserati"
                ? [
                    { label: "Kyalami", value: "Kyalami" },
                    { label: "228", value: "228" },
                    { label: "Indy", value: "Indy" },
                    { label: "Shamal", value: "Shamal" },
                    { label: "Merak", value: "Merak" },
                    { label: "GranTurismo", value: "GranTurismo" },
                    { label: "Mexico", value: "Mexico" },
                    { label: "Royale", value: "Royale" },
                    { label: "Levante", value: "Levante" },
                    { label: "Khamsin", value: "Khamsin" },
                    { label: "Quattroporte", value: "Quattroporte" },
                    { label: "Barchetta Stradale", value: "Barchetta Stradale" },
                    { label: "420", value: "420" },
                    { label: "Chubasco", value: "Chubasco" },
                    { label: "4200 GT", value: "4200 GT" },
                    { label: "Bora", value: "Bora" },
                    { label: "3200 GT", value: "3200 GT" },
                    { label: "Karif", value: "Karif" },
                    { label: "Biturbo", value: "Biturbo" },
                    { label: "Ghibli", value: "Ghibli" },
                    { label: "MC12", value: "MC12" },
                  ]
              : state.carBrand === "MAXUS"
                ? [
                    { label: "Euniq 5", value: "Euniq 5" },
                  ]
              : state.carBrand === "Maybach"
                ? [
                    { label: "62", value: "62" },
                    { label: "57", value: "57" },
                  ]
              : state.carBrand === "Mazda"
                ? [
                    { label: "Proceed Marvie", value: "Proceed Marvie" },
                    { label: "1300", value: "1300" },
                    { label: "3", value: "3" },
                    { label: "B-series", value: "B-series" },
                    { label: "Titan", value: "Titan" },
                    { label: "Cronos", value: "Cronos" },
                    { label: "818", value: "818" },
                    { label: "Luce", value: "Luce" },
                    { label: "Proceed", value: "Proceed" },
                    { label: "CX-5", value: "CX-5" },
                    { label: "Eunos 300", value: "Eunos 300" },
                    { label: "Eunos 800", value: "Eunos 800" },
                    { label: "Navajo", value: "Navajo" },
                    { label: "Xedos 6", value: "Xedos 6" },
                    { label: "Proceed Levante", value: "Proceed Levante" },
                    { label: "1000", value: "1000" },
                    { label: "CX-7", value: "CX-7" },
                    { label: "Atenza", value: "Atenza" },
                    { label: "323", value: "323" },
                    { label: "Flair Crossover", value: "Flair Crossover" },
                    { label: "MPV", value: "MPV" },
                    { label: "MX-5", value: "MX-5" },
                    { label: "CX-8", value: "CX-8" },
                    { label: "Efini MS-8", value: "Efini MS-8" },
                    { label: "Sentia", value: "Sentia" },
                    { label: "Persona", value: "Persona" },
                    { label: "Scrum", value: "Scrum" },
                    { label: "6", value: "6" },
                    { label: "Revue", value: "Revue" },
                    { label: "5", value: "5" },
                    { label: "Demio", value: "Demio" },
                    { label: "Roadster", value: "Roadster" },
                    { label: "Eunos 500", value: "Eunos 500" },
                    { label: "BT-50", value: "BT-50" },
                    { label: "6 MPS", value: "6 MPS" },
                    { label: "Millenia", value: "Millenia" },
                    { label: "Axela", value: "Axela" },
                    { label: "121", value: "121" },
                    { label: "Bongo", value: "Bongo" },
                    { label: "Familia", value: "Familia" },
                    { label: "Efini MS-6", value: "Efini MS-6" },
                    { label: "CX-3", value: "CX-3" },
                    { label: "Lantis", value: "Lantis" },
                    { label: "Spiano", value: "Spiano" },
                    { label: "929", value: "929" },
                    { label: "Tribute", value: "Tribute" },
                    { label: "Flair", value: "Flair" },
                    { label: "Bongo Friendee", value: "Bongo Friendee" },
                    { label: "Xedos 9", value: "Xedos 9" },
                    { label: "RX-8", value: "RX-8" },
                    { label: "AZ-Wagon", value: "AZ-Wagon" },
                    { label: "RX-7", value: "RX-7" },
                    { label: "Efini MS-9", value: "Efini MS-9" },
                    { label: "Laputa", value: "Laputa" },
                    { label: "Carol", value: "Carol" },
                    { label: "Cosmo", value: "Cosmo" },
                    { label: "Eunos Cosmo", value: "Eunos Cosmo" },
                    { label: "Premacy", value: "Premacy" },
                    { label: "2", value: "2" },
                    { label: "Eunos 100", value: "Eunos 100" },
                    { label: "626", value: "626" },
                    { label: "CX-30", value: "CX-30" },
                    { label: "CX-9", value: "CX-9" },
                    { label: "616", value: "616" },
                    { label: "3 MPS", value: "3 MPS" },
                    { label: "AZ-Offroad", value: "AZ-Offroad" },
                    { label: "MX-3", value: "MX-3" },
                    { label: "MX-6", value: "MX-6" },
                    { label: "Protege", value: "Protege" },
                    { label: "AZ-1", value: "AZ-1" },
                    { label: "Biante", value: "Biante" },
                    { label: "Capella", value: "Capella" },
                    { label: "Verisa", value: "Verisa" },
                  ]
              : state.carBrand === "McLaren"
                ? [
                    { label: "570S", value: "570S" },
                    { label: "MP4-12C", value: "MP4-12C" },
                    { label: "675LT", value: "675LT" },
                    { label: "720S", value: "720S" },
                    { label: "F1", value: "F1" },
                    { label: "540C", value: "540C" },
                    { label: "570GT", value: "570GT" },
                    { label: "P1", value: "P1" },
                    { label: "650S", value: "650S" },
                  ]
              : state.carBrand === "Mega"
                ? [
                    { label: "Club", value: "Club" },
                    { label: "Monte Carlo", value: "Monte Carlo" },
                    { label: "Track", value: "Track" },
                  ]
              : state.carBrand === "Mercedes-Benz"
                ? [
                    { label: "GLB-klasse", value: "GLB-klasse" },
                    { label: "SLS AMG", value: "SLS AMG" },
                    { label: "Actros", value: "Actros" },
                    { label: "LN", value: "LN" },
                    { label: "GL-klasse", value: "GL-klasse" },
                    { label: "W110", value: "W110" },
                    { label: "W111", value: "W111" },
                    { label: "W121", value: "W121" },
                    { label: "190 SL", value: "190 SL" },
                    { label: "GLC AMG", value: "GLC AMG" },
                    { label: "SL-klasse", value: "SL-klasse" },
                    { label: "CL-klasse AMG", value: "CL-klasse AMG" },
                    { label: "Sprinter", value: "Sprinter" },
                    { label: "GL-klasse AMG", value: "GL-klasse AMG" },
                    { label: "C-klasse", value: "C-klasse" },
                    { label: "EQA", value: "EQA" },
                    { label: "GLC Coupe", value: "GLC Coupe" },
                    { label: "W108", value: "W108" },
                    { label: "W186", value: "W186" },
                    { label: "609D", value: "609D" },
                    { label: "Viano", value: "Viano" },
                    { label: "Sprinter Classic", value: "Sprinter Classic" },
                    { label: "GLC", value: "GLC" },
                    { label: "CLA-klasse", value: "CLA-klasse" },
                    { label: "A-klasse AMG", value: "A-klasse AMG" },
                    { label: "Vito", value: "Vito" },
                    { label: "Vaneo", value: "Vaneo" },
                    { label: "A-klasse", value: "A-klasse" },
                    { label: "S-klasse AMG", value: "S-klasse AMG" },
                    { label: "W123", value: "W123" },
                    { label: "M-klasse", value: "M-klasse" },
                    { label: "GLE AMG", value: "GLE AMG" },
                    { label: "AMG GT", value: "AMG GT" },
                    { label: "GLE Coupe", value: "GLE Coupe" },
                    { label: "V-klasse", value: "V-klasse" },
                    { label: "TN", value: "TN" },
                    { label: "CLS-klasse AMG", value: "CLS-klasse AMG" },
                    { label: "G-klasse AMG 6x6", value: "G-klasse AMG 6x6" },
                    { label: "GLK-klasse", value: "GLK-klasse" },
                    { label: "CLK-klasse", value: "CLK-klasse" },
                    { label: "GLC Coupe AMG", value: "GLC Coupe AMG" },
                    { label: "E-klasse AMG", value: "E-klasse AMG" },
                    { label: "X-klasse", value: "X-klasse" },
                    { label: "W124", value: "W124" },
                    { label: "M-klasse AMG", value: "M-klasse AMG" },
                    { label: "W128", value: "W128" },
                    { label: "Atego", value: "Atego" },
                    { label: "G-klasse AMG", value: "G-klasse AMG" },
                    { label: "CLK-klasse AMG", value: "CLK-klasse AMG" },
                    { label: "W189", value: "W189" },
                    { label: "GLS-klasse AMG", value: "GLS-klasse AMG" },
                    { label: "C-klasse AMG", value: "C-klasse AMG" },
                    { label: "GLA-klasse", value: "GLA-klasse" },
                    { label: "W114", value: "W114" },
                    { label: "W29", value: "W29" },
                    { label: "Citan Cargo", value: "Citan Cargo" },
                    { label: "W188", value: "W188" },
                    { label: "W100", value: "W100" },
                    { label: "R-klasse", value: "R-klasse" },
                    { label: "S-klasse", value: "S-klasse" },
                    { label: "CLA-klasse AMG", value: "CLA-klasse AMG" },
                    { label: "SL-klasse AMG", value: "SL-klasse AMG" },
                    { label: "EQC", value: "EQC" },
                    { label: "W120", value: "W120" },
                    { label: "GLS-klasse", value: "GLS-klasse" },
                    { label: "G-klasse", value: "G-klasse" },
                    { label: "CLC-klasse", value: "CLC-klasse" },
                    { label: "SLK-klasse AMG", value: "SLK-klasse AMG" },
                    { label: "Metris", value: "Metris" },
                    { label: "SLC-klasse", value: "SLC-klasse" },
                    { label: "GLE", value: "GLE" },
                    { label: "SLR McLaren", value: "SLR McLaren" },
                    { label: "W136", value: "W136" },
                    { label: "E-klasse", value: "E-klasse" },
                    { label: "Maybach S-klasse", value: "Maybach S-klasse" },
                    { label: "R-klasse AMG", value: "R-klasse AMG" },
                    { label: "CL-klasse", value: "CL-klasse" },
                    { label: "W115", value: "W115" },
                    { label: "Citan", value: "Citan" },
                    { label: "GLE Coupe AMG", value: "GLE Coupe AMG" },
                    { label: "190 (W201)", value: "190 (W201)" },
                    { label: "B-klasse", value: "B-klasse" },
                    { label: "EQB", value: "EQB" },
                    { label: "SLC-klasse AMG", value: "SLC-klasse AMG" },
                    { label: "GLA-klasse AMG", value: "GLA-klasse AMG" },
                    { label: "SLK-klasse", value: "SLK-klasse" },
                    { label: "CLS-klasse", value: "CLS-klasse" },
                  ]
              : state.carBrand === "Mercury"
                ? [
                    { label: "Topaz", value: "Topaz" },
                    { label: "Marquis", value: "Marquis" },
                    { label: "Eight", value: "Eight" },
                    { label: "Grand Marquis", value: "Grand Marquis" },
                    { label: "Capri", value: "Capri" },
                    { label: "Monterey", value: "Monterey" },
                    { label: "Mountaineer", value: "Mountaineer" },
                    { label: "Mystique", value: "Mystique" },
                    { label: "Montego", value: "Montego" },
                    { label: "Marauder", value: "Marauder" },
                    { label: "Milan", value: "Milan" },
                    { label: "Cougar", value: "Cougar" },
                    { label: "Villager", value: "Villager" },
                    { label: "Sable", value: "Sable" },
                    { label: "Tracer", value: "Tracer" },
                    { label: "Mariner", value: "Mariner" },
                  ]
              : state.carBrand === "Metrocab"
                ? [
                    { label: "Metrocab I", value: "Metrocab I" },
                    { label: "Metrocab II (TTT)", value: "Metrocab II (TTT)" },
                  ]
              : state.carBrand === "MG"
                ? [
                    { label: "750", value: "750" },
                    { label: "HS", value: "HS" },
                    { label: "ZR", value: "ZR" },
                    { label: "350", value: "350" },
                    { label: "RV8", value: "RV8" },
                    { label: "ZT", value: "ZT" },
                    { label: "ZS", value: "ZS" },
                    { label: "ZS EV", value: "ZS EV" },
                    { label: "Midget", value: "Midget" },
                    { label: "GS", value: "GS" },
                    { label: "TF", value: "TF" },
                    { label: "F", value: "F" },
                    { label: "Xpower SV", value: "Xpower SV" },
                    { label: "MGB", value: "MGB" },
                    { label: "GT", value: "GT" },
                    { label: "6", value: "6" },
                    { label: "3", value: "3" },
                    { label: "550", value: "550" },
                    { label: "Metro", value: "Metro" },
                    { label: "5", value: "5" },
                    { label: "Montego", value: "Montego" },
                    { label: "Maestro", value: "Maestro" },
                  ]
              : state.carBrand === "Microcar"
                ? [
                    { label: "MC", value: "MC" },
                    { label: "M.Go", value: "M.Go" },
                    { label: "M8", value: "M8" },
                    { label: "Virgo", value: "Virgo" },
                    { label: "F8C", value: "F8C" },
                  ]
              : state.carBrand === "Minelli"
                ? [
                    { label: "TF 1800", value: "TF 1800" },
                  ]
              : state.carBrand === "MINI"
                ? [
                    { label: "Clubman", value: "Clubman" },
                    { label: "Paceman", value: "Paceman" },
                    { label: "Roadster", value: "Roadster" },
                    { label: "Coupe", value: "Coupe" },
                    { label: "Cabrio", value: "Cabrio" },
                    { label: "Hatch", value: "Hatch" },
                    { label: "Countryman", value: "Countryman" },
                  ]
              : state.carBrand === "Mitsubishi"
                ? [
                    { label: "FTO", value: "FTO" },
                    { label: "Pajero iO", value: "Pajero iO" },
                    { label: "Town Box", value: "Town Box" },
                    { label: "Delica", value: "Delica" },
                    { label: "eK Classic", value: "eK Classic" },
                    { label: "Challenger", value: "Challenger" },
                    { label: "Pajero", value: "Pajero" },
                    { label: "eK Space", value: "eK Space" },
                    { label: "Attrage", value: "Attrage" },
                    { label: "Space Gear", value: "Space Gear" },
                    { label: "Raider", value: "Raider" },
                    { label: "Minicab", value: "Minicab" },
                    { label: "Savrin", value: "Savrin" },
                    { label: "Cordia", value: "Cordia" },
                    { label: "Endeavor", value: "Endeavor" },
                    { label: "Airtrek", value: "Airtrek" },
                    { label: "Emeraude", value: "Emeraude" },
                    { label: "eK Active", value: "eK Active" },
                    { label: "i", value: "i" },
                    { label: "Starion", value: "Starion" },
                    { label: "Strada", value: "Strada" },
                    { label: "Space Star", value: "Space Star" },
                    { label: "Fuso Canter", value: "Fuso Canter" },
                    { label: "Sigma", value: "Sigma" },
                    { label: "Aspire", value: "Aspire" },
                    { label: "Diamante", value: "Diamante" },
                    { label: "Lancer", value: "Lancer" },
                    { label: "Pajero Junior", value: "Pajero Junior" },
                    { label: "Delica D:3", value: "Delica D:3" },
                    { label: "eK Wagon", value: "eK Wagon" },
                    { label: "Tredia", value: "Tredia" },
                    { label: "Lancer Evolution", value: "Lancer Evolution" },
                    { label: "Jeep J", value: "Jeep J" },
                    { label: "Freeca", value: "Freeca" },
                    { label: "Colt", value: "Colt" },
                    { label: "L300", value: "L300" },
                    { label: "Lancer Cargo", value: "Lancer Cargo" },
                    { label: "Eterna", value: "Eterna" },
                    { label: "eK Sport", value: "eK Sport" },
                    { label: "Legnum", value: "Legnum" },
                    { label: "Toppo", value: "Toppo" },
                    { label: "Pajero Sport", value: "Pajero Sport" },
                    { label: "Space Wagon", value: "Space Wagon" },
                    { label: "Delica D:5", value: "Delica D:5" },
                    { label: "Pistachio", value: "Pistachio" },
                    { label: "Galant", value: "Galant" },
                    { label: "Mirage", value: "Mirage" },
                    { label: "Lancer Ralliart", value: "Lancer Ralliart" },
                    { label: "Libero", value: "Libero" },
                    { label: "Pajero Mini", value: "Pajero Mini" },
                    { label: "RVR", value: "RVR" },
                    { label: "Montero", value: "Montero" },
                    { label: "Minica", value: "Minica" },
                    { label: "Chariot", value: "Chariot" },
                    { label: "GTO", value: "GTO" },
                    { label: "Celeste", value: "Celeste" },
                    { label: "Debonair", value: "Debonair" },
                    { label: "Dion", value: "Dion" },
                    { label: "Galant Fortis", value: "Galant Fortis" },
                    { label: "ASX", value: "ASX" },
                    { label: "Carisma", value: "Carisma" },
                    { label: "Montero Sport", value: "Montero Sport" },
                    { label: "Dingo", value: "Dingo" },
                    { label: "L200", value: "L200" },
                    { label: "Proudia", value: "Proudia" },
                    { label: "Eclipse", value: "Eclipse" },
                    { label: "Sapporo", value: "Sapporo" },
                    { label: "Delica D:2", value: "Delica D:2" },
                    { label: "Triton", value: "Triton" },
                    { label: "Dignity", value: "Dignity" },
                    { label: "eK Custom", value: "eK Custom" },
                    { label: "Outlander", value: "Outlander" },
                    { label: "i-MiEV", value: "i-MiEV" },
                    { label: "Pajero Pinin", value: "Pajero Pinin" },
                    { label: "500", value: "500" },
                    { label: "Grandis", value: "Grandis" },
                    { label: "Space Runner", value: "Space Runner" },
                    { label: "Xpander", value: "Xpander" },
                    { label: "Eclipse Cross", value: "Eclipse Cross" },
                  ]
              : state.carBrand === "Mitsuoka"
                ? [
                    { label: "Himiko", value: "Himiko" },
                    { label: "Yuga", value: "Yuga" },
                    { label: "Zero 1", value: "Zero 1" },
                    { label: "Ryoga", value: "Ryoga" },
                    { label: "Nouera", value: "Nouera" },
                    { label: "MC-1", value: "MC-1" },
                    { label: "Galue", value: "Galue" },
                    { label: "Like", value: "Like" },
                    { label: "Le-Seyde", value: "Le-Seyde" },
                    { label: "K-2", value: "K-2" },
                    { label: "Ray", value: "Ray" },
                    { label: "Galue 204", value: "Galue 204" },
                    { label: "Viewt", value: "Viewt" },
                    { label: "Orochi", value: "Orochi" },
                  ]
              : state.carBrand === "Morgan"
                ? [
                    { label: "4/4", value: "4/4" },
                    { label: "Aero Coupe", value: "Aero Coupe" },
                    { label: "Aero SuperSports", value: "Aero SuperSports" },
                    { label: "4 Seater", value: "4 Seater" },
                    { label: "Aero 8", value: "Aero 8" },
                    { label: "Plus 8", value: "Plus 8" },
                    { label: "AeroMax", value: "AeroMax" },
                    { label: "Roadster", value: "Roadster" },
                    { label: "Plus 4", value: "Plus 4" },
                    { label: "3 Wheeler", value: "3 Wheeler" },
                  ]
              : state.carBrand === "Morris"
                ? [
                    { label: "Marina", value: "Marina" },
                    { label: "Eight", value: "Eight" },
                  ]
              : state.carBrand === "Naveco"
                ? [
                    { label: "C300", value: "C300" },
                  ]
              : state.carBrand === "Neta"
                ? [
                    { label: "V", value: "V" },
                  ]
              : state.carBrand === "Nissan"
                ? [
                    { label: "Safari", value: "Safari" },
                    { label: "Langley", value: "Langley" },
                    { label: "Wingroad", value: "Wingroad" },
                    { label: "Liberta Villa", value: "Liberta Villa" },
                    { label: "Kubistar", value: "Kubistar" },
                    { label: "Navara (Frontier)", value: "Navara (Frontier)" },
                    { label: "Primera Camino", value: "Primera Camino" },
                    { label: "Tino", value: "Tino" },
                    { label: "Bluebird Maxima", value: "Bluebird Maxima" },
                    { label: "Teana", value: "Teana" },
                    { label: "Interstar", value: "Interstar" },
                    { label: "Qashqai+2", value: "Qashqai+2" },
                    { label: "Juke Nismo", value: "Juke Nismo" },
                    { label: "Pixo", value: "Pixo" },
                    { label: "Hypermini", value: "Hypermini" },
                    { label: "Skyline", value: "Skyline" },
                    { label: "Presea", value: "Presea" },
                    { label: "Largo", value: "Largo" },
                    { label: "Xterra", value: "Xterra" },
                    { label: "Juke", value: "Juke" },
                    { label: "GT-R", value: "GT-R" },
                    { label: "Roox", value: "Roox" },
                    { label: "NV100 Clipper", value: "NV100 Clipper" },
                    { label: "NV350 Caravan", value: "NV350 Caravan" },
                    { label: "AD", value: "AD" },
                    { label: "R'nessa", value: "R'nessa" },
                    { label: "200SX", value: "200SX" },
                    { label: "Sunny", value: "Sunny" },
                    { label: "Vanette", value: "Vanette" },
                    { label: "President", value: "President" },
                    { label: "100NX", value: "100NX" },
                    { label: "Prairie", value: "Prairie" },
                    { label: "Armada", value: "Armada" },
                    { label: "Figaro", value: "Figaro" },
                    { label: "Skyline Crossover", value: "Skyline Crossover" },
                    { label: "Pathfinder", value: "Pathfinder" },
                    { label: "Serena", value: "Serena" },
                    { label: "Tiida", value: "Tiida" },
                    { label: "Stagea", value: "Stagea" },
                    { label: "Bluebird", value: "Bluebird" },
                    { label: "Qashqai", value: "Qashqai" },
                    { label: "Fuga", value: "Fuga" },
                    { label: "Quest", value: "Quest" },
                    { label: "Kicks", value: "Kicks" },
                    { label: "Versa", value: "Versa" },
                    { label: "Exa", value: "Exa" },
                    { label: "Pino", value: "Pino" },
                    { label: "Pulsar", value: "Pulsar" },
                    { label: "Terrano Regulus", value: "Terrano Regulus" },
                    { label: "Elgrand", value: "Elgrand" },
                    { label: "Dualis", value: "Dualis" },
                    { label: "Auster", value: "Auster" },
                    { label: "BE-1", value: "BE-1" },
                    { label: "Livina", value: "Livina" },
                    { label: "Cherry", value: "Cherry" },
                    { label: "NP300", value: "NP300" },
                    { label: "Rasheen", value: "Rasheen" },
                    { label: "Altima", value: "Altima" },
                    { label: "350Z", value: "350Z" },
                    { label: "Atlas", value: "Atlas" },
                    { label: "Cefiro", value: "Cefiro" },
                    { label: "370Z", value: "370Z" },
                    { label: "Crew", value: "Crew" },
                    { label: "Maxima", value: "Maxima" },
                    { label: "Note", value: "Note" },
                    { label: "Rogue", value: "Rogue" },
                    { label: "Expert", value: "Expert" },
                    { label: "Mistral", value: "Mistral" },
                    { label: "NX Coupe", value: "NX Coupe" },
                    { label: "Fairlady Z", value: "Fairlady Z" },
                    { label: "Cima", value: "Cima" },
                    { label: "March", value: "March" },
                    { label: "Diesel", value: "Diesel" },
                    { label: "Almera", value: "Almera" },
                    { label: "240SX", value: "240SX" },
                    { label: "Urvan", value: "Urvan" },
                    { label: "Pao", value: "Pao" },
                    { label: "Datsun", value: "Datsun" },
                    { label: "Almera Tino", value: "Almera Tino" },
                    { label: "Stanza", value: "Stanza" },
                    { label: "Liberty", value: "Liberty" },
                    { label: "Presage", value: "Presage" },
                    { label: "Lucino", value: "Lucino" },
                    { label: "Cube", value: "Cube" },
                    { label: "Dayz", value: "Dayz" },
                    { label: "Leopard", value: "Leopard" },
                    { label: "Micra", value: "Micra" },
                    { label: "Moco", value: "Moco" },
                    { label: "Lafesta", value: "Lafesta" },
                    { label: "Murano", value: "Murano" },
                    { label: "Kix", value: "Kix" },
                    { label: "Clipper Rio", value: "Clipper Rio" },
                    { label: "Cedric", value: "Cedric" },
                    { label: "Silvia", value: "Silvia" },
                    { label: "Terrano", value: "Terrano" },
                    { label: "280ZX", value: "280ZX" },
                    { label: "Laurel", value: "Laurel" },
                    { label: "Titan", value: "Titan" },
                    { label: "e-NV200", value: "e-NV200" },
                    { label: "Caravan", value: "Caravan" },
                    { label: "Almera Classic", value: "Almera Classic" },
                    { label: "Cabstar", value: "Cabstar" },
                    { label: "Homy", value: "Homy" },
                    { label: "Latio", value: "Latio" },
                    { label: "Otti", value: "Otti" },
                    { label: "Leaf", value: "Leaf" },
                    { label: "180SX", value: "180SX" },
                    { label: "NV200", value: "NV200" },
                    { label: "300ZX", value: "300ZX" },
                    { label: "Primastar", value: "Primastar" },
                    { label: "Bassara", value: "Bassara" },
                    { label: "Avenir", value: "Avenir" },
                    { label: "X-Trail", value: "X-Trail" },
                    { label: "Bluebird Sylphy", value: "Bluebird Sylphy" },
                    { label: "Sentra", value: "Sentra" },
                    { label: "Gloria", value: "Gloria" },
                    { label: "Patrol", value: "Patrol" },
                    { label: "Primera", value: "Primera" },
                  ]
              : state.carBrand === "Noble"
                ? [
                    { label: "M12 GTO", value: "M12 GTO" },
                    { label: "M15", value: "M15" },
                    { label: "M600", value: "M600" },
                  ]
              : state.carBrand === "Oldsmobile"
                ? [
                    { label: "Alero", value: "Alero" },
                    { label: "Cutlass", value: "Cutlass" },
                    { label: "Intrigue", value: "Intrigue" },
                    { label: "Achieva", value: "Achieva" },
                    { label: "Cutlass Calais", value: "Cutlass Calais" },
                    { label: "Eighty-Eight", value: "Eighty-Eight" },
                    { label: "Firenza", value: "Firenza" },
                    { label: "Ninety-Eight", value: "Ninety-Eight" },
                    { label: "Omega", value: "Omega" },
                    { label: "Silhouette", value: "Silhouette" },
                    { label: "Bravada", value: "Bravada" },
                    { label: "Cutlass Ciera", value: "Cutlass Ciera" },
                    { label: "Toronado", value: "Toronado" },
                    { label: "Aurora", value: "Aurora" },
                    { label: "Cutlass Supreme", value: "Cutlass Supreme" },
                  ]
              : state.carBrand === "Opel"
                ? [
                    { label: "Astra", value: "Astra" },
                    { label: "Astra OPC", value: "Astra OPC" },
                    { label: "Ampera", value: "Ampera" },
                    { label: "Karl", value: "Karl" },
                    { label: "Agila", value: "Agila" },
                    { label: "Rekord", value: "Rekord" },
                    { label: "Ascona", value: "Ascona" },
                    { label: "Manta", value: "Manta" },
                    { label: "Tigra", value: "Tigra" },
                    { label: "Insignia", value: "Insignia" },
                    { label: "Combo Cargo", value: "Combo Cargo" },
                    { label: "Crossland X", value: "Crossland X" },
                    { label: "Olympia", value: "Olympia" },
                    { label: "Commodore", value: "Commodore" },
                    { label: "Super Six", value: "Super Six" },
                    { label: "Frontera", value: "Frontera" },
                    { label: "Vectra OPC", value: "Vectra OPC" },
                    { label: "Antara", value: "Antara" },
                    { label: "Grandland X", value: "Grandland X" },
                    { label: "Kadett", value: "Kadett" },
                    { label: "Vectra", value: "Vectra" },
                    { label: "Monterey", value: "Monterey" },
                    { label: "Movano", value: "Movano" },
                    { label: "Calibra", value: "Calibra" },
                    { label: "GT", value: "GT" },
                    { label: "Corsa OPC", value: "Corsa OPC" },
                    { label: "Meriva", value: "Meriva" },
                    { label: "Cascada", value: "Cascada" },
                    { label: "Combo", value: "Combo" },
                    { label: "Senator", value: "Senator" },
                    { label: "Signum", value: "Signum" },
                    { label: "Zafira Life", value: "Zafira Life" },
                    { label: "Sintra", value: "Sintra" },
                    { label: "Vita", value: "Vita" },
                    { label: "Admiral", value: "Admiral" },
                    { label: "Adam", value: "Adam" },
                    { label: "Corsa", value: "Corsa" },
                    { label: "P4", value: "P4" },
                    { label: "Vivaro", value: "Vivaro" },
                    { label: "Campo", value: "Campo" },
                    { label: "Mokka", value: "Mokka" },
                    { label: "Monza", value: "Monza" },
                    { label: "Speedster", value: "Speedster" },
                    { label: "Omega", value: "Omega" },
                    { label: "Zafira OPC", value: "Zafira OPC" },
                    { label: "Zafira", value: "Zafira" },
                    { label: "Meriva OPC", value: "Meriva OPC" },
                    { label: "Diplomat", value: "Diplomat" },
                    { label: "Kapitan", value: "Kapitan" },
                    { label: "Insignia OPC", value: "Insignia OPC" },
                  ]
              : state.carBrand === "Ora"
                ? [
                    { label: "iQ", value: "iQ" },
                  ]
              : state.carBrand === "Osca"
                ? [
                    { label: "2500 GT", value: "2500 GT" },
                  ]
              : state.carBrand === "Packard"
                ? [
                    { label: "200/250", value: "200/250" },
                    { label: "Clipper", value: "Clipper" },
                    { label: "Twelve", value: "Twelve" },
                    { label: "One-Twenty", value: "One-Twenty" },
                  ]
              : state.carBrand === "Pagani"
                ? [
                    { label: "Zonda", value: "Zonda" },
                    { label: "Huayra", value: "Huayra" },
                  ]
              : state.carBrand === "Panoz"
                ? [
                    { label: "Roadster", value: "Roadster" },
                    { label: "Esperante", value: "Esperante" },
                  ]
              : state.carBrand === "Perodua"
                ? [
                    { label: "MyVi", value: "MyVi" },
                    { label: "Nautica", value: "Nautica" },
                    { label: "Alza", value: "Alza" },
                    { label: "Kenari", value: "Kenari" },
                    { label: "Viva", value: "Viva" },
                    { label: "Kembara", value: "Kembara" },
                    { label: "Kancil", value: "Kancil" },
                    { label: "Kelisa", value: "Kelisa" },
                  ]
              : state.carBrand === "Peugeot"
                ? [
                    { label: "405", value: "405" },
                    { label: "107", value: "107" },
                    { label: "207", value: "207" },
                    { label: "604", value: "604" },
                    { label: "Bipper", value: "Bipper" },
                    { label: "504", value: "504" },
                    { label: "406", value: "406" },
                    { label: "807", value: "807" },
                    { label: "3008", value: "3008" },
                    { label: "505", value: "505" },
                    { label: "Traveller", value: "Traveller" },
                    { label: "201", value: "201" },
                    { label: "104", value: "104" },
                    { label: "508", value: "508" },
                    { label: "203", value: "203" },
                    { label: "iOn", value: "iOn" },
                    { label: "301", value: "301" },
                    { label: "205 GTi", value: "205 GTi" },
                    { label: "Partner Cargo", value: "Partner Cargo" },
                    { label: "Partner", value: "Partner" },
                    { label: "408", value: "408" },
                    { label: "306", value: "306" },
                    { label: "Khazar 406", value: "Khazar 406" },
                    { label: "4008", value: "4008" },
                    { label: "205", value: "205" },
                    { label: "108", value: "108" },
                    { label: "607", value: "607" },
                    { label: "e-2008", value: "e-2008" },
                    { label: "Pars", value: "Pars" },
                    { label: "309", value: "309" },
                    { label: "5008", value: "5008" },
                    { label: "2008", value: "2008" },
                    { label: "304", value: "304" },
                    { label: "206", value: "206" },
                    { label: "402", value: "402" },
                    { label: "404", value: "404" },
                    { label: "307", value: "307" },
                    { label: "204", value: "204" },
                    { label: "208", value: "208" },
                    { label: "106", value: "106" },
                    { label: "308 GTi", value: "308 GTi" },
                    { label: "208 GTi", value: "208 GTi" },
                    { label: "806", value: "806" },
                    { label: "308", value: "308" },
                    { label: "407", value: "407" },
                    { label: "Expert", value: "Expert" },
                    { label: "Boxer", value: "Boxer" },
                    { label: "202", value: "202" },
                    { label: "4007", value: "4007" },
                    { label: "605", value: "605" },
                    { label: "305", value: "305" },
                    { label: "1007", value: "1007" },
                    { label: "RCZ", value: "RCZ" },
                    { label: "403", value: "403" },
                  ]
              : state.carBrand === "PGO"
                ? [
                    { label: "Hemera", value: "Hemera" },
                    { label: "Speedster II", value: "Speedster II" },
                    { label: "Cevennes", value: "Cevennes" },
                  ]
              : state.carBrand === "Piaggio"
                ? [
                    { label: "Porter", value: "Porter" },
                  ]
              : state.carBrand === "Plymouth"
                ? [
                    { label: "Reliant", value: "Reliant" },
                    { label: "Neon", value: "Neon" },
                    { label: "Turismo", value: "Turismo" },
                    { label: "Valiant", value: "Valiant" },
                    { label: "Horizon", value: "Horizon" },
                    { label: "Sundance", value: "Sundance" },
                    { label: "Prowler", value: "Prowler" },
                    { label: "Acclaim", value: "Acclaim" },
                    { label: "Breeze", value: "Breeze" },
                    { label: "Barracuda", value: "Barracuda" },
                    { label: "Fury", value: "Fury" },
                    { label: "Road Runner", value: "Road Runner" },
                    { label: "Voyager", value: "Voyager" },
                    { label: "Caravelle", value: "Caravelle" },
                    { label: "Laser", value: "Laser" },
                  ]
              : state.carBrand === "Polestar"
                ? [
                    { label: "2", value: "2" },
                  ]
              : state.carBrand === "Pontiac"
                ? [
                    { label: "Tempest", value: "Tempest" },
                    { label: "Grand AM", value: "Grand AM" },
                    { label: "Aztek", value: "Aztek" },
                    { label: "Parisienne", value: "Parisienne" },
                    { label: "6000", value: "6000" },
                    { label: "Torrent", value: "Torrent" },
                    { label: "Catalina", value: "Catalina" },
                    { label: "GTO", value: "GTO" },
                    { label: "LeMans", value: "LeMans" },
                    { label: "Firebird", value: "Firebird" },
                    { label: "Solstice", value: "Solstice" },
                    { label: "Fiero", value: "Fiero" },
                    { label: "Sunfire", value: "Sunfire" },
                    { label: "Sunbird", value: "Sunbird" },
                    { label: "G8", value: "G8" },
                    { label: "Trans Sport", value: "Trans Sport" },
                    { label: "Phoenix", value: "Phoenix" },
                    { label: "Montana", value: "Montana" },
                    { label: "Vibe", value: "Vibe" },
                    { label: "G4", value: "G4" },
                    { label: "Torpedo", value: "Torpedo" },
                    { label: "Grand Prix", value: "Grand Prix" },
                    { label: "G6", value: "G6" },
                    { label: "G5", value: "G5" },
                    { label: "Bonneville", value: "Bonneville" },
                  ]
              : state.carBrand === "Porsche"
                ? [
                    { label: "356", value: "356" },
                    { label: "924", value: "924" },
                    { label: "918 Spyder", value: "918 Spyder" },
                    { label: "911 GT2", value: "911 GT2" },
                    { label: "Panamera", value: "Panamera" },
                    { label: "718 Boxster", value: "718 Boxster" },
                    { label: "914", value: "914" },
                    { label: "Cayman", value: "Cayman" },
                    { label: "Cayman GT4", value: "Cayman GT4" },
                    { label: "959", value: "959" },
                    { label: "Taycan", value: "Taycan" },
                    { label: "928", value: "928" },
                    { label: "Carrera GT", value: "Carrera GT" },
                    { label: "944", value: "944" },
                    { label: "968", value: "968" },
                    { label: "Boxster", value: "Boxster" },
                    { label: "911", value: "911" },
                    { label: "Cayenne", value: "Cayenne" },
                    { label: "718 Cayman", value: "718 Cayman" },
                    { label: "911 R", value: "911 R" },
                    { label: "Macan", value: "Macan" },
                    { label: "911 GT3", value: "911 GT3" },
                  ]
              : state.carBrand === "Premier"
                ? [
                    { label: "Padmini", value: "Padmini" },
                    { label: "118NE", value: "118NE" },
                  ]
              : state.carBrand === "Proton"
                ? [
                    { label: "Persona", value: "Persona" },
                    { label: "Exora", value: "Exora" },
                    { label: "Preve", value: "Preve" },
                    { label: "Satria", value: "Satria" },
                    { label: "Perdana", value: "Perdana" },
                    { label: "Wira (400 Series)", value: "Wira (400 Series)" },
                    { label: "Juara", value: "Juara" },
                    { label: "Waja", value: "Waja" },
                    { label: "Gen-2", value: "Gen-2" },
                    { label: "Putra", value: "Putra" },
                    { label: "Saga", value: "Saga" },
                    { label: "Inspira", value: "Inspira" },
                  ]
              : state.carBrand === "PUCH"
                ? [
                    { label: "G-modell", value: "G-modell" },
                    { label: "Pinzgauer", value: "Pinzgauer" },
                  ]
              : state.carBrand === "Puma"
                ? [
                    { label: "GTE", value: "GTE" },
                    { label: "GTB", value: "GTB" },
                  ]
              : state.carBrand === "Qoros"
                ? [
                    { label: "3", value: "3" },
                  ]
              : state.carBrand === "Qvale"
                ? [
                    { label: "Mangusta", value: "Mangusta" },
                  ]
              : state.carBrand === "Ravon"
                ? [
                    { label: "R4", value: "R4" },
                    { label: "Nexia R3", value: "Nexia R3" },
                    { label: "Gentra", value: "Gentra" },
                    { label: "Matiz", value: "Matiz" },
                    { label: "R2", value: "R2" },
                  ]
              : state.carBrand === "Reliant"
                ? [
                    { label: "Scimitar Sabre", value: "Scimitar Sabre" },
                  ]
              : state.carBrand === "Renaissance"
                ? [
                    { label: "Tropica Roadster", value: "Tropica Roadster" },
                  ]
              : state.carBrand === "Renault"
                ? [
                    { label: "21", value: "21" },
                    { label: "Sport Spider", value: "Sport Spider" },
                    { label: "10", value: "10" },
                    { label: "30", value: "30" },
                    { label: "17", value: "17" },
                    { label: "Sandero", value: "Sandero" },
                    { label: "Kangoo Express", value: "Kangoo Express" },
                    { label: "Maxity", value: "Maxity" },
                    { label: "Kaptur", value: "Kaptur" },
                    { label: "12", value: "12" },
                    { label: "14", value: "14" },
                    { label: "Clio RS", value: "Clio RS" },
                    { label: "Clio V6", value: "Clio V6" },
                    { label: "Logan", value: "Logan" },
                    { label: "Symbol", value: "Symbol" },
                    { label: "Twingo", value: "Twingo" },
                    { label: "Koleos", value: "Koleos" },
                    { label: "Trafic", value: "Trafic" },
                    { label: "Megane RS", value: "Megane RS" },
                    { label: "Vel Satis", value: "Vel Satis" },
                    { label: "11", value: "11" },
                    { label: "Dokker", value: "Dokker" },
                    { label: "Twizy", value: "Twizy" },
                    { label: "Megane", value: "Megane" },
                    { label: "9", value: "9" },
                    { label: "Alaskan", value: "Alaskan" },
                    { label: "19", value: "19" },
                    { label: "Mascott", value: "Mascott" },
                    { label: "4", value: "4" },
                    { label: "Fluence", value: "Fluence" },
                    { label: "Kadjar", value: "Kadjar" },
                    { label: "Arkana", value: "Arkana" },
                    { label: "Kangoo", value: "Kangoo" },
                    { label: "Latitude", value: "Latitude" },
                    { label: "Duster", value: "Duster" },
                    { label: "Avantime", value: "Avantime" },
                    { label: "Master", value: "Master" },
                    { label: "Wind", value: "Wind" },
                    { label: "5", value: "5" },
                    { label: "6", value: "6" },
                    { label: "Clio", value: "Clio" },
                    { label: "8", value: "8" },
                    { label: "Floride", value: "Floride" },
                    { label: "KWID", value: "KWID" },
                    { label: "Midlum", value: "Midlum" },
                    { label: "Scenic", value: "Scenic" },
                    { label: "15", value: "15" },
                    { label: "20", value: "20" },
                    { label: "Logan Stepway", value: "Logan Stepway" },
                    { label: "4CV", value: "4CV" },
                    { label: "Lodgy", value: "Lodgy" },
                    { label: "Docker", value: "Docker" },
                    { label: "Espace", value: "Espace" },
                    { label: "Dokker Van", value: "Dokker Van" },
                    { label: "Laguna", value: "Laguna" },
                    { label: "Safrane", value: "Safrane" },
                    { label: "16", value: "16" },
                    { label: "Vivastella", value: "Vivastella" },
                    { label: "ZOE", value: "ZOE" },
                    { label: "18", value: "18" },
                    { label: "Caravelle", value: "Caravelle" },
                    { label: "Talisman", value: "Talisman" },
                    { label: "Sandero RS", value: "Sandero RS" },
                    { label: "Fuego", value: "Fuego" },
                    { label: "Rodeo", value: "Rodeo" },
                    { label: "Fregate", value: "Fregate" },
                    { label: "Kango", value: "Kango" },
                    { label: "Modus", value: "Modus" },
                    { label: "25", value: "25" },
                    { label: "Dauphine", value: "Dauphine" },
                  ]
              : state.carBrand === "Renault Samsung"
                ? [
                    { label: "SM5", value: "SM5" },
                    { label: "QM6", value: "QM6" },
                    { label: "SM7", value: "SM7" },
                    { label: "QM5", value: "QM5" },
                    { label: "SM6", value: "SM6" },
                    { label: "SM3", value: "SM3" },
                  ]
              : state.carBrand === "Rezvani"
                ? [
                    { label: "Beast", value: "Beast" },
                  ]
              : state.carBrand === "Rimac"
                ? [
                    { label: "Concept_One", value: "Concept_One" },
                  ]
              : state.carBrand === "Roewe"
                ? [
                    { label: "Ei5", value: "Ei5" },
                  ]
              : state.carBrand === "Rolls-Royce"
                ? [
                    { label: "Silver Wraith", value: "Silver Wraith" },
                    { label: "Phantom", value: "Phantom" },
                    { label: "Silver Ghost", value: "Silver Ghost" },
                    { label: "Wraith", value: "Wraith" },
                    { label: "Silver Seraph", value: "Silver Seraph" },
                    { label: "Corniche", value: "Corniche" },
                    { label: "Silver Cloud", value: "Silver Cloud" },
                    { label: "Camargue", value: "Camargue" },
                    { label: "Park Ward", value: "Park Ward" },
                    { label: "Ghost", value: "Ghost" },
                    { label: "Silver Shadow", value: "Silver Shadow" },
                    { label: "Dawn", value: "Dawn" },
                    { label: "20/25", value: "20/25" },
                    { label: "Silver Spur", value: "Silver Spur" },
                  ]
              : state.carBrand === "Ronart"
                ? [
                    { label: "Lightning", value: "Lightning" },
                  ]
              : state.carBrand === "Rover"
                ? [
                    { label: "45", value: "45" },
                    { label: "400", value: "400" },
                    { label: "600", value: "600" },
                    { label: "75", value: "75" },
                    { label: "P4", value: "P4" },
                    { label: "P6", value: "P6" },
                    { label: "200", value: "200" },
                    { label: "Mini", value: "Mini" },
                    { label: "14", value: "14" },
                    { label: "Metro", value: "Metro" },
                    { label: "100", value: "100" },
                    { label: "SD1", value: "SD1" },
                    { label: "800", value: "800" },
                    { label: "Streetwise", value: "Streetwise" },
                    { label: "25", value: "25" },
                    { label: "406", value: "406" },
                    { label: "P3", value: "P3" },
                  ]
              : state.carBrand === "Saab"
                ? [
                    { label: "9-4X", value: "9-4X" },
                    { label: "95", value: "95" },
                    { label: "900", value: "900" },
                    { label: "Sonett", value: "Sonett" },
                    { label: "93", value: "93" },
                    { label: "9-5", value: "9-5" },
                    { label: "96", value: "96" },
                    { label: "9-2X", value: "9-2X" },
                    { label: "9-7X", value: "9-7X" },
                    { label: "90", value: "90" },
                    { label: "9000", value: "9000" },
                    { label: "99", value: "99" },
                    { label: "9-3", value: "9-3" },
                  ]
              : state.carBrand === "Saipa"
                ? [
                    { label: "Tiba", value: "Tiba" },
                    { label: "Saina", value: "Saina" },
                  ]
              : state.carBrand === "Saleen"
                ? [
                    { label: "S7", value: "S7" },
                  ]
              : state.carBrand === "Sanili (motorbike)"
                ? [
                    { label: "CG 125", value: "CG 125" },
                    { label: "TS 100", value: "TS 100" },
                    { label: "TS 125", value: "TS 125" },
                  ]
              : state.carBrand === "Santana"
                ? [
                    { label: "PS-10", value: "PS-10" },
                  ]
              : state.carBrand === "Saturn"
                ? [
                    { label: "Aura", value: "Aura" },
                    { label: "SW", value: "SW" },
                    { label: "SC", value: "SC" },
                    { label: "LS", value: "LS" },
                    { label: "LW", value: "LW" },
                    { label: "Relay", value: "Relay" },
                    { label: "SL", value: "SL" },
                    { label: "ION", value: "ION" },
                    { label: "Sky", value: "Sky" },
                    { label: "VUE", value: "VUE" },
                    { label: "Outlook", value: "Outlook" },
                    { label: "Astra", value: "Astra" },
                  ]
              : state.carBrand === "Scania"
                ? [
                    { label: "G440", value: "G440" },
                    { label: "P440", value: "P440" },
                  ]
              : state.carBrand === "Scion"
                ? [
                    { label: "iQ", value: "iQ" },
                    { label: "tC", value: "tC" },
                    { label: "FR-S", value: "FR-S" },
                    { label: "xB", value: "xB" },
                    { label: "xD", value: "xD" },
                    { label: "xA", value: "xA" },
                    { label: "iM", value: "iM" },
                    { label: "iA", value: "iA" },
                  ]
              : state.carBrand === "Scooter"
                ? [
                    { label: "Courier", value: "Courier" },
                  ]
              : state.carBrand === "SEAT"
                ? [
                    { label: "Leon Cupra", value: "Leon Cupra" },
                    { label: "Ibiza Cupra", value: "Ibiza Cupra" },
                    { label: "Malaga", value: "Malaga" },
                    { label: "Toledo", value: "Toledo" },
                    { label: "Ronda", value: "Ronda" },
                    { label: "Alhambra", value: "Alhambra" },
                    { label: "Ateca", value: "Ateca" },
                    { label: "133", value: "133" },
                    { label: "Cordoba", value: "Cordoba" },
                    { label: "Ibiza", value: "Ibiza" },
                    { label: "Leon", value: "Leon" },
                    { label: "Marbella", value: "Marbella" },
                    { label: "Altea", value: "Altea" },
                    { label: "Mii", value: "Mii" },
                    { label: "Fura", value: "Fura" },
                    { label: "Arona", value: "Arona" },
                    { label: "Arosa", value: "Arosa" },
                    { label: "Exeo", value: "Exeo" },
                  ]
              : state.carBrand === "Senke (motorbike)"
                ? [
                    { label: "SK150-9", value: "SK150-9" },
                  ]
              : state.carBrand === "Shanghai Maple"
                ? [
                    { label: "C61", value: "C61" },
                    { label: "C31", value: "C31" },
                    { label: "C52", value: "C52" },
                    { label: "C51", value: "C51" },
                    { label: "30X", value: "30X" },
                    { label: "C32", value: "C32" },
                    { label: "C81", value: "C81" },
                  ]
              : state.carBrand === "Shineray"
                ? [
                    { label: "T30", value: "T30" },
                  ]
              : state.carBrand === "ShuangHuan"
                ? [
                    { label: "Noble", value: "Noble" },
                    { label: "Sceo", value: "Sceo" },
                  ]
              : state.carBrand === "Skoda"
                ? [
                    { label: "Octavia RS", value: "Octavia RS" },
                    { label: "Rapid", value: "Rapid" },
                    { label: "Kamiq", value: "Kamiq" },
                    { label: "Roomster", value: "Roomster" },
                    { label: "Citigo", value: "Citigo" },
                    { label: "Octavia", value: "Octavia" },
                    { label: "Favorit", value: "Favorit" },
                    { label: "Fabia", value: "Fabia" },
                    { label: "Felicia", value: "Felicia" },
                    { label: "1200", value: "1200" },
                    { label: "Karoq", value: "Karoq" },
                    { label: "Enyaq", value: "Enyaq" },
                    { label: "100 Series", value: "100 Series" },
                    { label: "Fabia RS", value: "Fabia RS" },
                    { label: "Kodiaq", value: "Kodiaq" },
                    { label: "Yeti", value: "Yeti" },
                    { label: "Scala", value: "Scala" },
                    { label: "Popular", value: "Popular" },
                    { label: "Superb", value: "Superb" },
                    { label: "Praktik", value: "Praktik" },
                    { label: "105, 120", value: "105, 120" },
                    { label: "Forman", value: "Forman" },
                  ]
              : state.carBrand === "Skywell"
                ? [
                    { label: "ET5", value: "ET5" },
                  ]
              : state.carBrand === "Smart"
                ? [
                    { label: "Roadster", value: "Roadster" },
                    { label: "Fortwo", value: "Fortwo" },
                    { label: "Forfour", value: "Forfour" },
                  ]
              : state.carBrand === "Solaris"
                ? [
                    { label: "Urbino", value: "Urbino" },
                  ]
              : state.carBrand === "Soueast"
                ? [
                    { label: "Lioncel", value: "Lioncel" },
                  ]
              : state.carBrand === "Spectre"
                ? [
                    { label: "R42", value: "R42" },
                  ]
              : state.carBrand === "Spyker"
                ? [
                    { label: "C12", value: "C12" },
                    { label: "C8", value: "C8" },
                  ]
              : state.carBrand === "SsangYong"
                ? [
                    { label: "Rodius", value: "Rodius" },
                    { label: "Nomad", value: "Nomad" },
                    { label: "Chairman", value: "Chairman" },
                    { label: "Korando", value: "Korando" },
                    { label: "Korando Turismo", value: "Korando Turismo" },
                    { label: "Tivoli", value: "Tivoli" },
                    { label: "XLV", value: "XLV" },
                    { label: "Kallista", value: "Kallista" },
                    { label: "Kyron", value: "Kyron" },
                    { label: "Rexton", value: "Rexton" },
                    { label: "Istana", value: "Istana" },
                    { label: "Korando Sports", value: "Korando Sports" },
                    { label: "Actyon Sports", value: "Actyon Sports" },
                    { label: "Korando Family", value: "Korando Family" },
                    { label: "Actyon", value: "Actyon" },
                    { label: "Stavic", value: "Stavic" },
                    { label: "Musso", value: "Musso" },
                  ]
              : state.carBrand === "Steyr"
                ? [
                    { label: "1500", value: "1500" },
                  ]
              : state.carBrand === "Subaru"
                ? [
                    { label: "XT", value: "XT" },
                    { label: "Exiga", value: "Exiga" },
                    { label: "Lucra", value: "Lucra" },
                    { label: "WRX STi", value: "WRX STi" },
                    { label: "Dex", value: "Dex" },
                    { label: "Levorg", value: "Levorg" },
                    { label: "Traviq", value: "Traviq" },
                    { label: "Forester", value: "Forester" },
                    { label: "Tribeca", value: "Tribeca" },
                    { label: "Impreza WRX", value: "Impreza WRX" },
                    { label: "1000", value: "1000" },
                    { label: "Ascent", value: "Ascent" },
                    { label: "WRX", value: "WRX" },
                    { label: "SVX", value: "SVX" },
                    { label: "XV", value: "XV" },
                    { label: "Libero", value: "Libero" },
                    { label: "Impreza", value: "Impreza" },
                    { label: "Domingo", value: "Domingo" },
                    { label: "Baja", value: "Baja" },
                    { label: "Trezia", value: "Trezia" },
                    { label: "Brat", value: "Brat" },
                    { label: "Leone", value: "Leone" },
                    { label: "Alcyone", value: "Alcyone" },
                    { label: "Rex", value: "Rex" },
                    { label: "Pleo", value: "Pleo" },
                    { label: "Bistro", value: "Bistro" },
                    { label: "Impreza WRX STi", value: "Impreza WRX STi" },
                    { label: "Bighorn", value: "Bighorn" },
                    { label: "Dias Wagon", value: "Dias Wagon" },
                    { label: "Stella", value: "Stella" },
                    { label: "Justy", value: "Justy" },
                    { label: "Evoltis", value: "Evoltis" },
                    { label: "Legacy Lancaster", value: "Legacy Lancaster" },
                    { label: "Sambar", value: "Sambar" },
                    { label: "R2", value: "R2" },
                    { label: "Vivio", value: "Vivio" },
                    { label: "R1", value: "R1" },
                    { label: "BRZ", value: "BRZ" },
                    { label: "Outback", value: "Outback" },
                    { label: "360", value: "360" },
                    { label: "Legacy", value: "Legacy" },
                  ]
              : state.carBrand === "Suzuki"
                ? [
                    { label: "MR Wagon", value: "MR Wagon" },
                    { label: "Wagon R", value: "Wagon R" },
                    { label: "Carry", value: "Carry" },
                    { label: "Alto K10", value: "Alto K10" },
                    { label: "Escudo", value: "Escudo" },
                    { label: "Cultus", value: "Cultus" },
                    { label: "Verona", value: "Verona" },
                    { label: "Wagon R+", value: "Wagon R+" },
                    { label: "Cara", value: "Cara" },
                    { label: "Every", value: "Every" },
                    { label: "Celerio", value: "Celerio" },
                    { label: "APV", value: "APV" },
                    { label: "Cappuccino", value: "Cappuccino" },
                    { label: "Liana", value: "Liana" },
                    { label: "Hustler", value: "Hustler" },
                    { label: "Aerio", value: "Aerio" },
                    { label: "Twin", value: "Twin" },
                    { label: "Alto Lapin", value: "Alto Lapin" },
                    { label: "Samurai", value: "Samurai" },
                    { label: "Baleno", value: "Baleno" },
                    { label: "Splash", value: "Splash" },
                    { label: "SX4", value: "SX4" },
                    { label: "Solio", value: "Solio" },
                    { label: "Ignis", value: "Ignis" },
                    { label: "Equator", value: "Equator" },
                    { label: "Esteem", value: "Esteem" },
                    { label: "Vitara", value: "Vitara" },
                    { label: "Kizashi", value: "Kizashi" },
                    { label: "Palette", value: "Palette" },
                    { label: "Ertiga", value: "Ertiga" },
                    { label: "Grand Vitara", value: "Grand Vitara" },
                    { label: "Jimny", value: "Jimny" },
                    { label: "Reno", value: "Reno" },
                    { label: "Dzire", value: "Dzire" },
                    { label: "Cervo", value: "Cervo" },
                    { label: "Landy", value: "Landy" },
                    { label: "S-Presso", value: "S-Presso" },
                    { label: "Kei", value: "Kei" },
                    { label: "Xbee", value: "Xbee" },
                    { label: "Forenza", value: "Forenza" },
                    { label: "Alto", value: "Alto" },
                    { label: "Spacia", value: "Spacia" },
                    { label: "Ciaz", value: "Ciaz" },
                    { label: "Swift", value: "Swift" },
                    { label: "XL7", value: "XL7" },
                    { label: "X-90", value: "X-90" },
                  ]
              : state.carBrand === "Talbot"
                ? [
                    { label: "Samba", value: "Samba" },
                    { label: "Tagora", value: "Tagora" },
                    { label: "Solara", value: "Solara" },
                    { label: "Horizon", value: "Horizon" },
                    { label: "Avenger", value: "Avenger" },
                    { label: "1510", value: "1510" },
                    { label: "Rancho", value: "Rancho" },
                  ]
              : state.carBrand === "TATA"
                ? [
                    { label: "Indica", value: "Indica" },
                    { label: "Sierra", value: "Sierra" },
                    { label: "Estate", value: "Estate" },
                    { label: "Safari", value: "Safari" },
                    { label: "613", value: "613" },
                    { label: "Sumo Grande", value: "Sumo Grande" },
                    { label: "Indigo", value: "Indigo" },
                    { label: "Aria", value: "Aria" },
                    { label: "Sumo", value: "Sumo" },
                    { label: "VISTA", value: "VISTA" },
                    { label: "Xenon", value: "Xenon" },
                    { label: "Nano", value: "Nano" },
                  ]
              : state.carBrand === "Tatra"
                ? [
                    { label: "T603", value: "T603" },
                    { label: "KT4", value: "KT4" },
                    { label: "87", value: "87" },
                    { label: "77", value: "77" },
                    { label: "T700", value: "T700" },
                    { label: "57", value: "57" },
                    { label: "80", value: "80" },
                    { label: "T613", value: "T613" },
                  ]
              : state.carBrand === "Tazzari"
                ? [
                    { label: "Zero", value: "Zero" },
                  ]
              : state.carBrand === "Tesla"
                ? [
                    { label: "Model S", value: "Model S" },
                    { label: "Model X", value: "Model X" },
                    { label: "Roadster", value: "Roadster" },
                    { label: "Model Y", value: "Model Y" },
                    { label: "Model 3", value: "Model 3" },
                  ]
              : state.carBrand === "Think"
                ? [
                    { label: "City", value: "City" },
                  ]
              : state.carBrand === "Tianma"
                ? [
                    { label: "Century", value: "Century" },
                  ]
              : state.carBrand === "Tianye"
                ? [
                    { label: "Admiral", value: "Admiral" },
                  ]
              : state.carBrand === "Tofas"
                ? [
                    { label: "Sahin", value: "Sahin" },
                    { label: "Murat 124", value: "Murat 124" },
                    { label: "Serce", value: "Serce" },
                    { label: "Kartal", value: "Kartal" },
                    { label: "Murat 131", value: "Murat 131" },
                  ]
              : state.carBrand === "Toyota"
                ? [
                    { label: "Celica", value: "Celica" },
                    { label: "Vios", value: "Vios" },
                    { label: "Corsa", value: "Corsa" },
                    { label: "Sprinter Trueno", value: "Sprinter Trueno" },
                    { label: "HiAce", value: "HiAce" },
                    { label: "Avensis", value: "Avensis" },
                    { label: "Crown Majesta", value: "Crown Majesta" },
                    { label: "Pronard", value: "Pronard" },
                    { label: "Regius", value: "Regius" },
                    { label: "Sienta", value: "Sienta" },
                    { label: "Century", value: "Century" },
                    { label: "Highlander", value: "Highlander" },
                    { label: "RegiusAce", value: "RegiusAce" },
                    { label: "WiLL", value: "WiLL" },
                    { label: "ProAce", value: "ProAce" },
                    { label: "Dyna", value: "Dyna" },
                    { label: "Sienna", value: "Sienna" },
                    { label: "Agya", value: "Agya" },
                    { label: "Roomy", value: "Roomy" },
                    { label: "Windom", value: "Windom" },
                    { label: "Progres", value: "Progres" },
                    { label: "Aristo", value: "Aristo" },
                    { label: "Auris", value: "Auris" },
                    { label: "Fortuner", value: "Fortuner" },
                    { label: "LiteAce", value: "LiteAce" },
                    { label: "Crown", value: "Crown" },
                    { label: "Esquire", value: "Esquire" },
                    { label: "Pixis Space", value: "Pixis Space" },
                    { label: "Chaser", value: "Chaser" },
                    { label: "Camry", value: "Camry" },
                    { label: "Cami", value: "Cami" },
                    { label: "Mark X ZiO", value: "Mark X ZiO" },
                    { label: "ProAce City Cargo", value: "ProAce City Cargo" },
                    { label: "Camry Solara", value: "Camry Solara" },
                    { label: "Sai", value: "Sai" },
                    { label: "Mega Cruiser", value: "Mega Cruiser" },
                    { label: "Raum", value: "Raum" },
                    { label: "Soarer", value: "Soarer" },
                    { label: "Allion", value: "Allion" },
                    { label: "Voltz", value: "Voltz" },
                    { label: "Innova", value: "Innova" },
                    { label: "Etios", value: "Etios" },
                    { label: "Cressida", value: "Cressida" },
                    { label: "Echo", value: "Echo" },
                    { label: "Gaia", value: "Gaia" },
                    { label: "Celsior", value: "Celsior" },
                    { label: "Ipsum", value: "Ipsum" },
                    { label: "Corona", value: "Corona" },
                    { label: "Prius c", value: "Prius c" },
                    { label: "Pixis Joy", value: "Pixis Joy" },
                    { label: "WiLL Cypha", value: "WiLL Cypha" },
                    { label: "Comfort", value: "Comfort" },
                    { label: "Previa", value: "Previa" },
                    { label: "Yaris", value: "Yaris" },
                    { label: "Altezza", value: "Altezza" },
                    { label: "Opa", value: "Opa" },
                    { label: "Urban Cruiser", value: "Urban Cruiser" },
                    { label: "Avanza", value: "Avanza" },
                    { label: "Sequoia", value: "Sequoia" },
                    { label: "Soluna", value: "Soluna" },
                    { label: "C-HR", value: "C-HR" },
                    { label: "Corolla Spacio", value: "Corolla Spacio" },
                    { label: "Brevis", value: "Brevis" },
                    { label: "Verso-S", value: "Verso-S" },
                    { label: "Corolla Rumion", value: "Corolla Rumion" },
                    { label: "Vista", value: "Vista" },
                    { label: "Blizzard", value: "Blizzard" },
                    { label: "Aygo", value: "Aygo" },
                    { label: "Carina E", value: "Carina E" },
                    { label: "Avensis Verso", value: "Avensis Verso" },
                    { label: "Carina", value: "Carina" },
                    { label: "Nadia", value: "Nadia" },
                    { label: "MR2", value: "MR2" },
                    { label: "Sera", value: "Sera" },
                    { label: "Voxy", value: "Voxy" },
                    { label: "Sprinter Carib", value: "Sprinter Carib" },
                    { label: "Harrier", value: "Harrier" },
                    { label: "Yaris Verso", value: "Yaris Verso" },
                    { label: "Scion", value: "Scion" },
                    { label: "Verossa", value: "Verossa" },
                    { label: "Starlet", value: "Starlet" },
                    { label: "Pixis Mega", value: "Pixis Mega" },
                    { label: "Estima", value: "Estima" },
                    { label: "Aqua", value: "Aqua" },
                    { label: "Cavalier", value: "Cavalier" },
                    { label: "Scepter", value: "Scepter" },
                    { label: "Platz", value: "Platz" },
                    { label: "Tank", value: "Tank" },
                    { label: "Belta", value: "Belta" },
                    { label: "Probox", value: "Probox" },
                    { label: "Rush", value: "Rush" },
                    { label: "Venza", value: "Venza" },
                    { label: "Corolla Verso", value: "Corolla Verso" },
                    { label: "Prius Alpha", value: "Prius Alpha" },
                    { label: "Alphard", value: "Alphard" },
                    { label: "Mark X", value: "Mark X" },
                    { label: "GT86", value: "GT86" },
                    { label: "Grand HiAce", value: "Grand HiAce" },
                    { label: "Sprinter", value: "Sprinter" },
                    { label: "Caldina", value: "Caldina" },
                    { label: "FunCargo", value: "FunCargo" },
                    { label: "Touring HiAce", value: "Touring HiAce" },
                    { label: "Duet", value: "Duet" },
                    { label: "RAV 4", value: "RAV 4" },
                    { label: "Mark II", value: "Mark II" },
                    { label: "Mirai", value: "Mirai" },
                    { label: "Hilux", value: "Hilux" },
                    { label: "Vitz", value: "Vitz" },
                    { label: "Pixis Epoch", value: "Pixis Epoch" },
                    { label: "Corona EXiV", value: "Corona EXiV" },
                    { label: "Avalon", value: "Avalon" },
                    { label: "Sprinter Marino", value: "Sprinter Marino" },
                    { label: "Blade", value: "Blade" },
                    { label: "Kluger", value: "Kluger" },
                    { label: "Sparky", value: "Sparky" },
                    { label: "Noah", value: "Noah" },
                    { label: "Picnic", value: "Picnic" },
                    { label: "2000GT", value: "2000GT" },
                    { label: "4Runner", value: "4Runner" },
                    { label: "Corolla Axio", value: "Corolla Axio" },
                    { label: "Corolla II", value: "Corolla II" },
                    { label: "Passo", value: "Passo" },
                    { label: "Prius", value: "Prius" },
                    { label: "MasterAce Surf", value: "MasterAce Surf" },
                    { label: "Supra", value: "Supra" },
                    { label: "Tercel", value: "Tercel" },
                    { label: "Land Cruiser", value: "Land Cruiser" },
                    { label: "Vellfire", value: "Vellfire" },
                    { label: "Tundra", value: "Tundra" },
                    { label: "Ist", value: "Ist" },
                    { label: "ToyoAce", value: "ToyoAce" },
                    { label: "Premio", value: "Premio" },
                    { label: "Carina ED", value: "Carina ED" },
                    { label: "Cresta", value: "Cresta" },
                    { label: "Pixis Van", value: "Pixis Van" },
                    { label: "Cynos", value: "Cynos" },
                    { label: "iQ", value: "iQ" },
                    { label: "Verso", value: "Verso" },
                    { label: "Spade", value: "Spade" },
                    { label: "ISis", value: "ISis" },
                    { label: "Ractis", value: "Ractis" },
                    { label: "Passo Sette", value: "Passo Sette" },
                    { label: "Publica", value: "Publica" },
                    { label: "TownAce", value: "TownAce" },
                    { label: "Corolla Fielder", value: "Corolla Fielder" },
                    { label: "Porte", value: "Porte" },
                    { label: "Land Cruiser Prado", value: "Land Cruiser Prado" },
                    { label: "Origin", value: "Origin" },
                    { label: "Succeed", value: "Succeed" },
                    { label: "Paseo", value: "Paseo" },
                    { label: "Corolla", value: "Corolla" },
                    { label: "Hilux Surf", value: "Hilux Surf" },
                    { label: "Granvia", value: "Granvia" },
                    { label: "Tacoma", value: "Tacoma" },
                    { label: "Model F", value: "Model F" },
                    { label: "Aurion", value: "Aurion" },
                    { label: "Allex", value: "Allex" },
                    { label: "Prius v (+)", value: "Prius v (+)" },
                    { label: "Wish", value: "Wish" },
                    { label: "Matrix", value: "Matrix" },
                    { label: "Curren", value: "Curren" },
                    { label: "FJ Cruiser", value: "FJ Cruiser" },
                    { label: "Vanguard", value: "Vanguard" },
                  ]
              : state.carBrand === "Trabant"
                ? [
                    { label: "1.1", value: "1.1" },
                    { label: "P 601", value: "P 601" },
                  ]
              : state.carBrand === "Tramontana"
                ? [
                    { label: "Tramontana", value: "Tramontana" },
                  ]
              : state.carBrand === "Tricycle"
                ? [
                    { label: "Driver", value: "Driver" },
                  ]
              : state.carBrand === "Triumph"
                ? [
                    { label: "TR6", value: "TR6" },
                    { label: "Spitfire", value: "Spitfire" },
                    { label: "TR7", value: "TR7" },
                    { label: "TR8", value: "TR8" },
                    { label: "Stag", value: "Stag" },
                  ]
              : state.carBrand === "TVR"
                ? [
                    { label: "280", value: "280" },
                    { label: "420", value: "420" },
                    { label: "Cerbera", value: "Cerbera" },
                    { label: "Tamora", value: "Tamora" },
                    { label: "390", value: "390" },
                    { label: "Chimaera", value: "Chimaera" },
                    { label: "Griffith", value: "Griffith" },
                    { label: "Tuscan", value: "Tuscan" },
                    { label: "S-Series", value: "S-Series" },
                    { label: "Sagaris", value: "Sagaris" },
                    { label: "350", value: "350" },
                    { label: "400", value: "400" },
                    { label: "450", value: "450" },
                  ]
              : state.carBrand === "TVS (motorbike)"
                ? [
                    { label: "HLX 150", value: "HLX 150" },
                    { label: "HLX 100", value: "HLX 100" },
                  ]
              : state.carBrand === "Ultima"
                ? [
                    { label: "GTR", value: "GTR" },
                  ]
              : state.carBrand === "Vauxhall"
                ? [
                    { label: "Firenza", value: "Firenza" },
                    { label: "Omega", value: "Omega" },
                    { label: "Victor", value: "Victor" },
                    { label: "Royale", value: "Royale" },
                    { label: "Chevette", value: "Chevette" },
                    { label: "Carlton", value: "Carlton" },
                    { label: "Adam", value: "Adam" },
                    { label: "Viva", value: "Viva" },
                    { label: "Astra", value: "Astra" },
                    { label: "Ventora", value: "Ventora" },
                    { label: "VXR8", value: "VXR8" },
                    { label: "Viceroy", value: "Viceroy" },
                    { label: "Vectra", value: "Vectra" },
                  ]
              : state.carBrand === "Vector"
                ? [
                    { label: "W8 Twin Turbo", value: "W8 Twin Turbo" },
                    { label: "M12", value: "M12" },
                  ]
              : state.carBrand === "Venturi"
                ? [
                    { label: "400 GT", value: "400 GT" },
                    { label: "210", value: "210" },
                    { label: "260 LM", value: "260 LM" },
                    { label: "300 Atlantique", value: "300 Atlantique" },
                  ]
              : state.carBrand === "Venucia"
                ? [
                    { label: "D60", value: "D60" },
                    { label: "D60 EV", value: "D60 EV" },
                    { label: "Star", value: "Star" },
                  ]
              : state.carBrand === "Volkswagen"
                ? [
                    { label: "181", value: "181" },
                    { label: "Golf Sportsvan", value: "Golf Sportsvan" },
                    { label: "Scirocco R", value: "Scirocco R" },
                    { label: "Derby", value: "Derby" },
                    { label: "Arteon", value: "Arteon" },
                    { label: "Corrado", value: "Corrado" },
                    { label: "ID.5", value: "ID.5" },
                    { label: "ID.3", value: "ID.3" },
                    { label: "Passat", value: "Passat" },
                    { label: "Passat (North America)", value: "Passat (North America)" },
                    { label: "e-Bora", value: "e-Bora" },
                    { label: "Lupo GTI", value: "Lupo GTI" },
                    { label: "Caravelle", value: "Caravelle" },
                    { label: "Gol", value: "Gol" },
                    { label: "Touran", value: "Touran" },
                    { label: "Pointer", value: "Pointer" },
                    { label: "Polo R WRC", value: "Polo R WRC" },
                    { label: "Type 2", value: "Type 2" },
                    { label: "California", value: "California" },
                    { label: "Polo", value: "Polo" },
                    { label: "Eos", value: "Eos" },
                    { label: "Golf R32", value: "Golf R32" },
                    { label: "Phaeton", value: "Phaeton" },
                    { label: "Karmann-Ghia", value: "Karmann-Ghia" },
                    { label: "Routan", value: "Routan" },
                    { label: "Santana", value: "Santana" },
                    { label: "Golf GTI", value: "Golf GTI" },
                    { label: "Beetle", value: "Beetle" },
                    { label: "Golf Plus", value: "Golf Plus" },
                    { label: "ID.4", value: "ID.4" },
                    { label: "AF 374500", value: "AF 374500" },
                    { label: "Jetta", value: "Jetta" },
                    { label: "LT46", value: "LT46" },
                    { label: "Quantum", value: "Quantum" },
                    { label: "Type 3", value: "Type 3" },
                    { label: "up!", value: "up!" },
                    { label: "Vento", value: "Vento" },
                    { label: "XL1", value: "XL1" },
                    { label: "Polo GTI", value: "Polo GTI" },
                    { label: "Touareg", value: "Touareg" },
                    { label: "Sharan", value: "Sharan" },
                    { label: "LT28", value: "LT28" },
                    { label: "Tiguan", value: "Tiguan" },
                    { label: "Scirocco", value: "Scirocco" },
                    { label: "Lupo", value: "Lupo" },
                    { label: "Golf R", value: "Golf R" },
                    { label: "Lavida", value: "Lavida" },
                    { label: "Teramont", value: "Teramont" },
                    { label: "Type 4", value: "Type 4" },
                    { label: "Caddy", value: "Caddy" },
                    { label: "Golf", value: "Golf" },
                    { label: "K70", value: "K70" },
                    { label: "Crafter", value: "Crafter" },
                    { label: "Transporter", value: "Transporter" },
                    { label: "Amarok", value: "Amarok" },
                    { label: "Type 1", value: "Type 1" },
                    { label: "Taos", value: "Taos" },
                    { label: "Passat CC", value: "Passat CC" },
                    { label: "Fox", value: "Fox" },
                    { label: "Bora", value: "Bora" },
                    { label: "Iltis", value: "Iltis" },
                    { label: "T-Roc", value: "T-Roc" },
                    { label: "Taro", value: "Taro" },
                    { label: "LT35", value: "LT35" },
                    { label: "Caddy Kasten", value: "Caddy Kasten" },
                    { label: "Parati", value: "Parati" },
                    { label: "Multivan", value: "Multivan" },
                    { label: "Golf Country", value: "Golf Country" },
                  ]
              : state.carBrand === "Volvo"
                ? [
                    { label: "XC40", value: "XC40" },
                    { label: "760", value: "760" },
                    { label: "780", value: "780" },
                    { label: "XC40 Recharge", value: "XC40 Recharge" },
                    { label: "S40", value: "S40" },
                    { label: "V60", value: "V60" },
                    { label: "P1800", value: "P1800" },
                    { label: "V70", value: "V70" },
                    { label: "S60 Cross Country", value: "S60 Cross Country" },
                    { label: "120 Series", value: "120 Series" },
                    { label: "S80", value: "S80" },
                    { label: "XC90", value: "XC90" },
                    { label: "300 Series", value: "300 Series" },
                    { label: "V90", value: "V90" },
                    { label: "XC70", value: "XC70" },
                    { label: "240 Series", value: "240 Series" },
                    { label: "740", value: "740" },
                    { label: "Laplander", value: "Laplander" },
                    { label: "S70", value: "S70" },
                    { label: "460", value: "460" },
                    { label: "C30", value: "C30" },
                    { label: "960", value: "960" },
                    { label: "V90 Cross Country", value: "V90 Cross Country" },
                    { label: "140 Series", value: "140 Series" },
                    { label: "480", value: "480" },
                    { label: "V60 Cross Country", value: "V60 Cross Country" },
                    { label: "164", value: "164" },
                    { label: "940", value: "940" },
                    { label: "S60", value: "S60" },
                    { label: "440", value: "440" },
                    { label: "XC60", value: "XC60" },
                    { label: "850", value: "850" },
                    { label: "P1900", value: "P1900" },
                    { label: "C70", value: "C70" },
                    { label: "V50", value: "V50" },
                    { label: "V40", value: "V40" },
                    { label: "S90", value: "S90" },
                    { label: "V40 Cross Country", value: "V40 Cross Country" },
                    { label: "260 Series", value: "260 Series" },
                    { label: "66", value: "66" },
                  ]
              : state.carBrand === "Vortex"
                ? [
                    { label: "Tingo", value: "Tingo" },
                    { label: "Estina", value: "Estina" },
                    { label: "Corda", value: "Corda" },
                  ]
              : state.carBrand === "W Motors"
                ? [
                    { label: "Lykan Hypersport", value: "Lykan Hypersport" },
                    { label: "Fenyr Supersport", value: "Fenyr Supersport" },
                  ]
              : state.carBrand === "Wanderer"
                ? [
                    { label: "W50", value: "W50" },
                  ]
              : state.carBrand === "Wartburg"
                ? [
                    { label: "353", value: "353" },
                    { label: "1.3", value: "1.3" },
                  ]
              : state.carBrand === "Weltmeister"
                ? [
                    { label: "EX5", value: "EX5" },
                  ]
              : state.carBrand === "Westfield"
                ? [
                    { label: "SEi & Sport", value: "SEi & Sport" },
                    { label: "SEiGHT", value: "SEiGHT" },
                  ]
              : state.carBrand === "Wiesmann"
                ? [
                    { label: "Roadster", value: "Roadster" },
                    { label: "GT", value: "GT" },
                  ]
              : state.carBrand === "Willys"
                ? [
                    { label: "MB", value: "MB" },
                  ]
              : state.carBrand === "Wuling"
                ? [
                    { label: "LZW6376NF", value: "LZW6376NF" },
                  ]
              : state.carBrand === "Xin Kai"
                ? [
                    { label: "Pickup X3", value: "Pickup X3" },
                    { label: "SUV X3", value: "SUV X3" },
                    { label: "SR-V X3", value: "SR-V X3" },
                  ]
              : state.carBrand === "Xpeng"
                ? [
                    { label: "P7", value: "P7" },
                    { label: "G3", value: "G3" },
                  ]
              : state.carBrand === "Yuejin"
                ? [
                    { label: "NJ1020", value: "NJ1020" },
                    { label: "NJ1080", value: "NJ1080" },
                    { label: "NJ1080DA", value: "NJ1080DA" },
                    { label: "NJ1041", value: "NJ1041" },
                    { label: "K-2500", value: "K-2500" },
                    { label: "1020", value: "1020" },
                    { label: "1041", value: "1041" },
                    { label: "1080", value: "1080" },
                    { label: "NJ1040", value: "NJ1040" },
                  ]
              : state.carBrand === "Zastava"
                ? [
                    { label: "10", value: "10" },
                    { label: "Yugo", value: "Yugo" },
                    { label: "Skala", value: "Skala" },
                    { label: "Florida", value: "Florida" },
                  ]
              : state.carBrand === "Zenos"
                ? [
                    { label: "E10", value: "E10" },
                  ]
              : state.carBrand === "Zenvo"
                ? [
                    { label: "ST1", value: "ST1" },
                  ]
              : state.carBrand === "Zibar"
                ? [
                    { label: "MK2", value: "MK2" },
                  ]
              : state.carBrand === "Zotye"
                ? [
                    { label: "Z300", value: "Z300" },
                    { label: "T600", value: "T600" },
                    { label: "Nomad (RX6400)", value: "Nomad (RX6400)" },
                    { label: "Z100", value: "Z100" },
                    { label: "Coupa", value: "Coupa" },
                    { label: "SR9", value: "SR9" },
                  ]
              : state.carBrand === "ZX"
                ? [
                    { label: "Admiral", value: "Admiral" },
                    { label: "Grand Tiger", value: "Grand Tiger" },
                    { label: "Landmark", value: "Landmark" },
                  ]
              : state.carBrand === "Автокам"
                ? [
                    { label: "3101", value: "3101" },
                    { label: "2163", value: "2163" },
                    { label: "2160", value: "2160" },
                  ]
              : state.carBrand === "Богдан"
                ? [
                    { label: "2310", value: "2310" },
                  ]
              : state.carBrand === "Бронто"
                ? [
                    { label: "Фора", value: "Фора" },
                    { label: "Рысь", value: "Рысь" },
                  ]
              : state.carBrand === "ВИС"
                ? [
                    { label: "2346", value: "2346" },
                    { label: "2349", value: "2349" },
                    { label: "1705", value: "1705" },
                    { label: "2345", value: "2345" },
                    { label: "2347", value: "2347" },
                  ]
              : state.carBrand === "ГАЗ"
                ? [
                    { label: "24 «Волга»", value: "24 «Волга»" },
                    { label: "3307", value: "3307" },
                    { label: "14 «Чайка»", value: "14 «Чайка»" },
                    { label: "3111 «Волга»", value: "3111 «Волга»" },
                    { label: "3110 «Волга»", value: "3110 «Волга»" },
                    { label: "67", value: "67" },
                    { label: "3302", value: "3302" },
                    { label: "2747", value: "2747" },
                    { label: "3302 Фермер", value: "3302 Фермер" },
                    { label: "М1", value: "М1" },
                    { label: "2308 «Атаман»", value: "2308 «Атаман»" },
                    { label: "3105 «Волга»", value: "3105 «Волга»" },
                    { label: "31105 «Волга»", value: "31105 «Волга»" },
                    { label: "69", value: "69" },
                    { label: "М-72", value: "М-72" },
                    { label: "3102 «Волга»", value: "3102 «Волга»" },
                    { label: "2752", value: "2752" },
                    { label: "Белава 1220", value: "Белава 1220" },
                    { label: "3103 «Волга»", value: "3103 «Волга»" },
                    { label: "ГАЗон Next", value: "ГАЗон Next" },
                    { label: "21 «Волга»", value: "21 «Волга»" },
                    { label: "2705", value: "2705" },
                    { label: "2834", value: "2834" },
                    { label: "Volga Siber", value: "Volga Siber" },
                    { label: "13 «Чайка»", value: "13 «Чайка»" },
                    { label: "31029 «Волга»", value: "31029 «Волга»" },
                    { label: "М-20 «Победа»", value: "М-20 «Победа»" },
                    { label: "Газель", value: "Газель" },
                    { label: "22 «Волга»", value: "22 «Волга»" },
                    { label: "Газель NEXT", value: "Газель NEXT" },
                    { label: "2330 «Тигр»", value: "2330 «Тигр»" },
                    { label: "12 ЗИМ", value: "12 ЗИМ" },
                    { label: "Валдай", value: "Валдай" },
                  ]
              : state.carBrand === "ЗАЗ"
                ? [
                    { label: "Sens", value: "Sens" },
                    { label: "1105 «Дана»", value: "1105 «Дана»" },
                    { label: "Chance", value: "Chance" },
                    { label: "1102 «Таврия»", value: "1102 «Таврия»" },
                    { label: "965", value: "965" },
                    { label: "966", value: "966" },
                    { label: "968", value: "968" },
                    { label: "Forza", value: "Forza" },
                    { label: "Lanos", value: "Lanos" },
                    { label: "Vida", value: "Vida" },
                    { label: "1103 «Славута»", value: "1103 «Славута»" },
                  ]
              : state.carBrand === "ЗИЛ"
                ? [
                    { label: "114", value: "114" },
                    { label: "117", value: "117" },
                    { label: "5301", value: "5301" },
                    { label: "111", value: "111" },
                    { label: "MM34502", value: "MM34502" },
                    { label: "4104", value: "4104" },
                  ]
              : state.carBrand === "ЗиС"
                ? [
                    { label: "110", value: "110" },
                    { label: "101", value: "101" },
                  ]
              : state.carBrand === "ИЖ"
                ? [
                    { label: "2717", value: "2717" },
                    { label: "2126 «Ода»", value: "2126 «Ода»" },
                    { label: "2125 «Комби»", value: "2125 «Комби»" },
                    { label: "21261 «Фабула»", value: "21261 «Фабула»" },
                    { label: "Москвич-412", value: "Москвич-412" },
                  ]
              : state.carBrand === "КАМАЗ"
                ? [
                    { label: "65228", value: "65228" },
                    { label: "43253", value: "43253" },
                    { label: "65206", value: "65206" },
                    { label: "43118", value: "43118" },
                    { label: "43114", value: "43114" },
                    { label: "65117", value: "65117" },
                    { label: "65201", value: "65201" },
                    { label: "65209", value: "65209" },
                    { label: "45141", value: "45141" },
                    { label: "6522", value: "6522" },
                    { label: "53202", value: "53202" },
                    { label: "45142", value: "45142" },
                    { label: "5490", value: "5490" },
                    { label: "6580", value: "6580" },
                    { label: "6520", value: "6520" },
                    { label: "43255", value: "43255" },
                    { label: "65111", value: "65111" },
                    { label: "45143", value: "45143" },
                    { label: "65225", value: "65225" },
                    { label: "65802", value: "65802" },
                    { label: "4308", value: "4308" },
                    { label: "65116", value: "65116" },
                    { label: "65226", value: "65226" },
                    { label: "4310", value: "4310" },
                    { label: "65806", value: "65806" },
                    { label: "44108", value: "44108" },
                    { label: "НЕФАЗ-5299", value: "НЕФАЗ-5299" },
                    { label: "53605", value: "53605" },
                    { label: "6460", value: "6460" },
                    { label: "6540", value: "6540" },
                    { label: "5460", value: "5460" },
                    { label: "65801", value: "65801" },
                    { label: "65208", value: "65208" },
                  ]
              : state.carBrand === "Канонир"
                ? [
                    { label: "2317", value: "2317" },
                  ]
              : state.carBrand === "Комбат"
                ? [
                    { label: "Т98", value: "Т98" },
                  ]
              : state.carBrand === "ЛиАЗ"
                ? [
                    { label: "5293", value: "5293" },
                    { label: "4292", value: "4292" },
                    { label: "5292", value: "5292" },
                  ]
              : state.carBrand === "ЛуАЗ"
                ? [
                    { label: "1302 Волынь", value: "1302 Волынь" },
                    { label: "967", value: "967" },
                    { label: "969", value: "969" },
                  ]
              : state.carBrand === "МАЗ"
                ? [
                    { label: "533605-021", value: "533605-021" },
                    { label: "438940", value: "438940" },
                  ]
              : state.carBrand === "Москвич"
                ? [
                    { label: "2137", value: "2137" },
                    { label: "424", value: "424" },
                    { label: "423", value: "423" },
                    { label: "2138", value: "2138" },
                    { label: "Дуэт", value: "Дуэт" },
                    { label: "2136", value: "2136" },
                    { label: "2140", value: "2140" },
                    { label: "412", value: "412" },
                    { label: "427", value: "427" },
                    { label: "402", value: "402" },
                    { label: "426", value: "426" },
                    { label: "411", value: "411" },
                    { label: "408", value: "408" },
                    { label: "410", value: "410" },
                    { label: "Святогор", value: "Святогор" },
                    { label: "Князь Владимир", value: "Князь Владимир" },
                    { label: "401", value: "401" },
                    { label: "400", value: "400" },
                    { label: "2141", value: "2141" },
                    { label: "Юрий Долгорукий", value: "Юрий Долгорукий" },
                    { label: "Иван Калита", value: "Иван Калита" },
                    { label: "407", value: "407" },
                    { label: "403", value: "403" },
                  ]
              : state.carBrand === "СМЗ"
                ? [
                    { label: "С-3А", value: "С-3А" },
                    { label: "С-3Д", value: "С-3Д" },
                  ]
              : state.carBrand === "ТагАЗ"
                ? [
                    { label: "C-30", value: "C-30" },
                    { label: "АФ 3736Н0", value: "АФ 3736Н0" },
                    { label: "LC10", value: "LC10" },
                    { label: "LC100", value: "LC100" },
                    { label: "Vega", value: "Vega" },
                    { label: "C10", value: "C10" },
                    { label: "Aquila", value: "Aquila" },
                    { label: "Tager", value: "Tager" },
                    { label: "C190", value: "C190" },
                    { label: "Road Partner", value: "Road Partner" },
                  ]
              : state.carBrand === "УАЗ"
                ? [
                    { label: "3151", value: "3151" },
                    { label: "2206", value: "2206" },
                    { label: "3153", value: "3153" },
                    { label: "Patriot", value: "Patriot" },
                    { label: "3162 Simbir", value: "3162 Simbir" },
                    { label: "3160", value: "3160" },
                    { label: "Pickup", value: "Pickup" },
                    { label: "Hunter", value: "Hunter" },
                    { label: "3909", value: "3909" },
                    { label: "3159", value: "3159" },
                    { label: "469", value: "469" },
                    { label: "Профи", value: "Профи" },
                  ]
              : state.carBrand === "УРАЛ"
                ? [
                    { label: "NEXT", value: "NEXT" },
                  ]
              : state.carBrand === "Эксклюзив"
                ? [
                    { label: "Лимузин", value: "Лимузин" },
                    { label: "Бэтмобиль", value: "Бэтмобиль" },
                    { label: "Реплика", value: "Реплика" },
                    { label: "Самоделка", value: "Самоделка" },
                    { label: "Мелкосерийная", value: "Мелкосерийная" },
                  ]
              : [
                    { label: "Ё-Кроссовер", value: "Ё-Кроссовер" },
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
