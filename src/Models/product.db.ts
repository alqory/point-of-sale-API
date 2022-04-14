import { posDB } from '../Configs/Database'
import { DataTypes } from 'sequelize';

export const product = posDB.define('product', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    title : {
        type : DataTypes.STRING(100),
        allowNull:false
    },
    category : {
        type : DataTypes.STRING(100),
        allowNull:false
    },
    images : {
        type : DataTypes.STRING,
        allowNull : true
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull:false
    },
    qty : {
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue : 1
    },
    decs : {
        type : DataTypes.STRING,
        allowNull : true
    },
    total_price : {
        type : DataTypes.INTEGER,
        defaultValue : 0
    }
},{
    timestamps : false
})

product.sync()