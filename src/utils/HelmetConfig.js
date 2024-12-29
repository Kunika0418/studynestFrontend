import React from "react";
import { Helmet } from "react-helmet";

const HelmetConfig = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | StudyNest - Your Cozy Nest Away From Home</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="studynests, accommodation, hostel, student accommodation, real estate, housing, student housing, apartments, study abroad, property listings, secure housing, student rentals, dormitories, off-campus housing, shared housing, furnished apartments, university housing, budget-friendly housing, international student accommodation, rental properties, private rooms, co-living spaces, affordable housing, short-term rentals, long-term rentals, student homes, flatshare, studio apartments, PG accommodations, homestays, housing for students, academic housing, student flats, university rentals, overseas housing, secure accommodations for students"
      />
      <meta name="author" content="StudyNests" />
      <meta name="msapplication-TileColor" content="#242A56" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#242A56" />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content={title + " | StudyNest - Your Cozy Nest Away From Home"}
      />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.studynests.com" />
      <meta property="og:image" content="/android-icon-192x192.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title + " | StudyNest - Your Cozy Nest Away From Home"}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/android-icon-192x192.png" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "StudyNests",
            url: "https://www.studynests.com",
            description: description,
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.studynests.com/Property?city={city}",
              "query-input": "required name=city",
            },
          }),
        }}
      />
    </Helmet>
  );
};

export default HelmetConfig;
