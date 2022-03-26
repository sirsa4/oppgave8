/* let bg = 'whitesmoke'; */
//source: https://www.youtube.com/watch?v=G00V4tRx1ME&ab_channel=WillCodeForViews

export const dark = {
    body: 'black',
    font: 'white',
}
export const light = {
    body: 'whitesmoke',
    font: 'black',
}

export const changeTheme = (theme,setTheme)=>{
   theme === 'light'? setTheme('dark') : setTheme('light');
}

