// vsn_script.js
const addInvBtn = document.getElementById("add-inv-btn");

addInvBtn.addEventListener("click", (e) => {

    document.getElementById("addInvFormPopup").style.display = "block";

});

function openForm() {
    document.getElementById("addInvFormPopup").style.display = "block";
}

function closeForm() {
    document.getElementById("addInvFormPopup").style.display = "none";
}

/*
window.onclick = function(event) {
    if (event.target == addInvFormPopup) {
        document.getElementById("addInvFormPopup").style.display = "none";
    }
}
*/

/*
function displayExpenses() {
    expenseList.innerHTML = expenses
        .map((expense, index) => `
            <div class="expense-item">
                <span>${expense.description}</span>
                <span>${expense.amount}</span>
                <span>${expense.category}</span>
            </div>
        `)
        .join("");
}

function clearInputFields() {
    descriptionInput.value = "";
    amountInput.value = "";
    categoryInput.value = "Food"; // Reset category to Food
}

function updateTotal() {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalAmount.textContent = total.toFixed(2);
}
*/
