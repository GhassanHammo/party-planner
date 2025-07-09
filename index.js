const getMoreInfo = async (id) => {
  //console.log(id);
  try {
    const response = await fetch(
      `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events/${id}`
    );
    const data = await response.json();
    console.log(data.data);
    displayOneResults(data.data);
  } catch (error) {
    console.error(error);
  }
};
const displayOneResults = (Details) => {
  const $selected = document.querySelector("#selected");
  $selected.innerHTML = ""; // Clear previous details

  const $name = document.createElement("h3");
  $name.textContent = Details.name;

  const $id = document.createElement("p");
  $id.textContent = `ID: ${Details.id}`;

  const $desc = document.createElement("p");
  $desc.textContent = Details.description;

  const $date = document.createElement("p");
  $date.textContent = `Date: ${Details.date}`;

  const $location = document.createElement("p");
  $location.textContent = `Location: ${Details.location}`;

  $selected.append($name, $id, $desc, $date, $location);
};
    
  const $app = document.querySelector("#app");
  //$h6 = document.createElement("h6");
  //$h6.textContent = Details.name;
  //$h7 = document.createElement("h7");
  //$h7.textContent = Details.id;
  //$h8 = document.createElement("h8");
  //$h8.textContent = Details.description;
 // $h9 = document.createElement("h9");
  //$h9.textContent = Details.date;
  //$h10 = document.createElement("h10");
  //$h10.textContent = Details.location;

  //$app.append($h6);
  //$app.append($h7);
  //$app.append($h8);
  //$app.append($h9);
  //$app.append($h10);
  


const displayData = (name) => {
  console.log(name);
  const $app = document.querySelector("#app");
  //for (const element of name) {
  //$h1 = document.createElement("h1");
  //$h1.textContent = "Party Planner";
 // $app.append($h1);
  //$h1.style.margin = "10%";
  //$h2 = document.createElement("h2");
    //$h2.textContent = "Party Details";
   // $app.append($h2);
  for (const element of name) {
    $div = document.createElement("div");
    $h4 = document.createElement("h4");
    $h4.textContent = element.name;
    $div.append($h4);
    $app.append($div);
   

    //$h2 = document.createElement("h2");
   // $h2.textContent = "Party Details";
   // $app.append($h2);
    
    $button = document.createElement("button");
    $button.textContent = "Click to get more info";
    $button.addEventListener("click", () => getMoreInfo(element.id));
    $div.append($button);
  }
};

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events"
    );
    const data = await response.json();
    //console.log(data.data);
    displayData(data.data);
  } catch (error) {
    console.error(error);
  }
};

const start = () => {
  console.log("Hello");
  fetchData();
  //const $app = document.querySelector("#app");

  $app.innerHTML =  `
   <h1>Party Planner</h1>
   <main>
      <section>
        <h2>Upcoming Parties</h2>
        <PartyList></PartyList>
      </section>
      <section id="selected">
        <h2>Party Details</h2>
        <SelectedParty></SelectedParty>
      </section>
      <section>
      <h2>Add a Party</h2>
      <AddParty></AddParty>
      </section>
    </main>
    
    `;

  
};

start();
