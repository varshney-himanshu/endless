import React, { Component } from "react";
import axios from "axios";
import data from "../assets/data.json";

export default class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: []
    };

    this.getSimplifiedSteps = this.getSimplifiedSteps.bind(this);
  }

  async componentDidMount() {
    // API Request
    // const response = await axios.get(
    //   "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
    // );

    this.setState({ steps: this.getSimplifiedSteps(data) });
  }

  //Function: returns simplified steps
  getSimplifiedSteps(steps) {
    //sorting steps in order by the “stepNumber” value
    steps.sort((a, b) => a.stepNumber - b.stepNumber);

    let simplifiedSteps = steps.map(step => {
      // filtering latest version content
      let versionContent = step.versionContent[0];
      for (let i = 0; i < step.versionContent.length; i++) {
        if (
          new Date(step.versionContent[i].effectiveDate).getTime() >
          new Date(versionContent.effectiveDate).getTime()
        ) {
          versionContent = step.versionContent[i];
        }
      }

      let s = {};
      s.id = step.id;
      s.stepNumber = step.stepNumber;
      s.title = versionContent.title;
      s.body = versionContent.body;

      return s;
    });

    return simplifiedSteps;
  }

  render() {
    const { steps } = this.state;
    return (
      <div className="how-it-works">
        <h3>How It Works</h3>

        <div className="grid-row">
          {/* mapping all the steps   */}
          {steps.map(step => (
            <div key={step.id} className="grid-col">
              <div className="card">
                <h1 className="card__number">
                  {Number(step.stepNumber < 10 && "0")}
                  {step.stepNumber}
                </h1>
                <hr className="card__hr" />
                <h6 className="card__title">{step.title}</h6>
                <p className="card__body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
