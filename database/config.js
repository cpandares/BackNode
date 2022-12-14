const mongoose = require('mongoose');


const dbConnection = async ()=>{


    try {

        await mongoose.connect(process.env.DB_CNN, {
          
        });

        console.log('DB Conectada')
    
    } catch (error) {
        console.log(error);
    
        throw new Error('Something wrong in connection DB')
    }
    


}


module.exports = {dbConnection}




