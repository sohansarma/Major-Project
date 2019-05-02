import React, { useEffect, useState } from 'react';
import MaterialUploader from './MaterialUploader';
import QueryModel from './Query';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
// import Button from '@material-ui/core/Button';
import { getOwnProfile, getFeed, likeAPost, followKeyWord } from '../api';
import download from 'downloadjs';
import Card from './KeywordsFollowing';

const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

const getMimetype = (signature) => {
  switch (signature) {
      case '89504E47':
          return 'image/png'
      case '47494638':
          return 'image/gif'
      case '25504446':
          return 'application/pdf'
      case 'FFD8FFDB':
      case 'FFD8FFE0':
          return 'image/jpeg'
      case '504B0304':
          return 'application/zip'
      default:
          return 'Unknown filetype'
  }
}

class Main extends React.Component {
  state = {
    feed: [],
    suggestions: [],
    user: {},
  };
  componentDidMount() {
    const {
      dispatch,
      state,
      history,
    } = this.props;
    console.log("I'm run again");
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    } else {
      this.fetchData(token)
    }
    // setUser(dispatch)(state.token).then(console.log);
    // setFeed(dispatch)(state.token).then(console.log);
  }

  fetchData(token) {
    Promise.all([ getOwnProfile(token), getFeed(token) ])
      .then(([ profile, {posts, suggestions} ]) => {
        this.setState({
          user: profile,
          feed: posts,
          suggestions,
        })
      })
      .catch((e) => {
        console.error(e);
      })
  }

  render() {
    const {
      dispatch,
      state,
    } = this.props;
    const {
      user,
      feed,
      suggestions,
    } = this.state;
    return (
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
                                {user.profilePicture && <img src={user.profilePicture} alt="" />}
                              </div>
                            </div>{/*username-dt end*/}
                            <div className="user-specs">
                              <h3>{user.name}</h3>
                            </div>
                          </div>{/*user-profile end*/}
                          <ul className="user-fw-status pointer" onClick={Card}>
                            <li>
                              <h4>Following</h4>
                              <span>{user.following && user.following.length}</span>
                            </li>
                          </ul>
                        </div>{/*user-data end*/}
                        <div className="suggestions full-width">
                          <div className="sd-title">
                            <h3>Suggestions</h3>
                            <i className="la la-ellipsis-v" />
                          </div>{/*sd-title end*/}
                          <div className="suggestions-list">
                            {suggestions && suggestions.length > 0 &&
                              suggestions.map(keyword => (
                                <div key={keyword.text} className="suggestion_style d-flex align-items-center">
                                    <div className="text_style">{keyword.text}</div>
                                    <button className="common_button_style justify-content-end"
                                      onClick={() => {
                                        const token = localStorage.getItem("token");
                                        followKeyWord(keyword._id, token)
                                          .then(user => {
                                            this.fetchData(token);
                                          })
                                      }}
                                    >
                                      Follow
                                    </button>
                                </div>
                              ))
                            }
                          </div>{/*suggestions-list end*/}
                        </div>{/*suggestions end*/}
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
                              {/* <li>
                             <QueryModel />
                              </li> */}
                            </ul>
                          </div>{/*post-st end */}
                        </div>{/*post-topbar end */}
                        <div className="posts-section">
                          {feed && feed.length > 0 &&
                            feed.map(post => {
                              return (
                                <div key={post._id} className="post-bar">
                                <div className="post_topbar">
                                  <div className="usy-dt">
                                    <div className="usy-name">
                                    <div className="d-flex">
                                
                                      <div>{post.postedBy.name}</div>
                                      </div>
                                      <span>{moment(post.createdAt).fromNow()}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="job_descp">
                                  <div className="d-flex justify-content-start">{post.title}</div>
                                  {/* <ul className="job-dt">
                                    <li>{post.postedBy.college}</li>
                                    <li><span>{post.postedBy.semester}</span></li>
                                  </ul> */}
                                  <div className="d-flex justify-content-start">{post.description}</div>
                                  {post.files && post.files.length &&
                                    <button
                                      onClick={() => {
                                        const { data, contentType } = post.files[0];
                                        const url = `data:${contentType};base64,${data}`;
                                        const fileFormat = contentType.split("/").slice(-1);
                                        download(url, `${post.title || "Untitled"}.${fileFormat}`, contentType);
                                      }}
                                      className="common_button_style button_padding_margin">Download</button>  
                                  }
                                  {/* <ul className="skill-tags">
                                    {post.keywords && post.keywords.length > 0 &&
                                      post.keywords.map(keyword => {
                                        return (
                                          <li key={keyword._id}><a href="#">{keyword.text}</a></li>
                                        )
                                      })  
                                    } 	
                                  </ul> */}
                                </div>
                                <div className="job-status-bar">
                                  <ul className="like-com">
                                    <li>
                                      <div className="pointer"
                                        onClick={() => {
                                          const token = localStorage.getItem("token");
                                          likeAPost(post._id, token);
                                        }}
                                      >
                                      Like</div>
                                      {/* <img src="images/liked-img.png" alt /> */}
                                      {/* <span>{post.likes && post.likes.length}</span> */}
                                    </li> 
                                  </ul>
                                </div>
                              </div>
                              );
                            })
                          }
                        
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
                              <div className="job-details pointer">
                                <h3>PROGRAMMING IN PHP</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                  
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details pointer">
                                <h3>ADVANCED CALCULUS</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                          
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details pointer">
                                <h3>WEB PROGRAMMING</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                            
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details pointer">
                                <h3>Machine Learning</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                    
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details pointer">
                                <h3>COMPUTER FORENSICS</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
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
                              
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details">
                                <h3>Senior UI / UX Designer</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
                              </div>
                            
                            </div>{/*job-info end*/}
                            <div className="job-info">
                              <div className="job-details">
                                <h3>Junior Seo Designer</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
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
                            
                              <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                              </div>
                              
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s2.png" alt /> */}
                              <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                              </div>
                              
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s3.png" alt /> */}
                              <div className="sgt-text">
                                <h4>Poonam</h4>
                                <span>Wordpress Developer</span>
                              </div>
                              
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s4.png" alt /> */}
                              <div className="sgt-text">
                                <h4>Bill Gates</h4>
                                <span>C &amp; C++ Developer</span>
                              </div>
                              
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s5.png" alt /> */}
                              <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                              </div>
                              
                            </div>
                            <div className="suggestion-usd">
                              {/* <img src="images/resources/s6.png" alt /> */}
                              <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                              </div>
                              
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
        }
    </div>
    );
  }
}

export default Main;
