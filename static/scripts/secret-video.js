// Delegate events so the same enhancement also survives development navigation.
document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const trigger = event.target.closest('[data-secret-video]');
  if (!trigger || event.defaultPrevented || event.button !== 0
    || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const dialog = document.querySelector('[data-secret-dialog]');
  if (!(dialog instanceof HTMLDialogElement) || typeof dialog.showModal !== 'function') return;
  const video = dialog.querySelector('video');
  if (!video) return;

  event.preventDefault();
  // Intercept the video before the development router follows the MP4 link.
  event.stopPropagation();
  if (!dialog.dataset.ready) {
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      video.pause();
      video.removeAttribute('src');
      video.load();
    });
    dialog.dataset.ready = 'true';
  }
  video.src = trigger.href;
  dialog.showModal();
  // Native controls remain available if the browser refuses playback.
  video.play().catch(() => {});
}, { capture: true });
