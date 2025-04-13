const adBox = document.getElementById('ad-here')
    
    var style = document.createElement('style');
    style.innerHTML = `
  .myDiv {
    background-color: transparent;
    padding: 1rem;
  }

  .myDiv a {
    text-decoration: none;
    color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
  }

  .myDiv a img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .myDiv p {
    font-weight: 500;
    font-size: 1.2rem;
    margin: 10px;
  }
`;
    document.head.appendChild(style);
    
    var newDivHTML = `
  <div class="myDiv">
    <a href="https://t.me/Anime_In_Hindi_Pro">
      <img id="ad-img" src="" alt="" />
      <p>WATCH HINDI ANIME FOR FREE </p>
    </a>
  </div>
`;
    
    var oldDiv = document.getElementById('ad-here');
    
    oldDiv.outerHTML = newDivHTML;
    
    var adsList = ['https://res.cloudinary.com/dafjjvcsh/image/upload/v1744559856/vsa03exyisvpsvwbnsu9.png?q_auto:good&f_auto&w_1000', 'https://res.cloudinary.com/dafjjvcsh/image/upload/v1744559930/u0ambuezjqmww0et0cxb.jpg?q_auto:good&f_auto&w_1000', 'https://res.cloudinary.com/dafjjvcsh/image/upload/v1744561040/fwwbxhzkzmwxt22a2nyj.jpg?q_auto:good&f_auto&w_1000'];
    
    var randomIndex = Math.floor(Math.random() * adsList.length);
    const img = document.getElementById('ad-img')
    img.src = adsList[randomIndex];
