const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  // write code here
	// dont change function name
  try {
    // Use fs.promises.readFile to read the content of the file
    const content = await fs.promises.readFile(filename, "utf-8");

    // Return the content of the file
    return content;
  } catch (error) {
    // Handle any errors that might occur during file reading
    console.error("Error reading the file:", error.message);
    throw error;
  }
  
};


module.exports =  reader ;
