// 1) 注入头部/页脚组件，避免每页重复写
async function inject(id, url){
  try{
    const html = await fetch(url, {cache: "no-store"}).then(r => r.text());
    document.getElementById(id).innerHTML = html;
  }catch(e){
    console.error("Failed to inject", id, e);
  }
}

// 2) 渲染 publications：从 JSON 读取 -> 生成卡片
async function renderPublications(){
  const container = document.getElementById("pub-list");
  if(!container) return;
  try{
    const list = await fetch("data/publications.json", {cache:"no-store"}).then(r=>r.json());
    const frag = document.createDocumentFragment();

    for(const item of list){
      const card = document.createElement("article");
      card.className = "pub-card";

      // 媒体区域（图 + 可选视频覆盖）
      const media = document.createElement("div");
      media.className = "media";
      const img = document.createElement("img");
      img.src = item.thumb; img.alt = item.title;
      img.loading = "lazy";
      media.appendChild(img);

      if(item.video){ // 有视频就加，hover 自动淡入
        const video = document.createElement("video");
        video.src = item.video;
        video.muted = true; video.autoplay = true; video.loop = true; video.playsInline = true;
        media.appendChild(video);
      }

      // 文本主体
      const body = document.createElement("div");
      body.className = "pub-body";

      const titleLink = document.createElement("a");
      titleLink.href = item.project || item.paper || "#";
      titleLink.target = "_blank"; titleLink.rel = "noopener";
      const titleSpan = document.createElement("span");
      titleSpan.className = "papertitle";
      titleSpan.textContent = item.title;
      titleLink.appendChild(titleSpan);

      const authors = document.createElement("div");
      authors.className = "authors";
      if (Array.isArray(item.authors)) {
        authors.innerHTML = item.authors.map(a => {
          let name = a.name;
          if (a.self) name = `<strong>${name}</strong>`;
          if (a.url) name = `<a href="${a.url}" target="_blank" rel="noopener">${name}</a>`;
          if (a.star) name += '*';
          return name;
        }).join(', ');
      } else {
        authors.innerHTML = item.authors_html || '';
      }

      const venue = document.createElement("div");
      venue.className = "venue";
      venue.innerHTML = item.venue_html;

      const summary = document.createElement("p");
      summary.textContent = item.summary;

      const actions = document.createElement("div");
      actions.className = "actions";
      for(const link of item.links || []){
        const a = document.createElement("a");
        a.href = link.href; a.target = "_blank"; a.rel="noopener";
        a.textContent = link.text;
        actions.appendChild(a);
      }

      body.append(titleLink, authors, venue, actions, summary);
      card.append(media, body);
      frag.appendChild(card);
    }

    container.innerHTML = "";
    container.appendChild(frag);
  }catch(e){
    container.innerHTML = "<p>Failed to load publications.</p>";
    console.error(e);
  }
}

// 页面启动
inject("site-header", "components/header.html");
inject("site-footer", "components/footer.html");
renderPublications();
