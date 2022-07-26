import star1 from '../Assets/Testimoniales/Star1.png';
import star2 from '../Assets/Testimoniales/Star2.png';
import star3 from '../Assets/Testimoniales/Star3.png';
import star4 from '../Assets/Testimoniales/Star4.png';
import star5 from '../Assets/Testimoniales/Star5.png';

export function showStar(number){
    switch (number) {
      case 1:
        return star1 
      case 2:
        return star2
      case 3:
        return star3 
      case 4:
        return star4 
      case 5:
        return star5 
      default:
        return null
    }
  }