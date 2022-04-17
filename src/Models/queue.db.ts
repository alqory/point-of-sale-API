import { posDB } from '../Configs/Database'
import { DataTypes } from 'sequelize';

export const queue = posDB.define('queue', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull:false
    },
    serial_id : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    data : {
        type : DataTypes.JSONB,
        allowNull:true
    },
    total_price : {
        type : DataTypes.INTEGER
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
        
    }
},{
    timestamps : false
})

// If have changes in db column, ignone comment sync in bottom!
queue.sync({alter:true})