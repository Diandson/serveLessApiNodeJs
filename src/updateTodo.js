const AWS = require("aws-sdk");

const updateTodo = async (event) => {

    const db = new AWS.DynamoDB.DocumentClient();

    const { complete } = JSON.parse(event.body);
    let { id } = event.pathParameters

    await db.update({
        TableName: "TodoTable",
        Key: { id },
        UpdateExpression: 'set complete = :complete',
        ExpressionAttributeValues: {
            ':complete': complete
        },
        ReturnValues: "ALL_NEW"
    }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
        message: "Tâche completed!"
    }),
  };
};

module.exports = {
    handler: updateTodo
}
