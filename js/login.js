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
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout')
  
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
  
  btnLogout.addEventListener('click', e =>
  {
	firebase.auth().signOut();  
  })
  
  btnSignUp.addEventListener('click',  e => 
	{
		//Get username and password
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign in
		const prom = auth.createUserWithEmailAndPassword(email, pass);
		prom.catch(e => console.log(e.message));
	}
  )
  
  firebase.auth().onAuthStateChanged(firebaseUser =>
  {
	  if(firebaseUser)
	  {
		  console.log(firebaseUser);
	  } else
	  {
		  console.log('user is not logged in');
	  }
  })
  
  }());