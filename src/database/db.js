const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Connecting to the Database");

    mongoose.
        connect(
            "mongodb+srv://404lucas:root@jn-db.xhh7uqp.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log("MongoDB Atlas connected"))
        .catch((error) => console.log(error));
}

module.exports = connectDatabase;