
$('#writing').val()
document.getElementById('writing').value


let $ipt = $('#writing'),
    $clearIpt = $('#magnifier');

$ipt.keyup(function(){
  $("#magnifier").toggle(Boolean($(this).val()));
});

$clearIpt.toggle(Boolean($ipt.val()));