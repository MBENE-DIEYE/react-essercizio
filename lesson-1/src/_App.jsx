import { useEffect, useRef, useState } from "react";

const App1 = () => {

    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = Object.fromEntries(new FormData(event.target));
        console.log(form)
        formRef.current.reset();
    }

    return (
        <form onSubmit={handleSubmit} ref={formRef}>
            <div>
                <label htmlFor="first_name">Nome</label>
                <input type="text" id="first_name" name="first_name" placeholder="inserisci nome" />
            </div>
            <div>
                <label htmlFor="last_name">Cognome</label>
                <input type="text" id="last_name" name="last_name" placeholder="inserisci cognome" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="inserisci email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="inserisci password" />
            </div>
            <div>
                <button type="submit">Registrati</button>
            </div>
        </form>
    )
}

const App = () => {

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })

    const clearForm = () => {
        setForm({
            first_name: "",
            last_name: "",
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        clearForm();
    }

    useEffect(() => {
        console.log("component updated")
    })

    useEffect(() => {
        console.log("component mounted")
    }, [])

    useEffect(() => {
        console.log("last name and password: ", form.last_name, form.password)
    }, [form.last_name, form.password])

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="first_name">Nome</label>
                <input type="text" onInput={handleInput} value={form.first_name} id="first_name" name="first_name" placeholder="inserisci nome" />
            </div>
            <div>
                <label htmlFor="last_name">Cognome</label>
                <input type="text" onInput={handleInput} value={form.last_name} id="last_name" name="last_name" placeholder="inserisci cognome" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" onInput={handleInput} value={form.email} id="email" name="email" placeholder="inserisci email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" onInput={handleInput} value={form.password} id="password" name="password" placeholder="inserisci password" />
            </div>
            <div>
                <button type="submit">Registrati</button>
            </div>
        </form>
    )
}

export default App;