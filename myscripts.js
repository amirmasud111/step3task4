var styleAll = document.getElementById("filterAll");
var styleActive = document.getElementById("filterActive");
var styleCp = document.getElementById("filterComplated");
var Edit = document.getElementsByClassName("Edit");
var ul = document.getElementById("ToDolist");
var item = document.getElementById("input");
var close = document.getElementsByClassName("close");
var checke = document.getElementsByClassName("checke");

var All = document.getElementsByClassName("All");
var cp = document.getElementsByClassName("cp");

function newItem() {

    var li = document.createElement("li");
    var editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = item.value;
    editInput.className = "EditInput";
    editInput.readOnly = true;
    li.appendChild(editInput);

    li.classList.add("All");

    if (item.value !== "") {
        ul.appendChild(li);
        item.value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.parentNode.removeChild(div);

            }
        }

        var spanx = document.createElement("SPAN");
        var txtx = document.createTextNode("\u2713");
        spanx.className = "checke";
        spanx.appendChild(txtx);
        li.appendChild(spanx);

        for (i = 0; i < checke.length; i++) {

            checke[i].onclick = function() {

                var divx = this.parentElement;
                var xx = divx.querySelector("input");
                if (xx.style.textDecoration == "line-through") {
                    xx.style.textDecoration = "none";
                    xx.style.backgroundColor = "#ffa";
                    divx.classList.remove("cp");
                    divx.classList.add("All");

                } else {
                    xx.style.textDecoration = "line-through";
                    xx.style.backgroundColor = "#ff4";
                    divx.classList.remove("All");
                    divx.classList.add("cp");
                }
            }
        }

        var spany = document.createElement("img");
        spany.src = "https://img.icons8.com/material-sharp/24/000000/edit.png";
        spany.className = "Edit";
        li.appendChild(spany);

        for (i = 0; i < Edit.length; i++) {
            Edit[i].onclick = function() {
                var divy = this.parentElement;
                var zz = divy.querySelector("input");
                if (zz.readOnly == true) {
                    zz.readOnly = false;
                    zz.style.fontWeight = "bold";
                } else {
                    zz.readOnly = true;
                    zz.style.fontWeight = "normal";
                }

            }
        }

    }

}

function showcp() {
    styleCp.style.borderRadius = "20px";
    styleCp.style.boxShadow = "0px 0px 10px";
    styleActive.style.borderRadius = "5px";
    styleActive.style.boxShadow = "none";
    styleAll.style.borderRadius = "5px";
    styleAll.style.boxShadow = "none";
    for (var z = 0; z < All.length; z++) {
        All[z].style.display = "none";

    }
    for (var f = 0; f < cp.length; f++) {
        cp[f].style.display = "block";
    }
}

function showAll() {
    styleCp.style.borderRadius = "5px";
    styleCp.style.boxShadow = "none";
    styleActive.style.borderRadius = "5px";
    styleActive.style.boxShadow = "none";
    styleAll.style.borderRadius = "20px";
    styleAll.style.boxShadow = "0px 0px 10px";
    for (var z = 0; z < All.length; z++) {
        All[z].style.display = "block";

    }
    for (var x = 0; x < cp.length; x++) {
        cp[x].style.display = "block";
    }
}

function showActive() {
    styleCp.style.borderRadius = "5px";
    styleCp.style.boxShadow = "none";
    styleAll.style.borderRadius = "5px";
    styleAll.style.boxShadow = "none";
    styleActive.style.borderRadius = "20px";
    styleActive.style.boxShadow = "0px 0px 10px";
    for (var x = 0; x < cp.length; x++) {
        cp[x].style.display = "none";
    }

    for (var z = 0; z < All.length; z++) {
        All[z].style.display = "block";

    }

}