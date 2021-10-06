const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function widenNavBar() {
    var div = document.createElement("div");
    div.style.height = "75%";
    div.style.width = "12%";
    div.style.position = "fixed";
    div.style.zIndex = "0";
    div.style.top = "0";
    div.style.left = "-12%";
    div.style.backgroundColor = "#f0ead6";
    div.style.overflowX = "hidden";
    div.style.borderRadius = "50px";
    div.style.borderStyle = "outset";
    div.style.borderTopColor = "#461F00";
    div.style.borderLeftColor = "#461F00";
    div.style.borderRightColor = "#836953";
    div.style.borderBottomColor = "#836953";
    div.style.top = "10%";
    document.getElementById("main").appendChild(div);
    for(var i=-12;i<=0;i++){
        await sleep(10);
        if(i+1 === 0)
        {
            document.getElementById("main").removeChild(div);
            location.href = "AboutMe.html";
        }
        div.style.left = i+"%";
    }
}

async function moveTitle() {
    var title = document.getElementById("CenterTitle");
    for(var i=90, o=50;i>=0;i--, o--){
        await sleep(10);
        title.style.top = i+"%";
        title.style.opacity = o+"%";
        if(o == 0)
            title.innerHTML = '';
    }
} 

async function moveNotification() {
    var notify = document.getElementById("CenterNotify");
    for(var i=90, o=50;i>=0;i--, o--){
        await sleep(10);
        notify.style.opacity = o+"%";
        if(o == 0)
            notify.innerHTML = '';
    }
}

onkeydown = mainMenuRedirect;
onclick = mainMenuRedirect;
