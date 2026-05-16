// Automatically move past markets to "Eerdere markten" based on today's date.
// Each market card needs a data-date="YYYY-MM-DD" attribute.
document.addEventListener('DOMContentLoaded', function () {
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var upcomingStack = document.getElementById('upcoming-stack');
  var pastStack = document.getElementById('past-stack');

  if (!upcomingStack || !pastStack) return;

  var cards = Array.from(upcomingStack.querySelectorAll('[data-date]'));

  // Sort so the most recently passed market ends up at the top of "Eerdere markten"
  cards.sort(function (a, b) {
    return new Date(a.dataset.date) - new Date(b.dataset.date);
  });

  cards.forEach(function (card) {
    var marketDate = new Date(card.dataset.date);
    marketDate.setHours(0, 0, 0, 0);

    if (marketDate < today) {
      // Swap badge colours
      var dateBadge = card.querySelector('.date-badge-green');
      if (dateBadge) {
        dateBadge.classList.remove('date-badge-green');
        dateBadge.classList.add('date-badge-muted');
      }

      var timeBadge = card.querySelector('.time-badge-green-dark');
      if (timeBadge) {
        timeBadge.classList.remove('time-badge-green-dark');
        timeBadge.classList.add('time-badge-muted');
      }

      card.classList.add('market-card-past');

      // Append so earlier dates come first (list is already sorted ascending)
      pastStack.appendChild(card);
    }
  });
});
