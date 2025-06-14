import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-cards.component.html',
  styleUrl: './app-cards.component.scss'
})
export class AppCardsComponent {
  projects: Project[] = [
    {
      title: 'CV',
      description: 'Using HTML & CSS',
      link: 'https://neamatabdollah.github.io/CV-project/cv.html'
    },
    {
      title: 'Login Page',
      description: 'Using HTML & CSS',
      link: 'https://neamatabdollah.github.io/Login-Page-Project/'
    },
    {
      title: 'Calculator',
      description: 'Using HTML, CSS & JavaScript',
      link: 'https://neamatabdollah.github.io/Calculator/calc.html'
    },
    {
      title: 'Coin Game',
      description: 'Using HTML, CSS & JavaScript',
      link: 'https://neamatabdollah.github.io/Coin-Game/coin.html'
    },
    {
      title: 'Counter',
      description: 'Using HTML, CSS & JavaScript',
      link: 'https://neamatabdollah.github.io/Train-Station-Counter/counter.html'
    },
    {
      title: 'R-P-S Game',
      description: 'Using HTML, CSS & JavaScript',
      link: 'https://neamatabdollah.github.io/Rock-Paper-Scissors-Game/'
    },
    {
      title: 'Simple Todo List',
      description: 'Using HTML, CSS & JavaScript',
      link: 'https://neamatabdollah.github.io/Todo-List/todo.html'
    },
    {
      title: 'Nest eCommerce',
      description: 'Using HTML, CSS & Bootstrap',
      link: 'https://neamatabdollah.github.io/Nest-Mart-Grocery_Bootstrap_SASS/'
    },
    {
      title: 'Lookscout Website',
      description: 'Using HTML & CSS',
      link: 'https://neamatabdollah.github.io/Lookscout_Responsive/'
    }
  ];

  get projectRows(): Project[][] {
    const rows: Project[][] = [];
    for (let i = 0; i < this.projects.length; i += 3) {
      rows.push(this.projects.slice(i, i + 3));
    }
    return rows;
  }
}
