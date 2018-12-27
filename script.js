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