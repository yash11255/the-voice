// import { NextApiRequest, NextApiResponse } from "next";
// import serverAuth from "@/libs/serverAuth";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     if (req.method !== 'GET') {
//       return res.status(405).end();
//     }

//     const { currentUser } = await serverAuth(req);

//     return res.status(200).json(currentUser);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).end();
//   }
// }
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";  // Ensure the DB client is correctly imported

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    // No authentication needed, just fetch and return the public data
    const publicUserData = await prismadb.user.findMany({
      select: {
        email: true,  // You can adjust this to the fields you want to expose publicly
        name: true,
      },
    });

    return res.status(200).json(publicUserData);  // Return the fetched data

  } catch (error) {
    console.log(error);
    return res.status(500).end();  // Handle any potential errors
  }
}
