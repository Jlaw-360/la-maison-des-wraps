document.addEventListener('DOMContentLoaded', () => {
  const langToggleBtn = document.getElementById('lang-toggle');
  
  // Default language is French
  let currentLang = localStorage.getItem('lang') || 'fr';
  
  // Function to update the DOM based on language
  const updateLanguage = (lang) => {
    document.querySelectorAll('[data-en]').forEach(el => {
      // Create a span element for the text to allow inner HTML rendering if needed
      if(lang === 'en' && el.dataset.en) {
        el.innerHTML = el.dataset.en;
      } else if (lang === 'fr' && el.dataset.fr) {
        el.innerHTML = el.dataset.fr;
      }
    });

    // Update the button text
    if(langToggleBtn) {
      langToggleBtn.textContent = lang === 'en' ? 'FR' : 'EN';
    }
  };

  // Initial load
  updateLanguage(currentLang);

  // Toggle Event Listener
  if(langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'fr' : 'en';
      localStorage.setItem('lang', currentLang);
      updateLanguage(currentLang);
    });
  }
});
