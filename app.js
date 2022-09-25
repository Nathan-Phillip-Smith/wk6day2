$('.boxes').append('<div class=box1> <div class=row1></div><div class=row1></div><div class=row1></div><div class=row1></div> </div>');
$('.boxes').append('<div class=box2> <div class=row2></div><div class=row2></div><div class=row2></div><div class=row2></div> </div>');
$('.boxes').append('<div class =box3> <div class=row3></div><div class=row3></div><div class=row3></div><div class=row3></div> </div>');
$('.boxes').append(' <div class=box4> <div class=row4></div><div class=row4></div><div class=row4></div><div class=row4></div> </div>');

$('.boxes').on('click', '.row1', function() {
    $(this).toggleClass('row5')
})
$('.boxes').on('click', '.row2', function() {
    $(this).toggleClass('row6')
})
$('.boxes').on('click', '.row3', function() {
    $(this).toggleClass('row7')
})
$('.boxes').on('click', '.row4', function() {
    $(this).toggleClass('row8')
})