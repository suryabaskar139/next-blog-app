const mongoose = require('mongoose')

const ConnectMongo = async() => {
    await mongoose.connect(process.env.MONGO_URL)
}

export default ConnectMongo