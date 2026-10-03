const fs = require("fs");

const env = {
  SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL || "",
  SUPABASE_ANON_KEY: process.env.PUBLIC_SUPABASE_ANON_KEY || "",
  RAZORPAY_KEY_ID: process.env.PUBLIC_RAZORPAY_KEY_ID || ""
};

fs.mkdirSync("js", { recursive: true });

fs.writeFileSync(
  "js/env.js",
  `window.ENV = ${JSON.stringify(env)};\n`,
  "utf8"
);

console.log("Environment file generated successfully.");
