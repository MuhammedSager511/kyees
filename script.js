document.addEventListener('DOMContentLoaded', () => {
    const provinces = document.querySelectorAll('svg [id]');
    provinces.forEach(province => {
      province.classList.add('province');
      province.addEventListener('click', () => {
        const provinceName = province.id.toLowerCase();
        window.location.href = `${provinceName}.html`;
      });
    });
  });
  