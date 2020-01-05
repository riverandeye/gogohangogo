import netflixImg from '../assets/OTT_icons/netflix_flat.png';
import primeImg from '../assets/OTT_icons/prime_flat.png';
import watchaImg from '../assets/OTT_icons/watcha_flat.png';
import wavveImg from '../assets/OTT_icons/wavve_flat.png';

export default function getOttIconUrl(ottName) {
  switch (ottName) {
    case 'Amazon Prime':
      return primeImg;
    case 'watcha':
      return watchaImg;
    case 'Netflix':
      return netflixImg;
    case 'wavve':
      return wavveImg;
  }
}
