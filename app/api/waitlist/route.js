import connectToDatabase from '@/app/lib/mongodb';
import Waitlist from '@/app/models/Waitlist';

export async function POST(req) {
	const { firstName, lastName, email } = await req.json();

	// Validate input
	if (!firstName || !lastName || !email) {
		return new Response(
			JSON.stringify({ error: 'All fields are required' }),
			{
				status: 400,
			},
		);
	}

	try {
		await connectToDatabase();

		// Check if email already exists
		const existingEntry = await Waitlist.findOne({ email });
		if (existingEntry) {
			return new Response(
				JSON.stringify({
					error: 'Email already exists in the waitlist',
				}),
				{ status: 400 },
			);
		}

		// Add the new entry to the waitlist
		const newEntry = await Waitlist.create({
			firstName,
			lastName,
			email,
		});

		return new Response(
			JSON.stringify({
				message: 'Successfully added to the waitlist',
				data: newEntry,
			}),
			{ status: 201 },
		);
	} catch (error) {
		console.error('Error adding to the waitlist:', error);
		return new Response(
			JSON.stringify({ error: 'Internal Server Error' }),
			{
				status: 500,
			},
		);
	}
}
