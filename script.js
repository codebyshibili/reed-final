const tabs = document.querySelectorAll('.tab');
const lists = document.querySelectorAll('.service-list');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const targetId = tab.getAttribute('data-target');
    lists.forEach(list => {
      list.classList.remove('active');
      if (list.id === targetId) {
        list.classList.add('active');
      }
    });
  });
});

