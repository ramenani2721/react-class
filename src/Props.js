import React from 'react'

export default function Props(Props) {
    console.log(Props)
  return (
    <div>
      <h1>this is props component</h1>
      <p> Name is <b>{Props.studentName}</b> and roll no is{Props.studentRollNo}</p>
    </div>
  )
}
