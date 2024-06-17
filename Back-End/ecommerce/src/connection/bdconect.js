const mongoose = require(mongoose);

let conn;
const connection = async (req = null, res = null, next = null) => {
  try {
    if (conn) {
      return conn;
    }
    conn = await mongoose.connect(
      "mongodb+srv://rafael:rafa2659@fast-in.p4qconp.mongodb.net/"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
