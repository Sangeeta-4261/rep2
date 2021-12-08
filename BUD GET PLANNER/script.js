product=new Array();
price=new Array();
function add()
{
    var a=parseInt(prompt("Enter the number of products"));
    for(let i=0;i<a;i++)
    {
    var p = prompt("Enter the product Name");
    product.push(p);
    var q= parseInt(prompt("Enter the price of the product"))
    price.push(q)

    }  
    for(let i=0;i<a;i++){
    document.getElementById("product").innerHTML=(product+"<br>");
    document.getElementById("price").innerHTML=(price+"<br>");
    }
}


function Sum1()
{
   
    var sum=0;
    for(let i=0;i<price.length;i++)
    {
        sum=sum+price[i];
    }
    document.getElementById("sum1").innerHTML="The total budget of Month is :"+sum;
}