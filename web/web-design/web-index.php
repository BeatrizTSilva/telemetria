<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta name="description" content="This Website is merely a test to understand the basic structure of the php file">
		<link rel="stylesheet" type="text/css" href="web-styles.css">
		<!-- for icon -->
		<link rel="icon" href="imgs/33.png">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<title>Um site</title>
		<meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0">
	</head>

	<body>

		<!-- main -->
		<main>

		<?php
			$membro2 = array(
				array('Miguel D_Ajuda',   'ist425444/', 'Dept. Electrónica',       'Coordenador'),
				array('Alexandre Freira', 'ist190209/', 'Dept. Electrónica',       'Web Design'),
				array('Beatriz Silva',    'ist186954/', 'Dept. Electrónica',       'Web Design'),
				array('Daniel Vareta',    'ist190234/', 'Dept. Electrónica',       'Web Design'),
				array('João Coelho',      'ist196252/', 'Dept. Electrónica',       'Web Design'),
				array('Paulo Silva',      'ist193672/', 'Dept. Comm e Marketing',  'Web Design'),
				array('Eduarda David',    'ist196788/', 'Dept. Comm e Marketing',  'Web Design'),
				array('Lourenço Vieira',  'ist190307/', 'Dept. Electrónica',       'Web Design'),
				array('Francisco Pedro',  'ist196791/', 'Dept. Comm e Marketing',  'Web Design'),
			);
			echo $membros2[0][0];
		?>


		<div class="membros-container">
		<div class="membros-container-2">
			<h1 id="dep-title">Departamento de Web Design</h1>
			<br>
			<h2 class="coordenador-membros-title">Coordenador</h2>
			<div class="one-member" id="one-member-miguel">
				<div class="outside-img-border">
					<div class="outside-img">
						<img class="img-membro" src="imgs/membros/<?php echo $membro2[0][0] ?>.jpg" />
						<div class="membro-description">
							<p id="dept-desription">Dept. Electrónica</p>
							<p id="function-description"> <?php echo $membro2[0][3] ?> </p>
							<div class="link-div"><a class="link" href="https://web.tecnico.ulisboa.pt/<?php echo $membro2[0][1] ?>" target="_blank">Website</a></div>
						</div>
					</div>
				</div>
				<div class="nome-membro">Miguel D'Ajuda</div>
			</div>
			<br>
			<h2 class="coordenador-membros-title" id="membros-title">Membros</h2>
			<div class="membros-div">'
				<?php
				for ($row = 1; $row < count($membro2); $row++) {
					echo '
						<div class="one-member">
							<div class="outside-img-border">
								<div class="outside-img">
									<img class="img-membro" src="imgs/membros/'.$membro2[$row][0]. '.jpg" />
									<div class="membro-description">
										<p id="dept-desription">' .$membro2[$row][2]. '</p>
										<p id="function-description">' .$membro2[$row][3]. '</p>
										<div class="link-div"><a class="link" href="https://web.tecnico.ulisboa.pt/' .$membro2[$row][1]. '" target="_blank">Website</a></div>
									</div>
								</div>
							</div>
							<div class="nome-membro">'.$membro2[$row][0]. '</div>
						</div>
					';}
				?>
			</div>
			</div>
		</div>
		</div>

		<hr>

		<div class="yandex-search-bar">
			<div id="yandex-rus">
				<img id="yandex-img" src="imgs/yandex-rus.png">
			</div>
			<div id="search-yandex">
				<input id="yandex-search-input" type="text" placeholder="Finds many things" name="search">
				<button id="yandex-button" type="submit">Search<!--i class="fa fa-search" aria-hidden="true"></i--></button>
			</div>
		</div>

		<hr>

		<div id="table">
				<table>
				<caption>Forms Table</caption>
				<thead>
				<tr>
					<th>
						<form>
							<label for="fname">Nome:</label><br>
							<input type="text" id="name" name="name" value="o teu nome"><br>
							<!--input type="submit" value="Submit"-->
						</form>
					</th>
					<th>
						<form>
							<label for="lname">Animal:</label><br>
							<input type="text" id="animal" name="animal" value="cavalo"><br>
							<!--input type="submit" value="Submit"-->
						</form>
					</th>
					<th>
						<form>
							<label for="lname">Podes dar uma festinha?</label><br>
							<input type="checkbox" id="" name="lname"><br>
						</form>
					</th>
				</tr>
				</thead>
				<tbody>
				<tr>
				<th>
					<form>
						<input type="radio" id="This" name="choose" value="This">
						<label for="html">This one?</label><br>
					</form>
				</th>
				<th>
					<form>
						<input type="radio" id="that" name="choose" value="That">
						<label for="css">This one?</label><br>
					</form>
				</th>
				<th>
					<form>
						<input type="radio" id="Nope" name="choose" value="Nope">
						<label for="javascript">Nope</label>
					</form>
				</th>
				</tr>
				<tr>
				<th>
					<div class="slidecontainer">
						<label>Left</label><br>
						<input type="range" min="1" max="100" value="25" class="slider" id="myRange">
					</div>
				</th>
				<th>
					<form>
						<label for="email">Enter your email:</label><br>
						<input type="email" id="email" name="email" value="your email">
					</form>
				</th>
				<th>
					<div class="slidecontainer">
						<label>Right</label><br>
						<input type="range" min="1" max="100" value="75" class="slider" id="myRange">
					</div>
				</th>
				</tr>
				</tbody>
				</table>
			</div>

			<hr>

			<div class="centered-div" id="pico-div">
				<h1 id="first-title">O Pico sobe até aos 2351m</h1>
				<a href="https://www.youtube.com/watch?v=WcYG-5b7448" target="blank">
					<img src="imgs/pico.jpg" id="imagem-pico" alt="Pico">
				</a>
				<p id="vaca">A vaca da montanha nada teme</p>
			</div>

			<hr>

			<div id="amigos">
				<h2>Estes são os meus amigos da vida airada</h2>
				<a href="https://web.tecnico.ulisboa.pt/ist190209/" target="_blank">Alexandre Freira</a>
				<a href="https://web.tecnico.ulisboa.pt/ist186954/" target="_blank">Beatriz Silva</a>
				<a href="https://web.tecnico.ulisboa.pt/ist190234/" target="_blank">Daniel Vareta</a>
				<a href="https://web.tecnico.ulisboa.pt/ist196252/" target="_blank">João Coelho</a>
				<a href="https://web.tecnico.ulisboa.pt/ist193672/" target="_blank">Paulo Silva</a>
				<a href="https://web.tecnico.ulisboa.pt/ist196788/" target="_blank">Eduarda David</a>
				<a href="https://web.tecnico.ulisboa.pt/ist190307/" target="_blank">Enzo</a>
				<a href="https://web.tecnico.ulisboa.pt/ist196791/" target="_blank">Xico</a>
				<a href="https://web.tecnico.ulisboa.pt/ist425444/" target="_blank">Miguel</a>
			</div>

			<div id="foto-amigos">
				<h3>Aqui está uma foto deles:</h3>
				<img src="https://wallpaperaccess.com/full/240618.jpg" width="30%">
			</div>






		</main>

	</body>

</html>