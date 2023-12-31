import BtnLoad from "@/app/component/user/BtnLoad"

async function getData() {
    const res = await fetch('https://api.github.com/users',{ next: { revalidate: 3600 } })

    if (!res.ok) {
      
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function User() {
    const data = await getData()
   
    return (
        <main>
             {data && data.map((item : any) =>{
                return (
                    <>
                        <p>{item.type}</p>
                        
                    </>  
                )
            })}
             <BtnLoad/>
         
        </main>
    )
      
  }