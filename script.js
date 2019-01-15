function openNav()
{
//document.querySelector('.responsive__nav').style.display = 'grid' ; 
document.querySelector('.responsive__nav').style.opacity = '1'  ;
document.getElementById('nav__responsive').style.width = '50rem' ;
document.getElementById('nav__responsive').style.visibility = 'visible' ;



}
function closeNav()
{
//document.querySelector('.responsive__nav').style.display = 'none' ; 
document.getElementById('nav__responsive').style.width = '0' ;
document.querySelector('.responsive__nav').style.opacity = '0' ; 
document.getElementById('nav__responsive').style.visibility = 'hidden' ;



}
function closeSignup()
{
document.querySelector('.signup').style.visibility = 'hidden' ;
document.querySelector('.signup').style.opacity = '0' ; 

}
function openSignup()
{
document.querySelector('.signup').style.visibility = 'visible' ;
document.querySelector('.signup').style.opacity = '1' ; 
//document.querySelector('.menubar').style.filter = 'blur(15px)' ;

}
document.addEventListener('keypress',function(event)
    {
     
        if (event.keyCode === 27|| Event.which ===27)
        closeSignup()
        
        
    })
    

   