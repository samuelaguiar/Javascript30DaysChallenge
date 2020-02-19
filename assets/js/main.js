function populateCards() {
  const cardsSection = document.getElementById("cards-section");
  data.forEach(info => {
    const card = document.createElement("a");
    card.href = info.href;
    card.innerHTML = `
  <div class="card">
    <div class="card-header">${info.day}</div>
    <div class="card-content">${info.title}</div>
  </div>
`;
    cardsSection.appendChild(card);
  });
}

populateCards();
