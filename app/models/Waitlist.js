// models/Waitlist.js
import mongoose from 'mongoose';

const WaitlistSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email validation
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: 'waitlist' },
);

export default mongoose.models.Waitlist ||
	mongoose.model('Waitlist', WaitlistSchema);
