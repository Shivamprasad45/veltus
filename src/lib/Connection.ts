import mongoose from "mongoose";

const MAX_RETRIES = 5; // Number of retry attempts
const RETRY_DELAY = 5000; // Delay between retries in milliseconds (5 seconds)

const DbConnect = async (retries = 0): Promise<void> => {
  try {
    // Check if Mongoose is already connected
    if (mongoose.connection.readyState === 1) {
      console.log("Mongoose already connected");
      return;
    }

    // Get MongoDB URI from environment variables
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error("MongoDB connection string is not defined");
    }

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);

    console.log("Mongoose connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);

    // Retry connection if the maximum retries haven't been reached

    if (retries < MAX_RETRIES) {
      console.log(
        `Retrying MongoDB connection (${retries + 1}/${MAX_RETRIES})...`
      );
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY)); // Wait before retrying
      return DbConnect(retries + 1); // Retry with incremented count
    } else {
      console.error("Max retries reached. Could not connect to MongoDB.");
    }
  }
};

export default DbConnect;
