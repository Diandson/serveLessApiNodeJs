const { v4 } = require("uuid")
const AWS = require("aws-sdk");

const addTodo = async (event) => {

    const db = new AWS.DynamoDB.DocumentClient();

    const { todo } = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4();
    const neData = {
        id,
        todo,
        createdAt,
        complete: false
    }

    await db.put({
        TableName: "TodoTable",
        Item: neData
    }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(neData),
  };
};

module.exports = {
    handler: addTodo
}
