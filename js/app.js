let prelocalstrogelength = localStorage.length;
document.getElementById("fstpage").addEventListener("click", createtopicfn = () => {
    document.getElementById("container").innerHTML = `<div class="submitarea"><div id="topic">
    <textarea id="topicarea" onclick="topicareaclicked()">Topic</textarea>
</div>
<div id="description">
    <textarea id='discriptionarea' onclick="descriptionareaclicked()">Description</textarea>
</div>
<div id="btn">
    <button id="submitbtn" onclick="submitbtnclicked()">Submit</button>
    <button class="presavedbtn" onclick="presavedbtnclicked()">Check your saved topics</button>
</div></div>`

})



topicareaclicked = () => {
    document.getElementById("topicarea").innerText = ""
}
descriptionareaclicked = () => {
    document.getElementById("discriptionarea").innerText = ""
}
submitbtnclicked = () => {
    if ((document.getElementById("topicarea").value == "Topic" && document.getElementById("discriptionarea").value == "Description") || (document.getElementById("topicarea").value == "" && document.getElementById("discriptionarea").value == "")) {
        alert("Enter Topic and Description to Submit")
    } else if (document.getElementById("topicarea").value == "") {
        alert("Enter Topic Name")
    } else if (document.getElementById("discriptionarea").value == "") {
        alert("Enter Description")
    } else {
        let topic = document.getElementById("topicarea").value
        let description = document.getElementById("discriptionarea").value
        let mynotesobj = { topic: topic, description: description }
        let mynotesjson = JSON.stringify(mynotesobj);
        prelocalstrogelength = localStorage.length;
        localStorage.setItem(prelocalstrogelength, mynotesjson);
        prelocalstrogelength = localStorage.length;
        document.getElementById("discriptionarea").value = ''
        document.getElementById("topicarea").value = ''
    }
}
readnotesfn = (n) => {
    document.getElementById("container").innerHTML = `<div id = "readarea"><textarea id="topicarea" ></textarea>
     
     <div id="description">
         <textarea id='discriptionarea' ></textarea>
     </div>
     <div id="btn">
    
    <button class="presavedbtn" onclick="presavedbtnclicked()">Check your saved topics</button>
</div></div>
     `
    document.getElementById("topicarea").value = JSON.parse(localStorage.getItem(n)).topic
    document.getElementById("discriptionarea").value = JSON.parse(localStorage.getItem(n)).description
}
removebtn = (n) => {
    localStorage.removeItem(n)
    presavedbtnclicked()

}
presavedbtnclicked = () => {
    notes = ``
    if (localStorage.length == 0) {
        document.getElementById("container").innerHTML = `<div id="nosaved">
        <p>No Topics were Submitted</p> <br><div class ="footer"> <button class="createtopicbtn" onclick="createtopicfn()">Click here to add a Topic</button></div>
    </div>`
    } else {
        Object.keys(localStorage).forEach((element) => {
            let println = JSON.parse(localStorage.getItem(element))
            notes += `<div class="card" id=${String(element)} ><div class="topic" onclick="readnotesfn(${element})">${println.topic}</div><div class="description" onclick="readnotesfn(${element})">${println.description}</div><button onclick="removebtn(${element})" class="removebtn" id="rembtn">Remove</button></div>`;
        })


        document.getElementById("container").innerHTML = `<div id=cards>${notes}<div id="addnew" class= "presavedbtn" onclick="createtopicfn() ">Add New Topic</div></div>`


    }



}