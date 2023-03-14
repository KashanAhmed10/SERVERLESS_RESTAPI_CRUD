const AWS = require("aws-sdk")
const { v4 } = require("uuid")

const addTodo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const {todo} = event.body ? JSON.parse(event.body) : event;
  const id = v4()
  const createdAT = new Date().toISOString()

  console.log("this is id",id)
  const newtodo = {
    id,
    todo,
    createdAT,
    completed: false,
  }

  await dynamodb.put({
    TableName: "TodoTable",
    Item: newtodo,
  }).promise()
  return {
    statusCode: 200,
    body: JSON.stringify(newtodo),
  }
}

module.exports = {
  handler: addTodo,
}
