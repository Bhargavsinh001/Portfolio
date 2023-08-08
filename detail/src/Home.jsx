import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="main">
        <div className="data">
          I'M <p>BHARGAVSINH </p>DODIYA.
        </div>
        <p>
          <div id="home" className="data1">
            {/* Full Stack Developer */}
            <p>
              Full Stack Developer Skilled At Developing Complex Solutions,
              Possrssing Strong Creative Thinking Skill,  High Energy And
              Intigrity. I'm Dedicated To Constantly Improving Tools And
              Infrastructure To Maximum Productivity,  Minimize System Downtime,
               And Quickly Respond To The Changing Needs Of The Business.
            </p>
          </div>
        </p>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------- */}
      <div id="professional" className="data2">
       <u> PROFESSIONAL SKILL</u>
        {/* <h6>
          <p>MY KNOWLEDGE LEVEL IN LANGUAGE</p>
        </h6> */}
        <h6>HTML</h6>
        <div class="container1">
          <div class="skills html">95%</div>
        </div>
        <h6>CSS</h6>
        <div class="container1">
          <div class="skills css">89%</div>
        </div>
        <h6>JavaScript</h6>
        <div class="container1">
          <div class="skills js">82%</div>
        </div>
        <h6>Mondodb</h6>
        <div class="container1">
          <div class="skills mongodb">80%</div>
        </div>
        <h6>React</h6>
        <div class="container1">
          <div class="skills react">74%</div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------------------------- */}
      <div id="education" className="data3">
        <u>EDUCATION</u>
        <div class="time">
          <div class="container left1">
            <div class="content">
              <h2>2018</h2>
              <p>I Did My Secondary Education From Shree Madhyamik Shala Vadodara Dodiya</p>
            </div>
          </div>
          <div class="container right2">
            <div class="content">
              <h2>2020</h2>
              <p>I Did My Higher Secondary Education From Shree Madhyamik Shala Vadodara Dodiya</p>
            </div>
          </div>
          <div class="container left3">
            <div class="content">
              <h2>2023</h2>
              <p>I Did My Graduation From Shree Arjun B.C.A. Collage-Supasi</p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}

      <div id="contact" className="data4">
       <u> Contact  </u>
        <div class="container4">
        <form action="../../form" method="post">

        <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

    <label for="country">Country</label>
    <select id="country" name="country">
    <option value="india">India</option>
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit"></input>
        </form>
        </div>
         
      </div>
    </>
  );
}

export default Home;
