(function typerWriterAnimation() {
  const typerWriters = [...document.querySelectorAll('.typerWriterAnimation')];
  typerWriters.forEach(element => {
    let i = 0;
    const html = element.innerHTML.trim();
    element.innerHTML = "";
    let interval = setInterval(() => {
      element.innerHTML += html[i]
      i++;
      if(html.length === i) {
        clearInterval(interval);
      }
    }, 100);
  });
})();