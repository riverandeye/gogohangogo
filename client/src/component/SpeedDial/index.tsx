import React from 'react';
// import Button from '@material-ui/core/Button';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
// import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import HelpIcon from '@material-ui/icons/HelpOutlineRounded';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import * as S from './styles';

const actions = [
  { icon: <HelpIcon />, name: '도움말' },
  { icon: <MailOutlineRoundedIcon />, name: '문의메일' },
  { icon: <WarningRoundedIcon />, name: '불량유저 신고' },
];
const SpeedDial: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  // const handleVisibility = () => {
  //   setHidden(prevHidden => !prevHidden);
  // };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <S.SpeedDial
      ariaLabel="SpeedDial openIcon example"
      icon={<SpeedDialIcon openIcon={<KeyboardArrowUpIcon />} />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map(action => (
        <S.SpeedDialAction
          key={action.name}
          icon={action.icon}
          title={action.name}
          onClick={handleClose}
        />
      ))}
    </S.SpeedDial>
  );
};

export default SpeedDial;
