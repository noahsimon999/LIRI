console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.bebaf2a7ab604c019bde9612635e44ae,
  secret: process.env.f1c241a53e764bcb9a6795c79f01578e
};