const dayjs = require("dayjs");

const created_at = dayjs("2022-07-10").format();
const updated_at = created_at;


module.exports = [
    {
        geo_location: "50E 60W",
        created_at,
        updated_at

    },
    {
        geo_location: "50E 70W",
        created_at,
        updated_at
    }
]