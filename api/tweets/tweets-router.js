const router = require("express").Router();
const tweetModel = require("./tweets-model");
const tweetMw = require("./tweets-middleware");
const authMw = require("../auth/auth-middleware");

router.get("/", async (req, res, next) => {
  try {
    const allTweets = await tweetModel.getTweets();
    res.json(allTweets);
  } catch (error) {
    next(error);
  }
});

router.get("/:tweet_id", tweetMw.existTweet, async (req, res, next) => {
  try {
    const { tweet_id } = req.params;
    const tweet = await tweetModel.getTweet(tweet_id);
    res.json(tweet);
  } catch (error) {
    next(error);
  }
});

router.post("/", tweetMw.tweetPayload, async (req, res, next) => {
  try {
    let tweetContent = req.body;
    const successTweet = await tweetModel.newTweet(tweetContent);
    res.status(201).json(successTweet);
  } catch (error) {
    next(error);
  }
});

router.delete("/:tweet_id", tweetMw.existTweet, async (req, res, next) => {
  try {
    const { tweet_id } = req.params;
    const deletedTweet = await tweetModel.removeTweet(tweet_id);
    if (deletedTweet) {
      res.status(201).json({ message: "Tweet deleted successfully" });
    } else {
      res
        .status(400)
        .json({ message: "An error occured while deleting tweet" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
