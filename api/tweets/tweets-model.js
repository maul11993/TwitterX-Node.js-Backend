const db = require("../../data/db-config");

const getTweets = () => {
  return db("Tweets");
};

const getTweet = (tweet_id) => {
  return db("Tweets").where({ tweet_id }).first();
};

const newTweet = async (tweet) => {
  const [tweet_id] = await db("Tweets").insert(tweet);
  return getTweet(tweet_id);
};

const updateTweet = async (tweet_id, updatedTweet) => {
  return await db("Tweets").where("tweet_id", tweet_id).update(updatedTweet);
};

const removeTweet = async (tweet_id) => {
  return await db("Tweets").where("tweet_id", tweet_id).delete();
};

module.exports = { getTweets, getTweet, newTweet, updateTweet, removeTweet };
