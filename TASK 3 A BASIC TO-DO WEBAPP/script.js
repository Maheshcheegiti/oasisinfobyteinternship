function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou >= 12) {
        pe = "PM";
    }
    if (hou == 0) {
        hou = 12;
    }
    if (hou > 12) {
        hou = hou - 12;
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];

    }
Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

// tasks
const input = document.querySelector('input');
const descr = document.getElementById('descri');
const btn = document.querySelector('.addTask > button');
btn.addEventListener('click', addList);
descr.addEventListener('keyup', (e) => {
    (e.keyCode === 13 ? addList(e) : null);
})

function addList(e) {
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const newIn = document.createElement('input');
    const newDi = document.createElement('input');
    const newTime = document.createElement('input');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
    delBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    newIn.setAttribute("readonly", "");
    newDi.setAttribute("readonly", "");
    newTime.setAttribute("readonly", "");
    newIn.classList.add("input-class");
    newDi.classList.add("desc-class");
    newTime.classList.add("time-class");

    if (input.value !== '') {
        newIn.value = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.classList.add("new-element");
        newLi.appendChild(newIn);
        if (descr.value !== '') {
            newDi.value = descr.value;
            descr.value = "";
        }
        var now = new Date();
        hou = now.getHours(),
            min = now.getMinutes(),
            sec = now.getSeconds(),
            pe = "AM";

        if (hou >= 12) {
            pe = "PM";
        }
        if (hou == 0) {
            hou = 12;
        }
        if (hou > 12) {
            hou = hou - 12;
        }
        newTime.value = hou.pad(2) + ":" + min.pad(2) + ":" + sec.pad(2) + " " + pe;
        newLi.appendChild(newDi);
        newLi.appendChild(newTime);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
        newLi.appendChild(editBtn);
        void newLi.offsetWidth;
        newLi.classList.add("visible");
    }

    checkBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
        editBtn.style.display = 'none';
        var now = new Date();
        hou = now.getHours(),
            min = now.getMinutes(),
            sec = now.getSeconds(),
            pe = "AM";

        if (hou >= 12) {
            pe = "PM";
        }
        if (hou == 0) {
            hou = 12;
        }
        if (hou > 12) {
            hou = hou - 12;
        }
        newTime.value = hou.pad(2) + ":" + min.pad(2) + ":" + sec.pad(2) + " " + pe;
        newLi.classList.remove("visible");
        void newLi.offsetWidth;
        newLi.classList.add("visible");
    });

    delBtn.addEventListener('click', function () {
        newLi.classList.remove("visible");
        void newLi.offsetWidth;
        newLi.classList.add("remover");
        setTimeout(() => {
            const parent = this.parentNode;
            parent.remove();
        }, 500);
    });

    editBtn.addEventListener('click', function () {
        if (newIn.hasAttribute("readonly")) {
            newIn.removeAttribute("readonly");
            newDi.removeAttribute("readonly");
            editBtn.innerHTML = '<i class="fa-regular fa-floppy-disk"></i>';
            editBtn.classList.add("highlight");
            newIn.focus();
        } else {
            newIn.setAttribute("readonly", "");
            newDi.setAttribute("readonly", "");
            editBtn.classList.remove("highlight");            
            var now = new Date();
            hou = now.getHours(),
                min = now.getMinutes(),
                sec = now.getSeconds(),
                pe = "AM";

            if (hou >= 12) {
                pe = "PM";
            }
            if (hou == 0) {
                hou = 12;
            }
            if (hou > 12) {
                hou = hou - 12;
            }
            newTime.value = hou.pad(2) + ":" + min.pad(2) + ":" + sec.pad(2) + " " + pe;
            editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        }
    })
}