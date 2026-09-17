const newsData = [
  {
    date: "2026.09.16",
    title: "wellea 活動開始のお知らせ(仮)",
    new: true
  },
  {
    date: "2026.09.15",
    title: "歌ってみたグループ「wellea」始動！(仮)",
    new: false
  },
  {
    date: "2026.09.14",
    title: "wellea公式サイトを公開しました(仮)",
    new: false
  },
  {
    date: "2026.09.13",
    title: "wellea公式SNSを開設しました(仮)",
    new: false
  },
  {
    date: "2026.09.12",
    title: "メンバー紹介ページを公開しました(仮)",
    new: false
  },
 {
  date: "2026.09.11",
  title: "テスト用のお知らせ(仮)",
  new: false
  }

];
const newsList = document.getElementById("news-list");

if (newsList) {

  // トップページ：最新5件
  if (location.pathname.endsWith("/index.html") || location.pathname.endsWith("/")) {

    newsData.slice(0, 5).forEach((news) => {
      const article = document.createElement("article");
      article.className = "news-item";

      article.innerHTML = `
        <div class="news-date">
  ${news.date}
  ${news.new ? '<span class="news-new">NEW</span>' : ''}
</div>
<div class="news-content">
  <p>${news.title}</p>
</div>
      `;

      newsList.appendChild(article);
    });

  }

  // お知らせページ：6件目以降
  if (location.pathname.endsWith("/news.html")) {

    newsData.slice(5).forEach((news) => {
      const article = document.createElement("article");
      article.className = "news-item";

      article.innerHTML = `
        <div class="news-date">
  ${news.date}
  ${news.new ? '<span class="news-new">NEW</span>' : ''}
</div>
<div class="news-content">
  <p>${news.title}</p>
</div>
      `;

      newsList.appendChild(article);
    });

  }

}
