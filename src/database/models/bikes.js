module.exports = (sequelize, DataTypes) => {
    const Bikes = sequelize.define("Bikes", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        reg_no: {
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
        tableName: 'bikes',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    })

    return Bikes;
}