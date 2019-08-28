export class Page {

  constructor() {
    this.page = 0;
    this.size = 5;
  }

  // The number of elements in the page
  size: number;
  // The total number of elements
  totalElements: number;
  // The total number of pages
  totalPages: number;
  // The current page number
  page: number;
}
