function getbooks(){
    document.getElementById('output').innerHTML="";
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value).then(a => a.json()).then(response => {
        for(var i=0; i<10; i++){
            let book = "<div class='space'><h2>"+"Title : "+response.docs[i].title+"</h2>"+"<h4>"+"Author Name: "+response.docs[i].author_name[0]+"</h4><br><img class='pic'src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><br><br></div>";
            document.getElementById("output").innerHTML += book;
        }
    })
}