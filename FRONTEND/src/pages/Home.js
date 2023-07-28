import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Document</title>
    <link rel="stylesheet" href="https://www.searchenginejournal.com/wp-content/uploads/2020/10/5-fundamental-shifts-that-are-shaping-search-digital-marketing-5f7f23593ac21-1280x720.png" />
</head>

<body>
  <header class="header">
    <a href="#" class="logo"><em>ONLINE MARKETING</em></a>
    <nav class="nav-items">
      
      <Link to="/About"><a href="#">About Us</a></Link>
      <Link to="/Contact"><a href="#">Contact Us</a></Link>
      <Link to="/"><a href="#">Logout</a></Link>
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>DIGITAL MARKETING</h1>
      <p>Good marketing makes the company look smart</p>
      
    </div>
    <div>
    <div class="achievements">
      <div class="work">

      <p class="work-heading">
      <Link to="/Email"><a href="#">EMAIL MARKETING</a></Link></p>
        
        <p class="work-text">EMAILS may best cost efficient but it's no EXCUSE to not produce QUALITY CONTENT to give to a targeted audience</p>
      </div>
      <div class="work">
        
        <p class="work-heading">
        <Link to="/Social"><a href="#">SOCIAL MARKETING </a></Link></p>
        <p class="work-text">Social Media is about the people! not about your Business. Provide for the people and the people will provide for You!</p>
      </div>
      <div class="work">
       
        <p class="work-heading">
        <Link to="/Seo"><a href="#">SEO</a></Link></p>
        
        <p class="work-text">Good Search Engine Optimization(SEO) work only gets better over Time. It's only search engine tricks that need to keep changing when the Ranking Algorithms change.</p>
      </div>
    </div>
      
      
    </div>
    <div class="about-me">
      <div class="about-me-text">
        <h2>Digital Marketing is FUTURE!</h2>
        <p>Ignoring Online Marketing is like opening a Business but not telling anyone.</p>
      </div>

      

      <img src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2021/05/22121232/Untitled-design-391.png" alt="me"></img>
    </div>
  </main>
  <footer class="footer">
    <div class="copy">© Designer</div>
    <div class="bottom-links">
      <div class="links">
        <span>More Info</span>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy policy</a>
        <a href="#">FAQ</a>
        <a href="#">Contact Information</a>
      </div>
      <div class="links">
        <span>Social Links</span>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
</body>
</html>
  
)
}

export default Home
  
