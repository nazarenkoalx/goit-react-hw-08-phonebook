import { LineWave } from 'react-loader-spinner';
import { LoaderWrapper } from './Loading.styled';
import { createPortal } from 'react-dom';
import { Overlay } from 'components/Modal/Modal.styled';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
  return createPortal(
    <Overlay>
      <LoaderWrapper>
        <LineWave
          height="200"
          width="200"
          color="#4fa94d"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </LoaderWrapper>
    </Overlay>,
    loaderRoot
  );
};
