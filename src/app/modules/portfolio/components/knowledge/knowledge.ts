import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.png',
      alt: 'Ícone de conhecimento de Java',
      label: 'Java',
    },
    {
      src: 'assets/icons/knowledge/typescript.png',
      alt: 'Ícone de conhecimento de TypeScript',
      label: 'TypeScript',
    },
    {
      src: 'assets/icons/knowledge/favicon.ico',
      alt: 'Ícone de conhecimento de Angular',
      label: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/c-.png',
      alt: 'Ícone de conhecimento de C++',
      label: 'C++',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5',
      label: 'HTML5',
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de Sass',
      label: 'Sass',
    },
  ]);
}
