window.krakensupport = window.krakensupport || {};

(function (o) {
  const APP_SLUG = "";

  const EMBED_URL = "https://ja.wikipedia.org/wiki/メインページ";

  o.initSinglePageApp = ({ rootID, appSlug }) => {
    if (APP_SLUG && appSlug !== APP_SLUG) {
      return;
    }

    const root = document.getElementById(rootID);
    if (!root) {
      console.error("Kraken app root element not found:", rootID);
      return;
    }

    document.body.style.margin = "0";
    root.style.cssText = "width:100%;height:100vh;";

    const frame = document.createElement("iframe");
    frame.src = EMBED_URL;
    frame.title = "Wikipedia (Japanese)";
    frame.referrerPolicy = "no-referrer";
    frame.style.cssText = "width:100%;height:100%;border:0;";

    root.replaceChildren(frame);
  };
})(window.krakensupport);
