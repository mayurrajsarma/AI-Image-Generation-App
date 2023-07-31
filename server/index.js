import express from 'express' ;
import * as dotenv from 'dotenv' ;// // Using dotenv, you can keep your sensitive information (like API keys, database credentials, etc.) outside your codebase and manage them separately for each environment. This helps in keeping your codebase more secure and portable.
import cors from 'cors' ; // Cross-Origin Resource Sharing

import connectDB from './mongodb/connect.js';

dotenv.config(); //By calling config() on dotenv, it reads the .env file and sets the environment variables defined in the file into the process environment. This makes the variables accessible via process.env.
const app = express(); // initialize express application
app.use(cors()) ;
app.use(express.json({limit:'50mb'})) ;

app.get('/',async(req,res)=> {
    res.send('Hello from DALL-E!') ;
})

const startServer = async() => {
    
    try {
        connectDB(process.env.MONGODB_URL) ;
        app.listen(8080, () => console.log('Server has sarted on port http://localhost:8080'));
    }
    catch (error) {

        console.log(error) ;
        
    }
}
startServer() ;