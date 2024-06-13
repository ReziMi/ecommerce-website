import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags"
import PopularPost from "../shop/PopularPost"

const socialList = [
{
link: "#",
iconName: "icofont-facebook",
className: "facebook",
},
{
link: "#",
iconName: "icofont-twitter",
className: "twitter",
},
{
link: "#",
iconName: "icofont-linkedin",
className: "linkedin",
},
{
link: "#",
iconName: "icofont-instagram",
className: "instagram",
},
{
link: "#",
iconName: "icofont-pinterest",
className: "pinterest",
},
];


function SingleBlog() {
  const [blog, setBlog] = useState(blogList);

  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} className="w-100"></img>
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}>
                                          {val.text}
                                        </i>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Numquam consectetur
                                  inventore, fuga ab eius illum quia pariatur
                                  eaque praesentium quasi, voluptas cupiditate
                                  maxime, aliquam quam? At quibusdam ratione
                                  soluta quae.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis.
                                  </p>
                                  <cite>
                                    <a href="#">...Melisa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Eaque quisquam fugiat magni?
                                  Minus libero minima quaerat facere velit harum
                                  quia ducimus? Eos corrupti veritatis enim
                                  labore asperiores, a suscipit totam?
                                </p>
                                <img src="/src/assets/images/blog/single/01.jpg" />
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Saepe ullam temporibus unde!
                                  Culpa atque quis rerum eius ratione, soluta
                                  aperiam tempora, ullam itaque velit vero
                                  repudiandae fugit adipisci libero dolor.
                                </p>

                                <div className="video-thumb">
                                  <img src="/src/assets/images/blog/single/02.jpg" />
                                  <a
                                    href="https://www.youtube.com/watch?v=B0qAKvjH2kg"
                                    className="video-button popup" target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Eveniet optio voluptatum cum
                                  est ullam cupiditate veritatis pariatur?
                                  Reprehenderit corrupti ducimus similique
                                  quisquam officia laborum voluptatibus totam
                                  excepturi, molestiae dignissimos fugiat.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a>Agency</a>
                                    </li>
                                    <li>
                                      <a>Business</a>
                                    </li>
                                    <li>
                                      <a>Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">{
                                    socialList.map((val, i)=>(
                                        <li key={i}>
                                            <a href="#" className={val.className}>
                                                <i className={val.iconName}></i>
                                            </a>
                                        </li>
                                    ))
                                  }</ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev">
                                <i className="icofont-double-left">Previous Blog</i>
                            </a>
                            <a href="#" className="title">
                                Lorem ipsum dolor sit amet.
                            </a>
                        </div>
                        <div className="right">
                            <a href="#" className="prev">
                                <i className="icofont-double-right">Previous Blog</i>
                            </a>
                            <a href="#" className="title">
                                Lorem ipsum dolor sit amet.
                            </a>
                        </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="col-lg-4 col-12">
                <aside>
                    <Tags/>
                    <PopularPost/>
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
