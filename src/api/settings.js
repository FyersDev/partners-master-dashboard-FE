let env = "dev";
let apiEnv = "dev/";
// let apiEnv = "prod/";
export const API_HOST = "https://api.fyers.in/lms/";

// Google client IDs
let GoogleClientIDs = {
  local:
    "664679260522-l1if6krjvc5v8ntqlr3bammfjhd2tavq.apps.googleusercontent.com",
  dev: "846901661939-36cd6p197cdag946g65v1on9ilrokej4.apps.googleusercontent.com",
  prod: "742329942581-hs56igq2ks7dp4ma4afsf8a2nt3vjhq7.apps.googleusercontent.com",
};

export const API = API_HOST + apiEnv;
export const GoogleClientID = GoogleClientIDs[env];
