async function fetchPosts() {
    try {
        const response = await fetch('http://127.0.0.1:8080/getPosts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
    
        const posts = await response.json();
        
        if(!Object.keys(posts).length){
          console.log("no data found");
      }else{
          displayPosts(posts);
        }
        
    } catch (error) {
      console.log(error);
    }
}
function displayPosts(posts) {
    var postTable = document.getElementById("posts")
    postTable.innerHTML = '';
    posts.forEach(post => {
        var number = document.createElement("p");
        number.innerHTML = post.number
        var createdAt = document.createElement("p");
        createdAt = post.createdAt;
        var title = document.createElement("p");
        title.innerHTML = post.title;
        var content = document.createElement("p");
        content = post.content;
        var line = document.createElement("div");
        line.style.borderBlock = "solid";
        line.style.borderBlockWidth = "1px";
        
        postTable.append(number);
        postTable.append(createdAt);
        postTable.append(title);
        postTable.append(content);
        postTable.append(line);
    
    });
}