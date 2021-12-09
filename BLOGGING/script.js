var a = {};
function addnewarticle()
{
    var x=document.getElementById("username").value;
    var y =document.getElementById("article").value;
    a[x]=y;
    localStorage.setItem('user', JSON.stringify(a));
    console.log('test')
}