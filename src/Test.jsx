// import React, { Component } from "react";
// import { Line, Bar } from "react-chartjs-2";

// export class Test extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: {
//         lebels: ["1", "2", "3", "4", "5"],
//         datasets: [
//           {
//             label: "VIdeos Made",
//             backgroundColor: "rgba(255, 0, 0, 0.6)",
//             data: [13, 16, 19, 18, 15, 17, 14],
//           },
//           {
//             label: "My Subscribers",
//             backgroundColor: "rgba(208, 255, 0, 0.65)",
//             data: [14, 19, 22, 26, 12, 12],
//           },
//         ],
//       },
//     };
//   }

//   getChartData = (canvas) => {
//     const data = this.state.data;
//     return data;
//   };

//   render() {
//     return (
//       <div className="mb-auto">
//         <div
//           className="container"
//           style={{ position: "relative", width: 600, height: 550 }}
//         >
//           <div className="row ">
//             <div className="col-12">
//               <h3>Line Chart</h3>
//               <Line options={{ responsive: true }} data={this.getChartData} />
//               <Bar options={{ responsive: true }} data={this.getChartData} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Test;
import React, { Component } from "react";
import loading from "./Img/25.svg";

export class Test extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://waitominuteapi.tk/faq";
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ person: data.faq[2].qno, loading: false });
    console.log();
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>
            <img src={loading} alt="/" />
          </div>
        ) : (
          <div>{this.state.person}</div>
        )}
      </div>
    );
  }
}

export default Test;
