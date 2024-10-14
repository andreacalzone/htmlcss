// För att det här scriptet ska fungera så behöver du lägga till en .dark klass i din css där du stylar dina färger
// du behöver också en checkbox med id="darkmode-switch" i din HTML

// Dark Mode Logic
const darkmodeSwitch = document.querySelector('#darkmode-switch');
const hasDarkmode = localStorage.getItem('darkmode');

if(hasDarkmode == null) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
} else if(hasDarkmode === 'on') {
  enableDarkMode();
} else if(hasDarkmode === 'off') {
  disableDarkMode();
}

darkmodeSwitch.addEventListener('change', () => {
  if(darkmodeSwitch.checked) {
    enableDarkMode();
    localStorage.setItem('darkmode', 'on');
  } else {
    disableDarkMode();
    localStorage.setItem('darkmode', 'off');
  }
});

function enableDarkMode() {
  darkmodeSwitch.checked = true;
  document.documentElement.classList.add('dark');
}

function disableDarkMode() {
  darkmodeSwitch.checked = false;
  document.documentElement.classList.remove('dark');
}


// Accordion Logic with Chevron Icon Change
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');
    const chevronIcon = header.querySelector('.chevron i'); // Get the chevron icon

    // Close other open items
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== accordionItem) {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = null;
        const otherChevron = item.querySelector('.chevron i');
        if (otherChevron) {
          otherChevron.classList.remove('fa-chevron-up');
          otherChevron.classList.add('fa-chevron-down'); // Reset other chevrons to down
        }
      }
    });

    // Toggle current item
    accordionItem.classList.toggle('active');

    if (accordionItem.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

      // Change chevron to up icon
      chevronIcon.classList.remove('fa-chevron-down');
      chevronIcon.classList.add('fa-chevron-up');
    } else {
      accordionContent.style.maxHeight = null;

      // Reset chevron to down icon
      chevronIcon.classList.remove('fa-chevron-up');
      chevronIcon.classList.add('fa-chevron-down');
    }
  });
});
