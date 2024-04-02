const userRouter = require("./user");
// const commentRouter = require("./comment");
const placeRouter = require("./place");
const categoryRouter = require("./category");
const bookingRouter = require("./booking");

const { notFound, errHandler } = require("../middlewares/errorhandler");

const initRouter = (app) => {
  app.use("/api/user", userRouter);
  // app.use("/api/comment", commentRouter);
  app.use("/api/place", placeRouter);
  app.use("/api/category", categoryRouter);
  app.use("/api/booking", bookingRouter);


  app.use(notFound);
  app.use(errHandler);
};
module.exports = initRouter;
