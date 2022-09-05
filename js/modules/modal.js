export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');

  if (btnAbrir && btnFechar && modal) {
    function toggleModal(e) {
      e.preventDefault();
      modal.classList.toggle('ativo');
    }

    function removeModal(e) {
      if (e.target === this) {
        toggleModal(e);
      }
    }

    function closeModalKey(e) {
      if (e.key === 'Escape' && modal.classList.contains('ativo')) {
        toggleModal(e);
      }
    }

    btnAbrir.addEventListener('click', toggleModal);
    btnFechar.addEventListener('click', toggleModal);
    modal.addEventListener('click', removeModal);
    document.addEventListener('keydown', closeModalKey);
  }
}
