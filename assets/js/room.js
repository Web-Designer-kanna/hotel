const datas = [
    {
      category: "Silver",
      classes: "slide-up-1",
    },
    {
      category: "Gold",
      classes: "slide-up-2",
    },
    {
      category: "Platinum",
      classes: "slide-up-3",
    },
  ];
  
  const moreBtn = document.querySelector(".more-btn");
  const Row = document.querySelector(".room-container .Room-row");
  
  moreBtn.addEventListener("click",getImage);
  
  // More Rooms loaded in the Room-container
  
  let page = 1;
  
  async function getImage() {
    let response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=hotel&client_id=Ey-NZL9GYyXfAaC27-yH9HfsUdwTu7KNI1-PT41Rypc&per_page=12&page=${page}`
    );
    let data = await response.json();
    datas.forEach((item, index) => {
      let col = `
          <div class="col ${item.classes}">
        <div class="image">
          <img src="${data.results[index].urls.regular}">
          <div class="amount">150$/day</div>
        </div>
        <div class="detail">
          <div class="type">
            <strong>${item.category}</strong>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
          <div class="features">
            <div class="feature">
              <i class="fa-solid fa-bed"></i>
              <small>3 Bed</small>
            </div>
            <div class="feature">
              <i class="fa-solid fa-bath"></i>
              <small>3 Bath</small>
            </div>
            <div class="feature">
              <i class="fa-solid fa-wifi"></i>
              <small>Wifi</small>
            </div>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nesciunt fuga nulla earum veniam?</p>
          <div class="btn" onclick="Modalopen()">Book Now</div>
        </div>
      </div>`;
      Row.innerHTML += col;
    });
    page++;
  };