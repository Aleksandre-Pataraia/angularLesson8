import { Component } from '@angular/core';

interface course{ 
    title: string, 
    score: number 
}
interface IStudents{
  name: string,
  active: boolean,
  courses: course[]
}

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.scss',
})
export class Students {

  studentsScores: IStudents[] = [
    {
      name: 'James',
      active: true,
      courses: [
        { title: 'Angular', score: 85 },
        { title: 'JS', score: 70 }
      ]
    },
    {
      name: 'Emily',
      active: false,
      courses: [
        { title: 'Angular', score: 45 },
        { title: 'JS', score: 50 }
      ]
    },
    {
      name: 'Michael',
      active: true,
      courses: [
        { title: 'Angular', score: 90 },
        { title: 'JS', score: 88 }
      ]
    },
    {
      name: 'Sarah',
      active: true,
      courses: [
        { title: 'Angular', score: 60 },
        { title: 'JS', score: 55 }
      ]
    },
    {
      name: 'David',
      active: false,
      courses: [
        { title: 'Angular', score: 35 },
        { title: 'JS', score: 40 }
      ]
    },
    {
      name: 'Ashley',
      active: true,
      courses: [
        { title: 'Angular', score: 75 },
        { title: 'JS', score: 65 }
      ]
    },
    {
      name: 'Chris',
      active: true,
      courses: [
        { title: 'Angular', score: 50 },
        { title: 'JS', score: 45 }
      ]
    },
    {
      name: 'Jessica',
      active: false,
      courses: [
        { title: 'Angular', score: 95 },
        { title: 'JS', score: 90 }
      ]
    },
    {
      name: 'Daniel',
      active: true,
      courses: [
        { title: 'Angular', score: 68 },
        { title: 'JS', score: 72 }
      ]
    },
    {
      name: 'Olivia',
      active: false,
      courses: [
        { title: 'Angular', score: 55 },
        { title: 'JS', score: 48 }
      ]
    } 
  ];

}
