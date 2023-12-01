import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from 'next/headers';
import styles from "@/app/style.css"


async function fetchSub(){
   const supabase = createServerComponentClient({cookies});
   const {
       data: {user}
   } = await supabase.auth.getUser();
  
   const {data} = await supabase.from('subscriptions').select('*').eq('user_id', user.id);

   return data;
}


export default async function SubList(){
   const subs = await fetchSub();
  
   return(
       <div className="input">
           <h1>Subscriber List</h1>
           <ul>
               {subs?.map((sub) => (
                   <li key={sub.id}>
                       {sub.email}
                   </li>
               ))}
           </ul>
       </div>
   )
}
