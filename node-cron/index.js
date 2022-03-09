const cron = require("node-cron");
const fs = require("fs");
const pathToWrite =__dirname + `/pathToDelete${Math.floor(Math.random() * 100)}.json`;

const dateRaw = new Date()
const date = dateRaw[Symbol.toPrimitive]("string");

const dataForJson = { CurrentDate: date };
//6 inputs(seconds, minutes, hours, day of month, month, day of week) (1-55 means every second 1 to secon 59)
cron.schedule(
    "1-55 * * * * *",
    () => {
        console.log("running a task every second");
        try {
            // const pathToWrite =
            //     __dirname +
            //     `/pathToDelete${Math.floor(Math.random() * 100)}.json`;
            const stringedObj = JSON.stringify(dataForJson, null, 8);
            fs.writeFileSync(pathToWrite, stringedObj);
        } catch (e) {
            console.log("Error making string: ", e);
        }
    },
    {
        scheduled: true,
        timezone: "Europe/Berlin",
    }
);
