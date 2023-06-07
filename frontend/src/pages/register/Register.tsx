function Register() {
	return (
		<form action="/" method="post">
			<ul>
				<li>
					<p>Presion</p>
					<input id="p" type="text" />
					{/* <input type="email" id="mail" name="user_mail"> */}
				</li>
				<li>
					<p>PH</p>
					<input id="PH" type="text" />
				</li>
				<li>
					<p>Domicilio</p>
					<input id="domicilio" type="text" />
				</li>
			</ul>
		</form>
	);
}


export { Register };
