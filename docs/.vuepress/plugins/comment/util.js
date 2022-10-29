const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));

export const provider = {
  waline: {
    async render (frontmatter, commentDomID) {
      const commentDOM = document.createElement('div')
      commentDOM.id = commentDomID

      const parentDOM = document.querySelector(COMMENT_CONTAINER)
      parentDOM.appendChild(commentDOM)

      if (!document.querySelector(`#${commentDomID}-js`)) {
        const script = document.createElement('script')
        script.id = `${commentDomID}-js`;
        script.src = "https://unpkg.com/@waline/client@v2/dist/waline.js"
        document.body.appendChild(script);

        const style = document.createElement('link');
        style.id = `${commentDomID}-css`;
        style.rel="stylesheet"
        style.href = "https://unpkg.com/@waline/client@v2/dist/waline.css"

        document.body.appendChild(style);
      }

      if (!document.querySelector(`#${commentDomID}-count`)) {
        const div = document.createElement('div');
        div.id = `${commentDomID}-count`;
        div.style = "float: left; margin-left: 20px; font-size: 0.8rem;"
        div.innerHTML = `当前页阅读量为:<span class="waline-pageview-count" style="padding: 0 5px" data-path="${frontmatter.permalink}/">loading...</span>`

        const contentDom = document.querySelector('div[class="date iconfont icon-riqi"]');
        if (contentDom) {
          contentDom.parentNode.appendChild(div);
        }
      }

      let count = 0;
      const maxCount = 100;

      while(count < maxCount) {
        if (window.Waline) {
          break;
        } else {
          await delay(1000);
        }
      }

      window.Waline.init({
        ...COMMENT_OPTIONS,
        el: `#${commentDomID}`,
      });
    },
    clear (commentDomID) {
      const last = document.querySelector(`#${commentDomID}`)
      if (last) {
        last.remove()
      }
      const count = document.querySelector(`${commentDomID}-count`)
      if (count) {
        count.remove()
      }
      return true
    }
  }
}