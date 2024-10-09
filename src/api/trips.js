export const tripsData = {
    "id": 273,
    "created": "2024-08-27T03:11:18.915368+03:00",
    "request_id": "06166e82-777e-4b20-a8ca-e8b1ac97f984",
    "tracking_no": "FX06166E",
    "service_provider": "",
    "status": "completed",
    "time_window": {
        "lower": "2024-08-27T00:15:08+00:00",
        "upper": "2024-08-27T00:25:43+00:00"
    },
    "payment_variant": {
        "id": 1,
        "created": "2024-02-18T20:14:01.417745+03:00",
        "last_updated": "2024-08-28T00:04:13.296962+03:00",
        "name": "Cash",
        "variant": "cash",
        "image_url": "https://cdn4.iconfinder.com/data/icons/flatastic-11-1/256/cash-1024.png",
        "permissions": [
            "add_paymentvariant",
            "change_paymentvariant",
            "delete_paymentvariant",
            "view_paymentvariant"
        ]
    },
    "priority": 0,
    "is_billed": true,
    "user_device_trips": [],
    "total_cost": 500,
    "total_cost_currency": "EUR",
    "processing_fee": 10,
    "last_updated": "2024-08-27T03:49:41.888453+03:00",
    "start_time": "2024-08-27T00:37:30.289239Z",
    "vehicle_trips": [],
    "current_location": {
        "type": "Point",
        "coordinates": [
            13.3845098,
            52.55517719999999
        ]
    },
    "end_time": "2024-08-27T00:49:41.883834Z",
    "service_type": "package_sending",
    "start_point": {
        "type": "Point",
        "coordinates": [
            13.3845314,
            52.5551805
        ]
    },
    "start_point_address": "Prinzenallee 20, Prinzenallee, Berlin, DE",
    "end_point": {
        "type": "Point",
        "coordinates": [
            13.42712139710784,
            52.54753635570449
        ]
    },
    "end_point_address": "Meyerheimstraße 2, Meyerheimstraße, Berlin, DE",
    "note": "Sawa tu",
    "trip_distance_km": 3.49,
    "trip_duration_min": 10.6,
    "actual_distance_km": null,
    "actual_duration_min": null,
    "payment": null,
    "subscription": null,
    "vehicle": {
        "id": 9,
        "color": "orange",
        "iot_device_id": 14,
        "vehicle_plate_no": "T321 DVL",
        "vehicle_id": "e2731716-5b9e-4815-aaac-1d06834b5c86",
        "is_online": true,
        "vehicle_ident": "+255123456789",
        "is_disabled": false,
        "current_fuel_percent": 1,
        "last_reported": "2024-09-05T03:06:10.976584+03:00",
        "available_until": null,
        "location": {
            "type": "Point",
            "coordinates": [
                13.3845269,
                52.55517050000001
            ]
        },
        "mac_address": "",
        "home_station_address": "Kunduchi NDC",
        "lat": 52.55517050000001,
        "lon": 13.384526899999996,
        "vehicle_type_id": 2,
        "vehicle_equipment": [],
        "is_reserved": false,
        "is_reserved_by": false,
        "can_request_driver": true,
        "created": "2024-08-04T23:48:26.389291+03:00",
        "current_range_meters": 100000,
        "vehicle_distance": null,
        "trip_cost": null,
        "pricing_plan_id": 1,
        "station_id": null,
        "home_station_id": null,
        "pricing_plan": {
            "id": 1,
            "name": "FikaChu",
            "created": "2023-08-14T22:30:12.825000+03:00",
            "last_updated": "2024-08-20T03:43:37.043690+03:00",
            "reservation_price_flat_rate": 1000,
            "surge_pricing": false,
            "url": null,
            "reservation_price_per_min": 0,
            "description": [
                {
                    "text": "Panda na kwenda nasi",
                    "language": "en"
                },
                {
                    "text": "Panda na kwenda nasi",
                    "language": "sw"
                }
            ],
            "is_taxable": false,
            "price": 500,
            "currency": "EUR",
            "price_currency": "EUR",
            "geofence": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [
                                -26.539949035644465,
                                54.118478226615025
                            ],
                            [
                                -23.30323028564448,
                                -45.903897432923756
                            ],
                            [
                                111.5866134643555,
                                -44.97974571308589
                            ],
                            [
                                107.80145721435551,
                                64.0995834236544
                            ],
                            [
                                2.522550964355517,
                                70.33529612053111
                            ],
                            [
                                -26.539949035644465,
                                54.118478226615025
                            ]
                        ]
                    ]
                ]
            },
            "per_min_pricing": [
                {
                    "id": 1,
                    "created": "2023-08-19T01:18:16.546000+03:00",
                    "name": "Charge 1000 every minute or km between 10 - 25 km or min",
                    "start": 10,
                    "end": 25,
                    "rate": 1000,
                    "interval": 1,
                    "last_updated": "2024-02-17T20:09:25.066746+03:00"
                }
            ],
            "per_km_pricing": [
                {
                    "id": 1,
                    "created": "2023-08-19T01:18:16.546000+03:00",
                    "name": "Charge 1000 every minute or km between 10 - 25 km or min",
                    "start": 10,
                    "end": 25,
                    "rate": 1000,
                    "interval": 1,
                    "last_updated": "2024-02-17T20:09:25.066746+03:00"
                }
            ],
            "validity_duration_days": 0,
            "has_subscribed": false,
            "pricing_plan_image": "https://th.bing.com/th/id/OIP.zssGFrU55kpuPBb4m7VU6wHaHa?rs=1&pid=ImgDetMain",
            "processing_fee": 0.02,
            "price_includes_processing_fee": true,
            "is_realtime_pricing": false,
            "usage_limit": 1000,
            "max_subscriptions_per_user": 1000,
            "tags": [
                {
                    "id": 2,
                    "name": "driver",
                    "slug": "driver"
                },
                {
                    "id": 3,
                    "name": "rider",
                    "slug": "rider"
                }
            ],
            "tagline": [
                {
                    "text": null,
                    "language": "en"
                },
                {
                    "text": null,
                    "language": "sw"
                }
            ]
        },
        "station": null,
        "owner": {
            "id": 6,
            "username": "+255123456789",
            "email": "support@fikachu.com",
            "first_name": "Abiria",
            "last_name": "Mtanashati",
            "avatar": "http://127.0.0.1:8075/media/upload/images/9FB5D2EB-A988-445F-8517-7F1CBCD5A0D4-64778-000006BD5CC32248.jpg",
            "is_staff": true,
            "is_superuser": false,
            "is_active": true,
            "date_joined": "2024-02-03T02:01:37+03:00",
            "is_phone_verified": false,
            "is_verified": true,
            "full_name": "Abiria Mtanashati",
            "profile_id": 7,
            "iot_device_id": 2,
            "role": 1,
            "phone": "+255123456789",
            "currency": "TZS",
            "permissions": [
                "add_user",
                "change_user",
                "delete_user",
                "view_user"
            ],
            "default_system_id": 1
        },
        "vehicle_type": {
            "id": 2,
            "cargo_load_capacity": 50000,
            "description": [
                {
                    "text": "Haina umeme",
                    "language": "en"
                },
                {
                    "text": "Haina umeme",
                    "language": "sw"
                }
            ],
            "color": "grey",
            "rated_power": 0,
            "model": [
                {
                    "text": "Saizi Kubwa",
                    "language": "en"
                },
                {
                    "text": "Saizi Kubwa",
                    "language": "sw"
                }
            ],
            "max_range_meters": 500000,
            "cargo_volume_capacity": 39997,
            "return_constraint": "any_station",
            "propulsion_type": "combustion",
            "g_CO2_km": 170,
            "default_reserve_time": 0,
            "name": [
                {
                    "text": "Kirikuu",
                    "language": "en"
                },
                {
                    "text": "Kirikuu",
                    "language": "sw"
                }
            ],
            "make": [
                {
                    "text": "Suzuki",
                    "language": "en"
                },
                {
                    "text": "Suzuki",
                    "language": "sw"
                }
            ],
            "vehicle_accessories": [],
            "vehicle_image": "https://www.everycar.jp/blog/wp-content/uploads/2-15.jpg",
            "rider_capacity": 4,
            "wheel_count": 4,
            "form_factor": "car",
            "last_updated": "2024-08-20T03:41:39.343288+03:00",
            "max_permitted_speed": 80,
            "can_scan_to_unlock": false,
            "can_request_driver": true,
            "default_pricing_plan_id": null,
            "pricing_plan_ids": [],
            "tagline": [
                {
                    "text": "Beat the traffic, safely and affordably",
                    "language": "en"
                },
                {
                    "text": "Beat the traffic, safely and affordably",
                    "language": "sw"
                }
            ],
            "created": "2023-08-24T00:41:07.951000+03:00",
            "system": {
                "id": 1,
                "privacy_url": [
                    {
                        "text": null,
                        "language": "en"
                    },
                    {
                        "text": null,
                        "language": "sw"
                    }
                ],
                "start_date": "2023-08-14",
                "purchase_url": null,
                "email": "",
                "last_updated": "2024-08-04T23:52:03.903089+03:00",
                "operator": [
                    {
                        "text": "fikaChu",
                        "language": "en"
                    },
                    {
                        "text": null,
                        "language": "sw"
                    }
                ],
                "version": "3.0",
                "ttl": 60,
                "manifest_url": null,
                "terms_last_updated": "2023-08-14",
                "attribution_url": null,
                "license_id": null,
                "short_name": [
                    {
                        "text": "FikaChu",
                        "language": "en"
                    },
                    {
                        "text": null,
                        "language": "sw"
                    }
                ],
                "url": "https://fikachu.com",
                "phone_number": "+255659158158",
                "created": "2023-08-14T16:18:01.445000+03:00",
                "timezone": "Africa/Dar_es_Salaam",
                "system_id": "fikachu-dar-bike",
                "terms_url": [
                    {
                        "text": null,
                        "language": "en"
                    },
                    {
                        "text": null,
                        "language": "sw"
                    }
                ],
                "privacy_last_updated": "2023-08-14",
                "feed_contact_email": "paschalgiki@gmail.com",
                "license_url": null,
                "languages": [
                    "en",
                    "sw"
                ],
                "name": [
                    {
                        "text": "FikaChu Mobility Sharing",
                        "language": "en"
                    },
                    {
                        "text": null,
                        "language": "sw"
                    }
                ],
                "attribution_organization_name": [
                    {
                        "text": null,
                        "language": "en"
                    },
                    {
                        "text": null,
                        "language": "sw"
                    }
                ],
                "opening_hours": []
            },
            "default_pricing_plan": null,
            "pricing_plans": []
        },
        "rental_uris": null,
        "home_station": null,
        "system": 1,
        "vehicle_image": "https://www.everycar.jp/blog/wp-content/uploads/2-15.jpg",
        "permissions": [
            "add_vehicle",
            "change_vehicle",
            "delete_vehicle",
            "view_vehicle"
        ],
        "extra_data": {
            "vehicle_brand": "TOYOTA",
            "vehicle_model": "IST",
            "vehicle_model_year": 2018
        }
    },
    "vehicle_type": {
        "id": 2,
        "cargo_load_capacity": 50000,
        "description": [
            {
                "text": "Haina umeme",
                "language": "en"
            },
            {
                "text": "Haina umeme",
                "language": "sw"
            }
        ],
        "color": "grey",
        "rated_power": 0,
        "model": [
            {
                "text": "Saizi Kubwa",
                "language": "en"
            },
            {
                "text": "Saizi Kubwa",
                "language": "sw"
            }
        ],
        "max_range_meters": 500000,
        "cargo_volume_capacity": 39997,
        "return_constraint": "any_station",
        "propulsion_type": "combustion",
        "g_CO2_km": 170,
        "default_reserve_time": 0,
        "name": [
            {
                "text": "Kirikuu",
                "language": "en"
            },
            {
                "text": "Kirikuu",
                "language": "sw"
            }
        ],
        "make": [
            {
                "text": "Suzuki",
                "language": "en"
            },
            {
                "text": "Suzuki",
                "language": "sw"
            }
        ],
        "vehicle_accessories": [],
        "vehicle_image": "https://www.everycar.jp/blog/wp-content/uploads/2-15.jpg",
        "rider_capacity": 4,
        "wheel_count": 4,
        "form_factor": "car",
        "last_updated": "2024-08-20T03:41:39.343288+03:00",
        "max_permitted_speed": 80,
        "can_scan_to_unlock": false,
        "can_request_driver": true,
        "default_pricing_plan_id": null,
        "pricing_plan_ids": [],
        "tagline": [
            {
                "text": "Beat the traffic, safely and affordably",
                "language": "en"
            },
            {
                "text": "Beat the traffic, safely and affordably",
                "language": "sw"
            }
        ],
        "created": "2023-08-24T00:41:07.951000+03:00",
        "system": {
            "id": 1,
            "privacy_url": [
                {
                    "text": null,
                    "language": "en"
                },
                {
                    "text": null,
                    "language": "sw"
                }
            ],
            "start_date": "2023-08-14",
            "purchase_url": null,
            "email": "",
            "last_updated": "2024-08-04T23:52:03.903089+03:00",
            "operator": [
                {
                    "text": "fikaChu",
                    "language": "en"
                },
                {
                    "text": null,
                    "language": "sw"
                }
            ],
            "version": "3.0",
            "ttl": 60,
            "manifest_url": null,
            "terms_last_updated": "2023-08-14",
            "attribution_url": null,
            "license_id": null,
            "short_name": [
                {
                    "text": "FikaChu",
                    "language": "en"
                },
                {
                    "text": null,
                    "language": "sw"
                }
            ],
            "url": "https://fikachu.com",
            "phone_number": "+255659158158",
            "created": "2023-08-14T16:18:01.445000+03:00",
            "timezone": "Africa/Dar_es_Salaam",
            "system_id": "fikachu-dar-bike",
            "terms_url": [
                {
                    "text": null,
                    "language": "en"
                },
                {
                    "text": null,
                    "language": "sw"
                }
            ],
            "privacy_last_updated": "2023-08-14",
            "feed_contact_email": "paschalgiki@gmail.com",
            "license_url": null,
            "languages": [
                "en",
                "sw"
            ],
            "name": [
                {
                    "text": "FikaChu Mobility Sharing",
                    "language": "en"
                },
                {
                    "text": null,
                    "language": "sw"
                }
            ],
            "attribution_organization_name": [
                {
                    "text": null,
                    "language": "en"
                },
                {
                    "text": null,
                    "language": "sw"
                }
            ],
            "opening_hours": []
        },
        "default_pricing_plan": null,
        "pricing_plans": []
    },
    "user": {
        "id": 3,
        "username": "+255659158158",
        "email": "paschalgiki@gmail.com",
        "first_name": "Paschal",
        "last_name": "Giki",
        "avatar": "http://127.0.0.1:8075/media/upload/images/IMG-20240617-WA0036.jpg",
        "is_staff": true,
        "is_superuser": true,
        "is_active": true,
        "date_joined": "2023-09-29T20:39:41+03:00",
        "is_phone_verified": false,
        "is_verified": true,
        "full_name": "Paschal Giki",
        "profile_id": 5,
        "iot_device_id": 3,
        "role": 1,
        "phone": "+255659158158",
        "currency": "TZS",
        "permissions": [
            "add_user",
            "change_user",
            "delete_user",
            "view_user"
        ],
        "default_system_id": 1
    },
    "driver": {
        "id": 6,
        "username": "+255123456789",
        "email": "support@fikachu.com",
        "first_name": "Abiria",
        "last_name": "Mtanashati",
        "avatar": "http://127.0.0.1:8075/media/upload/images/9FB5D2EB-A988-445F-8517-7F1CBCD5A0D4-64778-000006BD5CC32248.jpg",
        "is_staff": true,
        "is_superuser": false,
        "is_active": true,
        "date_joined": "2024-02-03T02:01:37+03:00",
        "is_phone_verified": false,
        "is_verified": true,
        "full_name": "Abiria Mtanashati",
        "profile_id": 7,
        "iot_device_id": 2,
        "role": 1,
        "phone": "+255123456789",
        "currency": "TZS",
        "permissions": [
            "add_user",
            "change_user",
            "delete_user",
            "view_user"
        ],
        "default_system_id": 1
    },
    "statuses": [
        {
            "transition": "add_job",
            "source_state": "pending",
            "state": "pending",
            "by": null,
            "description": null,
            "timestamp": "2024-08-27T03:11:19.135279+03:00"
        },
        {
            "transition": "set_in_progress",
            "source_state": "pending",
            "state": "in_progress",
            "by": 3,
            "description": null,
            "timestamp": "2024-08-27T03:37:30.289239+03:00"
        },
        {
            "transition": "set_waiting",
            "source_state": "in_progress",
            "state": "driver_arrived",
            "by": 3,
            "description": null,
            "timestamp": "2024-08-27T03:39:29.994837+03:00"
        },
        {
            "transition": "set_completed",
            "source_state": "driver_arrived",
            "state": "completed",
            "by": 3,
            "description": null,
            "timestamp": "2024-08-27T03:39:38.324411+03:00"
        },
        {
            "transition": "bill_user",
            "source_state": "completed",
            "state": "completed",
            "by": 2,
            "description": "€500.00",
            "timestamp": "2024-08-27T03:49:41.883834+03:00"
        }
    ],
    "data": {
        "note": "Sawa tu",
        "user": null,
        "driver": null,
        "photos": [],
        "status": "pending",
        "trip_id": null,
        "endPoint": {
            "name": "Meyerheimstraße 2",
            "country": "Germany",
            "latitude": 52.5475363557045,
            "locality": "Meyerheimstraße",
            "longitude": 13.42712139710784,
            "countryCode": "DE",
            "administrativeArea": "Berlin"
        },
        "end_time": null,
        "odometer": 0,
        "priority": 0,
        "trip_cost": {
            "amount": 500,
            "_amount": 500,
            "currency": "EUR",
            "discount": 0,
            "processing_fee": 10
        },
        "cargo_load": "10",
        "request_id": "06166e82-777e-4b20-a8ca-e8b1ac97f984",
        "startPoint": {
            "name": "Prinzenallee 20",
            "country": "Germany",
            "latitude": 52.5551805,
            "locality": "Prinzenallee",
            "longitude": 13.3845314,
            "countryCode": "DE",
            "administrativeArea": "Berlin"
        },
        "start_time": null,
        "service_type": "package_sending",
        "selectedVehicle": null,
        "show_local_path": false,
        "geofenceFeatures": {},
        "time_to_dest_min": null,
        "trip_distance_km": 3.49,
        "cargo_money_value": 4500,
        "end_point_details": {
            "email": null,
            "phone": "+491797553195",
            "location": {
                "name": "Meyerheimstraße 2",
                "country": "Germany",
                "latitude": 52.5475363557045,
                "locality": "Meyerheimstraße",
                "longitude": 13.42712139710784,
                "countryCode": "DE",
                "administrativeArea": "Berlin"
            },
            "full_name": "Mirko Germany Space Agency",
            "instructions": null
        },
        "expected_end_time": "2024-08-27T02:25:43+02:00",
        "trip_duration_min": 10.596666666666666,
        "delivery_fee_payer": null,
        "distance_to_dest_km": null,
        "expected_start_time": "2024-08-27T02:15:08+02:00",
        "is_pickup_confirmed": true,
        "selected_vehicle_id": null,
        "start_point_details": {
            "email": "paschalgiki@gmail.com",
            "phone": "+255659158158",
            "location": {
                "name": "Prinzenallee 20",
                "country": "Germany",
                "latitude": 52.5551805,
                "locality": "Prinzenallee",
                "longitude": 13.3845314,
                "countryCode": "DE",
                "administrativeArea": "Berlin"
            },
            "full_name": "Paschal Giki",
            "instructions": null
        },
        "locate_parking_attempt": 0,
        "selected_vehicle_ident": null,
        "cargo_money_value_payer": null,
        "selected_vehicle_iot_id": null,
        "show_shipping_cart_modal": false,
        "nearest_station_distance_m": 0,
        "selected_vehicle_mac_address": null
    },
    "permissions": [
        "accept_trip",
        "add_trip",
        "change_trip",
        "confirm_payment_trip",
        "delete_trip",
        "view_trip"
    ]
}
