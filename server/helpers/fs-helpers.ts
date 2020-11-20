import fs from "fs";

export const readFile = (callback: any, filePath: string, encoding = "utf8") => {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      throw err;
    }

    callback(JSON.parse(data));
  });
};

export const writeFile = (fileData: any, callback: any, filePath: string, encoding = "utf8") => {
  fs.writeFile(filePath, fileData, encoding, (err) => {
    if (err) {
      throw err;
    }

    callback();
  });
};

export default { writeFile, readFile };
