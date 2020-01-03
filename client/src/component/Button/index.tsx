import React from 'react';
import * as S from './styles';

interface ButtonProps {
  children?: React.ReactNode;
  colorType?: string;
  isBorder?: string;
}

const Button: React.FC<ButtonProps> = ({ children, colorType, isBorder }) => {
  return (
    <S.Button colorType={colorType} isBorder={isBorder}>
      {children}
    </S.Button>
  );
};

export default Button;

// class App extends Component {
//   render() {
//     return(
//       <div>
//         <Button> default button </Button>
//         <Button success> success button </Button>
//         <Button danger> danger button </Button>
//       </div>
//     );
//   }
// }

// const Button = styled.button`
//   padding: 10px 15px;
//   margin: 0 5px;
//   border: none;
//   border-radius: 5px;
//   background-color: ${props => {
//     if (props.success) return '#249D3D';
//     else if (props.danger) return '#D72E3D';
//     else return '#7B838B';
//   }};
//   color: #FFFFFF;
//   font-size: 15pt;
// `;

// export default App;
