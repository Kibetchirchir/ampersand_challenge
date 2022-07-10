import { Model } from "DataTypes/types";

module.exports = (DataTypes, DataTypes) => {

    const User = DataTypes.define(
        'User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_number: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        names: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
            defaulValue: 'inactive',
            allowNull: false,
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }
    )

}