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
  if (
    location.pathname.endsWith("/index.html") ||
    location.pathname.endsWith("/")
  ) {

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

  // お知らせ一覧ページ
  if (location.pathname.endsWith("/news.html")) {

    // 1ページに表示する件数
    const itemsPerPage = 5;

    // URLからページ番号を取得
    const params = new URLSearchParams(location.search);
    const currentPage = Math.max(
      1,
      parseInt(params.get("page")) || 1
    );

    // 全ページ数を計算
    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    // 現在のページに表示するNEWSを取得
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentNews = newsData.slice(startIndex, endIndex);

    // NEWSを表示
    currentNews.forEach((news) => {
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

    // ページ番号
    if (totalPages >= 1) {

      const pagination = document.createElement("div");
      pagination.className = "pagination";

      for (let page = 1; page <= totalPages; page++) {

        const link = document.createElement("a");
        link.href = `news.html?page=${page}`;
        link.textContent = page;

        // 現在のページを表示
        if (page === currentPage) {
          link.className = "active";
        }

        pagination.appendChild(link);
      }

      newsList.parentNode.appendChild(pagination);
    }

  }

}
