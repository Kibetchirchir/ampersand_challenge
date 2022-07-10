const dayjs = require("dayjs");

const created_at = dayjs("2022-07-10").format();
const updated_at = created_at;

module.exports = [
    {
        type: 'battery',
        bike_id: 1,
        swap_station_id: null,
        total_dist: 0,
        total_power: 0,
        created_at, 
        updated_at
    },
    {
        type: 'battery',
        bike_id: null,
        swap_station_id: 1,
        total_dist: 0,
        total_power: 0,
        created_at, 
        updated_at
    }
]