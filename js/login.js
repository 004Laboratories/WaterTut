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
  const txtEmail = document.getElementById('email');
  const txtPassword = document.getElementById('password');
  const btnLogin = document.getElementById('btnLogin');
  
  btnLogin.addEventListener('click',  e => 
	{
		//Get username and password
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign in
		const prom = auth.signInWithEmailAndPassword(email, pass);
		prom.catch(e => console.log(e.message));
	}
  )
  
  
	function writeUserData(userId, name, email, imageUrl, verif) {
		firebase.database().ref('users/' + userId).set({
			username: name,
			email: email,
			loggedIn : true,
			verified : verif
		});
	}
  
  firebase.auth().onAuthStateChanged(user =>
  {
	  var name, email, photoUrl, uid, emailVerified;
	  if(user)
	  {
		   console.log(user);
			name = user.displayName;
			email = user.email;
			photoUrl = user.photoURL;
			emailVerified = user.emailVerified;
			uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
		    writeUserData(uid, name, email, photoUrl, emailVerified);

			
	  } else
	  {
		  console.log('user is not logged in');
	  }
  })
  
  }());