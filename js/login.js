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
  const btnLogin = document.getElementById('login');
  const loginError = document.getElementById('loginError');
  
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
  
  
  firebase.auth().onAuthStateChanged(user =>
  {
	  if(user)
	  {
		   console.log(user);		
		   alert("Bless fam ur in, but water tut still in dev, loggin ur ass out now");
		   firebase.auth().signOut();
	  } else
	  {
		  console.log('user is not logged in');
	  }
  })
  
  }());
  
