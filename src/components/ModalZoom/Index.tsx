import styled from 'styled-components';
import Image from '../Gallery/Image';
import ButtonIcon from '../ButtonIcon/Index';
import { Photo } from '../../App';

interface ModalZoomProps {
  photo: Photo | null;
  onClose: () => void;
}

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

const ModalZoom: React.FC<ModalZoomProps> = ({ photo, onClose }) => {
  return (
    <>
      {photo && (
        <>
          <Overlay onClick={onClose} />
          <DialogEstilizado open={!!photo} onClose={onClose}>
            <Image photo={photo} expandida={true} />
            <form method="dialog">
              <ButtonIcon onClick={onClose}>
                <img src="/icons/fechar.png" alt="Icone de fechar" />
              </ButtonIcon>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
