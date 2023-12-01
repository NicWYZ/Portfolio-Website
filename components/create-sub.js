"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import {useState} from 'react';
import { useRouter } from "next/navigation";
import styles from "@/app/style.css"


export default function CreateSub(){
   const supabase = createClientComponentClient();
   const [email, setEmail] = useState('');
   const router = useRouter();


   async function createSub(){
       const {
           data:{user}
       } = await supabase.auth.getUser();


       await supabase.from('subscriptions').insert({
           user_id: user.id,
           email: email
       })


       setEmail("");
       router.refresh();
   }


   return(
       <div className="input">
           <h1>Subscribe to My Future Projects!</h1>
           <input
               className="input-field"
               type="text"
               placeholder = "Enter Email Here"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
               <button className="btn btn-color-2 project-btn" onClick={createSub}>Subscribe</button>
       </div>
   )
}
