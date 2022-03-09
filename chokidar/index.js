const { globAsync } = require("../glob/index");
const chokidar = require("chokidar");
const PathToLook = "../node-cron/path*.json";

try {
    const files = globAsync(PathToLook).then((i)=>{
        console.log(i);
    });
    
} catch {
    console.log("oh, vaia");
}
