const AWS = require("aws-sdk");

const fetchTodo = async (event) => {

    const db = new AWS.DynamoDB.DocumentClient();

    let todos;

    try {
        const result = await db.scan({TableName: "TodoTable"}).promise();
        todos = result.Items
    }catch (e) {
        console.log(e)
    }

  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};

module.exports = {
    handler: fetchTodo
}
