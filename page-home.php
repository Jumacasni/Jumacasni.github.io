<?php include "functions.php" ?>
<?php include "header.php" ?>
<section class="section-home">
	<div class="profile-picture js-follow" data-section="-1">
		<div class="background"></div>
		<div class="name-container">
			<h3 class="my-name font-h2 font-salmon-light js-animate" data-animation="opacity-top">Juan Manuel Castillo Nievas</h3>
			<h3 class="subtitle font-p font-family-light font-salmon-light js-animate" data-animation="opacity-top">Estudiante de Ingenería Informática</h3>
		</div>
		<div class="image-box-container">
			<div class="image-container js-animate" data-animation="opacity">
				<img src="./assets/img/yo.jpg" alt="" class="image">
			</div>
			<div class="info-container">
				<div class="icons-container js-animate" data-animation="opacity">
					<a href="https://github.com/Jumacasni" target="_blank" rel="noopener noreferrer" class="font-p"><?php get_github_logo('icon')?></a>
					<a href="https://www.linkedin.com/in/juan-manuel-c-2b966aa3/" target="_blank" rel="noopener noreferrer" class="font-p"><?php get_linkedin_logo('icon')?></a>
					<!-- <a href="https://www.linkedin.com/in/juan-manuel-c-2b966aa3/" target="_blank" rel="noopener noreferrer" class="font-p"><?php get_twitter_logo('icon')?></a> -->
				</div>
			</div>
			<div class="box-container">
				<div class="box-content">
					<p class="text-container font-p js-animate" data-animation="opacity">
						¡Hola! Soy Juan Manuel y soy de Granada. Soy una persona muy responsable y trabajadora. Si fuera una palabra, sería constancia. Me encanta afrontar nuevos retos y enfrentarme a situaciones que no he vivido antes.<br><br>Si quieres saber más de mí, ¡ponte en contacto conmigo!
					</p>
					<div class="data-container js-animate" data-animation="opacity">
						<a href="https://github.com/Jumacasni" target="_blank" rel="noopener noreferrer" class="data-content">
							<?php get_file_logo('icon')?>
							<p class="text font-p2">Mi Curriculum Vitae</p>	
						</a>
						<a href="mailto:jumacasni@gmail.com" target="_blank" rel="noopener noreferrer" class="data-content">
							<?php get_email_logo('icon')?>
							<p class="text font-p2">jumacasni@gmail.com</p>	
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="module-container js-follow" data-section="0">
		<div class="title-container">
			<h2 class="title font-h1 font-center js-animate" data-animation="opacity">LENGUAJES DE PROGRAMACIÓN</h2>
		</div>
		<div class="conocimientos-content">
			<div class="div-content">
				<div class="language-container">
					<p class="language font-h3 font-family-zilla-general">Java</p>
					<div class="progress-bar-container">
						<div class="progress-bar js-animate" data-animation="bar" data-animation-delay=".2"></div>
					</div>
				</div>
				<div class="language-container">
					<p class="language font-h3 font-family-zilla-general">C++</p>
					<div class="progress-bar-container">
						<div class="progress-bar js-animate" data-animation="bar" data-animation-delay=".3"></div>
					</div>
				</div>
				<div class="language-container">
					<p class="language font-h3 font-family-zilla-general">Python</p>
					<div class="progress-bar-container">
						<div class="progress-bar js-animate" data-animation="bar" data-animation-delay=".4"></div>
					</div>
				</div>
				<div class="language-container">
					<p class="language font-h3 font-family-zilla-general">JavaScript / jQuery</p>
					<div class="progress-bar-container">
						<div class="progress-bar js-animate" data-animation="bar" data-animation-delay=".5"></div>
					</div>
				</div>
				<div class="language-container">
					<p class="language font-h3 font-family-zilla-general">HTML & CSS</p>
					<div class="progress-bar-container">
						<div class="progress-bar js-animate" data-animation="bar" data-animation-delay=".6"></div>
					</div>
				</div>
				<div class="language-container">
					<p class="language font-h3 font-family-zilla-general">SQL</p>
					<div class="progress-bar-container">
						<div class="progress-bar js-animate" data-animation="bar" data-animation-delay=".7"></div>
					</div>
				</div>
				<div class="language-container">
					<p class="language font-h3 font-family-zilla-general">Matlab</p>
					<div class="progress-bar-container">
						<div class="progress-bar js-animate" data-animation="bar" data-animation-delay=".8"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="module-container formacion js-follow" data-section="1">
		<div class="title-container">
			<h2 class="title font-h1 font-center js-animate" data-animation="opacity">FORMACIÓN</h2>
		</div>
		<div class="formacion-content">
			<div class="year-container js-animate" data-animation="opacity-left">
				<div class="year-label-container">
					<p class="year-label font-salmon-light font-h3 font-family-zilla-general">2017-2018</p>
					<div class="separator"></div>
				</div>
				<div class="info-container">
					<p class="info-title font-h2 font-blue-dark font-family-zilla-general">Computer Science - Programa Erasmus</p>
					<p class="info-subtitle font-h3 font-blue font-family-zilla-general">Lappeenrannan Teknillinen Yliopisto,<br>Lappeenranta (Finlandia)</p>
				</div>
			</div>
			<div class="year-container js-animate" data-animation="opacity-right">
				<div class="year-label-container">
					<p class="year-label font-salmon-light font-h3 font-family-zilla-general">2015-2020</p>
					<div class="separator"></div>
				</div>
				<div class="info-container">
					<p class="info-title font-h2 font-blue-dark font-family-zilla-general">Grado en Ingeniería Informática</p>
					<p class="info-subtitle font-h3 font-blue font-family-zilla-general">Universidad de Granada</p>
				</div>
			</div>
			<div class="year-container js-animate" data-animation="opacity-left">
				<div class="year-label-container">
					<p class="year-label font-salmon-light font-h3 font-family-zilla-general">2014</p>
					<div class="separator"></div>
				</div>
				<div class="info-container">
					<p class="info-title font-h2 font-blue-dark font-family-zilla-general">Certificado B1 Inglés</p>
					<p class="info-subtitle font-h3 font-blue font-family-zilla-general">Trinity College</p>
				</div>
			</div>
		</div>
	</div>

	<div class="module-container experiencia js-follow" data-section="2">
		<div class="title-container">
			<h2 class="title font-h1 font-center js-animate" data-animation="opacity">EXPERIENCIA LABORAL</h2>
		</div>
		<div class="formacion-content experiencia-content">
			<div class="year-container js-animate" data-animation="opacity-left">
				<div class="year-label-container">
					<p class="year-label font-salmon-light font-h3 font-family-zilla-general">2019 - 2020</p>
					<div class="separator"></div>
				</div>
				<div class="info-container">
					<a href="https://binaryblocks.io" target="_blank" rel="noopener noreferrer" class="info-title link font-h2 font-blue-dark font-family-zilla-general">BinaryBlocks</a>
					<p class="info-subtitle font-h3 font-blue font-family-zilla-general">Prácticas Ícaro</p>
					<ul class="rol-container">
						<li class="font-p font-gray font-family-zilla-general">Desarrollo y mantenimiento web</li>
						<li class="font-p font-gray font-family-zilla-general">Frontend</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="module-container js-follow" data-section="3">
		<div class="title-container">
			<h2 class="title font-h1 font-center js-animate" data-animation="opacity">OTROS DATOS Y HABILIDADES</h2>
		</div>
		<div class="otros-content">
			<div class="list-container js-animate" data-animation="opacity-left">
				<h2 class="list-title font-h2 font-family-zilla-general">Informática</h2>
				<ul class="sublist-container">
					<li class="sublist-item font-h3 font-blue font-family-zilla-general">LaTeX</li>
					<li class="sublist-item font-h3 font-blue font-family-zilla-general">Sony Vegas Pro</li>
					<li class="sublist-item font-h3 font-blue font-family-zilla-general">Photoshop</li>
				</ul>
			</div>
			<div class="list-container js-animate" data-animation="opacity-right">
				<h2 class="list-title font-h2 font-family-zilla-general">Idiomas</h2>
				<ul class="sublist-container">
					<li class="sublist-item font-h3 font-blue font-family-zilla-general">Prueba de nivel Erasmus+ OLS 2018 - Nivel B2 Inglés</li>
				</ul>
			</div>
			<div class="list-container js-animate" data-animation="opacity-left">
				<h2 class="list-title font-h2 font-family-zilla-general">Vehículo</h2>
				<ul class="sublist-container">
					<li class="sublist-item font-h3 font-blue font-family-zilla-general">Carnet de conducir tipo B</li>
					<li class="sublist-item font-h3 font-blue font-family-zilla-general">Coche propio</li>
				</ul>
			</div>
		</div>
	</div>
</section>

</section>
<?php include "footer.php" ?>