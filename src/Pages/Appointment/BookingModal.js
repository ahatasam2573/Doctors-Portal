import React from 'react';

const BookingModal = ({ treatment }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking For: {name}</h3>
                    <p class="py-4 grid grid-cols-1">{slots}</p>
                    <div class="modal-action">
                        <label for="booking-modal-6" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;