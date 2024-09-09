interface TripsModel {
    id: number;
    created: string;
    request_id: string;
    tracking_no: string;
    service_provider: string;
    status: string;
    time_window: Timewindow;
    payment_variant: Paymentvariant;
    priority: number;
    is_billed: boolean;
    user_device_trips: any[];
    total_cost: number;
    total_cost_currency: string;
    processing_fee: number;
    last_updated: string;
    start_time: string;
    vehicle_trips: any[];
    current_location: Currentlocation;
    end_time: string;
    service_type: string;
    start_point: Currentlocation;
    start_point_address: string;
    end_point: Currentlocation;
    end_point_address: string;
    note: string;
    trip_distance_km: number;
    trip_duration_min: number;
    actual_distance_km?: any;
    actual_duration_min?: any;
    payment?: any;
    subscription?: any;
    vehicle: Vehicle;
    vehicle_type: Vehicletype;
    user: Owner;
    driver: Owner;
    statuses: Status[];
    data: Data;
    permissions: string[];
}
interface Data {
    note: string;
    user?: any;
    driver?: any;
    photos: any[];
    status: string;
    trip_id?: any;
    endPoint: EndPoint;
    end_time?: any;
    odometer: number;
    priority: number;
    trip_cost: Tripcost;
    cargo_load: string;
    request_id: string;
    startPoint: EndPoint;
    start_time?: any;
    service_type: string;
    selectedVehicle?: any;
    show_local_path: boolean;
    geofenceFeatures: GeofenceFeatures;
    time_to_dest_min?: any;
    trip_distance_km: number;
    cargo_money_value: number;
    end_point_details: Endpointdetails;
    expected_end_time: string;
    trip_duration_min: number;
    delivery_fee_payer?: any;
    distance_to_dest_km?: any;
    expected_start_time: string;
    is_pickup_confirmed: boolean;
    selected_vehicle_id?: any;
    start_point_details: Startpointdetails;
    locate_parking_attempt: number;
    selected_vehicle_ident?: any;
    cargo_money_value_payer?: any;
    selected_vehicle_iot_id?: any;
    show_shipping_cart_modal: boolean;
    nearest_station_distance_m: number;
    selected_vehicle_mac_address?: any;
}
interface Startpointdetails {
    email: string;
    phone: string;
    location: EndPoint;
    full_name: string;
    instructions?: any;
}
interface Endpointdetails {
    email?: any;
    phone: string;
    location: EndPoint;
    full_name: string;
    instructions?: any;
}
interface GeofenceFeatures {
}
interface Tripcost {
    amount: number;
    _amount: number;
    currency: string;
    discount: number;
    processing_fee: number;
}
interface EndPoint {
    name: string;
    country: string;
    latitude: number;
    locality: string;
    longitude: number;
    countryCode: string;
    administrativeArea: string;
}
interface Status {
    transition: string;
    source_state: string;
    state: string;
    by?: number;
    description?: string;
    timestamp: string;
}
interface Vehicle {
    id: number;
    color: string;
    iot_device_id: number;
    vehicle_plate_no: string;
    vehicle_id: string;
    is_online: boolean;
    vehicle_ident: string;
    is_disabled: boolean;
    current_fuel_percent: number;
    last_reported: string;
    available_until?: any;
    location: Currentlocation;
    mac_address: string;
    home_station_address: string;
    lat: number;
    lon: number;
    vehicle_type_id: number;
    vehicle_equipment: any[];
    is_reserved: boolean;
    is_reserved_by: boolean;
    can_request_driver: boolean;
    created: string;
    current_range_meters: number;
    vehicle_distance?: any;
    trip_cost?: any;
    pricing_plan_id: number;
    station_id?: any;
    home_station_id?: any;
    pricing_plan: Pricingplan;
    station?: any;
    owner: Owner;
    vehicle_type: Vehicletype;
    rental_uris?: any;
    home_station?: any;
    system: number;
    vehicle_image: string;
    permissions: string[];
    extra_data: Extradata;
}
interface Extradata {
    vehicle_brand: string;
    vehicle_model: string;
    vehicle_model_year: number;
}
interface Vehicletype {
    id: number;
    cargo_load_capacity: number;
    description: Description[];
    color: string;
    rated_power: number;
    model: Description[];
    max_range_meters: number;
    cargo_volume_capacity: number;
    return_constraint: string;
    propulsion_type: string;
    g_CO2_km: number;
    default_reserve_time: number;
    name: Description[];
    make: Description[];
    vehicle_accessories: any[];
    vehicle_image: string;
    rider_capacity: number;
    wheel_count: number;
    form_factor: string;
    last_updated: string;
    max_permitted_speed: number;
    can_scan_to_unlock: boolean;
    can_request_driver: boolean;
    default_pricing_plan_id?: any;
    pricing_plan_ids: any[];
    tagline: Description[];
    created: string;
    system: System;
    default_pricing_plan?: any;
    pricing_plans: any[];
}
interface System {
    id: number;
    privacy_url: Tagline[];
    start_date: string;
    purchase_url?: any;
    email: string;
    last_updated: string;
    operator: Operator[];
    version: string;
    ttl: number;
    manifest_url?: any;
    terms_last_updated: string;
    attribution_url?: any;
    license_id?: any;
    short_name: Operator[];
    url: string;
    phone_number: string;
    created: string;
    timezone: string;
    system_id: string;
    terms_url: Tagline[];
    privacy_last_updated: string;
    feed_contact_email: string;
    license_url?: any;
    languages: string[];
    name: Operator[];
    attribution_organization_name: Tagline[];
    opening_hours: any[];
}
interface Operator {
    text?: string;
    language: string;
}
interface Owner {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    is_staff: boolean;
    is_superuser: boolean;
    is_active: boolean;
    date_joined: string;
    is_phone_verified: boolean;
    is_verified: boolean;
    full_name: string;
    profile_id: number;
    iot_device_id: number;
    role: number;
    phone: string;
    currency: string;
    permissions: string[];
    default_system_id: number;
}
interface Pricingplan {
    id: number;
    name: string;
    created: string;
    last_updated: string;
    reservation_price_flat_rate: number;
    surge_pricing: boolean;
    url?: any;
    reservation_price_per_min: number;
    description: Description[];
    is_taxable: boolean;
    price: number;
    currency: string;
    price_currency: string;
    geofence: Geofence;
    per_min_pricing: Perminpricing[];
    per_km_pricing: Perminpricing[];
    validity_duration_days: number;
    has_subscribed: boolean;
    pricing_plan_image: string;
    processing_fee: number;
    price_includes_processing_fee: boolean;
    is_realtime_pricing: boolean;
    usage_limit: number;
    max_subscriptions_per_user: number;
    tags: Tag[];
    tagline: Tagline[];
}
interface Tagline {
    text?: any;
    language: string;
}
interface Tag {
    id: number;
    name: string;
    slug: string;
}
interface Perminpricing {
    id: number;
    created: string;
    name: string;
    start: number;
    end: number;
    rate: number;
    interval: number;
    last_updated: string;
}
interface Geofence {
    type: string;
    coordinates: number[][][][];
}
interface Description {
    text: string;
    language: string;
}
interface Currentlocation {
    type: string;
    coordinates: number[];
}
interface Paymentvariant {
    id: number;
    created: string;
    last_updated: string;
    name: string;
    variant: string;
    image_url: string;
    permissions: string[];
}
interface Timewindow {
    lower: string;
    upper: string;
}