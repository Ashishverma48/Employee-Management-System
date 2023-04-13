// Global declaration
var arr_custromer = [];
var txt_id = document.getElementById('txt_id'); 
var txt_name = document.getElementById('txt_name'); 
var txt_address = document.getElementById('txt_add'); 
var txt_mobile = document.getElementById('txt_mob');
var table = document.getElementById('tabCustomer');


// connect 




// Event 
function btnAddClick(){
    let idNum = parseInt(txt_id.value); 


    let name = txt_name.value; 
    let add = txt_address.value; 
    let mobileNo = txt_mobile.value; 
    addCustomer(idNum,name,add,mobileNo)
    console.log(arr_custromer);
    for( let i of arr_custromer){
        console.log(i);
    }
    console.log(arr_custromer);
    
}
function btnSearchClick(){
    let id = parseInt(txt_id.value);
    let objCus = searchCustomerById(id)
    if (objCus == undefined){
        alert("Id Not found")
    }
    else{
        txt_name.value = objCus.name;
        txt_address.value = objCus.add;
        txt_mobile.value = objCus.mobile;
        document.getElementById(`td_${objCus.id}`).style.backgroundColor='red';
        document.getElementById(`td_${objCus.id}`).style.color='white';
    }
   
    console.log(objCus);
    

}

function btnModifyClick(){
    let id = parseInt(txt_id.value);
}


// Normal function 
function addCustomer(id,name,add,mobile){
    let objCustomer = {
        id:id,
        name:name,
        add:add,
        mobile:mobile

    };
    arr_custromer.push(objCustomer);
    showDataInTable(objCustomer)
}

function searchCustomerById(id){
    var objCus = arr_custromer.find((e)=>e.id==id)
    return objCus

}



function showDataInTable(objCustomer){
    var tr = document.createElement('tr');
    tr.setAttribute('id',`td_${objCustomer.id}`)    

    var tdId = document.createElement('td');;
    var txtId = document.createTextNode(objCustomer.id);
    tdId.appendChild(txtId);
    tr.appendChild(tdId)

    var tdName = document.createElement('td');;
    var txtName = document.createTextNode(objCustomer.name);
    tdName.appendChild(txtName);
    tr.appendChild(tdName)

    var tdAdd = document.createElement('td');;
    var txtAdd = document.createTextNode(objCustomer.add);
    tdAdd.appendChild(txtAdd);
    tr.appendChild(tdAdd)

    var tdMob = document.createElement('td');;
    var txtMob = document.createTextNode(objCustomer.mobile);
    tdMob.appendChild(txtMob);
    tr.appendChild(tdMob)

    table.appendChild(tr)

   
}