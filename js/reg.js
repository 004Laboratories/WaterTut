(function() {
  var config = 
  {
    apiKey: "AIzaSyCo_yZL-oeLSBx_tVN3pzgy8foilnDqUls",
    authDomain: "watertut-cd78f.firebaseapp.com",
    databaseURL: "https://watertut-cd78f.firebaseio.com",
    storageBucket: "watertut-cd78f.appspot.com",
    messagingSenderId: "27752069620"
  };
  firebase.initializeApp(config);
  const txtName1 = document.getElementById('name1');
  const txtName2 = document.getElementById('name2');
  const txtEmail = document.getElementById('email');
  const txtPass1 = document.getElementById('pass1');
  const txtPass2 = document.getElementById('pass2');
  const btnCreate = document.getElementById('create');
  const errPass1 = document.getElementById('passError1');
  const errPass2 = document.getElementById('passError2');
  const activate = "activateaccount.html"
  const minPassLength = 6;
  var suppprom, writeprom;
 
  txtPass1.onblur = function()
  {
	  if(txtPass1.value.length < minPassLength)
		  errPass1.innerHTML = "Your password must contain at least 6 characters";
	  else
		  errPass1.innerHTML = "";
  }; 
  txtPass2.onblur = function()
  {
	  if(txtPass1.value != txtPass2.value)
		  errPass2.innerHTML = "Your passwords must match";
	  else
		  errPass2.innerHTML = "";
  }
 
  btnCreate.addEventListener('click',  e => 
	{
		//Get username and password
		const name1 = txtName1.value;
		const name2 = txtName2.value;
		const email = txtEmail.value;
		const pass1 = txtPass1.value;
		const pass2 = txtPass2.value;	
		
		
		if(pass1 == pass2)
		{
			const auth = firebase.auth();
			const prom = auth.createUserWithEmailAndPassword(email, pass1);
			prom
				.then(user => finishSignUp(user, name1, name2, email))
				.catch(e => document.getElementById('emailError').innerHTML 
					= e.message);		
		}
	}
  )
  
  
	function finishSignUp(user, first, last, email) {
		writeprom = firebase.database().ref('users/' + user.uid).set({
			fistName: first,
			lastName: last,
			email: email,
			loggedIn : false,
			verified : false
		}, 
		function(error)
		{
			if(error)
				alert("mans got fked");
			else
			{
				firebase.auth().signOut();
				window.location = activate;
			}
				});
		supprom = firebase.auth().signOut();
	}
	
	firebase.auth().onAuthStateChanged(function(user)
	{
		console.log(user);
		user.sendEmailVerification(); 
	});
  }());