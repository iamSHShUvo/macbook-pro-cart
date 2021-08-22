// Update Button Price function
function upadatePrice(type, value, costValue) {
    if (value == 'high') {
        document.getElementById(type + '_cost').innerText = costValue;
    }
    else if (value == 'meduim') {
        document.getElementById(type + '_cost').innerText = costValue;
    }
    else {
        document.getElementById(type + '_cost').innerText = costValue;
    }
    totalPrice();
}

// upadate Total Price function

function totalPrice() {
    const memoryCost = document.getElementById('memory_cost').innerText;
    const storageCost = document.getElementById('storage_cost').innerText;
    const delivaryCost = document.getElementById('delivary_cost').innerText;
    const total = 1299 + parseInt(memoryCost) + parseInt(storageCost) + parseInt(delivaryCost);
    document.getElementById('total_cost').innerText = total;
    document.getElementById('total_cost_fainal').innerText = total;
}

// Calling the Memory Cost button

document.getElementById('default_cost_memory_btn').addEventListener('click', function () {
    upadatePrice('memory', 'low', 0);
})
document.getElementById('extra_cost_memory_btn').addEventListener('click', function () {
    upadatePrice('memory', 'high', 180);
})

// Calling the Storage Cost button

document.getElementById('default_cost_storage_btn').addEventListener('click', function () {
    upadatePrice('storage', 'low', 0);
})
document.getElementById('semi_extra_cost_storage_btn').addEventListener('click', function () {
    upadatePrice('storage', 'meduim', 100);
})
document.getElementById('extra_cost_storage_btn').addEventListener('click', function () {
    upadatePrice('storage', 'high', 180);
})

// Calling the Delivery Cost button

document.getElementById('default_cost_delivary_btn').addEventListener('click', function () {
    upadatePrice('delivary', 'low', 0);
})
document.getElementById('advance_cost_delivary_btn').addEventListener('click', function () {
    upadatePrice('delivary', 'high', 20);
})



//Promo Code FUnction for "stevekaku"

function promoCode(pCode) {
    if (pCode == 'stevekaku') {
        const totalCost = document.getElementById('total_cost').innerText;
        const afterApply = parseInt(totalCost) - ((parseInt(totalCost) / 100) * 20);
        document.getElementById('total_cost_fainal').innerText = afterApply;
        document.getElementById('promoCodeText').value = '';
    }
}
// Calling the Promo Code Button 

document.getElementById('promo_code_btn').addEventListener('click', function () {
    let inputField = document.getElementById('promoCodeText').value;
    promoCode(inputField)
})

