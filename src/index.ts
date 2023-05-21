import app from "./app";
import "./utils/cronUtil";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`KNAB Crypto Price Tracker is running on port ${PORT}`)
);
