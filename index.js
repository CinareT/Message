var istifadeciler=[
    {     
       ad : "cinare",
       password : "cinare18"
    },
    {
        ad : "oktay",
        password : "cinare18"
    }
    
 ]
 const firebaseConfig = {
    apiKey: "AIzaSyDFUMQdhx_HLoITkgT3MLYxiEAuPllt0uw",
    authDomain: "index-bef06.firebaseapp.com",
    databaseURL: "https://index-bef06-default-rtdb.firebaseio.com",
    projectId: "index-bef06",
    storageBucket: "index-bef06.appspot.com",
    messagingSenderId: "136707954500",
    appId: "1:136707954500:web:e70982b9719d06bd166911"
  };
  firebase.initializeApp(firebaseConfig);
 var db=firebase.database().ref();
 var form=document.querySelector(`.form`);
var btn=document.querySelector(`.send`);
var login=document.querySelector(`.login`);
var esas=document.querySelector(`.esas`);
var yourName=document.querySelector(`#yourName`);
var message=document.querySelector(`.message`);
var textArea=document.querySelector(`textArea`);
var mesArea=document.querySelector('#mesArea')
var ad=document.querySelector(`#name`);
var password=document.querySelector(`#password`);
var sign=document.querySelector('.sign');
var container=document.querySelector('.container');
var giris=document.querySelector('.giris');
var about=document.querySelector('.about');
var email=document.querySelector('#email');
var eSifre=document.querySelector('#e_sifre');
var google=document.querySelector('.google');

login.onclick=function(){
    
    ad=ad.value;
    password=password.value;
    for(var i=0; i<istifadeciler.length; i++){
        if(istifadeciler[i].ad ==ad.trim() || istifadeciler[i].password ==password){
            form.style.display=`none`;
            esas.style.display=`block`;
            yourName.innerText=`Welcome to our site, ${ad}!`;
        }
      
    }
}
sign.onclick=function(){
   container.style.display=`block`;
   form.style.display=`none`
}
google.onclick=function(){
    container.style.display=`none`;
    esas.style.display=`block`;
    
}
btn.onclick=function(){

    db.set({
    textArea: textArea.value,
    name: ad
})
textArea.value="";
}
db.on('value',function(snapshot){
var x=snapshot.val();
var p=$('<p></p>');
p.text(`${x.name} : ${x.textArea}`);
if(x === null || x === undefined){
}
else{
    $('.message').append(p)
}
})