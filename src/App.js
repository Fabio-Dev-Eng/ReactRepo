import React from "react";
import clsx from "clsx";

import "./styles.css";

const MOCK_FINES = [
  {
    id: 1,
    reason: "Gareggiamento in velocità",
    plate: "AB123",
    paid: true
  },
  {
    id: 2,
    reason: "Eccesso velocità",
    plate: "AB123",
    paid: true
  },
  {
    id: 3,
    reason: "Passaggio con il rosso",
    plate: "AB123",
    paid: false
  },
  {
    id: 4,
    reason: "Passaggio con il rosso",
    plate: "AB123",
    paid: true
  }
];

export default function App() {
  const fines = MOCK_FINES;

  return (
    <div className="App">
      <h4>Le tue multe</h4>
      <div className="Fines">
        {/* COMMENTO MULTILINEA */}

        {fines.map(fine => (
          <FineCard
            key={fine.id}
            reason={fine.reason}
            plate={fine.plate}
            paid={fine.paid}
          />
        ))}

        {/*   <FineCard
          reason={MOCK_FINES[0].reason}
          plate={MOCK_FINES[0].plate}
          paid={MOCK_FINES[0].paid}
        />
        <FineCard plate="AD 456 CD" reason="Eccesso di velocità" />
        <FineCard plate="AS 789 CD" reason="Mancato uso del casco" />

        <div className="FineCard">
          <h5>Gareggiamento</h5>
          <p>
            <strong> </strong>
            <em />
          </p>
        </div>
        <div className="FineCard paid">
          <h5>Mancato uso del casco</h5>
          <p>
            <strong>Veicolo</strong>
            {"  "}
            <em>FB 123 CZ</em>
          </p>
        </div>
       */}
      </div>
    </div>
  );
}

function FineCard({ paid, reason, plate }) {
  const [selected, setSelected] = React.useState(false); //False valore iniziale ìla presenza della parola use ci fa capire che è un HOOK
  function handleClick(event) {
    setSelected(!selected);
  }
  return (
    <div
      className={clsx("FineCard", paid && "paid", selected && "selected")}
      onClick={handleClick}
    >
      <h5>{reason}</h5>
      <p>
        <strong>Veicolo</strong>
        {"  "}
        <em>{plate}</em>
      </p>
    </div>
  );
}

/* <div className={props.paid ? "FineCard paid" : "FineCard"}> */
/* 1 const tofu = veggieburger.tofu
   2 const quinoa = veggieburger,quinoa
   
   3 const{tofu,quinoa }= veggieburger  
   1 e 2 sono uguali a 3
    */
