import mongoose from 'mongoose';
import key from '../utils/key.json';

class initDatabase {
    public connect(){
        mongoose.connect(key.secret,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
        });
        console.log("Connection with Database (OK)");
    }    
}

export default new initDatabase();
