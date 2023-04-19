<template >
    <nav class="navbar navbar-expand-lg mt-2 justify-content-md-center">
  <div class="container-fluid">
   
    <a class="navbar-brand justify-content-start" href="#"><img src="../../assest/img/logo.png" alt=""></a>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Sell on Shopka</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Register</a>
        </li>
        <li class="nav-item">
          <form class="d-flex search-form mx-5 justify-content-center fw-lighter" role="search">
            <!-- <i class="far fa-search">s</i> -->
            <i class="fas fa-magnifying-glass mx-2 mt-2"></i>
            <input class="form-control me-2" type="text" placeholder="useless items on white background" aria-label="Search">
            <!-- <button type="button" class="btn-close xbtn"><i class="bi bi-x-lg"></i></button> -->
            <i class="fas fa-xmark mx-3 mt-2"></i>
          </form>
        </li>
        <li class="nav-item ">
          <a href="#" class="nav-link  consuemer-link"> Consumer Electronics</a>
        </li>
        
        
    </ul>
    <div class="d-flex justify-content-end">
        <button class="btn btn-outline-primary mx-2" type="submit">Sign In</button>
        <button class="btn btn-light mx-3 cart-btn position-relative" type="submit">My cart 
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" > 5 </span>
        </button>
        <img src="@/assest/img/user.jpg" alt="" class="user-shape">
    </div>

    
    </div>
  </div>
</nav>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
     .navbar-brand img{
      width: 200px;
      height: 70px;
    }
    .search-form{
      background-color: whitesmoke;
      border-radius: 50px;
      width: 500px;
     
    }
    .search-form input{
      border: none;
      background-color: transparent;
    }
    .search-form input:focus{
        border: none;
        border-color: transparent;
    }
    .search-form button{
      border: none;
      background-color: transparent;
    }
    .search-form .bi-search,.xbtn{
    margin: 5px 15px; 
    }
    .consuemer-link{
        color: #2264D1
;
    }
    .cart-btn{
        background-color: white;
        box-shadow: 0px 2px 4px rgba(27, 78, 163, 0.2), 0px 4px 8px rgba(41, 121, 255, 0.2);
        color: #2264D1;
        gap: 8px;
    }
  
    .user-shape{
        width: 40px;
        height: 40px;
        border-radius: 505%;
    }
</style>