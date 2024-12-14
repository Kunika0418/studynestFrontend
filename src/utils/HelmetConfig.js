import React from "react";
import { Helmet } from "react-helmet";

const HelmetConfig = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | StudyNest - Your Cozy Nest Away From Home</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.studynest.com" />
      <meta
        property="og:image"
        content="https://www.studynest.com/assets/og-preview.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "StudyNest",
            "url": "https://www.studynest.com",
            "description": description,
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.studynest.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </Helmet>
  );
};

export default HelmetConfig;
