function createPost(){
    //body parametrai
    var title = document.getElementById("postTitle").value;
    var number = document.getElementById("postNumber").value;
    if(number.length == 11){
      number = "+" + number;
    }
    var content = document.getElementById("postContent").value;
    if(title == "" || number == "" || content == ""){
      alert("All fields must be completed.")
      window.location.reload();
    }
    try{
      (async () => {
        const rawResponse = await fetch('http://127.0.0.1:8080/createPost', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title : title,
            number: number,
            content : content
            })
            
        });
        const response1 = await rawResponse.text();
        if(rawResponse.status == 501){
          alert(response1);
        }else{
          document.getElementById("postTitle").value = "";
          document.getElementById("postNumber").value = "";
          document.getElementById("postContent").value = "";
          fetchPosts(); 
        }
      })();
      
    }catch(err){
        console.error(err);
    }
  }