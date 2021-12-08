import React from "react";

function FilterPage() {
  const token = localStorage.getItem("key");

  function filter() {
    fetch("https://adventurehub-dev.herokuapp.com/storyInfo/filter", {
      method: "POST",
      // headers: { "content-type": "application/json" },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: "",
        creator: "",
        category: "",
        free: false,
        approved: false,
        xpMin: 0,
        xpMax: 0,
        sort: "",
        desc: false,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <>
      <h1>asd</h1>
      <button onClick={filter}>test</button>
    </>
  );
}

export default FilterPage;

// AdventureHub StoryFilter
// A kereséshez/szűréshez/rendezéshez a
// /storyInfo/filter
// endpointra vár a backend POST-ban  egy queryForm objectet
// public class QueryForm {
//     private String title = "";
//     private String creator = "";
//     private String category = "";
//     private int xpMin;
//     private int xpMax;

//     private boolean free;
//     private boolean approved;
//     private String sort = "";
//     private boolean desc;
// 	}

// A felhasználó több mezőben kereshet a form segítségével. Az object ehhez tartozó field-jei:
// title, creator, category - ahová String adattípust várunk (üres/ alapértelmezett értéke: üres string (""))
// xpMin, xpMax - ahová int adattípust várunk (üres/ alapértelmezett értéke: 0)
// A boolean fieldekhez (free, approved) frontenden checkboxot kellene társítani (üresen false, bepipálva true értékkel)
// Rendezés:
// A felhasználó választhat EGY tetszőleges fieldet a keresőmezők közül (title, creator, category, xp) ide egy String-et vár a backend, de fontos, hogy pontosan egyezzen az értéke a field-nevekkel,
// ezért arra gondoltam, legördülő menüből lehetne kiválasztani (ha ez nem megoldható, az sem baj, mert értelmetlen adat esetén alapértelmezetten a title alapján lesz rendezve a lista)
// + Egy boolean field (desc), ami false esetben növekvő sorrendet true esetben csökkenőt állít be (szintén checkbox)
