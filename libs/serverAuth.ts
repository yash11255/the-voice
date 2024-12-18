// import { NextApiRequest } from "next";
// import { getSession } from "next-auth/react";

// import prismadb from '@/libs/prismadb';

// const serverAuth = async (req: NextApiRequest) => {
//   const session = await getSession({ req });

//   if (!session?.user?.email) {
//     throw new Error('Not signed in');
//   }

//   const currentUser = await prismadb.user.findUnique({
//     where: {
//       email: session.user.email,
//     }
//   });
  
//   if (!currentUser) {
//     throw new Error('Not signed in');
//   }

//   return { currentUser };
// }

// export default serverAuth;
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";  // If you're using next-auth

const serverAuth = async (req: NextApiRequest) => {
  // You can bypass authentication here for public routes
  const session = await getSession({ req });

  if (!session) {
    return { currentUser: null };  // Return null if not signed in (public access)
  }

  // If user is signed in, fetch their data
  const currentUser = await prismadb.user.findUnique({
    where: { email: session.user.email },
  });

  return { currentUser };
};

export default serverAuth;
