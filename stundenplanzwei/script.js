
let draggedFach = null;

// Drag starten
document.querySelectorAll('.fach').forEach(fach => {
  fach.addEventListener('dragstart', () => {
    draggedFach = fach.cloneNode(true);
    setTimeout(() => fach.style.display = 'none', 0);
  });

  fach.addEventListener('dragend', () => {
    fach.style.display = 'inline-block';
    draggedFach = null;
  });
});

// Dropzones vorbereiten
document.querySelectorAll('.dropzone').forEach(zone => {
  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.classList.add('over');
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('over');
  });

  zone.addEventListener('drop', () => {
    if (draggedFach) {
      zone.innerHTML = '';
      zone.appendChild(draggedFach.cloneNode(true));
    }
    zone.classList.remove('over');
  });

  zone.addEventListener('dblclick', () => {
    zone.innerHTML = '';
  });
});

function clearPlan() {
  document.querySelectorAll('.dropzone').forEach(zone => {
    zone.innerHTML = '';
  });
}
