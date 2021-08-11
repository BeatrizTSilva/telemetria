<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta name="description" content="This Website is mearly a test to understand the basic structure of the php file">
		<link rel="stylesheet" type="text/css" href="web-styles.css">
		<!-- for icon -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<title>We're really in it now</title>
	</head>

	<body>

		<!-- main -->
		<main>

		<div id="yandex-search-bar">
			<div id="yandexes">
				<img id="yandex-img" src="imgs/yandex-rus.png">
				<h6 id="yandex-text">Yandex</h6>
			</div>
			<div class="yandex-search-container">
				<form id="search-form-div" action="/action_page.php">
					<input type="text" placeholder="Finds many things" name="search">
					<button type="submit"><i class="fa fa-search" aria-hidden="true"></i>
					</button>
				</form>
			</div>


		</div>

		<br>
		<hr>

		<div class="centered-div" id="table">
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

			<div class="centered-div" id="pico-div">
				<h1 id="first-title">O Pico sobe até aos 2351m</h1>
				<a href="https://www.youtube.com/watch?v=WcYG-5b7448" target="blank">
					<img src="imgs/pico.jpg" id="imagem-pico" alt="Pico">
				</a>

				<p id="vaca">A vaca da montanha nada teme</p>

			</div>

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
			</div>


			<div id="foto-amigos">
				<h3>Aqui está uma foto deles:</h3>
				<img src="https://wallpaperaccess.com/full/240618.jpg" width="30%">
			</div>






		</main>

	</body>

</html>