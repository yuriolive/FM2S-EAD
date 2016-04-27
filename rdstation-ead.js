$(document).ready(function() {
	$('#btn_login').click(function() {
		var email = $('#email').val();
		$.cookie('email', email);
	});
	$('*[data-original-title="Avaliar Curso"]').click(function() {
		var nomeCurso = $('.voltar').prev().prev().text();
		$.ajax({
			type: "POST",
			url: "https://www.rdstation.com.br/api/1.3/conversions",
			data: {
				token_rdstation": "56f671522cb99eff2c0cfb954d047109",
				"identificador": "Conclusão curso " + nomeCurso,
				"email": $.cookie('email')
			},
			dataType: "jsonp"
		});	
	});
});
