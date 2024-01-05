import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const client = await clientPromise;
		const post = await client
			.db()
			.collection("reviews")
			.find({ product_id: req?.query?.product_id })
			.sort({ metacritic: -1 })
			.toArray();

		res.status(200).send(post);
	} catch (error) {
		res.status(500).send(error);
	}
}

