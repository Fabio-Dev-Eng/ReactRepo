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

      <div className="Filters">
        <button>tutte</button>
        <button>Solo Pagate</button>
        <button>Solo non pagate</button>
      </div>

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

/******** */
/* 
import React from "react";
import clsx from "clsx";

import "./styles.css";

const MOCK_FINES = [
  {
    id: 701,
    reason: "Gareggiamento in velocità",
    plate: "EF 888 TY",
    paid: false
  },
  {
    id: 702,
    reason: "Eccesso di velocità",
    plate: "EF 888 TY",
    paid: true
  },
  {
    id: 703,
    reason: "Mancato uso del casco",
    plate: "EF 888 TY",
    paid: false
  },
  {
    id: 706,
    reason: "Sosta vietata",
    plate: "EF 888 TY",
    paid: false
  }
];

export default function App() {
  const fines = MOCK_FINES;

  return (
    <div className="App">
      <h4>Le tue multe</h4>
      <MoveBox />
      <div className="Fines">
        {fines.map(fine => (
          <FineCard
            key={fine.id}
            reason={fine.reason}
            plate={fine.plate}
            paid={fine.paid}
          />
        ))}
      </div>
    </div>
  );
}

const MOCK_LOCALES = [
  {
    languageId: "it_IT",
    description: "Italian",
    descriptionInLocale: "Italiano"
  },
  {
    languageId: "en_US",
    description: "English",
    descriptionInLocale: "English"
  },
  {
    languageId: "fr_FR",
    description: "French",
    descriptionInLocale: "François"
  },
  {
    languageId: "de_DE",
    description: "German",
    descriptionInLocale:
      "Dadieühdfaeiudh"
  }
];

function MoveBox() {
  // TARGET — left
  // SOURCE — right

  const [
    targetIds,
    setTargetIds
  ] = React.useState([]);

  const [
    targetSelectedIds,
    setTargetSelectedIds
  ] = React.useState([]);

  const [
    sourceSelectedIds,
    setSourceSelectedIds
  ] = React.useState([]);

  function toggleSourceId(id) {
    setSourceSelectedIds(
      toggleInArray(
        sourceSelectedIds,
        id
      )
    );
  }

  function toggleTargetId(id) {
    setTargetSelectedIds(
      toggleInArray(
        targetSelectedIds,
        id
      )
    );
  }

  function handleMoveToTargetClick() {
    setSourceSelectedIds([]);
    setTargetIds(
      targetIds.concat(
        sourceSelectedIds
      )
    );
  }

  function handleMoveToSourceClick() {
    setTargetSelectedIds([]);
    setTargetIds(
      targetIds.filter(
        id =>
          !targetSelectedIds.includes(
            id
          )
      )
    );
  }

  return (
    <div className="MoveBox">
      <div className="MoveBoxPanel">
        {MOCK_LOCALES.filter(locale =>
          targetIds.includes(
            locale.languageId
          )
        ).map(locale => (
          <div
            key={locale.languageId}
            className={clsx(
              "MoveBoxPanelItem",
              targetSelectedIds.includes(
                locale.languageId
              ) && "selected"
            )}
            onClick={() => {
              toggleTargetId(
                locale.languageId
              );
            }}
          >
            {locale.description}
          </div>
        ))}
      </div>
      <div className="MoveBoxTrack">
        <button
          disabled={
            sourceSelectedIds.length ===
            0
          }
          onClick={
            handleMoveToTargetClick
          }
        >
          {"<"}
        </button>
        <button
          disabled={
            targetSelectedIds.length ===
            0
          }
          onClick={
            handleMoveToSourceClick
          }
        >
          {">"}
        </button>
      </div>
      <div className="MoveBoxPanel">
        {MOCK_LOCALES.filter(
          locale =>
            !targetIds.includes(
              locale.languageId
            )
        ).map(locale => (
          <div
            key={locale.languageId}
            className={clsx(
              "MoveBoxPanelItem",
              sourceSelectedIds.includes(
                locale.languageId
              ) && "selected"
            )}
            onClick={() => {
              toggleSourceId(
                locale.languageId
              );
            }}
          >
            {locale.description}
          </div>
        ))}
      </div>
    </div>
  );
}

function toggleInArray(array, item) {
  if (array.includes(item)) {
    return array.filter(
      candidate => candidate !== item
    );
  } else {
    return array.concat([item]);
  }
}

function FineCard({
  paid,
  reason,
  plate
}) {
  const [
    selected,
    setSelected
  ] = React.useState(false);

  const [
    hover,
    setHover
  ] = React.useState(false);

  function handleClick(event) {
    event.preventDefault();
    setSelected(!selected);
  }

  function handleMouseEnter(event) {
    setHover(true);
  }

  function handleMouseLeave(event) {
    setHover(false);
  }

  return (
    <div
      className={clsx(
        "FineCard",
        paid && "paid",
        selected && "selected"
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{reason}</h5>
      <p>
        <strong>Veicolo</strong>
      </p>
      <p>
        <code>
          {hover ? plate : "** *** **"}
        </code>
      </p>
    </div>
  );
}
 */
