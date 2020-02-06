const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async(event, context, callback) => {
  console.log(context);
  const db = cloud.database();
  let result = await db.collection('home_banner').get();
  return result;
};