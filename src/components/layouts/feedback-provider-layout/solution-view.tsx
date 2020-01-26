import React, { Component, useState } from 'react';
import { Document, Page } from 'react-pdf';

class DisplaySolution extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   }

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }

//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (
//       <div>
//         <Document
//           file="random.pdf"
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     );
//   }
// }

// const DisplaySolution = (props: any) => {
//   const [numPages, set]
// }

  render(){
    return(
      <div>
        Display PDF Here
      </div>
    );
  }

}

export default DisplaySolution;