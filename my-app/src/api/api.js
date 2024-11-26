export async function fetchHello() {
    const response = await fetch('http://localhost:5000/api/hello');
    const data = await response.json();
    return data.message;
}
