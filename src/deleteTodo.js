const AWS = require("aws-sdk");

const deleteTodo = async (event) => {

    const db = new AWS.DynamoDB.DocumentClient();

    let { id } = event.pathParameters

    await db.delete({
        TableName: "TodoTable",
        Key: { id },
    }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
        message: "Tâche deleted!"
    }),
  };
};

module.exports = {
    handler: deleteTodo
}
