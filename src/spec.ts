import { DataSource } from '../../toolchain/types/spec/spec_source';

export const specification: DataSource.Specification = {
    category:  "vehicle",
    id_ident:  "fake",
    id_author: "thmang82",
    // ---
    provides: [ "vehicle_status" ],
    // ---
    version:   "0.1.0",
    // ---
    author_email: "thmang82@gmail.com",
    translations: {
        'en': { name: "Fake Vehicle", description: "Provides faked vehicle data for testing the GUI" }
    },
    // ---
    parameters: [
        /* Define script parameters here that shall be rendered by the WunderView Config GUI */
        /* See spec in toolchain/types/spec/spec_parameter.ts for help */
        /* You can also use auto complete, or check the examples */
    ],
    geo_relevance: {
        everywhere: false,
        countries: ["DE", "FR", "GB"],
        cities: []
    },
    notifications: [],
    data_fetch: {
        // Note: setting data_fetch to undefined will disable automatic fetching! You have to take care for yourself then, e.g. by subscribing to visiblity changes via ctx.script.visSubscribe
        interval_active_sec: 5 * 60, // Fetch data every  5 minutes in case at least one screen showing data from this source is in state 'active'
        interval_idle_sec: 15 * 60   // Fetch data every 15 minutes in case at least one screen showing data from this source is in state '(active) idle'
    }
}