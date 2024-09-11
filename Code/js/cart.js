document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart_item');
    const subtotalElement = document.querySelector('.bill > ul > li:nth-child(1) > span:nth-child(2)');
    const gstElement = document.querySelector('.bill > ul > li:nth-child(2) > span:nth-child(2)');
    const deliveryChargeElement = document.querySelector('.bill > ul > li:nth-child(3) > span:nth-child(2)');
    const grandTotalElement = document.querySelector('.bill > ul > li:nth-child(4) > span:nth-child(2)');

    const GST_RATE = 0.18;
    const DELIVERY_CHARGE = 25.00;

    cartItems.forEach(item => {
        const minusButton = item.querySelector('button:first-of-type');
        const plusButton = item.querySelector('button:last-of-type');
        const quantityElement = item.querySelector('#quantity');
        const priceElement = item.querySelector('#price');
        const totalElement = item.querySelector('#total');

        minusButton.addEventListener('click', () => {
            updateQuantity(item, -1);
        });

        plusButton.addEventListener('click', () => {
            updateQuantity(item, 1);
        });

        function updateQuantity(item, delta) {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity + delta >= 0) {
                quantity += delta;
                quantityElement.textContent = quantity;
                updateTotal(item);
            }
        }

        function updateTotal(item) {
            const quantity = parseInt(quantityElement.textContent);
            const price = parseFloat(priceElement.textContent.replace('Rs ', ''));
            const total = quantity * price;
            totalElement.textContent = `Rs ${total.toFixed(2)}`;
            updateBill();
        }

        function updateBill() {
            let subtotal = 0;
            cartItems.forEach(item => {
                const totalElement = item.querySelector('#total');
                subtotal += parseFloat(totalElement.textContent.replace('Rs ', ''));
            });

            const gst = subtotal * GST_RATE;
            const grandTotal = subtotal + gst + DELIVERY_CHARGE;

            subtotalElement.textContent = `Rs ${subtotal.toFixed(2)}`;
            gstElement.textContent = `Rs ${gst.toFixed(2)}`;
            deliveryChargeElement.textContent = `Rs ${DELIVERY_CHARGE.toFixed(2)}`;
            grandTotalElement.textContent = `Rs ${grandTotal.toFixed(2)}`;
        }
    });

});
