const server = require("./api/server");

const { PORT } = require("./config/index");

server.listen(PORT, () => {
  console.log(`Starting the development server on port ${PORT}...`);
});
