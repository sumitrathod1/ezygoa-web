"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-0XH49G88GM";
// const CLARITY_ID = "YOUR_CLARITY_ID"; // Uncomment and set your Clarity project ID

export default function Analytics() {
  return (
    <>
      {/* Google Analytics — lazyOnload keeps it off the critical path */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Microsoft Clarity — lazyOnload prevents the 7-8s main thread delay.
          If Clarity is currently loaded via GTM, disable it there and use this instead.
          Replace YOUR_CLARITY_ID with your actual Clarity project ID. */}
      {/* <Script id="microsoft-clarity" strategy="lazyOnload">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
        `}
      </Script> */}
    </>
  );
}
