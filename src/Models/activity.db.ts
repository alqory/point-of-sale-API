import { posDB } from '../Configs/Database'
import { DataTypes } from 'sequelize';

export const activity = posDB.define('activity', {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    date : {
        type : DataTypes.STRING,
    },
    data : {
        type : DataTypes.JSONB
    },
    total_price : {
        type : DataTypes.INTEGER
    }
},{
    timestamps : false
})

activity.sync()