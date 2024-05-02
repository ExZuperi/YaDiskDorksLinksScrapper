let linksDictionary = {};

function parseAndLogLinks() {
  const linkElements = document.querySelectorAll('a[href]');
  linkElements.forEach(linkElement => {
    const link = linkElement.getAttribute('href');
    if (link.startsWith('https://disk.yandex.ru/') && !(link in linksDictionary)) {
      linksDictionary[link] = true;
      console.log(link);
    }
  });

  browser.storage.local.set({ links: Object.keys(linksDictionary) }, function() {
    console.log('Links saved to storage');
  });
}

const observer = new MutationObserver(parseAndLogLinks);
observer.observe(document.body, { childList: true, subtree: true });
