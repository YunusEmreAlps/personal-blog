import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div className="my-container">
    
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link> {/* Bootstrap */}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>  
    </Head>

    {/* Navigation bar */}
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" id="brand">
      <a className="navbar-brand" href="http://yunusemrealpuu.herokuapp.com">Yunus Emre Alpu</a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="http://yunusemrealpuu.herokuapp.com">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="http:/yunusemrealpuu.herokuapp.com/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://yunusemrealpuu.herokuapp.com/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    {/* Social link */}
    <header>
      <div className="container">
        <div className="hero">
          <h1 className="text-center text-white display-1">Yunus Emre Alpu</h1>
            <div className="row d-flex justify-content-center">
              <a href="https://github.com/YunusEmreAlps"><span className="fa fa-github"  data-toggle="tooltip" data-placement="bottom" title="GitHub"></span></a>
              <a href="https://www.instagram.com/yunusemrealpu/"><span className="fa fa-instagram" id="ins"  data-toggle="tooltip" data-placement="bottom" title="Instagram"></span></a>
              <a href="https://www.linkedin.com/in/yunus-emre-alpu-5b1496151/"><span className="fa fa-linkedin" id="lin" data-toggle="tooltip" data-placement="bottom" title="LinkedIn"></span></a>
              <a href="https://medium.com/@yunus192alpu"><span className="fa fa-medium" id="med" data-toggle="tooltip" data-placement="bottom" title="Medium"></span></a>
              <a href="CV.pdf" download><span className="fa fa-download" id="cv" data-toggle="tooltip" data-placement="bottom" title="Download my CV"></span></a>
          </div>  
        </div>
      </div>
      <a className="mt-5" href="#about"><span className="fa fa-angle-double-down"></span></a>
    </header>



    {/* posts */}
    <div className="container m-auto pb-4" id="about">
      <div className="border border-dark">
          
        <div id="carouselExampleIndicators" className="carousel slide"  data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-50 m-auto rounded-circle" src="cd.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-50 m-auto rounded-circle" src="c.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-50 m-auto rounded-circle" src="d.jpg" alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div>
          <h1 className="text-left display-4 p-2">Me</h1>
          <div className="text-left p-2"> I'm a software engineer and my second year at NE university. Technology has always been an interest in my life from the first generations iPhone.
          Today, I am interested in discovering any opportunities that are focused on business, web, robotic technologies, and artificial intelligence. 
          Last Summer I went abroad for my language and my job. I want to be a good computer engineer and everyday improve myself.
          </div>
          <h1 className="text-left display-4 p-2">Languages</h1>
          <div className="text-left p-2">I'm very passionate about language learning.Right now I'm focusing on improving my Spanish and English.</div>
          <h1 className="text-left display-4 p-2">Web Development</h1>
          <div className="text-left p-2">Right now I'm interest in Web development.Two years ago I learned HTML and CSS then I start to learn JavaScript and React.Everday improve myself.</div>  
          </div>
            <div className="text-left p-2"></div>         
          </div> {/* text*/}
          <div></div> {/* title description */}
      </div>

    <footer className="page-footer font-small bg-dark">
      <div className="container">
              <div className="row d-flex justify-content-center p-3">
                <a href="https://github.com/YunusEmreAlps"><span className="fa fa-github"></span></a>
                <a href="https://www.instagram.com/yunusemrealpu/"><span className="fa fa-instagram" id="ins"></span></a>
                <a href="https://www.linkedin.com/in/yunus-emre-alpu-5b1496151/"><span className="fa fa-linkedin" id="lin"></span></a>
                <a href="https://medium.com/@yunus192alpu"><span className="fa fa-medium" id="med"></span></a>
            </div>  
          </div>
        <a className="mt-5" href="#brand"><span className="fa fa-angle-double-up"></span></a> 
        <p className="text-center text-white display-5">© 2020 Designed by Yunus Emre Alpu</p>>
    </footer>


    <style jsx>{`
      .my-container{
        width: 100%;
        margin: 0 auto;
      }
      .hero {
        margin: 96px 0;
      }
      .fa {
        display:inline-block;
        padding: 10px;
        font-size: 30px;
        width: 50px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
        background-color:black;
        color:white;
        border-radius:25px;
        align:center;
      }
      .fa:hover {
          opacity: 0.7;
      }
      #ins:hover {
        background-color: #125688;
        color: white;
      }
      #lin:hover {
        background-color: #007bb5;
        color: white;
      }
      #med:hover {
        background-color: #00b489;
        color: white;
      }
      #cv:hover {
        background-color: RoyalBlue;
        color: white;
      }
      #posttitle:hover {
        color:#6f2232;
      }
      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }
      ::selection {
        color: #00b489;
      }
      a {
        color: #35459e;
        text-decoration: none;
      }  
      header{
        padding: 15% 0;
        margin-bottom:96px;
        background-image:url("g.jpg");
        background-position:center;
        background-attachment:fixed;
        background-repeat:no-repeat;
        background-size:cover;
        -o-background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://yunusemrealpuu.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;