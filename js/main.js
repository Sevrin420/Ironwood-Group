// Ironwood Group LLC — site scripts

document.addEventListener('DOMContentLoaded', function () {

  // Mobile navigation toggle
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Property filter (Properties page)
  var filterBar = document.getElementById('filter-bar');
  var propertiesGrid = document.getElementById('properties-grid');

  if (filterBar && propertiesGrid) {
    var filterButtons = filterBar.querySelectorAll('.filter-btn');
    var propertyCards = propertiesGrid.querySelectorAll('.property-card');
    var noResults = document.getElementById('no-results');

    filterBar.addEventListener('click', function (event) {
      var button = event.target.closest('.filter-btn');
      if (!button) return;

      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');

      var filter = button.getAttribute('data-filter');
      var visibleCount = 0;

      propertyCards.forEach(function (card) {
        var type = card.getAttribute('data-type');
        var show = filter === 'all' || type === filter;
        card.style.display = show ? '' : 'none';
        if (show) visibleCount++;
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }

  // Contact form validation
  var contactForm = document.getElementById('contact-form');

  if (contactForm) {
    var formSuccess = document.getElementById('form-success');

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var isValid = true;

      var fields = [
        { id: 'name', groupId: 'group-name', validate: function (value) { return value.trim().length > 0; } },
        { id: 'email', groupId: 'group-email', validate: function (value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()); } },
        { id: 'message', groupId: 'group-message', validate: function (value) { return value.trim().length > 0; } }
      ];

      fields.forEach(function (field) {
        var input = document.getElementById(field.id);
        var group = document.getElementById(field.groupId);
        var valid = field.validate(input.value);

        group.classList.toggle('has-error', !valid);
        if (!valid) isValid = false;
      });

      if (isValid) {
        contactForm.reset();
        if (formSuccess) {
          formSuccess.classList.add('show');
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if (formSuccess) {
        formSuccess.classList.remove('show');
      }
    });
  }

  // Tax deed disclosure modal (property listing pages)
  var taxDeedBtn = document.getElementById('tax-deed-btn');
  var taxDeedModal = document.getElementById('tax-deed-modal');
  var taxDeedClose = document.getElementById('tax-deed-close');

  if (taxDeedBtn && taxDeedModal) {
    taxDeedBtn.addEventListener('click', function () {
      taxDeedModal.showModal();
    });

    if (taxDeedClose) {
      taxDeedClose.addEventListener('click', function () {
        taxDeedModal.close();
      });
    }

    taxDeedModal.addEventListener('click', function (event) {
      if (event.target === taxDeedModal) {
        taxDeedModal.close();
      }
    });
  }

});
