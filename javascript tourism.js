const bookingForm = document.getElementById('booking-form');
const bookingDetails = document.getElementById('booking-details');

bookingForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const packageName = document.getElementById('package-name').value;
	const startDate = document.getElementById('start-date').value;
	const endDate = document.getElementById('end-date').value;
	const participants = document.getElementById('participants').value;

	const bookingData = {
		packageName,
		startDate,
		endDate,
		participants
	};

	printBookingDetails(bookingData);
});

function printBookingDetails(bookingData) {
	const bookingHTML = `
		<h2>Booking Details</h2>
		<p>Package Name: ${bookingData.packageName}</p>
		<p>Start Date: ${bookingData.startDate}</p>
		<p>End Date: ${bookingData.endDate}</p>
		<p>Participants: ${bookingData.participants}</p>
	`;

	bookingDetails.innerHTML = bookingHTML;
}