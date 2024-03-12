export default function Profile()

{
    const name = localStorage.getItem('nombre');
    const username = localStorage.getItem('usuario');
    const mail = localStorage.getItem('correoElectronico');

    return (
        <div>
            <h3>{name}</h3>
            <h1>Usuario: {username}</h1>
            <h1>Correo: {mail}</h1>
        </div>
      )
}