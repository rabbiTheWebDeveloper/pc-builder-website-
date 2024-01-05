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
			.collection("products")
			.findOne({
				_id: new ObjectId(req?.query?.id as string),
			});

		res.status(200).send(post);
	} catch (error) {
		res.status(500).send(error);
	}
}

