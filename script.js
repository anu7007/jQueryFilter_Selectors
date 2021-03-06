var OS_array=['iOs', 'Android', 'Windows'];
var brand_array=['Apple', 'Samsung', 'Motorola', 'Asus', 'Microsoft'];
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

$(document).ready(function(){

    function dropdown1(){
        var dropdown1 = `<label for="filters">Choose by Brand:</label>\
        <select name="filter1" id="filter1" class="filter">\
            <option value="">All</option>\
            <option value="apple" class="brand">Apple</option>\
            <option value="samsung" class="brand">Samsung</option>\
            <option value="motorola" class="brand">Motorola</option>\
            <option value="asus" class="brand">Asus</option>\
            <option value="microsoft" class="brand">Microsoft</option>\
        </select>`
        $('#dropdown1').html(dropdown1);
    }
    dropdown1();

    function dropdown2(){
        var dropdown2=`<label for="filters">Choose by Operating System:</label>
        <select name="filter2" id="filter2" class="filter">
            <option value="">All</option>
            <option value="iOs" class="os">iOs</option>
            <option value="android" class="os">Android</option>
            <option value="Windows" class="os">Windows</option>
        </select>`
        $('#dropdown2').html(dropdown2);
    }
    dropdown2();


    function buildTable(){

        var table = ""
        
        for(var i=0; i<products.length;i++){
            table+=`<tr><td>${products[i].id}</td>
                                    <td>${products[i].name}</td>
                                    <td class="brand" data-brand='${products[i].brand}'>${products[i].brand}</td>
                                    <td class="os" data-os='${products[i].os}'>${products[i].os}</td>
                                    <button><td title="hide" id="hide"> ??? </td></button>
                                </tr>`;
             
        }
        $("#tbody").html(table);
    };
    buildTable(products);
    
    $('.filter').change(function(){
          filter_function();
      });
    // $('table tbody tr').show();

    function filter_function(){
        $('#tbody tr').hide(); //hide all rows
        
        var osFlag = 0;
        var osValue = $('#filter1').val();
        var brandFlag = 0;
        var brandValue = $('#filter2').val();
       //traversing each row one by one
       console.log(osValue, brandValue);
        $('#tbody tr').each(function() {  
        
          if(osValue == 0){   //if no value then display row
            // console.log("hello1")
            osFlag = 1;
          }
          else if(osValue == $(this).find("td.os").data("os")){
            // console.log("hello2")
            osFlag = 1;       //if value is same display row
          }
          else{
            // console.log("hello3")
            osFlag = 0;
          }
          
          
           if(brandValue == 0){
            // console.log("hello4")
          brandFlag = 1;
          }
          else if(brandValue == $(this).find("td.brand").data("brand")){
            // console.log("hello5")
            brandFlag = 1;
          }
          else{
            // console.log("hello6")
            brandFlag = 0;
          }
          if(osFlag && brandFlag){
            // console.log("hello7")
            $(this).show();  //displaying row which satisfies all conditions
          }
        });
    }


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
