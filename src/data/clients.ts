import img1 from "../assets/images/clients/adewunmi.png";
import img2 from "../assets/images/clients/afrikstabel.jpg";
import img3 from "../assets/images/clients/icreate-africa.png";
import img4 from "../assets/images/clients/raven-bank.svg";
import img5 from "../assets/images/clients/risevest.svg";
import img6 from "../assets/images/clients/royal-foams.png";
import img7 from "../assets/images/clients/zagadat-capital.png";

interface Client {
  id: number;
  img: string;
}

export const clientsData: Client[] = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
];
