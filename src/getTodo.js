const AWS = require("aws-sdk")

const getTodo = async (event) => {
    console.log(event)
  const dynamodb = new AWS.DynamoDB.DocumentClient()
let todo
const {id}=event.pathParameters
console.log(id)
try{
const results= await dynamodb.get({TableName:"TodoTable",Key:{id}}).promise()
 todo=results.Item
} catch(error){
console.log(error)
}

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  }
}

module.exports = {
  handler: getTodo,
}


