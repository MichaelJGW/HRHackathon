// base.js

var data = [
  {Title:'Browser Vulnerability to Superfish: A Fact-Finding Trip to Best Buy (mozilla.org)', Upvotes: 207, Author: 'ndesaulniers', Time: 3, Comments: 57},
  {Title:'Stripe: Bitcoin (stripe.com)', Upvotes: 662, Author: 'sunils34', Time: 10, Comments: 245},
  {Title:'MacBook Pro Repair Extension Program for Video Issues (apple.com)', Upvotes: 10, Author: 'lstamour', Time: 13, Comments: 0},
  {Title:'The Great SIM Heist: How Spies Stole the Keys to the Encryption Castle (firstlook.org)', Upvotes: 360, Author: 'frandroid', Time: 9, Comments: 104},
  {Title:'Extracting the SuperFish certificate (erratasec.com)', Upvotes: 769, Author: 'robin_reala', Time: 14, Comments: 214},
  {Title:'How to Grow a Forest Really Really Fast (medium.com)', Upvotes: 346, Author: 'rokhayakebe', Time: 13, Comments: 53},
  {Title:'Dell XPS 13 Review (anandtech.com)', Upvotes: 185, Author: 'ismavis', Time: 14, Comments: 163},
  {Title:'The Poor Man\'s Voxel Engine (et1337.com)', Upvotes: 211, Author: 'et1337', Time: 10, Comments: 39},
  {Title:'Non-official MtGox investigation update and preliminary release (blog.wizsec.jp)', Upvotes: 69, Author: 'sdouglas', Time: 6, Comments: 14},
  {Title:'Clef Offers Two-Factor Authentication Without All the Codes (techcrunch.com)', Upvotes: 15, Author: 'pixelcort', Time: 2, Comments: 4},
  {Title:'CL21: An experimental project redesigning Common Lisp (cl21.org)', Upvotes: 118, Author: 'phabian', Time: 12, Comments: 48},
  {Title:'EFF to Supreme Court: The Fourth Amendment Covers DNA Collection (eff.org)', Upvotes: 155, Author: 'DiabloD3', Time: 10, Comments: 59},
  {Title:'Ask HN: How do your enterprise customers pay you?', Upvotes: 133, Author: 'zackliscio', Time: 10, Comments: 73},
  {Title:'Bayes\' Theorem with Lego (countbayesie.com)', Upvotes: 57, Author: 'CountBayesie', Time: 9, Comments: 8},
  {Title:'Postico – A modern PostgreSQL client for OS X (eggerapps.at)', Upvotes: 134, Author: 'tortilla', Time: 10, Comments: 43},
  {Title:'Marilyn vos Savant and the Monty Hall Problem (priceonomics.com)', Upvotes: 54, Author: 'ryan_j_naughton', Time: 1, Comments: 55},
  {Title:'Go-gl: Massive Overhaul (docs.google.com)', Upvotes: 30, Author: 'frisco', Time: 5, Comments: 4},
  {Title:'Cloud-Based Bio Lab Transcriptic (YC W15) Lands $8.5M in Series A Funding (techcrunch.com)', Upvotes: 97, Author: 'jgrahamc', Time: 5, Comments: 31},
  {Title:'Komodia SSL certificates are in many products (marcrogers.org)', Upvotes: 76, Author: 'bluesilver07', Time: 10, Comments: 12},
  {Title:'Epic Games launches Unreal development grants (unrealengine.com)', Upvotes: 29, Author: 'nkurz', Time: 10, Comments: 7},
  {Title:'A Weapon for Readers (2014) (nybooks.com)', Upvotes: 64, Author: 'rayiner', Time: 11, Comments: 25},
  {Title:'Loci: A C++-like systems programming language (loci-lang.org)', Upvotes: 85, Author: 'skorecky', Time: 12, Comments: 20},
  {Title:'Basic Personality Changes Linked to Unemployment (apa.org)', Upvotes: 56, Author: 'technologizer', Time: 14, Comments: 18},
  {Title:'How Japan\'s Line app became a culture-changing, revenue-generating phenomenon (fastcompany.com)', Upvotes: 95, Author: 'chatman', Time: 12, Comments: 33},
  {Title:'Major Changes from Solr 4 to Solr 5 (apache.org)', Upvotes: 570, Author: 'the_duck', Time: 17, Comments: 110},
  {Title:'Oliver Sacks on learning he has terminal cancer (nytimes.com)', Upvotes: 52, Author: 'ldayley', Time: 11, Comments: 0},
  {Title:'Using Google Cloud Platform for Security Scanning (googleonlinesecurity.blogspot.com)', Upvotes: 143, Author: 'lennartkoopmann', Time: 15, Comments: 62},
  {Title:'Announcing Graylog v1.0 GA (graylog.org)', Upvotes: 148, Author: 'marknadal', Time: 8, Comments: 107}
];

var createRow = function(post, i) {
  var $row = $('<div/>');
  var $toprow = $('<div/>');

  var $num = $('<span/>', {
    text: i + 1
  }).appendTo($toprow);
  var $up = $('<span/>', {
    text: '/\\'
  }).appendTo($toprow);
  var $title = $('<a/>', {
    text: post.Title
  }).appendTo($toprow);

  var $botrow = $('<div/>', {
    text: post.title
  });
  var $points = $('<span/>', {
    text:
      post.Upvotes + ' points by ' +
      post.Author + ' ' + post.Time +
      ' hours ago | '
  }).appendTo($botrow);
  var $comments = $('<a/>', {
    text: post.Comments + ' comments'
  }).appendTo($botrow);

  $toprow.appendTo($row);
  $botrow.appendTo($row);

  return $row;
};

var createRows = function(posts) {
  posts.forEach(function(post, index) {
    var row = createRow(post, index);
    row.appendTo('#dataHolder');
  });
};

$(function() {
  createRows(data);
})
