

$(document).ready(function(){
  var data_bar_new = 0;
  var data_bar_current = 0;
  var total_bars = 'number_of_current_bars';
  $(this, '.slide_next').click(function(){
    if(data_bar_new === total_bars){
      data_bar_new = 0;
    }else{
      data_bar_new += 1;
    }
    $('.data_bar.data_bar_current').toggleClass('active_data');
    $('.data_bar.data_bar_new').toggleClass('active_data');
    data_bar_current = data_bar_new;
  });
  $(this, '.slide_prev').click(function(){
    if(data_bar_new === 0){
      data_bar_new = total_bars;
    }else{
      data_bar_new -= 1;
    }
    $('.data_bar.data_bar_current').toggleClass('active_data');
    $('.data_bar.data_bar_new').toggleClass('active_data');
    data_bar_current = data_bar_new;
  });
});
