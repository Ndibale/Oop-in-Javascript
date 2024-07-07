class Square {
    constructor(_width) {
      this.width = _width;
      this.height = _width;
      this.numOfRequestsForArea = 0;
    }
  
    get Area() {
      this.numOfRequestsForArea++;
      return this.width * this.height;
    }
  
    set Area(area) {
      this.width = Math.sqrt(area);
      this.height = this.width;
    }
  }
  
  let square1 = new Square();
  console.log(square1.Area); // Output: 625
  console.log(square1.width); // Output: 25
  square1.Area = 100;
  console.log(square1.width); // Output: 10
  console.log(square1.numOfRequestsForArea); // Output: 2
  
  
  
  