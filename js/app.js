// Initialize tooltip according to Bootstrap documentation
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Filter projects in work section
$('.work .text-button-group button').on("click",  function(selected){
  $(this).removeClass('active');
  selected.target.classList.add('active');

  var selector = $(selected.target).attr('data-filter');
  $('.work .projects .grid').isotope({
    filter: selector
  });

  return false;
})