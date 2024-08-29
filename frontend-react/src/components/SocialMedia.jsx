import React from 'react';
import { FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/jibril-aidarous/">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/Aidarous-Jibril">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/cjibril">
        <FaFacebookF />
      </a>
    </div>

  </div>
);

export default SocialMedia;
