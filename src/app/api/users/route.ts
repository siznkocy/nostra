
import {PrismaClient} from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";

export default function handler(req: NextApiRequest, res: NextApiResponse){
  res.status(200).json({name: 'hello'})
}

//  const prisma = new PrismaClient()

//   export async function POST(request: Request){

//     const body = await request.json();
//     console.log(body)

//     // const {firstName, lastName, email, password}:Partial<User> = await request.json()
//     const {firstName, lastName, email, password}:Partial<User> = await request.json()


//     if(!firstName || !lastName || !email || !password) return NextResponse.json({'message':'Missing field'})

//     const user = await prisma.user.create({
//       data: {
//         firstName, 
//         lastName, 
//         email,
//         Login: {
//           create: {
//             hash: password
//           }
//         }
//       }
//     })


  //   return NextResponse.json(user)
  // }

