/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe('pk_test_AqVyNembF5Wz25tCDpwnEbtX003KJ7YNur');

export const bookTour = async (tourId) => {
	try {
		// 1. Get checkout session from API

		// If it's an GET, we can skip the word for axios
		const session = await axios(
			`/api/v1/bookings/checkout-session/${tourId}`
		);

		// 2. Create checkout form + charge credit card
		await stripe.redirectToCheckout({
			sessionId: session.data.session.id,
		});
	} catch (err) {
		console.log(err);
		showAlert('error', err);
	}
};
