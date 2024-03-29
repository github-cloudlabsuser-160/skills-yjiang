import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

//take a sentence as input 
//reverse the input sentence 
//the start of the sentence must start with a capital
//for javascript 
const sentence = "Hello, world!";

console.log(capitalizedSentence);
function reverseAndCapitalizeSentence(sentence) {
    const reversedSentence = sentence.split("").reverse().join("");
    const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
    return capitalizedSentence;
}

const result = reverseAndCapitalizeSentence(sentence);
console.log(result);


const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

// As an illustration, pull names out of the data array



// Map through an array of arrays of objects
// Example: Extract names from the data array
// Desired outcome: ['John', 'Jane', 'Bob']
const names = data.flatMap(group => group.map(person => person.name));
console.log(names);