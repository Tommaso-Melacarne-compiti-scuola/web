/**
 * @typedef {Object} Gift
 * @property {string} articolo
 * @property {string} destinatario
 * @property {number} prezzo
 */

/**
 * @type {Gift[]}
 */
let gifts = [
  {
    articolo: "Libro Giallo",
    destinatario: "Mamma",
    prezzo: 22,
  },
  {
    articolo: "Cravatta",
    destinatario: "Papa",
    prezzo: 15,
  },
  {
    articolo: "Powerbank",
    destinatario: "Ale",
    prezzo: 40,
  },
  {
    articolo: "Sciarpa",
    destinatario: "Nonna",
    prezzo: 20,
  },
];

const totalPriceEl = document.getElementById("totalPrice");

/**
 * Updates the total price on the DOM
 */
function updateTotal() {
  const total = gifts.reduce((acc, gift) => acc + gift.prezzo, 0);
  totalPriceEl.textContent = `${total}€`;
}

/**
 * Event handler for deleting a gift
 *
 * @param {Event} event
 * @returns {void}
 */
function xAddEventListener(event) {
  const target = event.target;
  if (!target.matches("i")) return;

  const giftEl = target.closest(".custom-gift");
  const index = [...listEl.children].indexOf(giftEl);

  gifts.splice(index, 1);

  updateTotal();
  renderGifts();
}

const listEl = document.getElementById("giftsList");

/**
 * Clears the list of gifts
 */
function clearList() {
  listEl.innerHTML = "";
}

/**
 * Renders the gifts in the list
 * @returns {void}
 */
function renderGifts() {
  clearList();

  for (const gift of gifts) {
    const div = document.createElement("div");

    div.classList.add("text-white", "text-center", "custom-gift", "col-sm-6");

    div.innerHTML = `
            <div class="bg-warning w-100 py-1 fs-3">
                ${gift.articolo}
                <i class="bi bi-x delete-icon text-danger"></i>
            </div>
            <p class="mt-2">${gift.destinatario}</p>
            <p>${gift.prezzo}€</p>
        `;

    listEl.appendChild(div);
  }

  const deleteIcons = document.querySelectorAll(".delete-icon");

  for (const icon of deleteIcons) {
    icon.addEventListener("click", xAddEventListener);
  }
}

updateTotal();
renderGifts();

const giftForm = document.getElementById("giftForm");

giftForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(giftForm);

  /**
   * @type {Gift}
   */
  const gift = {
    articolo: String(formData.get("articolo")),
    destinatario: String(formData.get("destinatario")),
    prezzo: Number(formData.get("prezzo")),
  };

  gifts.push(gift);

  updateTotal();
  renderGifts();

  giftForm.reset();
});
