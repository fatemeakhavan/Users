"use client"
import useSWR from "swr";
  const fetcher = (url : any)=> fetch(url).then(r => r.json())
  export default function UserInfo({ params }: { params: { slug: any } }) {
    const {data}= useSWR(`https://api.github.com/users/${params.slug}`,fetcher)

   
    return (
        <main>
             {/* {data && data.map((item : any) =>{
                return (
                    <>
                      <p>{item.site_admin}</p>
                    </>  
                )
            })} */}
           {data &&<p>  {data.events_url}</p>} 
        
           
        </main>
    )
      
  }