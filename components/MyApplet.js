import React, { useEffect } from 'react';

const MyApplet = ({ jnlpFile }) => {
  useEffect(() => {
    // Load the deployJava script
    const script = document.createElement('script');
    script.src = 'http://www.java.com/js/deployJava.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Create a web start launch button
      deployJava.createWebStartLaunchButtonEx(jnlpFile);

      // Run the applet
      const attributes = {};
      const parameters = {
        jnlp_href: jnlpFile,
        jnlp_embedded: 'hash string',
      };
      deployJava.runApplet(attributes, parameters, '1.7');
    };

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [jnlpFile]);

  return null;
};

export default MyApplet;
