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
        var htmlPost = document.createElement("div");
        htmlPost.innerHTML = showPost(post);
        postTable.append(htmlPost);
    
    });
}
function showPost(post){
    var dt1 = new Date(post.createdAt)
    return '<div class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">' +
    '<div class="flex justify-between items-center">' +
        '<span class="font-light text-gray-600">'+ dt1 +'</span>' +
    '</div>' +
    '<div class="mt-2">' +
        '<a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">'+ post.title +'</a>' +
        '<p class="mt-2 text-gray-600">'+ post.content +'</p>' +
    '</div>' +
    '<div class="flex justify-between items-center mt-4">' +
        
        '<div>' +
            '<a class="flex items-center" href="#">' +
                '<h1 class="text-gray-700 font-bold">'+ post.number +'</h1>' +
            '</a>' +
        '</div>' +
    '</div>' +
'</div>'
}