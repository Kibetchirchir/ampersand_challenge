module.exports = (sequelize, DataTypes) => {
    const SwapStation = sequelize.define("SwapStation", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        geo_location: {
            type: DataTypes.STRING,
            unique: true,
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    }, {
        tableName: 'swap_stations',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    })
    return SwapStation;
}