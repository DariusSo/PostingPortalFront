
document.addEventListener("DOMContentLoaded", () => {
    const stripe = Stripe('pk_test_51PlEGq2KAAK191iLhDLnsyctiFe2E6diwrp3yfU4oUCRwN0tWcEeyy5qUBAUvUJlyVkZ3NXZkg3bO9C3OzHEKkTV00MR9MgtBL'); 
    
    document.getElementById("postButton").addEventListener("click", async () => {
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
        const response = await fetch('http://localhost:8080/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title : title,
            number: number,
            content : content,
            amount: 2000,
            currency: 'usd'
        })
        });
    
        const session = await response.json();
        const sessionId = session.id;
    
        // Redirect to Stripe Checkout
        const { error } = await stripe.redirectToCheckout({ sessionId });
    
        if (error) {
            console.error("Stripe Checkout error:", error.message);
        }
    });
});