import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entrepreneur", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  // PROGRESSION 2 | LIST ALL ITEMS
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // PROGRESSION 3 | LIST ALL DATA BASED ON USERTYPE
  renderItemsByUserType = (userType) => {
    const mapRows = [];
    for (const item of this.state.userData) {
      if (item.user_type === userType) {
        mapRows.push(
          <React.Fragment key={item.id}>
            <li className="list-elements">
              <span>Id: {item.id}</span>
              <span>Name : {item.name}</span>
              <span>User Type: {item.user_type}</span>
            </li>
          </React.Fragment>
        );
      }
    }
    return mapRows;
  };

  // PROGRESSION 4 | FILTER ALL DATA STARTING WITH THE LETTER J
  filterNamesStartingWithJ = () => {
    const filteredData = this.state.userData.filter((item) =>
      item.name.toLowerCase().startsWith("j")
    );
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // PROGRESSION 5 | FILTER DATA BASED ON AGE
  filterDataByAge = () => {
    const filteredData = this.state.userData.filter((item) => {
      const { age } = item;
      return age > 28 && age <= 50;
    });
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // PROGRESSION 6 | FIND THE TOTAL EXPERIENCE OF THE DESIGNERS
  totalExperienceOfDesigners = () => {
    let totalYears = 0;
    this.state.userData.forEach((item) => {
      if (item.user_type === "Designer") {
        totalYears += item.years;
      }
    });
    return totalYears;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>

        <h1>Display items by User Type</h1>
        <div className="display-box">
          <ul>{this.renderItemsByUserType("Designer")}</ul>
        </div>

        <h1>Display items starting with letter 'J'</h1>
        <div className="display-box">
          <ul>{this.filterNamesStartingWithJ()}</ul>
        </div>

        <h1>Display items by age</h1>
        <div className="display-box">
          <ul>{this.filterDataByAge()}</ul>
        </div>

        <h1>Total experience of Designers</h1>
        <div className="display-box">
          <p>Total years: {this.totalExperienceOfDesigners()}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;
