import datetime
import random

import requests
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.conf import settings

from control_room.models import TaxiPark


@csrf_exempt
@api_view(["POST"])
def send_data(request):
    now = datetime.datetime.now()
    dt = now.strftime("%d-%m-%Y")

    short_countries = {
        "Беларусь": "bel",
        "Россия": "rus",
        "Казахстан": "kaz",
        "Азербайджан": "aze",
        "Армения": "arm",
        "Киргизия": "kgz",
        "Молдова": "mda",
        "Таджикистан": "tjk",
        "Узбекистан": "uzb",
        "Украина": "ukr",
        "Туркменистан": "tkm",
        None: None
    }
    transmissions = {
        "Механика": "mechanical",
        "Коробка": "automatic",
        "Робот": "robotic",
        "Вариатор": "variator",
        None: None
    }

    user_vacancies = {
        "Пеший или Вело курьер": "foot_courier",
        "Такси": "taxi",
        "Авто Курьер": "auto_courier",
        "Мото Курьер": "moto_courier",
        "Грузоперевозки": "cargo_transportation",
    }

    data = request.data
    print(data)
    user_vacancy = data.get("vacancy")
    park = TaxiPark.objects.filter(name=data.get("taxiPark"), taxi_park_type__icontains=user_vacancies.get(user_vacancy)).first()
    auth_headers = park.get_auth_headers()

    mark = data.get("carBrand")
    model = data.get("carType")
    mis = data.get("carTransmission")
    trans = transmissions.get(mis)
    country = data.get("countryOfIssue")
    short = short_countries.get(country)

    if user_vacancy == "Пеший или Вело курьер":
        body = {
            "birth_date": data.get("dateOfBirth"),
            "full_name": {
                "first_name": data.get("firstName"),
                "last_name": data.get("lastName"),
                "middle_name": data.get("middleName")
            },
            "phone": data.get("phone").replace(" ", "").replace("\n", ""),
            "work_rule_id": park.work_rule_id
        }
        response = requests.post(
            f"{settings.YANDEX_TAXI_API_HOST}/v2/parks/contractors/walking-courier-profile",
            json=body,
            headers=auth_headers
        )
        print(response)
        print(response.status_code)
        print(response.content)
    elif user_vacancy == "Такси":
        body = {
            "child_safety": {
                "booster_count": 0
            },
            "park_profile": {
                "callsign": data.get("carStateNumber"),
                "categories": [
                    "econom"
                ],
                "comment": "good car",
                "status": "working"
            },
            "vehicle_licenses": {
                "licence_plate_number": data.get("carStateNumber"),
                "registration_certificate": f"CC{random.randint(252163, 783292)}",
            },
            "vehicle_specifications": {
                "brand": mark,
                "color": data.get("carColor"),
                "model": model if model else "Нет",
                "transmission": trans,
                "vin": data.get("carVINCode"),
                "year": int(data.get("carYearRealese"))
            }
        }
        response = requests.post(
            f"{settings.YANDEX_TAXI_API_HOST}/v2/parks/vehicles/car",
            json=body,
            headers=auth_headers
        )
        print(response)
        print(response.status_code)
        print(response.content)
        body = {
            "account": {
                "balance_limit": "1000",
                "block_orders_on_balance_below_limit": True,
                "work_rule_id": park.work_rule_id
            },
            "car_id": response.json().get("vehicle_id"),
            "order_provider": {
                "partner": False,
                "platform": True
            },
            "person": {
                "contact_info": {
                    "phone": data.get("phone")
                },
                "driver_license": {
                    "country": short,
                    "expiry_date": data.get("validityPeriod"),
                    "issue_date": data.get("dateOfIssue"),
                    "number": data.get("driversLicense")
                },
                "driver_license_experience": {
                    "total_since_date": data.get("drivingExperience")
                },
                "full_name": {
                    "first_name": data.get("firstName"),
                    "last_name": data.get("lastName"),
                    "middle_name": data.get("middleName")
                }
            },
            "profile": {
                "comment": "great driver",
                "hire_date": "-".join(dt.split("-")[::-1])
            }
        }
        response = requests.post(
            f"{settings.YANDEX_TAXI_API_HOST}/v2/parks/contractors/driver-profile",
            json=body,
            headers=auth_headers
        )
        print(response)
        print(response.status_code)
        print(response.content)

    elif user_vacancy == "Авто Курьер":
        body = {
            "child_safety": {
                "booster_count": 0
            },
            "park_profile": {
                "callsign": data.get("carStateNumber"),
                "categories": [
                    "express"
                ],
                "comment": "good car",
                "status": "working"
            },
            "vehicle_licenses": {
                "licence_plate_number": data.get("carStateNumber"),
                "registration_certificate": f"CC{random.randint(252163, 783292)}",
            },
            "vehicle_specifications": {
                "brand": mark,
                "color": data.get("carColor"),
                "model": model if model else "Нет",
                "transmission": trans,
                "vin": data.get("carVINCode"),
                "year": int(data.get("carYearRealese"))
            }
        }
        response = requests.post(
            f"{settings.YANDEX_TAXI_API_HOST}/v2/parks/vehicles/car",
            json=body,
            headers=auth_headers
        )
        print(response)
        print(response.status_code)
        print(response.content)

        body = {
            "account": {
                "balance_limit": "1000",
                "block_orders_on_balance_below_limit": True,
                "work_rule_id": park.work_rule_id
            },
            "car_id": response.json().get("vehicle_id"),
            "order_provider": {
                "partner": False,
                "platform": True
            },
            "person": {
                "contact_info": {
                    "phone": data.get("phone")
                },
                "driver_license": {
                    "country": short,
                    "expiry_date": data.get("validityPeriod"),
                    "issue_date": data.get("dateOfIssue"),
                    "number": data.get("driversLicense")
                },
                "driver_license_experience": {
                    "total_since_date": data.get("drivingExperience")
                },
                "full_name": {
                    "first_name": data.get("firstName"),
                    "last_name": data.get("lastName"),
                    "middle_name": data.get("middleName")
                }
            },
            "profile": {
                "comment": "great driver",
                "hire_date": "-".join(dt.split("-")[::-1])
            }
        }
        response = requests.post(
            f"{settings.YANDEX_TAXI_API_HOST}/v2/parks/contractors/auto-courier-profile",
            json=body,
            headers=auth_headers
        )
        print(response)
        print(response.status_code)
        print(response.content)

    elif user_vacancy == "Мото Курьер":
        body = {
            "child_safety": {
                "booster_count": 0
            },
            "park_profile": {
                "callsign": f"CC{random.randint(252163, 783292)}",
                "categories": [
                    "express"
                ],
                "comment": "good car",
                "status": "working"
            },
            "vehicle_licenses": {
                "licence_plate_number": f"CC{random.randint(252163, 783292)}",
                "registration_certificate": f"CC{random.randint(252163, 783292)}",
            },
            "vehicle_specifications": {
                "brand": "Bike",
                "color": "Голубой",
                "model": "Courier",
                "transmission": "unknown",
                "vin": f"WVGZZZ{random.randint(10000000000, 99999999999)}",
                "year": 2020
            }
        }
        response = requests.post(
            f"{settings.YANDEX_TAXI_API_HOST}/v2/parks/vehicles/car",
            json=body,
            headers=auth_headers
        )
        print(response)
        print(response.status_code)
        print(response.content)

        body = {
            "account": {
                "balance_limit": "1000",
                "block_orders_on_balance_below_limit": True,
                "work_rule_id": park.work_rule_id
            },
            "car_id": response.json().get("vehicle_id"),
            "order_provider": {
                "partner": False,
                "platform": True
            },
            "person": {
                "contact_info": {
                    "phone": data.get("phone")
                },
                "driver_license": {
                    "country": "kaz",
                    "expiry_date": "2030-10-12",
                    "issue_date": "2022-10-12",
                    "number": f"AA{random.randint(252163, 783292)}",
                },
                "driver_license_experience": {
                    "total_since_date": "2015-04-02"
                },
                "full_name": {
                    "first_name": data.get("firstName"),
                    "last_name": data.get("lastName"),
                    "middle_name": data.get("middleName")
                }
            },
            "profile": {
                "comment": "great driver",
                "hire_date": "-".join(dt.split("-")[::-1])
            }
        }
        response = requests.post(
            f"{settings.YANDEX_TAXI_API_HOST}/v2/parks/contractors/auto-courier-profile",
            json=body,
            headers=auth_headers
        )
        print(response)
        print(response.status_code)
        print(response.content)

    elif user_vacancy == "Грузоперевозки":
        body = {
            "cargo": {
                "cargo_hold_dimensions": {
                    "height": int(data.get("carBodyHeight")) if data.get("carBodyHeight") != "Нет ответа" else 0,
                    "length": int(data.get("carBodyLength")) if data.get("carBodyLength") != "Нет ответа" else 0,
                    "width": int(data.get("carBodyWidth")) if data.get("carBodyWidth") != "Нет ответа" else 0
                },
                "cargo_loaders": 1,
                "carrying_capacity": int(data.get("carLoadCapacity")) if data.get("carLoadCapacity") != "Нет ответа" else 0
            },
            "child_safety": {
                "booster_count": 0
            },
            "park_profile": {
                "callsign": data.get("carStateNumber"),
                "categories": [
                    "cargo"
                ],
                "comment": "good car",
                "status": "working"
            },
            "vehicle_licenses": {
                "licence_plate_number": data.get("carStateNumber"),
                "registration_certificate": f"CC{random.randint(252163, 783292)}",
            },
            "vehicle_specifications": {
                "brand": mark,
                "color": data.get("carColor"),
                "model": model if model else "Нет",
                "transmission": trans,
                "vin": data.get("carVINCode"),
                "year": int(data.get("carYearRealese"))
            }
        }
        response = requests.post(
            f"{settings.YANDEX_TAXI_API_HOST}/v2/parks/vehicles/car",
            json=body,
            headers=auth_headers
        )
        print(response)
        print(response.status_code)
        print(response.content)

        body = {
            "account": {
                "balance_limit": "1000",
                "block_orders_on_balance_below_limit": True,
                # "payment_service_id": "12345",
                "work_rule_id": park.work_rule_id
            },
            "car_id": response.json().get("vehicle_id"),
            "order_provider": {
                "partner": False,
                "platform": True
            },
            "person": {
                "contact_info": {
                    "phone": data.get("phone")
                },
                "driver_license": {
                    "country": short,
                    "expiry_date": data.get("validityPeriod"),
                    "issue_date": data.get("dateOfIssue"),
                    "number": data.get("driversLicense")
                },
                "driver_license_experience": {
                    "total_since_date": data.get("drivingExperience")
                },
                "full_name": {
                    "first_name": data.get("firstName"),
                    "last_name": data.get("lastName"),
                    "middle_name": data.get("middleName")
                }
            },
            "profile": {
                "comment": "great driver",
                "hire_date": "-".join(dt.split("-")[::-1])
            }
        }
        response = requests.post(
            f"{settings.YANDEX_TAXI_API_HOST}/v2/parks/contractors/driver-profile",
            json=body,
            headers=auth_headers
        )
        print(response)
        print(response.status_code)
        print(response.content)

    return HttpResponse(status=200)
