const AWS = require("aws-sdk");

const deleteTodo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  await dynamodb
    .delete({
      TableName: "TodoTable",
      Key: {
        id
      },
    })
    .promise();

  return {
    status: 200,
    body: {
      message: 'Deleted Task'
    }
  };
};

module.exports = {
  handler:deleteTodo,
};