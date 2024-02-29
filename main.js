const DELAY = 1000 * 5;
const redirectTo = __REDIRECT_TO__ ?? "https://www.google.com";
document.getElementById("redirect").href = redirectTo;

countdown(5);
setTimeout(function () {
  window.location.replace(redirectTo);
}, DELAY);

function countdown(seconds) {
  const countdownElement = document.getElementById("countdown");
  countdownElement.textContent = seconds;
  const interval = setInterval(function () {
    let countdown = parseInt(countdownElement.textContent);
    countdownElement.textContent = --countdown;
    if (countdown === 0) {
      clearInterval(interval);
    }
  }, 1000);
}
