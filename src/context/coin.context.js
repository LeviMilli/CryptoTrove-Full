import { createContext, useState, useEffect } from "react";
import axios from "axios";

let AppContext = createContext()

function AppContextWrapper(props){

    
    const [coins, setCoins,] = useState([]);
    const [loading, setLoading,] = useState(false);
    const [trending, setTrending] = useState([])
    const [total, setTotal] = useState()
    const [user, setUser] = useState(null);
    const [news, setNews] = useState([])
    const [ transactions, setTransaction  ] = useState([])

    

    async function handleLogOut(){
        await axios.get('/api/logout', {withCredentials: true})
        setUser(null)
      }


      useEffect(() => {

  
        async function fetchUser(){
      
          try {
      
      
            let response = await axios.get('/api/user', {withCredentials: true})  
          
            setUser(response.data)
      
      
      
            setLoading(false)
            
          }
          catch(err){
            setLoading(false)
          }
        
        }
      
      
         fetchUser()
       
      }, [])


    
    // async function handleLogOut(){
    //   await axios.get('https://scarlet-elk-gown.cyclic.app/api/logout', {withCredentials: true})
    //   setUser(null)
    // }
    

    // async function handleEdit(id, detail){
    //   let response = await axios.patch(`https://scarlet-elk-gown.cyclic.app/api/recipe/${id}`, detail, {withCredentials: true})
  
    //   let updatedRecipe = myRecipe.map((recipe) => {
    //     if (recipe._id == id) {
    //       recipe.name = response.data.name;
    //       recipe.description = response.data.description
    //     }
    //     return recipe
    //   })
    //   console.log(updatedRecipe)
    //   setMyRecipe(updatedRecipe)
  
    // }

//     async function handleAddRecipe(event, id){
        
//         event.preventDefault()
    
     
//         let response  = await axios.post(`https://scarlet-elk-gown.cyclic.app/api/create`, {
//             UserId: user._id,
//             RecipeId: id
        
//         })
//         console.log(response.data)
    
//     setMyRecipe([response.data, ...myRecipe]) 
//   } 
  
  
//     async function handleDelete(event, id){
//     await axios.delete(`https://scarlet-elk-gown.cyclic.app/api/myrecipe/${id}`, {withCredentials: true})

//     let newMyRecipe = myRecipe.filter(recipe => {
//       return  recipe._id !== id
//     })
//     setMyRecipe(newMyRecipe)
//   }



    return (
        <AppContext.Provider value={{
         coins, setCoins,
         loading, setLoading,
         trending, setTrending,
         total, setTotal,
         user, setUser,
         handleLogOut,
         news, setNews,
         transactions, setTransaction 
         }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextWrapper}