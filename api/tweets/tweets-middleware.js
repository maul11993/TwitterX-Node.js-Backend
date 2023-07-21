const tweetModel = require("./tweets-model");

const tweetPayload = (req, res, next) => {
  let tweet = req.body.tweet_content;
  try {
    if (tweet.length < 1) {
      res.status(400).json({ message: "Tweet content can not be left blank!" });
    } else if (tweet.length > 100) {
      res
        .status(400)
        .json({ message: "Tweets can not contain more than 100 characters" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const existTweet = async (req, res, next) => {
  const { tweet_id } = req.params;
  const tweet = await tweetModel.getTweet(tweet_id);
  if (tweet) {
    req.tweet = tweet;
    next();
  } else {
    next({
      status: 400,
      message: "Tweet bulunamadı",
    });
  }
};

module.exports = { tweetPayload, existTweet };
