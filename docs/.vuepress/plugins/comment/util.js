export const provider = {
  waline: {
    render(frontmatter, commentDomID) {
      setTimeout(() => {
        const commentDOM = document.createElement("div");
        commentDOM.id = commentDomID;

        const parentDOM = document.querySelector(COMMENT_CONTAINER);
        parentDOM.appendChild(commentDOM);

        if (!document.querySelector(`#${commentDomID}-js`)) {
          const script = document.createElement("script");
          script.id = `${commentDomID}-js`;
          script.src = "https://unpkg.com/@waline/client@v2/dist/waline.js";
          document.body.appendChild(script);

          const style = document.createElement("link");
          style.id = `${commentDomID}-css`;
          style.rel = "stylesheet";
          style.href = "https://unpkg.com/@waline/client@v2/dist/waline.css";

          document.body.appendChild(style);
        }
        if (!document.querySelector(`#${commentDomID}-count`)) {
          const div = document.createElement("div");
          div.id = `${commentDomID}-count`;
          div.style = "float: left; margin-left: 20px; font-size: 0.8rem;";
          div.innerHTML = `当前页阅读量为:<span class="waline-pageview-count" style="padding: 0 5px" data-path="${frontmatter.permalink}/">-</span>`;

          const contentDom = document.querySelector('div[title="创建时间"]');
          if (contentDom) {
            contentDom.parentNode.appendChild(div);
          }
        }

        const runStacks = [];

        Array.prototype.forEach.call(
          document.querySelectorAll("[statistical-key]"),
          (item, i) => {
            const container = document.createElement("span");
            item.parentNode.appendChild(container);
            container.appendChild(item);
            const key = item.getAttribute("statistical-key");
            const label = item.getAttribute("statistical-label");
            item.removeAttribute("statistical-key");
            item.removeAttribute("statistical-label");

            const div = document.createElement("div");
            const cls = `waline-pageview-count-${i}`;
            div.style = "display: inline-block;";
            div.innerHTML = `${label}<span class="${cls}" style="padding: 0 5px" id="${cls}" data-path="${frontmatter.permalink}/${key}">-</span>`;

            container.appendChild(div);

            runStacks.push(() => {
              window.Waline.pageviewCount({
                serverURL: COMMENT_OPTIONS.serverURL,
                path: `${window.location.pathname}${key}`,
                selector: `.${cls}`,
                update: false,
              });
            });

            item.onclick = function () {
              if (window.Waline.pageviewCount) {
                window.Waline.pageviewCount({
                  serverURL: COMMENT_OPTIONS.serverURL,
                  selector: cls,
                  path: `${window.location.pathname}${key}`,
                });
              }

              const countDom = document.querySelector(`#${cls}`);
              countDom.innerHTML = Number(countDom.innerHTML) + 1;
            };
          }
        );

        let count = 0;
        const maxCount = 100;

        const run = function () {
          console.log(2);
          window.Waline.init({
            ...COMMENT_OPTIONS,
            el: `#${commentDomID}`,
          });

          runStacks.forEach(function (fun) {
            fun();
          });
        };

        const loopRunner = function () {
          if (window.Waline) {
            run();
          } else if (count < maxCount) {
            count += 1;
            setTimeout(loopRunner, 1000);
          }
        };

        loopRunner();
      });
    },
    clear(commentDomID) {
      console.log(1);
      const last = document.querySelector(`#${commentDomID}`);
      if (last) {
        last.remove();
      }
      const count = document.querySelector(`${commentDomID}-count`);
      if (count) {
        count.remove();
      }
      return true;
    },
  },
};
