import { getObject, replaceVariablesFromString } from './handy-helpers';
export const FirebaseWebApiKey = process.env.FIREBASE_API_KEY;
export const firebaseDynamicLinkPrefix =
    process.env.FIREBASE_DYNAMIC_LINK_PREFIX;
export const config = {
    // API_URL: _DEV_ ? process.env.API_URL_DEV : process.env.API_URL,
    API_URL: process.env.API_URL,
    timeInterval: {
        offline: 60e3, //rider not doing anything
        online: 6e3, //driver
        delivery: 2e3, //
        on_trip: 2e3, //rider & driver
    },
    distanceFilter: {
        online: 10, //20m
        delivery: 0,
        on_trip: 0, //2m
        offline: 10, //10m
    },
    stationaryRadius: {
        online: 20, //20m
        delivery: 0,
        on_trip: 5, //m
        offline: 20,
    },
    minZoomLevel: {
        on_trip: 10,
        delivery: 0,
        online: 8,
        offline: 10,
    },
};

export const url = {
    PHOTON_URL: 'https://photon.komoot.io/api',
    NOMINATIM_URL: 'https://nominatim.openstreetmap.org',
    ROUTING_URLS: [
        'https://routing.openstreetmap.de/routed-bike/route/v1',
        'https://router.project-osrm.org/route/v1',
    ],
    FLESPI: 'https://flespi.hudumabomba.com',
    GPS_URL: 'https://gps.hudumabomba.com',
    VEHICLE_POS_SOCKET: 'wss://gps.hudumabomba.com/api/socket',
    VEHICLE_POS_SESSION: 'https://gps.hudumabomba.com/api/session',
    MATTERMOST_SERVER: 'https://hello.fikachu.com',
    SURVEYJS_SERVER: 'https://survey.hudumabomba.com',
    BASE_URL: config.API_URL,
    // core
    Device: '/v1/api/Device/',
    User: '/v1/api/User/',
    Notification: '/v1/api/Notification/',
    // auth
    login: '/v1/api/auth/login/',
    logout: '/v1/api/auth/logout/',
    register: '/v1/api/auth/registration/',
    user: '/v1/api/auth/user/',
    // pasword
    tnc: 'https://fikachu.com/terms-and-condition/',
    privacy: 'https://fikachu.com/privacy-policy/',
    about: 'https://fikachu.com',
    password: {
        reset: '/v1/api/auth/password/reset/', // POST email/,
        resetConfirm: '/v1/api/auth/password/reset/confirm/',
        change: '/v1/api/auth/password/change/',
    },
    otp: {
        request: '/v1/api/User/request_otp/',
        verify: '/v1/api/User/verify_otp/',
        check: '/v1/api/User/check/',
    },
    vro: {
        Assignment: '/v1/vro/api/Assignment/',
        VehicleBreak: '/v1/vro/api/VehicleBreak/',
        Job: '/v1/vro/api/Job/',
        Step: '/v1/vro/api/Step/',
        Route: '/v1/vro/api/Route/',
        Vehicle: '/v1/vro/api/Vehicle/',
        Address: '/v1/vro/api/Address/',
    },
    accounts: {
        authUser: '/v1/api/auth/user/',
        User: '/v1/api/User/',
        AttachmentCategory: '/v1/accounts/api/AttachmentCategory/',
        Attachment: '/v1/accounts/api/Attachment/',
        Profile: '/v1/accounts/api/Profile/',
    },
    chats: {
        ChatUser: '/v1/chats/api/ChatUser/',
        userinfo: '/v1/chats/api/ChatUser/userinfo/',
    },
    couriers: {
        Trip: '/v1/couriers/api/Trip/',
        trip: {
            quote: '/v1/couriers/api/Trip/quote/',
        },
    },
    iot: {
        IotUser: '/v1/iot/api/IotUser/',
        iotuser: {
            userinfo: '/v1/iot/api/IotUser/userinfo/',
            command_device: '/v1/iot/api/IotUser/command_device/',
        },
    },
    // socket: {
    //     roomSub: config.API_URL.replace('http', 'ws') + '/ws/sub/{{request_id}}/',
    // },
    gbfs: {
        GeofenceFeature: '/v1/gbfs/api/GeofenceFeature/',
        VehicleType: '/v1/gbfs/api/VehicleType/',
        VehicleAsset: '/v1/gbfs/api/VehicleAsset/',
        RentalUris: '/v1/gbfs/api/RentalUris/',
        OpeningHour: '/v1/gbfs/api/OpeningHour/',
        Alert: '/v1/gbfs/api/Alert/',
        Station: '/v1/gbfs/api/Station/',
        RentalApp: '/v1/gbfs/api/RentalApp/',
        Vehicle: '/v1/gbfs/api/Vehicle/',
        vehicle: {
            update_status: '/v1/gbfs/api/Vehicle/update_status/',
        },
        EcoLabel: '/v1/gbfs/api/EcoLabel/',
        VehicleCapacity: '/v1/gbfs/api/VehicleCapacity/',
        StationStatus: '/v1/gbfs/api/StationStatus/',
        PricingPlan: '/v1/gbfs/api/PricingPlan/',
        System: '/v1/gbfs/api/System/',
        Region: '/v1/gbfs/api/Region/',
        PricingRate: '/v1/gbfs/api/PricingRate/',
        BrandAsset: '/v1/gbfs/api/BrandAsset/',
        Rule: '/v1/gbfs/api/Rule/',
    },
    trips: {
        Trip: '/v1/trips/api/Trip/',
        scan_vehicle: '/v1/trips/api/Trip/scan/',
        trip: {
            accept: '/v1/trips/api/Trip/accept/{{request_id}}/',
            cancel: '/v1/trips/api/Trip/cancel/{{request_id}}/',
            request: '/v1/trips/api/Trip/request/{{request_id}}/',
            request_drivers: '/v1/trips/api/Trip/request_drivers/{{request_id}}/',
            confirm_vehicle_unlocked:
                '/v1/trips/api/Trip/confirm_vehicle_unlocked/{{request_id}}/',
            device_lock_status:
                '/v1/trips/api/Trip/device_lock_status/{{request_id}}/',
            vehicle_availability:
                '/v1/trips/api/Trip/vehicle_availability/{{vehicle_id}}',
        },
    },
    billing: {
        Payment: '/v1/billing/api/Payment/',
        Subscription: '/v1/billing/api/Subscription/',
        PaymentRouter: '/v1/billing/api/PaymentRouter/',
        PaymentVariant: '/v1/billing/api/PaymentVariant/',
        balances: '/v1/billing/api/Payment/balances/',
        transactions: {
            Transaction: '/v1/billing/api/TransactionLeg/',
            Account: '/v1/billing/api/Account/',
        },
        subscribe: '/v1/billing/api/Subscription/subscribe/',
        payments: {
            process: '/v1/billing/api/payments/process/{{token}}/',
            confirm_cash: '/v1/billing/api/Payment/{{id}}/confirm_cash/',
        },
    },
    rewards: {
        Reward: '/v1/rewards/api/Reward/',
        Campaign: '/v1/rewards/api/Campaign/',
        Referral: '/v1/rewards/api/Referral/',
    },
    survey: {
        postResults: 'https://survey.hudumabomba.com/api/v1/Survey/post',
        getSurvey:
            'https://survey.hudumabomba.com/api/v1/Survey/getSurvey?surveyId={{surveyId}}',
        Result: 'https://survey.hudumabomba.com/api/v1/Result',
        Survey: 'https://survey.hudumabomba.com/api/v1/Survey',
        Attachment: 'https://survey.hudumabomba.com/api/v1/Attachment',
    },
    reviews: {
        Review: '/v1/reviews/api/Review/',
        review: { total: '/v1/reviews/api/Review/total/?reviewing={{id}}' },
    },
    getSocketURL: path => {
        return url.BASE_URL.replace('http', 'ws') + getObject(url, path);
    },
    getURL: (path, params = {}) => {
        const item = params.item || params;
        const type = params.type;
        const base = getObject(url, path);
        let link = base;
        if (['detail', 'delete', 'edit'].includes(type)) {
            link = `${base} { { id } }/`;
        }
        return replaceVariablesFromString(link, item);
    },
    getItemURL: (path, item) => url.getURL(path, { item, type: 'detail' }),
}
