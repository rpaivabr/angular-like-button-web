import '../../public/like-button';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

type Image = {
  id: number;
  isLiked: boolean;
  src: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  images = signal<Image[]>([
    {
      id: 1,
      isLiked: true,
      src: 'https://images.unsplash.com/photo-1531487488304-2ec4bd9788f4?q=80&w=3081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      isLiked: false,
      src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      isLiked: false,
      src: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      isLiked: false,
      src: 'https://images.unsplash.com/photo-1531112998639-59af23e7a65e?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]);
  
  favoriteImages = computed(() => this.images().filter(image => image.isLiked));

  setLiked(liked: boolean, id: number) {
    console.log(liked, id);
    const images = [...this.images()];
    const index = images.findIndex(image => image.id === id);
    images[index].isLiked = liked;
    console.log(images);
    this.images.set(images);
  }
}
