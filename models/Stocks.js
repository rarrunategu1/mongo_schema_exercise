const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema class 
const safe = true;
const StockSchema = new Schema ({
    stockName: {
        type: String,
        lowercase: true,
        index: {unique: true},
        
    }, 
        
    symbol: {
        type: String,
        require: true,
        index: {unique: true}
    },
    
    price: {
        type: Number
    },
    
    ifGain: {
        type: Number,
        min: 60
    },
    
    ifLoss: {
        type: Number,
        max: 59
    },
    stopOrders: {
        type: Number,
        min: 5.00
        
    
    },
    
}, {safe: safe},    //guarantees that any error that occurs will get reported back to method callback
{strict: true},      // ensures that values added to model instance that weren't specified in schema don't get saved to the db

{
        toObject: {  //virtuals are to get and set attributes that are not persisted to mongodb.
            virtuals: true
            
        },
        toJSON: {
            virtuals: true
        }
});

module.exports = User = mongoose.model("stocks", StockSchema);