/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Tweets").truncate();
  await knex("Tweets").insert([
    {
      tweet_content: "Benzin ve Motorine dev zam!",
      tweet_likes: "20",
      tweet_reposts: "120",
      user_key: "1",
    },
    {
      tweet_content: "Dersimiz 5 dakika içinde başlıyor...",
      tweet_likes: "45",
      tweet_reposts: "56",
      user_key: "5",
    },
    {
      tweet_content: "FrontEnd eğitimi konularını tekrar etmeyi unutmayın...",
      tweet_likes: "60",
      tweet_reposts: "15",
      user_key: "4",
    },
    {
      tweet_content: "BackEnd projeleri nasıl gidiyor ?",
      tweet_likes: "58",
      tweet_reposts: "17",
      user_key: "2",
    },
    {
      tweet_content: "FSWeb03-23 Etüte başlıyoruz...",
      tweet_likes: "74",
      tweet_reposts: "90",
      user_key: "3",
    },
    {
      tweet_content: "Projelerinizi düzenli olarak commit etmeyi unutmayın",
      tweet_likes: "100",
      tweet_reposts: "203",
      user_key: "2",
    },
    {
      tweet_content: "Merhaba Dünya!",
      tweet_likes: "74",
      tweet_reposts: "90",
      user_key: "1",
    },
    {
      tweet_content: "Hello World!",
      tweet_likes: "37",
      tweet_reposts: "19",
      user_key: "3",
    },
    {
      tweet_content: "Hap bilgileri okumayı ihmal etmeyelim",
      tweet_likes: "84",
      tweet_reposts: "14",
      user_key: "4",
    },
    {
      tweet_content: "Ders kayıtları izlendi mi ?",
      tweet_likes: "41",
      tweet_reposts: "123",
      user_key: "5",
    },
  ]);
};
