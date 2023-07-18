/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Comments").truncate();
  await knex("Comments").insert([
    {
      comment_content: "Tamamdır hocam geliyorum !",
      comment_likes: "20",
      comment_reposts: "120",
      user_key: "1",
      tweet_id: "2",
    },
    {
      comment_content: "Comment Deneme",
      comment_likes: "20",
      comment_reposts: "120",
      user_key: "2",
      tweet_id: "10",
    },
    {
      comment_content: "Lorem İpsum",
      comment_likes: "20",
      comment_reposts: "120",
      user_key: "3",
      tweet_id: "5",
    },
    {
      comment_content: "Dolor sit amet",
      comment_likes: "20",
      comment_reposts: "120",
      user_key: "4",
      tweet_id: "6",
    },
    {
      comment_content: "Consectetur adipiscing elit!",
      comment_likes: "20",
      comment_reposts: "120",
      user_key: "5",
      tweet_id: "7",
    },
  ]);
};
