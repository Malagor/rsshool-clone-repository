import rssLogo from '../../assets/icons/rs_school_js.svg';
import githubLogo from '../../assets/icons/github.svg';
import mainLogo from '../../assets/img/virus.png';

export const createFooter = (el) => {
  el.innerHTML = `
  <div class="footer__content">
    <div class="footer__title">
      <img src=${mainLogo} alt="main icon" class="footer__main-icon">
      <p><span>COVID-19 Dashboard</span></p>
    </div>
    <div class="footer__authors">
      <div class="footer__author">
        <a href="https://github.com/Malagor" class="footer__author__link" target="_blank">
          <p>Malagor</p>
          <p class="footer__github">${githubLogo}</p>
        </a>
      </div>
      <div class="footer__author">
        <a href="https://github.com/besovadevka" class="footer__author__link" target="_blank">
          <p>besovadevka</p>
          <p class="footer__github">${githubLogo}</p>
        </a>
      </div>
      <div class="footer__author">
        <a href="https://github.com/gryzun33" class="footer__author__link" target="_blank">
          <p>gryzun33</p>
          <p class="footer__github">${githubLogo}</p>
        </a>
      </div>
    </div>
    <div class="footer__school">
      <p>© 2020</p>
      <p>|</p>
      <a href="https://rs.school/js/" class="footer__course__link" target="_blank">${rssLogo}</a>
    </div>  
  </div>  
  `;
  return el;
};
