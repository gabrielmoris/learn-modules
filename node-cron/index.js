const cron = require("node-cron");

//6 inputs(seconds, minutes, hours, day of month, month, day of week) (1-55 means every second 1 to secon 59)
cron.schedule(
    "1-55 * * * * *",
    () => {
        console.log("running a task every second");
    },
    {
        scheduled: true,
        timezone: "Europe/Berlin",
    }
);
