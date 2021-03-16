import React from "react";

function SocialCard() {
  return (
    <div class="col">
      <div class="card" style={{margin: 50}} style={{color: "#8c52ff"}}>
        <div class="card-body">
          <h5 class="card-title">Mindy Ratcliff</h5>
          <h6 class="card-subtitle">Find me on Social Media</h6>
          <p class="card-text">
            <ul>
              <li>
                <a href="https://www.facebook.com/mindyratcliff/" style={{color: "#8c52ff"}}>
                  <i class="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/realmindyratcliff/" style={{color: "#8c52ff"}}>
                  <i class="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mindy-ratcliff" style={{color: "#8c52ff"}}>
                  <i class="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Mindyratcliff" style={{color: "#8c52ff"}}>
                  <i class="fab fa-github"></i> GitHub
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
