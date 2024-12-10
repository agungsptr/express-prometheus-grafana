import express from "express";
import cors from "cors";
import router from "./routes";
import config from "./config";
import * as dotenv from "dotenv";
import { metricsMiddleware } from "./middlewares";

dotenv.config();

const app = express();

/** Set cors */
app.use(cors());

/** Set prometheus */
app.use(metricsMiddleware);

/** Set routes */
app.use("/api", router);

app.listen(config.APP_PORT, () => {
  console.log(`Server is running on http://localhost:${config.APP_PORT}/api`);
  console.log(
    `Metrics are available at http://localhost:${config.APP_PORT}/metrics`
  );
});
