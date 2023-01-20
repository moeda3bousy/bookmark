var first = document.getElementById('name')
var second = document.getElementById('site')
var btn = document.getElementById('btn');
var s = document.getElementById('search');
var mainindex;
var sites = [];
if (localStorage.getItem("sites") != null) {
    sites = JSON.parse(localStorage.getItem("sites"));
}

getData();

function storeData() {

    if (btn.innerHTML == 'Submit') {
        var site = {
          name: first.value,
          site: second.value,
        };

        sites.push(site);
        localStorage.setItem("sites", JSON.stringify(sites));
        clearData();
        getData();
    }
    else {
        sites[mainindex].name = first.value;
        sites[mainindex].site = second.value;

        localStorage.setItem("sites", JSON.stringify(sites));
        clearData();
        getData();
        btn.innerHTML = 'Submit';

    }
}

function clearData() {
    first.value = "";
    second.value = "";
}

function getData() {
    var cartoona = "";
    for (i = 0; i < sites.length; i++) {
        cartoona += `
        <div class="text-start py-4 px-3 my-4 bg-light row flex-nowrap " id="">
        <div class='col-3'>
            <div>
        <h2>${sites[i].name}</h2>
    </div>
        </div>
        <div class='col-1 offset-3'>
            <div>
       <a href="${sites[i].site}" target="_blank" class="btn btn-primary">Visite</a>
    </div>
        </div>
        <div class='col-1 offset-1'>
            <div>
                <button onclick='updateData(${i})' class="btn btn-danger">Update</button>
    </div>
        </div>
        <div class='col-1 offset-1'>
            <div>
                <button onclick='deleteData(${i})' class="btn btn-danger">Delete</button>
    </div>
        </div>
    </div>
    `
    }
    document.getElementById('content').innerHTML = cartoona;
}

function deleteData(index) {
    sites.splice(index, 1)
    localStorage.setItem("sites", JSON.stringify(sites));
    getData();
}

function updateData(index) {
    mainindex = index;
    first.value = sites[index].name;
    second.value = sites[index].site;
    btn.innerHTML = 'Update';
}

function searchData() {
    var search = s.value;
    var cartoona = "";
    for( var i=0; i < sites.length; i++){
    if (sites[i].name.toLowerCase().includes(search.toLowerCase())) {
            cartoona += `
            <div class="text-start py-4 px-3 my-4 bg-light row flex-nowrap " id="">
            <div class='col-3'>
                <div>
            <h2>${sites[i].name}</h2>
        </div>
            </div>
            <div class='col-1 offset-3'>
                <div>
           <a href="${sites[i].site}" target="_blank" class="btn btn-primary">Visite</a>
        </div>
            </div>
            <div class='col-1 offset-1'>
                <div>
                    <button onclick='updateData(${i})' class="btn btn-danger">Update</button>
        </div>
            </div>
            <div class='col-1 offset-1'>
                <div>
                    <button onclick='deleteData(${i})' class="btn btn-danger">Delete</button>
        </div>
            </div>
        </div>
        `
    }
    document.getElementById('content').innerHTML = cartoona;
}
    
}