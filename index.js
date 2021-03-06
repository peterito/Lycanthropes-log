/*
NAME: Peter Oyebamiji
PATH: Front-end Developer
DATE: 25/07/2020 
*/

const activities = [
    {
        id: "Day 1",
        events: ['bath', 'dance', 'run', 'exercise', 'washed']
    },
    {
        id: "Day 2",
        events: ['sew', 'rice', 'pizza', 'coke', 'watch movie']
    },
    {
        id: "Day 3",
        events: ['gym', 'drove', 'dance', 'school', 'pizza']
    },
    {
        id: "Day 4",
        events: ['cake', 'sky-diving']
    },
    {
        id: "Day 5",
        events: ['cake', 'drove', 'cake', 'cook', 'bread']
    },
    {
        id: "Day 6",
        events: ['cook', 'cheese', 'washed clothes']
    },
    {
        id: "Day 7",
        events: ['drove', 'cake']
    },
    {
        id: "Day 8",
        events: ['gym', 'drove', 'school', 'pizza']
    },
    {
        id: "Day 9",
        events: ['burger']
    },
    {
        id: "Day 10",
        events: ['cake', 'dance', 'washed clothes']
    },
    {
        id: "Day 11",
        events: ['eat', 'run', 'cake', 'pizza', 'dance', 'pear']
    },
    {
        id: "Day 12",
        events: ['travel', 'pizza', 'cake', 'dance', 'meat']
    },
    {
        id: "Day 13",
        events: ['drove', 'cake', 'dance', 'cheese']
    },
    {
        id: "Day 14",
        events: ['dance', 'school', 'pizza']
    }
];

console.log('you transformed into a werewolf because you ate pizza on:\n');

for (let day of activities) {
    if (day.events.includes('pizza')) {
        console.log(day.id);
    }
}