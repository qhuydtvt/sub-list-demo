$(document).ready(function() {
  $(".list-item-caret").click(function(el){
    var list_body = $(el.target).closest('.list-item').find('.list-body');
    list_body.toggle();
  });
});
