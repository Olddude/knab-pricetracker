import cron from "node-cron";

// Validate the cron schedule expression or throw a new error
if (!cron.validate(process.env.CRON_SCHEDULE!)) {
  throw new Error("Invalid cron schedule");
}
