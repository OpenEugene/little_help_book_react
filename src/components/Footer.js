import React from 'react';

const Footer = (props) => {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <div class="footer">
      <footer>
        <div class="footer-item"> CC {year} White Bird Clinic</div>
        <div class="footer-item">
          {' '}
          <a href="https://whitebirdclinic.org/" class="footer-url">
            whitebirdclinic.org
          </a>
        </div>
        <div class="footer-item">
          <a href="" class="terms-of-use">
            Terms of Use
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
