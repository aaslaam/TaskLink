const stars = document.querySelectorAll('.review-star');

// Add click event listeners to each star
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
       let current_star_level = index+1;
       console.log(current_star_level);
       stars.forEach((star,j) => {
       if(current_star_level >= j+1)
       {
        star.innerHTML = '&#9733'
       }else{
            star.innerHTML = '&#9734'
       }
    });
})
})