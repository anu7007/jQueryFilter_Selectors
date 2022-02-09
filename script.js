var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];
console.log(products);

$(document).ready(function(){
      
    function buildTable(){
        var table = ""
        for(var i=0; i<products.length;i++){
            table+=`<tr><td>${products[i].id}</td>
                                    <td>${products[i].name}</td>
                                    <td>${products[i].brand}</td>
                                    <td>${products[i].os}</td>
                                    <button><td title="hide" id="hide"> ❌ </td></button>
                                </tr>`
             
        }
        $("#tbody").html(table);
    };
    buildTable(products);

    $("#tbody").on("click","#hide",function(){
        $(this).parent().hide();
    });
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#tbody tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    
    $("#filter1").on("click", function() {
        var value = $(this).val().toLowerCase();
        $("#tbody tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        
    });

    $("#filter2").on("click", function() {
        var value = $(this).val().toLowerCase();
        $("#tbody tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        
    });





});//document.ready function
