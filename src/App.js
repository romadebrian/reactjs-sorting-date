import { Fragment, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState([
    { id: "1", date: "Mar 12 2012 10:00:00 AM" },
    { id: "2", date: "Mar 8 2012 08:00:00 AM" },
    { id: "3", date: "Mar 20 2012 10:00:00 AM" },
    { id: "4", date: "Mar 28 2012 10:00:00 AM" },
    { id: "5", date: "Mar 25 2012 10:00:00 AM" }
  ]);

  useEffect(() => {
    date.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });

    console.log(date);
  });

  const handleSort = (a, b) => {
    return new Date(a.date) - new Date(b.date);
    // return new Date(b.date) - new Date(a.date); // sort from bigger
  };

  return (
    <div className="App">
      <h1>ReacJs Sorting Date</h1>
      <h2>Sorting date by oldest</h2>

      <Fragment>
        {date.sort(handleSort).map((data) => {
          console.log(data);

          return <p key={data.id}>{data.date}</p>;
        })}
      </Fragment>
    </div>
  );
}
