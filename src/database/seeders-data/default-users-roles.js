const dayjs = require("dayjs");

const created_at = dayjs("2022-07-10").format();
const updated_at = created_at;


module.exports = [
    {
        role: "admin",
        created_at,
        updated_at

    },
    {
        role: "rider",
        created_at,
        updated_at
    }
]