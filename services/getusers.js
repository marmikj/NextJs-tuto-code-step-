export default async function getUsers  ()  {
    const data = await fetch ('https://jsonplaceholder.typicode.com/users')
    return data.json()
}