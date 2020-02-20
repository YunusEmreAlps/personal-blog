import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ post }) => (
  <div className="my-container">
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width initial-scale=1 , maximum-scale=1"/>
      <title>{post.title}</title>
      <link rel="icon" href="/favicon.ico" />
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
            <a className="nav-link" href="http://yunusemrealpuu.herokuapp.com/about">About</a>
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

    <header>
      {/* Social link */}
      <div className="container">
        <div className="hero">
          <h1 className="text-center text-white display-1">{post.title}</h1>
            <div className="row d-flex justify-content-center">
              <a href="https://github.com/YunusEmreAlps"><span className="fa fa-github"></span></a>
              <a href="https://www.instagram.com/yunusemrealpu/"><span className="fa fa-instagram" id="ins"></span></a>
              <a href="https://www.linkedin.com/in/yunus-emre-alpu-5b1496151/"><span className="fa fa-linkedin" id="lin"></span></a>
              <a href="https://medium.com/@yunus192alpu"><span className="fa fa-medium" id="med"></span></a>
          </div>  
        </div>
      </div>
      <a className="mt-5" href="#post"><span className="fa fa-angle-double-down"></span></a>
    </header>


    <div className="container m-auto pb-4" id="post">
          <div> </div> {/* photo */}
          <div className="border border-dark"> 
            <Link href={post.slug}>
              <h1 className="text-left display-4 p-2">{post.title}</h1>
            </Link>
            <div className="text-left p-2"> <ReactMarkdown source={post.details} /></div>    
          </div> {/* text*/}
          <div >{post.date}</div> {/* title description */}
    </div>

    {/* footer */}
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
        background-image:url("e.jpg");
        background-position:center;
        background-attachment:fixed;
        background-repeat:no-repeat;
        background-size:cover;
      }
    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://yunusemrealpuu.herokuapp.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
