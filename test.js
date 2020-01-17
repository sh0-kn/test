function checkUserName(userName) {
	$.ajax({
    type: 'POST',
    url: '/sampleweb/cart/delete',
    data: userName,
    scriptCharset: 'utf-8'
  })
//  .then((result) => {
//  	console.log(result);
//    if (result) {  // d•¡‚ ‚è
//    	$('button#confirm').prop('disabled', true);
//    	$("#duplicatedUserName").dialog("open");
//    	//$('button#checkUserName').prop('class', '');
//    	$('span#checkOK').prop('class', 'hidden');
//    } else {      // d•¡‚È‚µ
//    	$('button#confirm').prop('disabled', false);
//    	//$('button#checkUserName').prop('class', 'hidden');
//    	$('span#checkOK').prop('class', 'info');
//    }
//  }, () => {
//    console.error('Error: ajax connection failed.');
//  })
;
}
