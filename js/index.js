(function () {
	// Draggable articles
	$(".article-wrap").draggable({cursor: "grabbing"});

	// Up the layer of the article clicked/dragged
	$(".simple > .header").on("mousedown", function () {
		let zIndex = getMaxZIndex();
		$(this).parents(".article-wrap").css("z-index", zIndex + 1);
	});

	// Close buttons
	$(".close").on("click", function() {
		$(this).parents("article").addClass('closed');
	});

	$(".cover-link").on("click", function() {
		$(this).parent().find(".more-content, .read-more").toggle();
	});
	
	// Set language using navigator's default language
	setLanguage(window.navigator.language);
})();

/**
 * Gets the maximum z-index of the articles 
 */ 
function getMaxZIndex() {
	var max = 0;
	$(".article-wrap").each(function() {
		let zIndex = parseInt($(this).css('z-index'));
		if(zIndex > max) {
			max = zIndex;
		}
	});
	return max;
}

/**
 * Changes the language of the page content by param
 * Current languages support: pt-BR, en (default)
 * @param {string} language 
 */
function setLanguage(language) {
	language = language.replace('-', '').toLowerCase();
	language = language != 'ptbr' ? 'default' : 'ptbr';
	data = {
		"ptbr": [
			'Currículo', 
			'Inglês', 
			'Português', 
			'sobre mim', 
			'Sobre mim e minha jornada na tecnologia.', 
			`Olá! sou André Gonçalves, tenho 22 anos, sou desenvolvedor de software
			e um entusiasta da tecnologia. Meu primeiro contato com desenvolvimento de software foi em 2017, quando comecei
			a estudar no Instituto Federal Catarinense (IFC) no ensino técnico.`, 
			' Nessa época fiz meu primeiro site para uma atividade, estavamos aprendendo HTML e a atividade era apenas para exercitar os conhecimentos passados, porém eu aprendi JS e CSS fazendo a tarefa pois eu queria que o site fosse bonito e funcional. Meu professor deu 0 na tarefa e me disse para refazer utilizando somente HTML. Na época fiquei chateado, mas hoje percebo que dai sairam duas lições: a primeira é não pular etapas do processo de aprendizagem, a segunda é não utilizar tecnologias desnecessárias que não contribuem para o resultado final de um projeto. O IFC me formou como Desenvolvedor Web (área que trabalho atualmente), mas eu tenho infinitos interesses em todos os campos da tecnologia: cybersegurança, IA, automação, hardware... Adoro explorar todos os assuntos porque à primeira vista você não entende como funciona, parece mágica, mas após estudar sobre e aplicar os conhecimentos você revela o truque.',
			'Quero saber mais...',
			'Voltar...',
			'competências', 
			'Minhas habilidades técnicas separadas por nível',
			'Avançado',
			'Intermediário',
			'Inglês (escrever,   ler &amp; ouvir)',
			'Falar em inglês',
			' No IFC adquiri muito conhecimento nas ferramentas básicas de um software web: HTML, JS/jQuery, PHP e MySQL. Também houveram aulas de introdução a outras linguagens e frameworks como Angular, NodeJS e Bootstrap. No meu primeiro trabalho (IPM Sistemas), durante dois anos e meio, fiz parte da equipe de desenvolvimento de um sistema web de gestão de centros de saúde para municípios que utilizava as mesmas tecnologias que aprendi, o que me fez masterizar HTML, JS/jQuery, PHP e MySQL. No meu segundo emprego (NxFácil) eu aprendi PostgreSQL, que é muito parecido com o MySQL porém com algumas diferenças de sintaxe, e desenvolvo para dois sistemas em paralelo, um ERP que usa PHP nativo no backend e Bootstrap com jQuery no frontend e um software de gestão de projetos (parecido com o Trello) que usa o mesmo front porém Laravel no backend. Desenvolvi uma API de Whatsapp para estes softwares no NodeJS utilizando o puppeteer e também uma API do ERP para outros softwares integrarem utilizando Laravel e Postman para a documentação. Além disso faço o controle e eventuais manutenções nos servidores, o que me deu conhecimentos em Linux, servers e AWS. As demais competências adquiri com estudo autodidata.',
			'Me mostre os detalhes...',
			'Voltar...',
			'experiências',
			'linha do tempo',
			'Lugares onde desenvolvi minhas competências',
			'Ensino',
			'IFC (Instituto Federal)<br>Tecnologia da Informação<br>2017 - 2019',
			'Trabalhos',
			'IPM Sistemas<br>Desenvolvedor Fullstack<br>fev 2020 - jul 2022',
			'NxFácil<br>Desenvolvedor Fullcycle<br>jul 2022 - presente',
			' A IPM foi meu primeiro trabalho, comecei fazendo um curso dado por eles e eles me contrataram por conta do meu desempenho nele. Desenvolvi na prática as linguagens que havia aprendido no IFC. Nomeio minha função como "Fullstack" pois fazia tanto front quando backend. Na NxFácil utilizo também as tecnologias anteriores e algumas outras que não havia utilizado antes e aprendi enquanto desenvolvia (detalhes técnicos na aba de competências). Nomeei minha função como "Fullcycle" pois diferente do fullstack, aqui eu cuido de todo o ciclo do software: desde a análise e levantamento de requisitos, o desenvolvimento front e backend até o deploy da aplicação, pois sou responsável pelos servidores também. Esta vaga me trouxe uma bagagem muito grande de responsabilidades e conhecimentos. ',
			'Me explique mais...',
			'Voltar...'
		],
		"default": [
			'Curriculum', 
			'English', 
			'Portuguese', 
			'about me', 
			'About me and my tech journey.', 
			`Yo! I'm André Gonçalves, a 22 years old software designer/developer
			and a tech enthusiast. My first contact with software development was in 2017, when I started
			studying at the technical school IFC (a federal institute in my state).`, 
			' Back in these days, I made my first website for a homework, the class was just about HTML but I started learning JS and CSS cause I wanted to do a beauty and functional website. My teacher gave me a 0 and told me to redo using HTML exactly the way he asked to. I think it was a important lesson: first to don\'t rush the learning proccess and second to use tools that the project needs, don\'t overuse solutions that no contributes to the final result. IFC formed me as a Web Developer (my actual occupation area), but I have infinity interest areas besides it: cyber security, AI, automations, hardware... I\'d love to explore all tech sides cause at first look it feels like magic, you don\'t understand what\'s happening, but then you study about it, dive deep and you reveal how the trick is done.',
			'Tell me everything...',
			'Go back...',
			'skills', 
			'All my tech skills leveled (by me btw)',
			'Advanced',
			'Intermediate',
			'English (write,   read &amp; listen)',
			'English talking',
			' While studying on IFC I learned the most basic tools for a complete web system development: HTML, JS/jQuery, PHP and MySQL. Also had some introduction classes about some other languages and frameworks like Angular, Nodejs and Bootstrap. On my first job (IPM Systems), in a period of two years and a half, I was part of the team that developed a web system for management of cities health centers using the same technologies I had learned, which make me master HTML, JS/jQuery, PHP and MySQL. On my second job (NxFácil) I learned PostgreSQL, which have a different syntax comparing to MySQL, and I develop two systems in parallel, an ERP using native PHP on backend and Bootstrap with jQuery on frontend and a project management software (like Trello), also uses the same front but with Laravel as backend. I developed a Whatsapp API to use in these two softwares using NodeJS and a library called puppeteer, also did an API for third party software consume and insert data in the ERP using Laravel and documented it with Postman. Also I\'m responsible for controlling and maintaining the servers, gaving me skills with Linux, servers and AWS Management. The other skills I acquired through self-taught study.',
			'Show me details...',
			'Go back...',
			'experiences',
			'timeline',
			'Places where I developed my skills',
			'Education',
			'IFC (federal institute)<br>Information Technology<br>2017 - 2019',
			'Jobs',
			'IPM Systems<br>Fullstack Dev<br>feb 2020 - jul 2022',
			'NxFácil<br>Fullcycle Dev<br>jul 2022 - until now',
			' IPM was my first job, I started doing a free course that they\'re doing and they hired me because of my good performance at this course. Used in practice the languages i\'ve learned on IFC. Desigred my role as "Fullstack" cause I did developed both front and backend. On NxFácil I also use the previously learned technologies but also others that I don\'t had any contact and learned how to use while I developed (technical details in the skills tab). Desigred my function as "Fullcycle" cause different from fullstack, here I take care of the entire software cycle: requirements analysis and gathering, developing front and backend and also deploying the system, because I\'m responsible for the servers too. This work gave me a big bag of knowledge (and responsibilities too). ',
			'Explain me these...',
			'Go back...'
		]
	};

	console.log(data);
	
	var i = 0;
	$(".langchange").each(function () {
		$(this).html(data[language][i]);
		i++;
	});
}
