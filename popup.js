document.addEventListener('DOMContentLoaded', () => {
  const saveLinksButton = document.getElementById('saveLinks');
  saveLinksButton.addEventListener('click', () => {
    browser.storage.local.get('links', (data) => {
      const links = data.links || [];
      const file = new Blob([links.join('\n')], { type: 'text/plain' });
      const url = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'links.txt';
      link.click();
      URL.revokeObjectURL(url);
    });
  });
});
