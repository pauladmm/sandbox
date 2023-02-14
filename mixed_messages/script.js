const text = {
    partOne: ['When you laugh',
        'When you wake up',
        'When you look',
        'When you are distracted',
        'When you dance',
        'When you sing',
        'Although you are crying'],
    partTwo: ['your smile',
        'you have a light that',
        'your face',
        'your energy',
        'your hair',
        'your gaze',
        'the tip of your nose'],
    partThree: ['makes the sun brighter',
        'makes poets sigh',
        'shoots rainbow beams',
        'sings without make any sound',
        'vibes in F major',
        'makes Ash Ketchum dreams with free pokemons']
}


function getRandomElement (inputArr) {
    return inputArr[Math.floor(Math.random() * inputArr.length)]
    
}
console.log(getRandomElement(text.partOne) + ' ' + getRandomElement(text.partTwo) + ' ' + getRandomElement(text.partThree));

