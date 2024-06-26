const draw = `
⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`

const letra = `
Somebody once told me
The world is gonna roll me
I ain't the sharpest tool in the shed
She was looking kind of dumb
With her finger and her thumb
In the shape of an L on her forehead

Well, the years start coming
And they don't stop coming
Fed to the rules and I hit the ground running
Didn't make sense not to live for fun
Your brain gets smart
But your head gets dumb

So much to do, so much to see
So what's wrong with taking the back streets?
You'll never know if you don't go
You'll never shine if you don't glow

Hey now, you're an all star
Get your game on, go play
Hey now, you're a rock star
Get the show on, get paid
And all that glitters is gold
Only shooting stars break the mold

It's a cool place and they say it gets colder
You're bundled up now
But wait till you get older
But the meteor men beg to differ
Judging by the hole in the satellite picture

The ice we skate is getting pretty thin
The water is getting warm
So you might as well swim
My world's on fire, how about yours?
That's the way I like it
And I never get bored

Hey now, you're an all star
Get your game on, go play
Hey now, you're a rock star
Get the show on, get paid
And all that glitters is gold
Only shooting stars break the mold

Hey now, you're an all star
Get your game on, go play
Hey now, you're a rock star
Get the show on, get paid
And all that glitters is gold
Only shooting stars

Somebody once asked
Could I spare some change for gas?
I need to get myself away from this place
I said: Yep, what a concept
I could use a little fuel myself
And we could all use a little change

Well the years start coming
And they don't stop coming
Fed to the rules and I hit the ground running
Didn't make sense not to live for fun
Your brain gets smart
But your head gets dumb

So much to do, so much to see
So what's wrong with taking the back streets
You'll never know if you don't go (go!)
You'll never shine if you don't glow

Hey now, you're an all star
Get your game on, go play
Hey now, you're a rock star
Get the show on, get paid

And all that glitters is gold
Only shooting stars break the mold
And all that glitters is gold
Only shooting stars break the mold`

console.log(draw)

function imprimirLetraCancion(letra) {
    const lineas = letra.split('\n');
    let contador = 0;

    const intervalo = setInterval(() => {
        if (contador < lineas.length) {
            console.log(lineas[contador]);
            contador++;
        } else {
            clearInterval(intervalo);
        }
    }, 1000); // Cambia el valor del intervalo (en milisegundos) para ajustar la velocidad de impresión
}

function PlayMousic() {
    const music = document.getElementById('song');
    music.play();
    music.volume = 0.5;
}

setTimeout(() => {
    imprimirLetraCancion(letra);
    PlayMousic()
}, 10000)