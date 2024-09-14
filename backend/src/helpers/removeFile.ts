const fs = require('fs').promises;
async function removeFile(path : string) : Promise<void> {

    let fileExists: boolean;
    try {
        await fs.access(path);
        fileExists = true;
    } catch {
        fileExists = false;
    }
    if (fileExists) {
        await fs.unlink(path);
    }
}

export default removeFile;