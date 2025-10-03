// Set a cookie with name, value and expiration time in minutes
export function setCookie(name: string, value: string, minutes: number): void {
  const date = new Date();
  date.setTime(date.getTime() + minutes * 60 * 1000); // minutes → ms
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Get a cookie by name
export function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

// Delete a cookie by setting its expiration in the past
export function deleteCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}