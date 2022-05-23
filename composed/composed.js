customElements.define(
  'open-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      const $p = document.createElement('p');
      $p.textContent = this.getAttribute('text');

      // open 은 메인 페이지 맥락에서 작성된 JavaScript를 사용하여 shadow DOM에 접근할 수 있음을 의미합니다
      const $$shadowRoot = this.attachShadow({ mode: 'open' });
      $$shadowRoot.appendChild($p);
    }
  },
);

customElements.define(
  'closed-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      const $p = document.createElement('p');
      $p.textContent = this.getAttribute('text');
      // 만약 mode: closed 로 사용자 정의 요소에 shadow root을 부착했다면,
      // 외부로부터 shadow DOM에 접근할 수 없을 것입니다.
      // myCustomElem.shadowRoot 은 null 을 반환합니다.
      // 이것은 <video> 와 같이 shadow DOM을 포함하고 있는 내장 요소들의 경우입니다.
      const $$shadowRoot = this.attachShadow({ mode: 'closed' });
      $$shadowRoot.appendChild($p);
    }
  },
);

document.querySelector('html').addEventListener('click', (e) => {
  console.log(e.composed);
  console.log(e.composedPath());
});
