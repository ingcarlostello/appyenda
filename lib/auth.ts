export const extractCookieInfo = (jsonInput: string) => {

    const [nameCookie, infoCookie] = Object.entries(jsonInput)[0];
  
    const cookieInfo = {
      nameCookie: nameCookie,
      infoCookie: infoCookie
    };
  
    return cookieInfo;
  }