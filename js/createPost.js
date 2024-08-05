function createPost(){
    //body parametrai
    var title = document.getElementById("postTitle").value;
    var number = document.getElementById("postNumber").value;
    var content = document.getElementById("postContent").value;
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
      })();
    }catch(err){
        console.error(err);
    }
    window.location.reload(); 
  }