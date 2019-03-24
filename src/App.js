import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./gridSystem.css";
import "./custom.css";

class App extends Component {
  render() {
    return (
      <div className="App col-12">
        <div className="col-4">
          left side 4<div className="col-12">image 12</div>
          <div className="col-12">
            <h3 className="col-12"> one</h3>
            <h3 className="col-12">two</h3>
            <h3 className="col-12">three</h3>
            <h3 className="col-12">four</h3>
            <h3 className="col-12">five</h3>
          </div>
          <div className="col-12">
            <h1 className="col-12"> skills</h1>
            <div className="col-12">
              <div className="col-12">
                <span className="skills"> skil 1</span>
              </div>
              <div className="col-12">
                <span className="skills"> skil 1</span>
              </div>
              <div className="col-12">
                <span className="skills"> skil 1</span>
              </div>
              <div className="col-12">
                <span className="skills"> skil 1</span>
              </div>
              <div className="col-12">
                <span className="skills"> skil 1</span>
              </div>
              <div className="col-12">
                <span className="skills"> skil 1</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h1 className="col-12">LANGUAGES</h1>
            <h6 className="col-12">English</h6>

            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border">
              <div className="circle" />
            </div>

            <h6 className="col-12">Spanish</h6>

            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border">
              <div className="circle" />
            </div>
            <h6 className="col-12">Arabic</h6>

            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border">
              <div className="circle" />
            </div>
            <div className="col-2 border" />
            <div className="col-2 border" />
          </div>
        </div>
        <div className="col-8">
          right side 8
          <div className="col-12">
            <h1 className="col-12"> Jane Roe</h1>
            <h6 className="col-12" style={{ textAlign: "left" }}>
              {" "}
              Information Technology
            </h6>
            <p className="col-12"> one two thre for five six sevn</p>
          </div>
          <div className="col-12">
            <h1 className="col-12" style={{ textAlign: "left" }}>
              Work Experice
            </h1>
            <h3 className="col-12" style={{ textAlign: "left" }}>
              Infomation Technolgy manager
            </h3>
            <div className="col-3" style={{ textAlign: "left" }}>
              {" "}
              09/9/2019{" "}
            </div>
            <div
              className="col-9"
              style={{
                textAlign: "right",
                paddingRight: 20
              }}
            >
              New york
            </div>
            <ul className="col-12 classUL" style={{ textAlign: "left" }}>
              <li className="col-12"> object 1</li>
              <li className="col-12"> object 2</li>
              <li className="col-12">object3</li>
              <li className="col-12">object 4</li>
            </ul>
            <div className="col-12">
              <h1 className="col-12" style={{ textAlign: "left" }}>
                IT Assestance
              </h1>
              <p className="col-12">Amicran Manengment</p>
              <p className="col-12">Amicran Manengment</p>
              <p className="col-12">Amicran Manengment</p>
            </div>
            <div className="col-12">
              <h1 className="col-12" style={{ textAlign: "left" }}>
                Education
              </h1>
              <h2 className="col-12">Chicagio</h2>
              <span className="col-12">90/99/9999</span>
            </div>
            <div className="col-12">
              <h1 className="col-12">HONER AND AWARDS</h1>
              <h3 className="col-12"> Jury memebe</h3>
              <p className="col-3">two</p>
              <h3 className="col-12"> Jury memebe</h3>
              <p className="col-3">three</p>
              <h3 className="col-12"> Jury memebe</h3>
              <p className="col-3">one</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
