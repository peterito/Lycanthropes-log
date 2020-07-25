/*
NAME: Peter Oyebamiji
PATH: Front-end Developer
DATE: 25/07/2020 
*/

const activities = [
    {
        id: "Day 1",
        events: ['Cooked', 'drove', 'cake', 'dance', 'washed clothes']
    },
    {
        id: "Day 2",
        events: ['sleep', 'burger', 'cake', 'ice cream', 'jog']
    },
    {
        id: "Day 3",
        events: ['gym', 'drove', 'sky-diving', 'dance', 'school', 'pizza']
    },
    {
        id: "Day 4",
        events: ['washed clothes', 'drove', 'cake', 'sky-diving']
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
        events: ['washed clothes', 'drove', 'cake', 'Cooked', 'dance']
    },
    {
        id: "Day 8",
        events: ['gym', 'drove', 'sky-diving', 'dance', 'school', 'pizza']
    },
    {
        id: "Day 9",
        events: ['burger']
    },
    {
        id: "Day 10",
        events: ['cook', 'drove', 'cake', 'dance', 'washed clothes']
    },
    {
        id: "Day 11",
        events: ['cook', 'drove', 'cake', 'pizza', 'dance', 'pear']
    },
    {
        id: "Day 12",
        events: ['travel', 'beer', 'cake', 'dance', 'meat']
    },
    {
        id: "Day 13",
        events: ['burger', 'pizza', 'drove', 'cake', 'dance', 'cheese']
    },
    {
        id: "Day 14",
        events: ['gym', 'drove', 'sky-diving', 'dance', 'school', 'pizza']
    }
];

console.log('you transformed into a werewolf because you ate pizza on:\n');

for (let day of activities) {
    if (day.events.includes('pizza')) {
        console.log(day.id);
    }
}