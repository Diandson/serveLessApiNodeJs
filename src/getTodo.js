const AWS = require("aws-sdk");

const getTodo = async (event) => {

    const db = new AWS.DynamoDB.DocumentClient();
    let { id } = event.pathParameters

    let todo;

    try {
        const result = await db.get({
            TableName: "TodoTable",
            Key: { id }
        }).promise();
        todo = result.Item
    }catch (e) {
        console.log(e)
    }

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

module.exports = {
    handler: getTodo
}
