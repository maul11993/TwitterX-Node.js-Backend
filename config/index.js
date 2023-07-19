module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  HASH_ROUND: process.env.HASH_ROUND || 8,
  JWT_SECRET:
    process.env.JWT_SECRET ||
    "4cf6db6d5522460cba43d0ce622568178ae95d59a5da73b7da1b8df7b8c8430d",
};
