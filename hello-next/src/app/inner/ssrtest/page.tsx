
export default async function Page() {
    const res = await fetch('http://nest-api:3000/hello');

    const data = await res.text();

    return (
        <main className="p-4">
            <h1 className="font-bold mb-4 flex justify-center">Frase recuperata da nestjs</h1>
            <p className="flex justify-center">{data}</p>
        </main>
    )

}