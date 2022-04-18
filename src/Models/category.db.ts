import { posDB } from '../Configs/Database'
import { DataTypes } from 'sequelize';

export const category = posDB.define('category',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING
    }
}, {
    timestamps : false
})

category.sync({alter:true})