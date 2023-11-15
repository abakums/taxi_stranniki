import type { PropsWithChildren } from "react";

export interface IChild extends PropsWithChildren {}

export type Vacancy =
  | "Такси"
  | "Грузоперевозки"
  | "Авто Курьер"
  | "Мото Курьер"
  | "Пеший или Вело курьер";

export interface Form {
  // Home
  vacancy: Vacancy;
  taxiPark: string;

  // Infomation
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;

  // Date Of Birth
  dateOfBirth: string;

  // Taxi
  driversLicense: string;
  dateOfIssue: string;
  validityPeriod: string;
  countryOfIssue: string;

  // Card Brand
  carBrand: string;
  carType: string;
  carColor: string;

  // Car Information
  carYearRealese: string;
  carStateNumber: string;
  carVINCode: string;
  drivingExperience: string;
  carTransmission: string;

  carBodyLength: string;
  carBodyWidth: string;
  carBodyHeight: string;
  carLoadCapacity: string;
}
