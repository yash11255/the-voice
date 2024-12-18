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
  const session = await getSession({ req });

  // Check if the session or email is missing
  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email as string,  // Type assertion to ensure email is a string
    },
  });

  if (!currentUser) {
    throw new Error('Not signed in');
  }

  return { currentUser };
}

export default serverAuth;
export default serverAuth;
