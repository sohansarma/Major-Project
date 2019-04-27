import React from 'react';
import MaterialUploader from './MaterialUploader';
import QueryModel from './Query';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';



const Main = () => {

return(
    <div>
         <main>
            <div className="main-section">
              <div className="container">
                <div className="main-section-data">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                      <div className="main-left-sidebar no-margin">
                        <div className="user-data full-width">
                          <div className="user-profile">
                            <div className="username-dt">
                              <div className="usr-pic">
                                <img src="images/resources/user-pic.png" alt />
                              </div>
                            </div>{/*username-dt end*/}
                            <div className="user-specs">
                              <h3>John Doe</h3>
                              <span>Graphic Designer at Self Employed</span>
                            </div>
                          </div>{/*user-profile end*/}
                          <ul className="user-fw-status">
                            <li>
                              <h4>Following</h4>
                              <span>34</span>
                            </li>
                            <li>
                              <h4>Followers</h4>
                              <span>155</span>
                            </li>
                            <li>
                              <a href="" title>View Profile</a>
                            </li>
                          </ul>
                        </div>{/*user-data end*/}
                        <div className="suggestions full-width">
                          <div className="sd-title">
                            <h3>Suggestions</h3>
                            <i className="la la-ellipsis-v" />
                          </div>{/*sd-title end*/}
                          <div className="suggestions-list">
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s1.png" alt /> */}
                              <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s2.png" alt /> */}
                              <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s3.png" alt /> */}
                              <div className="sgt-text">
                                <h4>Poonam</h4>
                                <span>Wordpress Developer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s4.png" alt /> */}
                              <div className="sgt-text">
                                <h4>Bill Gates</h4>
                                <span>C &amp; C++ Developer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s5.png" alt /> */}
                              <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s6.png" alt /> */}
                              <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="view-more">
                              <a href="#" title>View More</a>
                            </div>
                          </div>{/*suggestions-list end*/}
                        </div>{/*suggestions end*/}
                        <div className="tags-sec full-width">
                          <ul>
                            <li><a href="#" title>Help Center</a></li>
                            <li><a href="#" title>About</a></li>
                            <li><a href="#" title>Privacy Policy</a></li>
                            <li><a href="#" title>Community Guidelines</a></li>
                            <li><a href="#" title>Cookies Policy</a></li>
                            <li><a href="#" title>Career</a></li>
                            <li><a href="#" title>Language</a></li>
                            <li><a href="#" title>Copyright Policy</a></li>
                          </ul>
                          <div className="cp-sec">
                            {/* <img src="images/logo2.png" alt /> */}
                            {/* <p><img src="images/cp.png" alt />Copyright 2017</p> */}
                          </div>
                        </div>{/*tags-sec end*/}
                      </div>{/*main-left-sidebar end*/}
                    </div>
                    <div className="col-lg-6 col-md-8 no-pd">
                      <div className="main-ws-sec">
                        <div className="post-topbar">
                         
                            <div className="post-st">
                            <ul>
                              <li>
                              <MaterialUploader />
                             </li>
                              <li>
                             <QueryModel />
                              </li>
                            </ul>
                          </div>{/*post-st end */}
                        </div>{/*post-topbar end */}
                        <div className="posts-section">
                          <div className="post-bar">
                            <div className="post_topbar">
                              <div className="usy-dt">
                                {/* <img src="images/resources/us-pic.png" alt /> */}
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <span>3 min ago</span>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <a href="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                <ul className="ed-options">
                                  <li><a href="#" title>Edit Post</a></li>
                                  <li><a href="#" title>Unsaved</a></li>
                                  <li><a href="#" title>Unbid</a></li>
                                  <li><a href="#" title>Close</a></li>
                                  <li><a href="#" title>Hide</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="epi-sec">
                              <ul className="descp">
                                <li><span>Epic Coder</span></li>
                                <li><span>India</span></li>
                              </ul>
                              <ul className="bk-links">
                                <li><a href="#" title><i className="la la-bookmark" /></a></li>
                                <li><a href="#" title><i className="la la-envelope" /></a></li>
                              </ul>
                            </div>
                            <div className="job_descp">
                              <h3>Programming in PHP Notes</h3>
                              <ul className="job-dt">
                                <li><a href="#" title>SRM IST</a></li>
                                <li><span>7th sem</span></li>
                              </ul>
                              <p>If you want to be Pro in PHP programming get ahead with the Best material that are taught in SRM... <a href="#" title>view more</a></p>
                              <button style={{marginLeft:'0px'}}className="common_button_style button_padding_margin">View</button>
                              <button className="common_button_style button_padding_margin">Download</button>
                              <ul className="skill-tags">
                                <li><a href="#" title>#SRM</a></li>
                                <li><a href="#" title>#PHP</a></li>
                                <li><a href="#" title>#7th_SEM</a></li>
                                <li><a href="#" title>#15SE302</a></li>
                                <li><a href="#" title>#CLASS_NOTES</a></li> 	
                              </ul>
                            </div>
                            <div className="job-status-bar">
                              <ul className="like-com">
                                <li>
                                  <a href="#"><i className="la la-heart" /> Like</a>
                                  {/* <img src="images/liked-img.png" alt /> */}
                                  <span>25</span>
                                </li> 
                                <li><a href="#" title className="com"><img src="images/com.png" alt /> Comment 15</a></li>
                              </ul>
                              <a><i className="la la-eye" />Views 50</a>
                            </div>
                          </div>{/*post-bar end*/}
                        
                          <div className="post-bar">
                            <div className="post_topbar">
                              <div className="usy-dt">
                                {/* <img src="images/resources/us-pic.png" alt /> */}
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <span>3 min ago</span>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <a href="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                <ul className="ed-options">
                                  <li><a href="#" title>Edit Post</a></li>
                                  <li><a href="#" title>Unsaved</a></li>
                                  <li><a href="#" title>Unbid</a></li>
                                  <li><a href="#" title>Close</a></li>
                                  <li><a href="#" title>Hide</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="epi-sec">
                              <ul className="descp">
                                <li><span>Epic Coder</span></li>
                                <li><span>India</span></li>
                              </ul>
                              <ul className="bk-links">
                                <li><a href="#" title><i className="la la-bookmark" /></a></li>
                                <li><a href="#" title><i className="la la-envelope" /></a></li>
                                {/* <li><a href="#" title className="bid_now">Bid Now</a></li> */}
                              </ul>
                            </div>
                            <div className="job_descp">
                              <h3>WEB PROGRAMMING MATERIAL</h3>
                              <ul className="job-dt">
                                <li><a href="#" title>SRM IST</a></li>
                                <li><span>7th SEM</span></li>
                              </ul>
                              <p>If you want to be Pro in PHP programming get ahead with the Best material that are taught in SRM... <a href="#" title>view more</a></p>
                              <button style={{marginLeft:'0px'}}className="common_button_style button_padding_margin">View</button>
                              <button className="common_button_style button_padding_margin">Download</button>
                              <ul className="skill-tags">
                                <li><a href="#" title>#HTML</a></li>
                                <li><a href="#" title>#PHP</a></li>
                                <li><a href="#" title>#CSS</a></li>
                                <li><a href="#" title>#Javascript</a></li>
                                <li><a href="#" title>#SRM</a></li> 	
                              </ul>
                            </div>
                            <div className="job-status-bar">
                              <ul className="like-com">
                                <li>
                                  <a href="#"><i className="la la-heart" /> Like</a>
                                  {/* <img src="images/liked-img.png" alt /> */}
                                  <span>25</span>
                                </li> 
                                <li><a href="#" title className="com">Comment 15</a></li>
                              </ul>
                              <a><i className="la la-eye" />Views 50</a>
                            </div>
                          </div>{/*post-bar end*/}
                          <div className="posty">
                            <div className="post-bar no-margin">
                              <div className="post_topbar">
                                <div className="usy-dt">
                                  {/* <img src="images/resources/us-pc2.png" alt /> */}
                                  <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <span>3 min ago</span>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                  <ul className="ed-options">
                                    <li><a href="#" title>Edit Post</a></li>
                                    <li><a href="#" title>Unsaved</a></li>
                                    <li><a href="#" title>Unbid</a></li>
                                    <li><a href="#" title>Close</a></li>
                                    <li><a href="#" title>Hide</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="epi-sec">
                                <ul className="descp">
                                  <li><span>Epic Coder</span></li>
                                  <li><span>India</span></li>
                                </ul>
                                <ul className="bk-links">
                                  <li><a href="#" title><i className="la la-bookmark" /></a></li>
                                  <li><a href="#" title><i className="la la-envelope" /></a></li>
                                </ul>
                              </div>
                              <div className="job_descp">
                                <h3>ADVANCED CALCULUS</h3>
                                <ul className="job-dt">
                                  <li><a href="#" title>SRM IST</a></li>
                                  <li><span>2nd SEM</span></li>
                                </ul>
                                <p>If you want to be Pro in PHP programming get ahead with the Best material that are taught in SRM... <a href="#" title>view more</a></p>
                                <button style={{marginLeft:'0px'}}className="common_button_style button_padding_margin">View</button>
                              <button className="common_button_style button_padding_margin">Download</button>
                                <ul className="skill-tags">
                                  <li><a href="#" title>#SRM</a></li>
                                  <li><a href="#" title>#MATHS</a></li>
                                  <li><a href="#" title>#15MA102</a></li>
                                  <li><a href="#" title>#2ND_SEM</a></li>	
                                </ul>
                              </div>
                              <div className="job-status-bar">
                                <ul className="like-com">
                                  <li>
                                    <a href="#"><i className="la la-heart" /> Like</a>
                                    {/* <img src="images/liked-img.png" alt /> */}
                                    <span>25</span>
                                  </li> 
                                  <li><a href="#" title className="com"> Comment 15</a></li>
                                </ul>
                                <a><i className="la la-eye" />Views 50</a>
                              </div>
                            </div>{/*post-bar end*/}
                            <div className="comment-section">
                              <div className="plus-ic">
                                <i className="la la-plus" />
                              </div>
                              <div className="comment-sec">
                                <ul>
                                  <li>
                                    <div className="comment-list">
                                      <div className="bg-img">
                                        {/* <img src="images/resources/bg-img1.png" alt /> */}
                                      </div>
                                      <div className="comment">
                                        <h3>John Doe</h3>
                                        <span>3 min ago</span>
                                        {/* <p>Lorem ipsum dolor sit amet, </p> */}
                                        <a href="#" title className="active"><i className="fa fa-reply-all" />Reply</a>
                                      </div>
                                    </div>{/*comment-list end*/}
                                    <ul>
                                      <li>
                                        <div className="comment-list">
                                          <div className="bg-img">
                                            {/* <img src="images/resources/bg-img2.png" alt /> */}
                                          </div>
                                          <div className="comment">
                                            <h3>John Doe</h3>
                                            <span> 3 min ago</span>
                                            <p>Hi John </p>
                                            <a href="#" title><i className="fa fa-reply-all" />Reply</a>
                                          </div>
                                        </div>{/*comment-list end*/}
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="comment-list">
                                      <div className="bg-img">
                                        {/* <img src="images/resources/bg-img3.png" alt /> */}
                                      </div>
                                      <div className="comment">
                                        <h3>John Doe</h3>
                                        <span>3 min ago</span>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p> */}
                                        <a href="#" title><i className="fa fa-reply-all" />Reply</a>
                                      </div>
                                    </div>{/*comment-list end*/}
                                  </li>
                                </ul>
                              </div>{/*comment-sec end*/}
                              <div className="post-comment">
                                <div className="cm_img">
                                  {/* <img src="images/resources/bg-img4.png" alt /> */}
                                </div>
                                <div className="comment_box">
                                  <form>
                                    <input type="text" placeholder="Post a comment" />
                                    <button type="submit">Send</button>
                                  </form>
                                </div>
                              </div>{/*post-comment end*/}
                            </div>{/*comment-section end*/}
                          </div>{/*posty end*/}
                          <div className="process-comm">
                            <a href="#" title></a>
                          </div>{/*process-comm end*/}
                        </div>{/*posts-section end*/}
                      </div>{/*main-ws-sec end*/}
                    </div>
                    <div className="col-lg-3 pd-right-none no-pd">
                      <div className="right-sidebar">
                        <div className="widget widget-about">
                          {/* <img src="images/wd-logo.png" alt /> */}
                          {/* <h3>WorkWisely</h3> */}
                          <span>Get Quality materials</span>
                          <div className="sign_link">
                            {/* <h3><a href="#" title>Sign up</a></h3> */}
                            <a href="#" title>Learn More</a>
                          </div>
                        </div>{/*widget-about end*/}
                        <div className="widget widget-jobs">
                          <div className="sd-title">
                            <h3>Top Material</h3>
                            <i className="la la-ellipsis-v" />
                          </div>
                          <div className="jobs-list">
                            <div className="job-info">
                              <div className="job-details">
                                <h3>PROGRAMMING IN PHP</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                              <div className="hr-rate">
                                <span>SRM IST</span>
                              </div>
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details">
                                <h3>ADVANCED CALCULUS</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                              <div className="hr-rate">
                                <span>SRM IST</span>
                              </div>
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details">
                                <h3>WEB PROGRAMMING</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                              <div className="hr-rate">
                                <span>SRM IST</span>
                              </div>
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details">
                                <h3>DBMS</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                              <div className="hr-rate">
                                <span>SRM IST</span>
                              </div>
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details">
                                <h3>COMPUTER FORENSICS</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                              <div className="hr-rate">
                                <span>SRM IST</span>
                              </div>
                            </div>{/*job-info end*/}
                          </div>{/*jobs-list end*/}
                        </div>{/*widget-jobs end*/}
                        <div className="widget widget-jobs">
                          <div className="sd-title">
                            <h3>Most Viewed This Week</h3>
                            <i className="la la-ellipsis-v" />
                          </div>
                          <div className="jobs-list">
                            <div className="job-info">
                              <div className="job-details">
                                <h3>Senior Product Designer</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                              <div className="hr-rate">
                                <span>$25/hr</span>
                              </div>
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details">
                                <h3>Senior UI / UX Designer</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                              <div className="hr-rate">
                                <span>$25/hr</span>
                              </div>
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details">
                                <h3>Junior Seo Designer</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                              <div className="hr-rate">
                                <span>$25/hr</span>
                              </div>
                            </div>{/*job-info end*/}
                          </div>{/*jobs-list end*/}
                        </div>{/*widget-jobs end*/}
                        <div className="widget suggestions full-width">
                          <div className="sd-title">
                            <h3>Most Viewed People</h3>
                            <i className="la la-ellipsis-v" />
                          </div>{/*sd-title end*/}
                          <div className="suggestions-list">
                            <div className="suggestion-usd">
                              <img src="images/resources/s1.png" alt />
                              <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s2.png" alt /> */}
                              <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s3.png" alt /> */}
                              <div className="sgt-text">
                                <h4>Poonam</h4>
                                <span>Wordpress Developer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s4.png" alt /> */}
                              <div className="sgt-text">
                                <h4>Bill Gates</h4>
                                <span>C &amp; C++ Developer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s5.png" alt /> */}
                              <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s6.png" alt /> */}
                              <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                              </div>
                              <span><i className="la la-plus" /></span>
                            </div>
                            <div className="view-more">
                              <a href="#" title>View More</a>
                            </div>
                          </div>{/*suggestions-list end*/}
                        </div>
                      </div>{/*right-sidebar end*/}
                    </div>
                  </div>
                </div>{/* main-section-data end*/}
              </div> 
            </div>
          </main>
    </div>
    
  );
}

export default Main;
