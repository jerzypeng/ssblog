export const provider = {
  waline: {
    importLibrary(frontmatter, commentDomID) {
      if (!document.querySelector(`#${commentDomID}-js`)) {
        const script = document.createElement('script');
        script.id = `${commentDomID}-js`;
        script.src = 'https://unpkg.com/@waline/client@v2/dist/waline.js';
        document.body.appendChild(script);

        const style = document.createElement('link');
        style.id = `${commentDomID}-css`;
        style.rel = 'stylesheet';
        style.href = 'https://unpkg.com/@waline/client@v2/dist/waline.css';

        document.body.appendChild(style);
      }
    },
    generatePageCountDom(frontmatter, commentDomID) {
      const totalCount = document.querySelector(`#${commentDomID}-count`);
      if (!totalCount) {
        const contentDom = document.querySelector('div[title="创建时间"]');
        if (contentDom) {
          const div = document.createElement('div');
          div.id = `${commentDomID}-count`;
          div.style = 'float: left; margin-left: 20px; font-size: 0.8rem;';
          div.innerHTML = `阅读量:<span class="waline-pageview-count" style="padding: 0 5px" data-path="${frontmatter.permalink.replace(
            /\/*$/,
            ''
          )}/">-</span>`;

          contentDom.parentNode.appendChild(div);
        }
      } else {
        const s = totalCount.querySelector('span');
        if (s) {
          s.setAttribute('data-path', frontmatter.permalink.replace(/\/*$/, '') + '/');
          s.setAttribute('class', 'waline-pageview-count');
        }
      }
    },
    initialComment(frontmatter, commentDomID) {
      const parentDOM = document.querySelector(COMMENT_CONTAINER);

      if (parentDOM) {
        const commentDOM = document.createElement('div');
        commentDOM.id = commentDomID;
        parentDOM.appendChild(commentDOM);

        return [
          function () {
            window.Waline.init({
              ...COMMENT_OPTIONS,
              el: `#${commentDomID}`,
            });
          },
        ];
      }

      return [];
    },
    initialActionCount(frontmatter, commentDomID) {
      return Array.prototype.map.call(document.querySelectorAll('[statistical-key]'), (item, i) => {
        const container = document.createElement('span');
        item.parentNode.appendChild(container);
        container.appendChild(item);
        const key = item.getAttribute('statistical-key');
        const label = item.getAttribute('statistical-label');
        item.removeAttribute('statistical-key');
        item.removeAttribute('statistical-label');

        const div = document.createElement('div');
        const id = `waline-pageview-count-${i}`;
        div.style = 'display: inline-block;';
        div.innerHTML = `${label}<span style="padding: 0 5px" id="${id}" data-path="${frontmatter.permalink.replace(
          /\/*$/,
          ''
        )}/${key}">-</span>`;

        container.appendChild(div);

        item.addEventListener('click', function () {
          if (window.Waline.pageviewCount) {
            window.Waline.pageviewCount({
              serverURL: COMMENT_OPTIONS.serverURL,
              path: `${window.location.pathname.replace(/\/*$/, '')}/${key}`,
              selector: `#${id}`,
            });
          }

          const countDom = document.querySelector(`#${id}`);
          countDom.innerHTML = Number(countDom.innerHTML) + 1;
        });

        return function () {
          window.Waline.pageviewCount({
            serverURL: COMMENT_OPTIONS.serverURL,
            path: `${window.location.pathname.replace(/\/*$/, '')}/${key}`,
            selector: `#${id}`,
            update: false,
          });
        };
      });
    },
    render(frontmatter, commentDomID) {
      setTimeout(() => {
        const initialStack = [];

        this.importLibrary(frontmatter, commentDomID);
        this.generatePageCountDom(frontmatter, commentDomID);

        initialStack.push(
          ...this.initialActionCount(frontmatter, commentDomID),
          ...this.initialComment(frontmatter, commentDomID)
        );

        let count = 0;
        const maxCount = 100;

        (function loopRunner() {
          if (window.Waline) {
            initialStack.forEach(function (fun) {
              fun();
            });
          } else if (count < maxCount) {
            count += 1;
            setTimeout(loopRunner, 1000);
          }
        })();
      });
    },
    clear(commentDomID) {
      const last = document.querySelector(`#${commentDomID}`);
      if (last) {
        last.remove();
      }
      const count = document.querySelector(`#${commentDomID}-count`);
      if (count) {
        count.remove();
      }
      return true;
    },
  },
};
