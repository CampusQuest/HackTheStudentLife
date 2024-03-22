import React from "react";
import NavBar from "../shared/NavBar";

function EventsPage() {
  return <div style={{ textAlign: 'center', background: 'linear-gradient(180deg, #a3d8f4 0%, #abe9cd 100%)', padding: 10 }}>
    <div style={{marginTop: '-2rem'}}></div>
    <h1 style={{paddingTop: 50}} >Events that are happening at the moment</h1>
    <br></br>
    <ul style={{ fontSize: 30, listStyleType: 'none'}}>
      <li>Online seminar on artificial intelligence</li>
      <li>Virtual concert by famous artist</li>
      <li>Community cleanup event at local park</li>
      <li>Live coding session on web development</li>
      <li>Virtual cooking class with celebrity chef</li>
      <li>Fitness boot camp in the park</li>
      <li>Local theater performance of a new play</li>
      <li>Charity fundraising event for homeless shelters</li>
      <li>Outdoor yoga session by the beach</li>
      <li>Book reading and signing by a popular author at the bookstore</li>
    </ul>
    <NavBar />
    <div style={{height: 300}}></div>
  </div>;
}

export default EventsPage;