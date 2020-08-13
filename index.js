const server = require("./server.js");

const PORT = process.env.PORT || 8000;

const hubsRouter = require('./routers/car-router.js');

server.use('/api/cars', hubsRouter);

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});