import netflixImg from '../assets/OTT_icons/netflix.png';
import primeImg from '../assets/OTT_icons/prime.png';
import watchaImg from '../assets/OTT_icons/watcha.png';
import wavveImg from '../assets/OTT_icons/wavve.png';

export default function getOttImgUrl(ottName) {
  switch (ottName) {
    case 'Amazon Prime':
      return primeImg;
    case '왓챠':
      return watchaImg;
    case 'Netflix':
      return netflixImg;
    case 'wave':
      return wavveImg;
  }
}
