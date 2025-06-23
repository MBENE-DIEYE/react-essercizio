import { useState } from "react"
import Title from "./components/Title"

const App = () => {
  

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const clearForm = () => {
    setForm({
      email: "",
      password: ""
    })
  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm((form) => ({
        ...form,
        [name]: value,
      }))
  }

   const handleSubmit = (event) =>{
    event.preventdefault();
    console.log(form)
    clearForm();
   }

  return (
    <>
   
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input onInput={handleInput} value={form.email} type="email" id="email" name="email" placeholder="inserisci tuo email" />
        </div>
        <div>
          <label htmlFor="password">Email</label>
          <input onInput={handleInput} value={form.password} type="password" id="password" name="password" placeholder="inserisci tuo password" />
        </div>
        <button type="submit">Resistrati</button>
      </form>
       <Title email ={form.email} password ={form.password}/>
    </>
  )
}

export default App
