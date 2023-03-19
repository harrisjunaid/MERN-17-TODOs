// Step 1 - Convert this to a React Component
class Movie extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const title = this.getAttribute('title');
      const showTime = this.getAttribute('showTime');
      const screen = this.getAttribute('screen');
      const row = this.getAttribute('row');
      const seat = this.getAttribute('seat');
      const imageUrl = this.getAttribute('imageUrl');
  
      this.innerHTML = `
          <div class="movie-card">
              <div class="movie-header" style="background: url(${imageUrl}); background-size: cover;">
                  <div class="header-icon-container">
                      <a href="#">
                          <i class="material-icons header-icon"></i>
                      </a>
                  </div>
              </div>
              <div class="movie-content">
                  <div class="movie-content-header">
                      <a href="#">
                          <h3 class="movie-title">${title}</h3>
                      </a>
                      <div class="imax-logo"></div>
                  </div>
                  <div class="movie-info">
                      <div class="info-section">
                          <label>Date & Time</label>
                          <span>${showTime}</span>
                      </div>
                      <div class="info-section">
                          <label>Screen</label>
                          <span>${screen}</span>
                      </div>
                      <div class="info-section">
                          <label>Row</label>
                          <span>${row}</span>
                      </div>
                      <div class="info-section">
                          <label>Seat</label>
                          <span>${seat}</span>
                      </div>
                  </div>
              </div>
          </div>
      `;
    }
  }
  
  customElements.define('nexttech-movie', Movie);
  