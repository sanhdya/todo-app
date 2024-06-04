export const Header = () => {
    return(
        <header
        style={{
            padding: '20px 0',
            lineHeight:'1.5em',
            color:'#aeadad',
            textAlign: 'center',
        }}
        >
            <h1>Todos</h1>
            <p>Item will persists in the browser local storage</p>
        </header>
    )
}