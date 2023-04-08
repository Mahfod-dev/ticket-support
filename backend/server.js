const app = require('./app');
const connectDB = require('./config/connectDB');




const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);


app.listen(process.env.PORT, () => {
    console.log(`app listening at http://localhost:${process.env.PORT}`.bgGreen)
}
);
    } catch (err) {
        console.log(err);
    }
}

start();


