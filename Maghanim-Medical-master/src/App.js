import React from "react";



function App() {

  const message = "A new update is available. Your current package version is outdated. Please update to the latest version for the best performance.";



  const containerStyle = {

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    height: "100vh",

    backgroundColor: "#f8f9fa",

    fontFamily: "Arial, sans-serif",

  };



  const boxStyle = {

    backgroundColor: "#fff3cd",

    color: "#856404",

    padding: "20px 30px",

    borderRadius: "8px",

    border: "1px solid #ffeeba",

    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",

    textAlign: "center",

    maxWidth: "500px",

  };



  const titleStyle = {

    fontSize: "20px",

    fontWeight: "bold",

    marginBottom: "10px",

  };



  const buttonStyle = {

    marginTop: "15px",

    padding: "10px 20px",

    border: "none",

    borderRadius: "5px",

    backgroundColor: "#007bff",

    color: "white",

    cursor: "pointer",

    fontSize: "15px",

  };



  return (

    <div style={containerStyle}>

      <div style={boxStyle}>

        <div style={titleStyle}>⚠️ System Update Required</div>

        <p>{message}</p>

        <button style={buttonStyle} onClick={() => alert("Updating packages...")}>

          Update Now

        </button>

      </div>

    </div>

  );

}



export default App;